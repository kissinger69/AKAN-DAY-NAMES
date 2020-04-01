function akanDayNames() {
   var daysoftheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
   var maleAkanNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
   var male = parseInt(document.getElementById("male").value);
   var femaleAkanNAmes = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
   var female = parseInt(document.getElementById("female").value);
   var day = parseInt(document.getElementById("day").value);
   var DD = parseInt(day);
   var month = parseInt(document.getElementById("month").value);
   var MM = parseInt(month);
   var year = parseInt(document.getElementById("year").value);
   var YY =  parseInt(year);
}

   var sex;
   //sex
   if (document.getElementById("sex").checked) {
     sex = 'male';
   } else {
       sex = 'female';
  } 

//Both incoorect and correct date inform user.
  if (DD >= 1 &&  DD <= 31) {
    alert("Good progress");
}   else (DD < 1 || DD > 31) 
      alert("INVALID DATE!");

//Confirming months.
  if (MM >= 1  && MM <= 12) {
    alert("Good progress.");
}     else if (MM ==2 && DD > 29); {
         alert("February doesnt have those number of days");
}  
   if (MM < 0 || MM > 12) {
      alert("INVALID MONTH!");
 } 

   //Confirming year.
    if(YY > 1000 && YY <2020) {
        alert( "Good progress.");
           else if (YY < 1000 && YY > 2020);{
           alert("INVALID YEAR!");
        }
      }    

    //maleAkanNames
    //Sunday
    if (Math.ceil(daysoftheWeek) === [0] && sex ==='male') {
        document.getElementById("results").innerHTML = 
         "Your Akan Day Name is" + maleAkanNames[0];
    }
    //Monday
    else if (Math.ceil(daysoftheWeek) ===[1] && sex ==='male') {
           document.getElementById("results").innerHTML =
             "Your Akan Day Name is" + maleAkanNames[0];
    }


    

