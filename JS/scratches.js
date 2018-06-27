$(document).ready(() => {

console.log("scratches.js loaded");

var scratches = JSON.parse(localStorage.getItem('scratches'))
// console.log(scratches)
var profiles = JSON.parse(localStorage.getItem('profiles'))
// console.log(profiles)
var scratch = JSON.parse(localStorage.getItem('scratch'))


console.log(scratch)

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
                console.log('match');
                group.push(profileList[i]);
            }
        }
    }
    return group
    // console.log(group)
}
findProfilesWithScratchID(11, profiles)

function showScratches(list, targetElement){
    // alert(typeof(targetElement))
    var element = document.getElementById(targetElement);
    // alert(element)
    element.innerHTML = '';
    // alert('here')
    for (i = 0; i < list.length; i++){
        var details = [list[i].type, list[i].subType, list[i].header, list[i].desc, list[i].author]
        var div = document.createElement('div')
        div.innerHTML = details 
        
        element.appendChild(div);
    }
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
    console.log(group);
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
        document.getElementById(i).onclick = function(){
            var id  = $(this).attr("id")
            
            var profile = findProfilesByID(list, id);
            // console.log(profile);
            localStorage.setItem('profile',JSON.stringify(profile));
        }
    }
}



function fillPageContent(scratchObj){
    var currentScratch = showScratch(scratchObj);
    var id = currentScratch.id
    // alert(id)
    showScratchesByType(currentScratch);
    showScratchesBySubType(currentScratch);
    var group = showProfilesWithScratch(id);
    linkToProfile(group);
}

fillPageContent(scratch)




})