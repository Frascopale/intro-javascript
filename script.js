window.console.log("Ho fatto il caffè");
document.write("Ho fatto il caffè");
var tazzina = 0;  
let nuovatazzina = 0;
const caffè = 23; //commento 
/*hjhgjgjhhgj 
jnjkmklmklm*/
let lattuga = 0;
let cipolla = 0.989;
let bananre = "POIU";
let zucchero = true; 
const br = "<br>";

if (cipolla > 2) {
    zucchero= false;
}  else {
    cipolla++;  /* è come dire cipolla= cipolla + 1 */
}

document.write(cipolla + "<br>"); //a concatenato die var di tipo diverso 

for (let i=0; i<100; i++) {
    lattuga++;
}

while ( lattuga < 101) {
    cipolla++;
    lattuga++;
}

document.write(cipolla + br);

let aglio= 1 + 3;

let melanzana = prompt("scrivi qua");
document.write(melanzana + br );

let pomodoro = 0.2;
let peperone = 0.3;
document.write(pomodoro + peperone + br);