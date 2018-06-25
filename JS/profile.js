alert("profile.js loading")

function fillInfo(source, info){
    document.getElementById(source).innerHTML = info
}

var profile = JSON.parse(localStorage.getItem('profile'));
alert(profile.email)


function displayData(){
    var fullName = document.getElementById("fullName")
    fullName.innerHTML = profile.firstName + " " + profile.lastName
}
displayData();