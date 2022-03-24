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
    }
    else{
        statusOfUserID.textContent = 'User ID is not valid'
        statusOfUserID.style.color = 'red'
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
        statusOfPassword.style.color = 'blue'
    }
    else{
        statusOfPassword.textContent = 'Password is not valid'
        statusOfPassword.style.color = 'red'
    }
}
//3. Name 
let nameOfUser = document.getElementById('name')
let statusOfName = document.getElementById('statusOfName')
nameOfUser.addEventListener('focus', function(){
    this.style.border = '1px solid'
})
nameOfUser.addEventListener('focusout', removeTextName)
function removeTextName(){
    if(nameOfUser.value.length>=3 && nameOfUser.value==alphabetic){
        statusOfName.textContent = 'Your name is valid'
        statusOfName.style.color = 'blue'
    }
    else{
        statusOfName.textContent = 'Your name is not valid'
        statusOfName.style.color = 'red'
    }
}