"use client"

import { useEffect, useRef } from "react"

export default function LineChart() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw horizontal grid lines
    ctx.strokeStyle = "#f0f0f0"
    ctx.lineWidth = 1

    const gridLines = 5
    for (let i = 0; i < gridLines; i++) {
      const y = i * (height / (gridLines - 0))
       
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }

    // Define data points - matching the exact curve in the image
    // This year's data (black solid line)
    const thisYearData = [
      { x: width * 0, y: height * 0.6 },
      { x: width * 0.1, y: height * 0.10 },
      { x: width * 0.2, y: height * 0.3 },
      { x: width * 0.2, y: height * 0.6 },
      { x: width * 0.5, y: height * 0.0 },
      { x: width * 0.5, y: height * 0.3 }
   
    ]

    // Draw this year's line (solid black)
    ctx.strokeStyle = "#900"
    ctx.lineWidth = 4.5
    ctx.beginPath()
    ctx.moveTo(thisYearData[0].x, thisYearData[0].y)

    // Draw smooth curve through points
    for (let i = 1; i < thisYearData.length; i++) {
  ctx.lineTo(thisYearData[i].x, thisYearData[i].y)
}
    ctx.stroke()

    

  
  }, [])

  return (
    <div className="relative h-[300px] w-[480px] ">
      {/* Y-axis labels */}
      <div className="absolute   h-full flex flex-col gap-10  text-xs text-gray-500">
        <div>$50,000</div>
        <div>$30,000</div>
        <div>$20,0000</div>
        <div>$10,000</div>
        <div className="ml-5">$0</div>
      </div>

      {/* Chart */}
      
      <div className="absolute inset-0 pl-4 ">
  <canvas ref={canvasRef} width={500} height={400} className="lg:w-[400px] md:w-[400px] w-[300px] h-full ml-12"  />
        
      </div>

      {/* X-axis labels */}
      <div className="absolute  right-0 bottom-[50px] translate-y-6 text-xs flex lg:gap-10 md:gap-10 gap-4 left-7  text-gray-500">
        <div>2016</div>
        <div>2017</div>
        <div>2018</div>
        <div>2019</div>
        <div>2020</div>
        <div>2021</div>
      </div>
    </div>
  )
}
