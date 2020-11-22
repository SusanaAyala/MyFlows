import { v4 as uuidv4 } from "uuid";
import corazon from "./audio/corazon.mp3";
import love from "./audio/love.mp3";
import wild from "./audio/wild.mp3";
import word from "./audio/word.mp3";
import renewed from "./audio/renewed.mp3";
import stand from "./audio/stand.mp3";
import wings from "./audio/wings.mp3"

function chillHop() {
  return [
    {
      name: "Corazon",
      cover:
        "https://i.pinimg.com/236x/0f/64/31/0f6431376c661c6b5933a95a741e3670.jpg",
      artist: "PapelMache",
      audio: corazon,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Love",
      cover:
        "https://i.pinimg.com/236x/71/26/d6/7126d6071ee235fd71533faf4ca373ff.jpg",
      artist: "Rebecca St. James",
      audio: love,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Wild",
      cover:
        "https://i.pinimg.com/236x/66/f4/e7/66f4e780117f9fd3af0cec9471df0e2b.jpg",
      artist: "Michael Ketterer",
      audio: wild,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Word",
      cover:
        "https://i.pinimg.com/236x/5a/b7/25/5ab725374793e57198dcfdabc30e9d84.jpg",
      artist: "Rebecca St. James",
      audio: word,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Renewed",
      cover:
        "https://i.pinimg.com/236x/b4/eb/b1/b4ebb1f3f712642c2208b032d181eb95.jpg",
      artist: "PapelMache",
      audio: renewed,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Stand For You",
      cover:
        "https://i.pinimg.com/236x/c5/23/31/c52331bf39078683d3ecd46c03784fa7.jpg",
      artist: "Jonny Diaz",
      audio: stand,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Pajero",
      artist: "PapelMache",
      cover: "https://i.pinimg.com/236x/f2/0f/6d/f20f6dd2a61e475d5bed5ed577731c43.jpg",
      id: uuidv4(),
      active:false,
      color: ["#BA4A46","#FDF0DD"],
      audio: wings,

    }
  ];
}

export default chillHop;
