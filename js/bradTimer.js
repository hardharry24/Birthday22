function countdown(endDate) {
  let days, hours, minutes, seconds;
  
  endDate = new Date(endDate).getTime();
  
  if (isNaN(endDate)) {
	return;
  }
  
  setInterval(calculate, 1000);
  
  function calculate() {
    let startDate = new Date();
    startDate = startDate.getTime();
    
    let timeRemaining = parseInt((endDate - startDate) / 1000);
    
    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);
      
      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);
      
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);
      
      seconds = parseInt(timeRemaining);
      
      var d = parseInt(days+1, 10);
      //var hours
      var str = " "+d+" Day/s ";
      var strHr = ""+("0" + hours).slice(-2)+" hour/s "+("0" + minutes).slice(-2)+" minute/s "+("0" + seconds).slice(-2)+" second/s";

      document.getElementById("lblRemaining").innerHTML = str;
      document.getElementById("lblRemainingHrs").innerHTML = strHr;
    } else {
      document.getElementById("bday").style.display = "block";
    }
  }
}

(function () { 
  countdown('09/09/2019 12:00:00 AM'); 
}());