// 1. Create a function that would check the passenger age.
//    Take the input from the user using the prompt command in your function:
//
// a. If the passenger is 2 years or below then alert No charge.
//
// b. If the passenger is above 2 years and below 14 then alert 10% discount
//
// c. If the passenger is above 14 and below 55 then alert Regular price
//
// d. If the passenger is above 55 then 20% discount

function passangerAge(){
var age = prompt("enter your age");
age= parseInt(age)
if (age <= 2){
alert('no charge')
}
else if(age>2 && age<14){
alert('10%discount')
}
else if(age>14 && age<55){
alert('regular price')
}
else{
alert('20%discount')
}
}
passangerAge()
