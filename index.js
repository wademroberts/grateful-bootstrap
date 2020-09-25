//jshint esversion:

function textInfo() {

   let textBox = document.getElementById("text").value;

   if (textBox == 1978) {
     document.getElementById("stealies").src = "./public/1978.jpg"
   } else if(textBox == 1979) {
     document.getElementById("stealies").src = "./public/1979.jpg"
   } else if (textBox == 1980) {
     document.getElementById("stealies").src = "./public/1980.jpg"
   } else if (textBox == 1981) {
     document.getElementById("stealies").src = "./public/1981.jpg"
   } else if (textBox == 1982) {
     document.getElementById("stealies").src = "./public/1982.jpg"
   } else if (textBox == 1983) {
     document.getElementById("stealies").src = "./public/1983.jpg"
   } else if (textBox == 1984) {
     document.getElementById("stealies").src = "./public/1984.jpg"
   } else if (textBox == 1985) {
     document.getElementById("stealies").src = "./public/1985.jpg"
   } else if (textBox == 1986) {
     document.getElementById("stealies").src = "./public/1986.jpg"
   } else if (textBox == 1987) {
     document.getElementById("stealies").src = "./public/1987.jpg"
   } else if (textBox == 1988) {
     document.getElementById("stealies").src = "./public/1988.jpg"
   } else if (textBox == 1989) {
     document.getElementById("stealies").src = "./public/1989.jpg"
   } else if (textBox == 1990) {
     document.getElementById("stealies").src = "./public/1990.jpg"
   } else if (textBox == 1991) {
     document.getElementById("stealies").src = "./public/1991.jpg"
   } else if (textBox == 1992) {
     document.getElementById("stealies").src = "./public/1992.jpg"
   } else if (textBox == 1993) {
     document.getElementById("stealies").src = "./public/1993.jpg"
   } else if (textBox == 1994) {
     document.getElementById("stealies").src = "./public/1994.jpg"
   } else if (textBox == 1995){
     document.getElementById("stealies").src = "./public/1995.jpg"
   } else {
     document.getElementById("stealies").src = "./public/fare.jpg"
   }
 }

 const date = new Date();
 const year = date.getFullYear();


 document.getElementById("span").innerHTML = year;
