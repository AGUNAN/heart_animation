const bodye1=document.querySelector("body")

bodye1.addEventListener("mousemove", (event)=>{
    const xpos=event.offsetX;
    const ypos=event.offsetY;
    const spanE=document.createElement("span");
    spanE.style.left=xpos+"px";
    spanE.style.top=ypos+"px";
    

    const size=Math.random()*100;
    spanE.style.width=size+"px";
    spanE.style.height=size+"px";
    bodye1.appendChild(spanE);

    setTimeout(()=>{
       spanE.remove();
    },3000)
});
