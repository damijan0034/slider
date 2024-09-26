const imgContainerEl=
document.querySelector(".img-container")

const nextBtn=document.querySelector(".next")
const prevBtn=document.querySelector(".prev")
const imgsEl=document.querySelectorAll("img")

let currentImg=1
let timeout

const updateImage=()=>{

    imgContainerEl.style.transform=
  `translateX(${-(currentImg-1)*500}px)`

 timeout= setTimeout(() => {
    currentImg++
    if(currentImg===imgsEl.length+1){
        currentImg=1
    }
    updateImage()
    
}, 3000);

   
}


updateImage()

nextBtn.addEventListener("click",()=>{
    currentImg++
    if(currentImg === imgsEl.length + 1){
        currentImg=1
    }
    clearTimeout(timeout)
    updateImage()
    
})

prevBtn.addEventListener("click",()=>{
    currentImg--
    if(currentImg<1){
        currentImg=imgsEl.length 
    }
    clearTimeout(timeout)
    updateImage()
    
})


