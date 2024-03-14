
    const sli=document.getElementById('slider')


sli.addEventListener("click",()=>{
  if(sli.click){
    sli.style.backgroundImage="url(s2.webp)"
    
  }
  sli.addEventListener("click",()=>{
    if(sli.click){
      sli.style.backgroundImage="url(si.gif)"
    }
  })
  return;
})

const gl=document.getElementById("glas")
const nt=document.getElementById("netra")
const arr=document.getElementById("arrows")
const bk=document.getElementById("back")



arr.addEventListener("click",()=>{
  if(arr.click)
  {
    gl.style.display="none"
    
  }
if(arr.click){
    nt.style.display="flex"
    
}
})

bk.addEventListener("click",()=>{
  if(bk.click)
  {
    gl.style.display="flex"
  }
if(bk.click){
    nt.style.display="none"
}

})


