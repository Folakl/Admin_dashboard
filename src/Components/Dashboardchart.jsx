"use client"

import { useEffect, useRef } from "react"

export default function Dashboardchart() {
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
    ctx.lineWidth = 4

    const gridLines = 6
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
      { x: width * 0.22, y: height * 0.5 },
      { x: width * 0.25, y: height * 0.3 },
      { x: width * 0.30, y: height * 0.6 },
      { x: width * 0.35, y: height * 0.0 },
      { x: width * 0.4, y: height * 0.3 },
      { x: width * 0.5, y: height * 0.8 },
      { x: width * 0.6, y: height * 0.3 },
      { x: width * 0.62, y: height * 0.4},
      { x: width * 0.65, y: height * 0.5 },
      { x: width * 0.68, y: height * 0.3 },
      { x: width * 0.7, y: height * 0.4},
     

   
      // { x: width, y: height * 0.35 },
    ]

    // Draw this year's line (solid black)
    ctx.strokeStyle = "#900"
    ctx.lineWidth = 4.5
    ctx.beginPath()
    ctx.moveTo(thisYearData[0].x, thisYearData[0].y)

    // Draw smooth curve through points
    for (let i = 1; i < thisYearData.length; i++) {
      const xc = (thisYearData[i].x + thisYearData[i - 1].x) / 2
      const yc = (thisYearData[i].y + thisYearData[i - 1].y) / 2
      ctx.quadraticCurveTo(thisYearData[i - 1].x, thisYearData[i - 1].y, xc, yc)
    }
    ctx.stroke()

    

  
  }, [])

  return (
    <div className="relative h-[300px] w-[480px] ">
      {/* Y-axis labels */}
      <div className="absolute   h-full flex flex-col gap-8 text-xs text-gray-500">
        <div>60K</div>
        <div>50K</div>
        <div>40K</div>
        <div>30K</div>
        <div>20K</div>
        <div>10K</div>
      </div>

      {/* Chart */}
      
      <div className="absolute inset-0 pl-4 ">
        
  <canvas ref={canvasRef} width={500} height={400} className="lg:w-[650px] md:w-[500px] w-[250px] h-full ml-12"  />
  {/* <canvas ref={canvasRef} width={500} height={400} className="w-[650px] h-full ml-12"  /> */}
      </div>

      {/* X-axis labels */}
      <div className="absolute  right-0 bottom-[50px] translate-y-6 text-xs flex gap-10 left-7  text-gray-500">
        <div>Jan</div>
        <div>Feb</div>
        <div>Mar</div>
        <div>Apr</div>
        <div>May</div>
        <div>Jun</div>
        <div>Jul</div>
        <div>Aug</div>
        <div>Sep</div>
        <div>Oct</div>
        <div>Nov</div>
        <div>Dec</div>
      </div>
    </div>
  )
}
