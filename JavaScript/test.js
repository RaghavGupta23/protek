// function calcResult(){
//   var res =0;
//   for(var i=0; i<arguments.length;i++){
//   	res = res+arguments[i];
//   }
//   return res;
// }
//
// var fValue = prompt("Enter first value");
// var sValue = prompt("Enter second value");
//
// //fvalue "75"
// fValue = parseInt(fValue);
// sValue = parseInt(sValue);
// var firstRes = calcResult(fValue,sValue);
// alert(firstRes);
//
// /*
// TYPE CONVERSION STRING TO NUM:
// var someVal = "234";
// var convSomeVal = parseInt(someVal);
// */
//
// /*var xtype = typeof firstRes;
// alert(xtype);*/

// function passangerAge(){
// var age = prompt("enter your age");
// age= parseInt(age)
// if (age <= 2){
// alert('no charge')
// }
// else if(age>2 && age<14){
// alert('10%discount')
// }
// else if(age>14 && age<55){
// alert('regular price')
// }
// else{
// alert('20%discount')
// }
// }
// passangerAge()

// function evenOdd (){
//     var num = prompt("enter an Number:");
//     if (num%2 == 0){
//         alert(num + 'is even');
//     }
//     else{
//         alert(num + 'is odd');
//     }
// }
// evenOdd();

// function widthdrawMoney (){
//     var num = prompt("enter the amount to widthdraw:");
//     num = parseInt(num);
//
//     if (isNaN(num)){
//         alert('Please enter an Integer that is a multiple of 20.')
//     }
//     else if (num%20 == 0){
//         alert('Your Amount is ready.');
//     }
//     else{
//         alert('Please enter a multiple of 20.');
//     }
// }
// widthdrawMoney();

var a=5;
var b=5;
function (){
    a+=1;
    sum = a+b;
    return ('sum of global variables is' + sum);
}
function(){
    a-=1;
    sub = a-b;
    return ('sub of global variables is' + sub);
}
function(){
    let a = 8;
    add = a+b;
    sub = a-b;
    mul = a*b;
    mod = a%b;
    return (add+""+sub++mul++mod);
}
