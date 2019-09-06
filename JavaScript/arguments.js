function calcresult(){
    //res=a+b;
    //arguments[]
    res = 0;
    for (var i = 0; i<arguments.length; i++){
        res = res+arguments[i];
    }
return;
}



var firstRes = calcresult(20,30);
calcresult(20,30,45,33);
var thirdRes = calcresult(10,20,30);

//primitive datatypes: null, string, number, boolean, undefines
// type of null is object

alert("line 13: "+thirdRes);
var xtype = typeof thirdRes;
alert(xtype);
