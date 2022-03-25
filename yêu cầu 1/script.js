//code bằng Javascript thuần 
//3 ý đầu js
//1. USER ID
let userID = document.getElementById('userID')
let statusOfUserID = document.getElementById('statusOfUserID')
userID.addEventListener('focus', function(){
    this.style.border = '1px solid'
})

userID.addEventListener('focusout', removeUserID)

function removeUserID(){
    if(userID.value.length >=5 && userID.value.length <=12){
        statusOfUserID.textContent = 'User ID is valid'
        statusOfUserID.style.color = 'blue'
        statusOfUserID.style.fontSize='15px'
    }
    else{
        statusOfUserID.textContent = 'User ID is not valid'
        statusOfUserID.style.color = 'red'
        statusOfUserID.style.fontSize='15px'
    }
}
//2.PASSWORD
let password =document.getElementById('password')
let statusOfPassword = document.getElementById('statusOfPassword')
password.addEventListener('focus', function(){
    this.style.border = '1px solid'
})
password.addEventListener('focusout', removePassword)
function removePassword(){
    if(password.value.length >=7 && password.value.length <=12){
        statusOfPassword.textContent = 'Password is valid'
        statusOfPassword.style.color= 'blue'
        statusOfPassword.style.fontSize='15px'
        
    }
    else{
        statusOfPassword.textContent = 'Password is not valid'
        statusOfPassword.style.color = 'red'
        statusOfPassword.style.fontSize='15px'
    }
}
//3. Name 
let nameOfUser = document.getElementById('name')
let nameOfUserRegex =  /^[a-zA-Z]/;

// console.log(nameOfUserRegex)
let statusOfName = document.getElementById('statusOfName')

nameOfUser.addEventListener('focus', function(){
    this.style.border = '1px solid'
})
nameOfUser.addEventListener('focusout', removeTextName)

function removeTextName(){

    if(nameOfUserRegex.test(nameOfUser.value)){
        statusOfName.textContent = 'Name is valid'
        statusOfName.style.color = 'blue'
        statusOfName.style.fontSize='15px'
        
    }
    else{
        statusOfName.textContent = 'Name is not valid'
        statusOfName.style.color = 'red'
        statusOfName.style.fontSize='15px'
    }
}

//5.country
let country = document.getElementById('country')
let statusOfCountry = document.getElementById('statusOfCountry')

country.addEventListener('focus', function(){
    this.style.border ='1px solid'
})
country.addEventListener('focusout', removeCountry)

function removeCountry(){
    if(country.value ==''){
        statusOfCountry.textContent='Select a country'
        statusOfCountry.style.color= 'red'
        statusOfCountry.style.fontSize='15px'        
    }
    else{
        statusOfCountry.textContent='Country is valid'
        statusOfCountry.style.color= 'blue'
        statusOfCountry.style.fontSize='15px'
    }

}
//6.zipCode
let zipCode = document.getElementById('zipCode')
let zipCodeRegex = /^\d+$/;
let statusOfZipCode = document.getElementById('statusOfZipCode')

zipCode.addEventListener('focus', function(){
    this.style.border ='1px solid'
})
zipCode.addEventListener('focusout', removeZipCode)

function removeZipCode(){
    if(zipCodeRegex.test(zipCode.value)){
        statusOfZipCode.textContent='Zip code is valid'
        statusOfZipCode.style.color='blue'
        statusOfZipCode.style.fontSize='15px'
    }
    else{
        statusOfZipCode.textContent='Zip code is not valid'
        statusOfZipCode.style.color='red'
        statusOfZipCode.style.fontSize='15px'
    }
}
//mail
let email = document.getElementById('email');
let statusOfemail = document.getElementById('statusOfemail')

email.addEventListener('focus',function(){
    this.style.border = '1px solid'
})

email.addEventListener('focusout', removeemail)

function removeemail(){
    var mail = document.all.email.value;
    var acong = mail.indexOf('@');
    var dodai = mail.length-1;
    var daucham = mail.lastIndexOf('.');
    var daucach = mail.indexOf(' ');
    if((dodai<=5)|| (acong<1)||(daucham<=acong+1)||(daucach!=-1)){
        statusOfemail.textContent = 'Email không hợp lệ'
        statusOfemail.style.color = 'red'
        statusOfemail.style.fontSize='15px'
    }else{
        statusOfemail.textContent = 'Email hợp lệ'
        statusOfemail.style.color = 'blue'
        statusOfemail.style.fontSize='15px'
    }
} 
// check gender
let gender ='';
let statusOfgender = document.getElementById('statusOfgender')
function removegender(){
    if(document.getElementById('Male').checked){
        gender = document.getElementById('Male').value;
    }else if (document.getElementById('Female').checked) {
        gender = document.getElementById('Female').value;
    }
} 
// check Language
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('Language')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}