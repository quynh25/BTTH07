// 4 ý cuối js
// check email
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
    }else{
        statusOfemail.textContent = 'Email hợp lệ'
        statusOfemail.style.color = 'blue'
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
