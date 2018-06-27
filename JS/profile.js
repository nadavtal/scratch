$(document).ready(() => {

console.log("profile.js loaded")

var profile = JSON.parse(localStorage.getItem('profile'));


function getAge(){
    var birthYear = profile.birthDate;
    // alert(birthYear)
}
getAge();


function fillInfo(source, info){
    document.getElementById(source).innerHTML = info
}

// alert(profile.email)


function displayData(){
    var fullName = document.getElementById("fullName");
    fullName.innerHTML = profile.firstName + " " + profile.lastName;
    
}
displayData();

function showScratches(){
    var list = profile.scratches
    var element = document.getElementById("scratchesProfile");
    for (i = 0; i < list.length; i++){
        var details = [list[i].type, list[i].subType, list[i].header, list[i].desc, list[i].author]
        var div = document.createElement('div')
        div.setAttribute('id', 'scratchId' + i)
        div.innerHTML = details 
        element.appendChild(div);
    }
    console.log(element)
}
showScratches()


// function linkToScratchesWindow(){
//     var list = profile.scratches;
//     for (i = 0; i < list.length; i++){
//         document.getElementById('scratchId' + i).onclick = function(){

//         }
// }


})