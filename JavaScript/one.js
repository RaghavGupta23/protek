// Write a program to prompt the user for age.
// If age is less than or equal to (<=) 14, alert "Not Allowed".
// If age is greater than 14 and less than 65, alert "Regular Price".
// If age is equal to 50, alert "Special discount".

function fivenum(a,b,c,d,e){
    let result = 0;
    if(a<b){
        result=a+b;
    }
    else if (a>b) {
        result=a-b;
    }
    if (result<c){
        result=result+c;
    }
    else if(result>c){
        result=result-c;
    }
    if (result<d){
        result=result+d;
    }
    else if(result>d){
        result=result-d;
    }
    if (result<e){
        result=result+e;
    }
    else if(result>e){
        result=result-e;
    }
    return result;
}
console.log(fivenum(6,9,8,4,10))
