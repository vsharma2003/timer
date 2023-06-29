



const endDate= promt("enter the date")             // prompt("enter the end time and date ");

document.getElementById("end-date").innerText=endDate;
let inputs=document.querySelectorAll("input");




//new date always returns the value in milisecobds we have to convert 
function clock(){  
   let end=new Date(endDate);//gives the time of the end date when the timer stops 
   let now=new Date();//gives the date and time of recent 
   let diff=(end-now)*0.001*0.0166666667;//*0.001converts milliseconds to seconds* 0.016666666667 converts into minutes 
   inputs[0].value=Math.round(diff/1440);//convert minutes  to date 
   inputs[1].value=Math.round(((diff/60)%24));
    inputs[2].value=Math.round(diff%60);
    inputs[3].value=Math.round(((end-now)*0.001)%60);


   
   
//    console.log(end);
//    console.log(now);
//    console.log(diff);
//   console.log(temp)
}

clock();


setInterval(
    ()=>{
        clock()
    },1000
)
         



