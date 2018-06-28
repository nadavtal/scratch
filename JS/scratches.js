$(document).ready(() => {


console.log("scratches.js loaded");

var scratches = JSON.parse(localStorage.getItem('scratches'))
// console.log(scratches)
var uniqueScratches = JSON.parse(localStorage.getItem('uniqueScratches'))
console.log(uniqueScratches)
var profiles = JSON.parse(localStorage.getItem('profiles'))
// console.log(profiles)
var scratch = JSON.parse(localStorage.getItem('scratch'))

var genders = ["male", "female"]
var scratchTypes = ['גוף', 'נפש', 'הרגלים מגונים']
var typeBody = scratchTypes[0];
var typeSoul = scratchTypes[1];
var typeHabbit = scratchTypes[2];

var scratchSubTypes = ['אוהב/ת', 'שונא/ת', 'מחרפן אותי', "חולה על זה ברמות"]
var loveSubType = scratchSubTypes[0];
var hateSubType = scratchSubTypes[1];
var freaksSubType = scratchSubTypes[2];
var crazySubType = scratchSubTypes[3];

function showSlelectTypes(){
    var element = document.getElementById("typeSelect")
    // alert(element)
    for (i=0; i< scratchTypes.length; i++){
        var option = document.createElement('option')
        option.innerHTML = scratchTypes[i]
        option.setAttribute('value', scratchTypes[i])
        option.setAttribute('id', scratchTypes[i])
        element.appendChild(option);
    }
}
showSlelectTypes();


function showSlelectSubTypes(){
    var element = document.getElementById("subTypeSelect")
    // alert(element)
    for (i=0; i< scratchSubTypes.length; i++){
        var option = document.createElement('option')
        option.innerHTML = scratchSubTypes[i]
        element.appendChild(option);
    }
}
showSlelectSubTypes();

// console.log(scratch)

function showScratch(scratchObj){
    var headerSource = document.getElementById('scratchHeader')
    headerSource.innerHTML = scratchObj.header;
    var descSource = document.getElementById('scratchDesc')
    descSource.innerHTML = scratchObj.desc;
    return scratchObj
}





function scratchButtons(){
    document.getElementById('havetooButton').onclick = function(){
        index++;
        fillPageContent(index)
    }
    document.getElementById('canliveButton').onclick = function(){
        index++;
        fillPageContent(index)
    }
    document.getElementById('NopeButton').onclick = function(){
        index++;
        fillPageContent(index)
    }
}
scratchButtons()


function findScratchMatchByType(list, value){
    // console.log(value)
    var matches = []
    for (i = 0; i<list.length; i++){
        // alert("here");
        // console.log(list[i].type);
        if (list[i].type == value){
            matches.push(list[i]);
        }
    }
    // console.log(matches);
    return matches;
}
function findScratchMatchBySubtype(list, value){
    // console.log(value)
    var matches = []
    for (i = 0; i<list.length; i++){
        // alert("here");
        // console.log(list[i].type);
        if (list[i].subType == value){
            matches.push(list[i]);
        }
    }
    // console.log(matches);
    return matches;
}

function findProfilesWithScratchID(id, profileList){
    var group = []
    // var id = scratch.id;

    for (i = 0; i<profileList.length; i++){
        
        // console.log(profileList[i].scratches[0])
        for (j=0; j<profileList[i].scratches.length; j++){
            
            // console.log(scratch.id)
            // console.log(profileList[i].scratches[j].id)
            if ( profileList[i].scratches[j].id == id){
                // console.log('match');
                group.push(profileList[i]);
            }
        }
    }
    return group
    // console.log(group)
}


function showScratches(list, targetElement){
    // alert(typeof(targetElement))
    var element = document.getElementById(targetElement);
    // alert(element)
    element.innerHTML = '';
    // alert('here')
    for (i = 0; i < list.length; i++){
        let details = [list[i].header + ' - ' + list[i].desc]
        let row = document.createElement('div');
        row.setAttribute('class','row scratchrow');
        row.setAttribute('id', 'sc' + list[i].id);
       
        let colHeader = document.createElement('div');
        colHeader.setAttribute('class', 'col-3 scratchHeader');
        let a = document.createElement('a');
        // a.setAttribute('href', './scratches.html');
        colHeader.appendChild(a)
        a.innerHTML = list[i].header
        
        let coldesc = document.createElement('div');
        coldesc.setAttribute('class', 'col-9 scratchDesc');
        let a1 = document.createElement('a');
        // a1.setAttribute('href', './scratches.html');
        coldesc.appendChild(a1)
        a1.innerHTML = list[i].desc;

        row.appendChild(coldesc);
        row.appendChild(colHeader);
        
        element.appendChild(row);
        
    }
    // console.log(element)
}

function showScratchesByType(scratch){
    var group = findScratchMatchByType(scratches, scratch.type);
    showScratches(group, 'relatedScratchesType')
}

function showScratchesBySubType(scratch){
    var group = findScratchMatchBySubtype(scratches, scratch.subType);
    showScratches(group, 'relatedScratchesSubtype')
}

function showProfiles(list, targetElement){
    // alert(typeof(targetElement))
    var element = document.getElementById(targetElement);
    // alert(element)
    element.innerHTML = '';
    for (i = 0; i < list.length; i++){
        var userName = list[i].userName
        var details = [list[i].gender, list[i].firstName, list[i].lastName, list[i].userName, list[i].email, list[i].birthDate]
        var div = document.createElement('div');
        // console.log(list[i].id);
        // console.log(div);
        div.setAttribute('id', list[i].id);
        // div.onclick = function(){
        //     alert(div.id)
        //     console.log(div)
        // }
        var a = document.createElement('a');
        a.setAttribute('href', './profile.html');
        a.innerHTML = userName ;
        div.appendChild(a);
        element.appendChild(div);
        // console.log(element)
    }
}

function showProfilesWithScratch(id){
    var group = findProfilesWithScratchID(id, profiles);
    // console.log(group);
    showProfiles(group, 'relatedprofilesType');
    return group;
}

function findProfilesByID(profileList, id){
    
    for (i = 0; i<profileList.length; i++){
        // console.log(profileList[i].id);
        if (profileList[i].id == id){
            // alert(profileList[i].firstName)
            return profileList[i];
            break
        }
        
    }
}
function linkToProfile(list){
    for (i = 0; i<list.length; i++){
        // alert('profile'+i)
        document.getElementById(list[i].id).onclick = function(){
            var id  = $(this).attr("id")
            
            var profile = findProfilesByID(list, id);
            // console.log(profile);
            localStorage.setItem('profile',JSON.stringify(profile));
        }
    }
}

function GetNum(str) {
    var num = str.replace(/\D/g,'');
    return(num);
}

function findScratchByID(scratchList, id){
    var id = GetNum(id)
    // alert( id);
    for (i = 0; i<scratchList.length; i++){
        // console.log(profileList[i].id);
        // console.log(scratchList[i].id)
        if (scratchList[i].id == id){
            // console.log(scratchList[i]);
            return scratchList[i];
            break
        }   
    }
}


function linkToScratch(list){
    // console.log(list)
    // alert('here')
    for (i = 0; i<list.length; i++){
        // console.log(list[i].id)
        document.getElementById('sc'+ list[i].id).onclick = function(){
            var id  = $(this).attr("id");
            // alert(id)
            let scratch = findScratchByID(scratches,id)
            // console.log(scratch);
            fillPageContent(scratch)
        }
    }
}


function fillPageContent(scratchObj){
    var currentScratch = showScratch(scratchObj);
    var id = currentScratch.id;
    // alert(id);
    var group = showProfilesWithScratch(id);
    linkToProfile(group);
}

document.getElementById('findScratchesButton').onclick = function(){
    
    var type = document.getElementById('typeSelect').value
    var subType = document.getElementById('subTypeSelect').value
    // alert(type)
    // alert(subType)
    var matchesType = findScratchMatchByType(uniqueScratches, type)
    var matchesSubType = findScratchMatchBySubtype(matchesType, subType)
    // console.log(matchesSubType)
    showScratches(matchesSubType, 'foundScratches')
    linkToScratch(matchesSubType);
}

fillPageContent(scratch)



})