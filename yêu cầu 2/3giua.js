//3 ý giữa jQ
$(document).ready(function(){

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
        }else{
            $("#statusOfCountry").text('Country is valid')
            $("#statusOfCountry").css('color','blue')
        }
    })

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
        }else{
            $("#statusOfZipCode").text('Zip code must be number')
            $("#statusOfZipCode").css('color','red')
        }
    })
})