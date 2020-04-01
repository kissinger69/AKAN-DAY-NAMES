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
}

