// 2. Prompt the user to enter a number and check if it is even or odd.

function evenOdd (){
    var num = prompt("enter an Number:");
    if (num%2 == 0){
        alert(num + 'is even');
    }
    else{
        alert(num + 'is odd');
    }
}
evenOdd();
