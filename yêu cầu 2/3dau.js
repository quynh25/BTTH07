//3 ý đầu js
//1. USER ID
$(document).ready(function() {
    function checkUserID() {
        let userID = $('#userID').val();
        let userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
        if(userIDRegex.test(userID)){
            return true;
        }
        else{
            return false;
        }
    }

    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkUserID()){
            $("#statusOfUserID").text('UserID is valid');
            $("#statusOfUserID").css('color','blue')
        }
        else{
            $("#statusOfUserID").text('UserID is not valid');
            $("#statusOfUserID").css('color','red')
        }
    })
})

//2. PASSWORD
$(document).ready(function() {
    function checkPassword() {
        let password = $('#password').val();
        let passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
        if(passwordRegex.test(password)){
            return true;
        }
        else{
            return false;
        }
    }

    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkPassword()){
            $("#statusOfPassword").text('Password is valid');
            $("#statusOfPassword").css('color','blue')
        }
        else{
            $("#statusOfPassword").text('Password is not valid');
            $("#statusOfPassword").css('color','red')
        }
    })
})


$(document).ready(function() {
    function checkName() {
        let name = $('#name').val();
        let nameRegex = /^[a-zA-Z]/;
        if(nameRegex.test(name)){
            return true;
        }
        else{
            return false;
        }
    }

    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkName()){
            $("#statusOfName").text('Name is valid');
            $("#statusOfName").css('color','blue')
        }
        else{
            $("#statusOfName").text('Name is not valid');
            $("#statusOfName").css('color','red')
        }
    })
})