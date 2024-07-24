const follower=document.getElementsByClassName("follower")[0];
const follower1=document.getElementsByClassName("follower1")[0];
const body=document.getElementById("body");
console.log(follower);


window.addEventListener("mousemove",(event)=>{
    let x=`${event.x}px`;
    let y=`${event.y}px`;
    console.log(x,y);
    follower.style.left=x;
    follower.style.top=y;
    follower1.style.left=x;
    follower1.style.top=y;
    let color=`rgb(${event.x*0.1},${event.y},${event.x})`;
    follower.style.boxShadow=`3px 3px 20px 5px ${color}`;
    body.style.backgroundColor=`rgb(100,20,${event.x-400})`;

}
)