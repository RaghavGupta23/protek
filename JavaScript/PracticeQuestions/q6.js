// 6. Have two global variables a and b.
//
//    a. Have a function add( ). Increment the value of a first and then calculate the sum of a and b.
//
//    b. Have a function sub( ). Decrement the value of a first and then alert a-b.
//
//    c. Have a function multiply( ). Give a local variable a=10 and then calculate the sum, subtract, divide, multiply and modulus.


function add(a,b){
    a+=1;
    sum = a+b;
    return ('sum of global variables is ' + sum);
}
console.log(add(3,4));
function sub(a,b){
    a-=1;
    sub = a-b;
    return ('sub of global variables is ' + sub);
}
console.log(sub(3,4));
function all(b){
    let a = 8;
    add = a+b;
    sub = a-b;
    mul = a*b;
    mod = a%b;
    return (add+" "+sub+" "+mul+" "+mod);
}
console.log(all(4));
