const boxes = document.getElementById("boxes");
const button = document.getElementById("btn");

button.addEventListener("click",()=>boxes.classList.toggle("big"));

for(let i=0;i<4;i++){
  for(let j=0;j<4;j++){
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundPosition = `${-j*125}px ${-i*125}px`;
    boxes.appendChild(box);
  }
}

// function createBoxes() {
//   for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 4; j++) {
//       const box = document.createElement('div')
//       box.classList.add('box')
//       box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
//       boxes.appendChild(box)
//     }
//   }
// }

// createBoxes()