// 11. Use this function name. Take inputs from the user and calculate sum of numbers.
//     Do not add parameters in the function definition.
//
//               function calcSum(){
//
//               //todo write code from here. Do not change function definition.
//
// }


function calcSum(){

        var a =  prompt('give value of a','');
        a = parseInt(a);
        var b = prompt('give value of b','');
        b = parseInt(b);
        sum = a+b;
        return sum;

}
console.log(calcSum());
