let btn = document.querySelector(".btn");
console.log(btn);

btn.addEventListener("click",function() {
   let randomColor = getRandomColor();
   console.log(getRandomColor);

   let div=document.querySelector(".color-show");
   div.style.cssText = " background-color:"+randomColor+";"
   
//    console.log("color update");
});

function getRandomColor(){
    let red=Math.floor(Math.random() * 255);
    let green=Math.floor(Math.random() * 255);
    let blue=Math.floor(Math.random() * 255);
    let color =`rgb(${red},${green},${blue})`;
    return color;

}