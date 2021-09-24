import { v4 as uuidv4 } from "uuid";

function chillHop(){
    return [
        {
            name: "Where The Sun Goes",
            cover:"https://i.scdn.co/image/ab67616d0000b273a981e0b6ce259bc1a820018c",
            artist:"Delayde, anybodyy",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=23188",
            color:['#ffb4ed','#E2B4FF'],
            id:uuidv4(),
            active: true,
        },
        {
            name: "Blue Coupe",
            cover:"https://i.scdn.co/image/ab67616d0000b2733055a0a3763c99f9557e4029",
            artist:"Kreatev",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=21736",
            color:['#EF944D','#F2DF8B'],
            id:uuidv4(),
            active: false,
        },
        {
            name: "Chit Chat",
            cover:"https://i.scdn.co/image/ab67616d0000b273ec974a7a06352d06172a34ac",
            artist:"Middle School",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=22940",
            color:['#A7DBB0','#B7C9BA'],
            id:uuidv4(),
            active: false,
        },
    ]
}

export default chillHop;