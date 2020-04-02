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
    if (YY < 1000 && YY > 2020) {
      alert("Good Progress");
    }

    //maleAkanNames
    //Sunday
    if (Math.ceil(daysoftheWeek) === 0 && sex ==='male') {
        document.getElementById("results").innerHTML = 
         "Your Akan Day Name is" + maleAkanNames[0];
    }
    //Monday
    else if (Math.ceil(daysoftheWeek) ===1 && sex ==='male') {
           document.getElementById("results").innerHTML =
             "Your Akan Day Name is" + maleAkanNames[1];
    }
    //Tuesday
    else if (Math.ceil(daysoftheWeek)===2 && sex === 'male') {
          document.getElementById("results").innerHTML =
            "Your Akan Day Name is" + maleAkanNames[2];
    }
    //Wednesday
    else if (Math.ceil(daysoftheWeek) ===3 && sex ==='male') {
      document.getElementById("results").innerHTML =
        "Your Akan Day Name is" + maleAkanNames[3];
    }
    //Thursday
    else if (Math.ceil(daysoftheWeek) ===4 && sex ==='male') {
      document.getElementById("results").innerHTML =
        "Your Akan Day Name is" + maleAkanNames[4];
    }
    //Friday
    else if (Math.ceil(daysoftheWeek) ===5 && sex ==='male') {
      document.getElementById("results").innerHTML =
        "Your Akan Day Name is" + maleAkanNames[5];
    }
     //Saturday
     else if (Math.ceil(daysoftheWeek) ===6 && sex ==='male') {
      document.getElementById("results").innerHTML =
        "Your Akan Day Name is" + maleAkanNames[6];
    } 
    //FemaleAkanNames
    //Sunday
    if (Math.ceil(daysoftheWeek) === 0 && sex ==='female') {
      document.getElementById("results").innerHTML = 
       "Your Akan Day Name is" + femaleAkanNames[0];
  }
  //Monday
  if (Math.ceil(daysoftheWeek) === 1 && sex ==='female') {
    document.getElementById("results").innerHTML = 
     "Your Akan Day Name is" + femaleAkanNames[1];
}
//Tuesday
if (Math.ceil(daysoftheWeek) === 2 && sex ==='female') {
  document.getElementById("results").innerHTML = 
   "Your Akan Day Name is" + femaleAkanNames[2];
}
//Wednesday
if (Math.ceil(daysoftheWeek) === 3 && sex ==='female') {
  document.getElementById("results").innerHTML = 
   "Your Akan Day Name is" + femaleAkanNames[3];
}
//Thursday
if (Math.ceil(daysoftheWeek) === 4 && sex ==='female') {
  document.getElementById("results").innerHTML = 
   "Your Akan Day Name is" + femaleAkanNames[4];
}
//Friday
if (Math.ceil(daysoftheWeek) === 5 && sex ==='female') {
  document.getElementById("results").innerHTML = 
   "Your Akan Day Name is" + maleAkanNames[5];
}
//Saturday
if (Math.ceil(daysoftheWeek) === 6 && sex ==='female') {
  document.getElementById("results").innerHTML = 
   "Your Akan Day Name is" + femaleAkanNames[6];
} else {
   alert('Please enter your information')
}





    

