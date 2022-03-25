//Sử dụng thư viện jQuery
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
            $("#statusOfUserID").css('font-size','15px')
        }
        else{
            $("#statusOfUserID").text('UserID is not valid');
            $("#statusOfUserID").css('color','red')
            $("#statusOfUserID").css('font-size','15px')
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
            $("#statusOfPassword").css('font-size','15px')
        }
        else{
            $("#statusOfPassword").text('Password is not valid');
            $("#statusOfPassword").css('color','red')
            $("#statusOfPassword").css('font-size','15px')
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
            $("#statusOfName").css('font-size','15px')
            
        }
        else{
            $("#statusOfName").text('Name is not valid');
            $("#statusOfName").css('color','red')
            $("#statusOfName").css('font-size','15px')
        }
    })
})
//
$(document).ready(function(){
    //country
    function checkCountry(){

        let country = $('#country').val();

        if(country == ''){
            return true
        }
        else{
            return false
        }
    }

    $("#btnRegister").click(function(e){
        e.preventDefault();
        if( checkCountry() == true){
            $("#statusOfCountry").text('Select a country')
            $("#statusOfCountry").css('color','red')
            $("#statusOfCountry").css('font-size','15px')
        }else{
            $("#statusOfCountry").text('Country is valid')
            $("#statusOfCountry").css('color','blue')
            $("#statusOfCountry").css('font-size','15px')
        }
    })
    //zip code
    function checkZipCode(){

        let zipCode = $('#zipCode').val();
        let zipCodeRegex = /^\d+$/;

        if(zipCodeRegex.test(zipCode)){
            return true
        }
        else{
            return false
        }
    }

    $("#btnRegister").click(function(e){
        e.preventDefault();
        if( checkZipCode() == true){
            $("#statusOfZipCode").text('Zip code is valid')
            $("#statusOfZipCode").css('color','blue')
            $("#statusOfZipCode").css('font-size','15px')
        }else{
            $("#statusOfZipCode").text('Zip code is not vaid')
            $("#statusOfZipCode").css('color','red')
            $("#statusOfZipCode").css('font-size','15px')
        }
    })
}) 