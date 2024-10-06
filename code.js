// let months=document.querySelector(".months");
let days=document.querySelector(".days");
let hours=document.querySelector(".hours");
let minutes=document.querySelector(".minutes");
let seconds=document.querySelector(".seconds");

let start=(new Date("Dec 31, 2024 23:59:59")).getTime();

let count=setInterval(function(){
let end =new Date().getTime();
let diff=start-end;
let dys=Math.floor(diff/(1000*60*60*24));
let hrs=Math.floor((diff%(1000*60*60*24))/1000/60/60);
let min=Math.floor((diff%(1000*60*60))/1000/60);
let sec=Math.floor((diff%(1000*60))/1000)<10? `0${Math.floor((diff%(1000*60))/1000)}`:Math.floor((diff%(1000*60))/1000);

days.innerHTML=dys;
hours.innerHTML=hrs;
minutes.innerHTML=min;
seconds.innerHTML=sec;
if(diff<0)
{
    clearInterval(count);
}
},1000);