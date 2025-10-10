import Debbie from '../CepromasAssets/usertwo.png';
import Ella from '../CepromasAssets/victoria.png';

const now = new Date();
const hour = now.getHours();
const minute = now.getMinutes();
const seconds = now.getSeconds();

export const pinneduser = [
  {
    id: 1,
    img: Ella,
    Name: "Debbie Zoe",
    text: "Debbie Zoe is typing",
    time: `${hour}:${minute}:${seconds}`
  },
  {
    id: 2,
    img: Debbie,
    Name: "Ella James",
    text: "Ella James is typing",
    time: `${hour}:${minute}:${seconds}`
  },
  {
    id: 3,
    img: Ella,
    Name: "Debbie Zoe",
    text: "Debbie Zoe is typing",
    time: `${hour}:${minute}:${seconds}`
  }
];

export const normaluser= [
      {
    id: 1,
    img: Ella,
    Name: "Ella James",
    text: "Debbie Zoe is typing",
    time: `${hour}:${minute}:${seconds}`
  },
      {
    id: 2,
    img: Ella,
    Name: "Ella James",
    text: "Debbie Zoe is typing",
    time: `${hour}:${minute}:${seconds}`
  },
      {
    id: 3,
    img: Ella,
    Name: "Ella James",
    text: "Debbie Zoe is typing",
    time: `${hour}:${minute}:${seconds}`
  },
      {
    id: 4,
    img: Ella,
    Name: "Ella James",
    text: "Debbie Zoe is typing",
    time: `${hour}:${minute}:${seconds}`
  },
]

