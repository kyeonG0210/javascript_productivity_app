const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //img라는 element 생성

bgImage.src =`img/${chosenImage}`;

// console.log(bgImage);

document.body.appendChild(bgImage);