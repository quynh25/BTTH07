//3 ý giữa js address, country,  zip code

//country
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

    }
    else{
        statusOfCountry.textContent='Country is valid'
        statusOfCountry.style.color= 'blue'

    }

}
//zipCode
let zipCode = document.getElementById('zipCode')
let statusOfZipCode = document.getElementById('statusOfZipCode')

zipCode.addEventListener('focus', function(){
    this.style.border ='1px solid'
})
zipCode.addEventListener('focusout', removeZipCode)

function removeZipCode(){
    if(parseInt(zipCode.value) == zipCode.value){
        statusOfZipCode.textContent='Zip code is valid'
        statusOfZipCode.style.color='blue'
       
    }
    else{
        statusOfZipCode.textContent='Zip code must be number'
        statusOfZipCode.style.color='red'
    }
}