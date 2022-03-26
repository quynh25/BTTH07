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
        let nameRegex = /^[a-zA-Z]+$/;
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
//

$(document).ready(function(){
     //check email
     function checkEmail(){
        let email = $('#txtEmail').val();
        let emailRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        if(emailRegex.test(email)){
            return true
        }
        return false
    }
    $("#btnRegister").click(function(e){
        e.preventDefault();
        if(checkEmail()){
            $("#statusOfEmail").text('Email is valid')
            $("#statusOfEmail").css('color','blue')
            $("#statusOfEmail").css('font-size','15px')
        }else{
            $("#statusOfEmail").text('Email is not valid')
            $("#statusOfEmail").css('color','red')
            $("#statusOfEmail").css('font-size','15px')
        }
    })
    
   
    $("#btnRegister").click(function(e){
        e.preventDefault();
        let isRadioChecked1 = $('#Sex-1').is(':checked');
        let isRadioChecked2 = $('#Sex-2').is(':checked');
        if(isRadioChecked1 || isRadioChecked2){
            $("#statusOfSex").text('Checkbox is valid')
            $("#statusOfSex").css('color','blue')
            $("#statusOfSex").css('font-size','15px')
        }else{
            $("#statusOfSex").text('Checkbox is not valid')
            $("#statusOfSex").css('color','red')
            $("#statusOfSex").css('font-size','15px')
        }
    })
    //check language 
    $(function() {
        $("input:checkbox").on('click', function() {
          var $box = $(this);
          if ($box.is(":checked")) {
            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            $(group).prop("checked", false);
            $box.prop("checked", true);
          } else {
            $box.prop("checked", false);
          }
        });
      });
    $("#btnRegister").click(function(e){
        e.preventDefault();
        let isChecked1 = $('#Language-1').is(':checked');
        let isChecked2 = $('#Language-2').is(':checked');
        if(isChecked1 || isChecked2){
            $("#statusOfLanguage").text('Checkbox is not valid')
            $("#statusOfLanguage").css('color','blue')
            $("#statusOfLanguage").css('font-size','15px')
        }else{
            $("#statusOfLanguage").text('Checkbox is not valid')
            $("#statusOfLanguage").css('color','red')
            $("#statusOfLanguage").css('font-size','14px')
        }
    })
})
