const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev")
const next = document.getElementById("next")

let curIdx = 1;

next.addEventListener('click', () => {
  curIdx++

  if(curIdx > circles.length) {
      curIdx = circles.length
  }

  update()
})

prev.addEventListener('click', () => {
  curIdx--

  if(curIdx < 1) {
      curIdx = 1
  }

  update()
})
function update(){
  circles.forEach((circle,idx)=>{
    if(idx<curIdx){
      circle.classList.add("active")
    } else{
      circle.classList.remove("active")
    }
  })

  const actives = document.querySelectorAll('.active')
  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

  if(curIdx===1){
    prev.disabled = true
  } else if(curIdx===circles.length){
    next.disabled=true
  } else{
    prev.disabled = false
    next.disabled = false
  }
}