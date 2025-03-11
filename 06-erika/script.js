const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes)

checkBoxes();

function checkBoxes(){
  const windowHeight = window.innerHeight*4/5
  console.log(windowHeight)
  boxes.forEach(box=>{
    const dis = box.getBoundingClientRect().top
    console.log(dis)
    if(dis<windowHeight){
      box.classList.add("show");
    }else{
      box.classList.remove("show");
    }
  })
}
