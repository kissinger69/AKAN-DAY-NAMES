function akanNames () {
    var year = document.getElementById("year").value;
    var YY =  parseInt(year);
    var month = document.getElementById("month").value;
    var MM = parseInt(month);
    var day = document.getElementById("day").value;
    var DD = parseInt(day);
    var CC = (YY - 1) / 100 + 1;
    var maleAkanName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
    var femaleAkanName = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
   
   //Formula to derive Akan Names.
    var final = parseInt(CC / 4 - 2 * CC - 1 + ( 5 * YY) / 4 + ( 26 * (MM + 1)) / 10 + DD) % 7;

   
   //sex
    if (document.getElementById("gender").checked) {
      var gender = "male";
    } else {
        var gender = "female";
    } 

   if (DD < 1 || DD > 31) {  // incorrect date inform user.
       alert("INVALID DATE!,ENTER A VALID ONE.");
   } else if (MM < 1 || MM > 12 || (MM == 2 && DD > 29)) {
       alert("INVALID MONTH!,ENTER A VALID ONE.");
   } else if (YY < 1000 && YY > 2020) {
     alert("INVALID YEAR!.ENTER A VALID ONE.");
   } else if (Math.ceil(final) == 0 && gender === "male") {
      document.getElementById("result").innerHTML = 
        "You were born on Sunday,Your Akan Day Name is " + maleAkanName[0];
   } else if (Math.ceil(final) == 1 && gender === "male") {
      document.getElementById("result").innerHTML = 
       "You were born on Monday,Your Akan Day Name is " + maleAkanName[1];
   } else if (Math.ceil(final) == 2 && gender === "male") {
    document.getElementById("result").innerHTML = 
    "You were born on Tuesday,Your Akan Day Name is " + maleAkanName[2];
  } else if (Math.ceil(final) == 3 && gender === "male") {
   document.getElementById("result").innerHTML = 
    "You were born on Wednesday,Your Akan Day Name is " + maleAkanName[3];
  } else if (Math.ceil(final) == 4 && gender === "male") {
     document.getElementById("result").innerHTML = 
      "You were born on Thursday,Your Akan Day Name is " + maleAkanName[4];
  }   else if (Math.ceil(final) == 5 && gender === "male") {
   document.getElementById("result").innerHTML = 
    "You were born on Friday,Your Akan Day Name is " + maleAkanName[5];
  } else if (Math.ceil(final) == 6 && gender === "male") {
     document.getElementById("result").innerHTML = 
      "You were born on Saturday,Your Akan Day Name is " + maleAkanName[6];
  } else if (Math.ceil(final) == 0 && gender === "female") {
      document.getElementById("result").innerHTML = 
        "You were born on Sunday,Your Akan Day Name is " + femaleAkanName[0];
  } else if (Math.ceil(final) == 1 && gender === "female") {
     document.getElementById("result").innerHTML = 
      "You were born on Monday,Your Akan Day Name is " + femaleAkanName[1];
  } else if (Math.ceil(final) == 2 && gender === "female") {
     document.getElementById("result").innerHTML = 
       "You were born on Tuesday,Your Akan Day Name is " + femaleAkanName[2];
  } else if (Math.ceil(final) == 3 && gender === "female") {
      document.getElementById("result").innerHTML = 
       "You were born on Wednesday,Your Akan Day Name is " +  femaleAkanName[3];
  } else if (Math.ceil(final) == 4 && gender === "female") {
      document.getElementById("result").innerHTML = 
       "You were born on Thursday,Your Akan Day Name is " + femaleAkanName[4];
  } else if (Math.ceil(final) == 5 && gender === "female") {
     document.getElementById("result").innerHTML = 
       "You were born on Friday,Your Akan Day Name is " + femaleAkanName[5];
  } else if (Math.ceil(final) == 6 && gender === "female") {
     document.getElementById("result").innerHTML = 
       "You were born on Saturday,Your Akan Day Name is " + femaleAkanName[6];
  } else {
     alert("Enter all valid data,please");
 }
}
