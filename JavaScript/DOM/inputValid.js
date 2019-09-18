function validate(){
    var userName = getElementById("userName");
    var password = getElementById('password');
    var genderM = getElementById('genderM');
    var genderF = getElementById('genderF');
    var country = getElementById('country');
    var comment = getElementById('comment');
    var agreeDiv = getElementById('agreeDiv');


    if(userName.value.length <5){
        alert("Enter Valid userName")
        userName.style.border="2px solid green";
    }

    else {

    }

}
