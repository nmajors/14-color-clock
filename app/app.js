setInterval(function(){
  console.log(new Date());
}, 1000);

function padNumber(number){
   if (number.toString.length===1);
   return "0"+number;
}

date = new Date();
 hours = date.getHours();
 minutes = date.getMinutes();
 seconds = date.getSeconds();

 currentTime = hours+":"+minutes+":"+seconds;

document.querySelector("#clock").innerHTML="currentTime";
