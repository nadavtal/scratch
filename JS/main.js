$(document).ready(() => {
// localStorage.clear();
// console.log("main file reloaded")

// console.table(profiles)

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
var labels = ""


var scratch = {
    id: '',
    type: "",
    subType: "",
    // label: "",
    header: "",
    desc: "",
    author: "",
    // level: 0,
    likes: '',
    dislikes: ''
    // comments: [],

}

function Scratch(id, type, subType, label, header, desc, level, author){
    this.id,
    this.type = type,
    this.subType = subType,
    // this.label = label,
    this.header = header,
    this.desc = desc,
    this.author = author
} 




var profile = {
    id: '',
    gender: "",
    firstName: "Gadi",
    lastName: "Gross",
    pw: "12345",
    userName: "",
    email: "",
    birthDate: new Date,
    photos: [],
    scratches: []
}

function Profile(id, gender, fName, lName, userName, email, pw){
    this.id = id;
    this.gender = gender;
    this.firstName = fName;
    this.lastName = lName;
    this.userName = userName;
    this.email = email;
    this.pw = pw;
    this.birthDate = Date.now;
    this.photos = [];
    this.scratches = []
            
}



//SCRATCH FUNCTIONS//
/* get all scratches from list of profiles object list */
function getAllScratches(profilesList) {
    console.log('getAllScratches', profilesList)
    var group = []
    for(i = 0; i<profilesList.length; i++){
        for (j=0; j<profilesList[i].scratches.length; j++){
            group.push(profilesList[i].scratches[j])
        }
    }
    console.log('all scratches', group)
    return group
}


/* get all UNIQUE scratches from list of profiles object list */
function getUniqueScratches(profileList) {
    var idgroup = []
    var group = []
    for(i = 0; i<profileList.length; i++){
        for (j=0; j<profileList[i].scratches.length; j++){
            if (!idgroup.includes(profileList[i].scratches[j].id)){
                 idgroup.push(profileList[i].scratches[j].id);
                // console.log(idgroup)
                group.push(profileList[i].scratches[j]);
                // console.log(group)
            }
        }
    }
    // console.log('unique scratches', group)
    return group
}

/* find a scratch object in a scratch object list from an HTML id ("sc" + id)*/
function findScratchByHtmlID(scratchList, id){
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

/* find a scratch object in a scratch object list from an regular id */
function findScratchByID(scratchList, id){
    // alert(scratchList.length)
    for (i = 0; i<scratchList.length; i++){
        // console.log(profileList[i].id);
        // console.log(scratchList[i].id)
        if (scratchList[i].id == id){
            // console.log(scratchList[i]);
            return scratchList[i];
            
        }   
    }
}
 
/* find all scratches ini the list that have this keyword in it's header  */
function findScratchMatchByKeywordHeader(list, value){
    // console.log(value)
    var matches = []
    for (i = 0; i<list.length; i++){
        var keywords = list[i].header.split(' ')
        // alert(keywords);
        // console.log(list[i].type);
        if (keywords.includes(value)){
            matches.push(list[i]);
        }
    }
    // console.log(matches);
    return matches;
}

/* show number of likes and dislikes on the HTML "scratch buttons"  */
function showButtonNums(scratch){
    document.getElementById('canliveSpan').innerHTML = scratch.likes
    document.getElementById('NopeSpan').innerHTML = scratch.dislikes
}

/* initilize scratch button onclick functions */
function scratchButtons(profiles, scratches){
    document.getElementById('havetooButton').onclick = function(){
        let scratch = scratches[Math.floor(Math.random()*scratches.length)]
        localStorage.setItem('selectedScratch',JSON.stringify(scratch));
        fillPageContent(scratch,profiles)
    }
    document.getElementById('canliveButton').onclick = function(){
        let scratch = scratches[Math.floor(Math.random()*scratches.length)]
        localStorage.setItem('selectedScratch',JSON.stringify(scratch));
        fillPageContent(scratch,profiles)
    }
    document.getElementById('NopeButton').onclick = function(){
        let scratch = scratches[Math.floor(Math.random()*scratches.length)]
        localStorage.setItem('selectedScratch',JSON.stringify(scratch));
        fillPageContent(scratch,profiles)
    }
}

/* find all scratches in the list that have this value type */
function findScratchMatchByType(list, value){
    // console.log(value)
    var matches = []
    for (i = 0; i<list.length; i++){
        // alert("here");
        console.log(list[i].type);
        if (list[i].type == value){
            matches.push(list[i]);
        }
    }
    // console.log(matches);
    return matches;
}

/* find all scratches in the list that have this value subtype */
function findScratchMatchBySubtype(list, value){
    console.log(value)
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

/* caculate the percentage this scratch is from the scrtach list */
function scratchPercentage(scratch, scratchList){
    console.log('scratchPercentage', scratchList)
    var allScratches = getAllScratches(scratchList);
    console.log('allscratches', allScratches)
    // alert(allScratches.length)
    var length = allScratches.length
    var scratchAcurrences = 0
    for(i=0; i< length; i++){
        if (allScratches[i]== scratch.id){
            scratchAcurrences += 1
        }
    }
    var scratchPerc = (scratchAcurrences/length*100).toFixed(2)
    return scratchPerc
}

/* show the stat in this target element html */
function showStat(stat, targetElement){
    document.getElementById(targetElement).innerHTML = stat 
    // console.log(length, scratchAcurrences);
    // console.log(scratchPerc)
}

/* show all scratch stats in scratchbox */
function showScratchStats(scratch, profiles){
    console.log('showScratchStats', profiles)
    let scratchPercent = scratchPercentage(scratch, profiles);
    // alert(scratchPercent)
    let males = genderProfiles('male', profiles);
    console.log('males', males)
    let maleScratchPercent = scratchPercentage(scratch, males);
    let females = genderProfiles('female', profiles);
    let femaleScratchPercent = scratchPercentage(scratch, females);
    let profilesWithScratch = findProfilesByScratch(profiles, scratch)
    let malesProfilesWithScratch = findProfilesByScratch(males, scratch)
    let femalesProfilesWithScratch = findProfilesByScratch(females, scratch)
    // console.log(profilesWithScratch)
    showStat(scratchPercent + '%', 'genPercentage');
    showStat(maleScratchPercent + '%', 'malePercentage');
    showStat(femaleScratchPercent + '%', 'femalePercentage');
    showStat(profilesWithScratch.length, 'profilesWithScratch');
    showStat(malesProfilesWithScratch.length, 'maleprofilesWithScratch');
    showStat(femalesProfilesWithScratch.length, 'femaleProfilesWithScratch');
}



//PROFILEFUNCTIONS
/* returns a list of profile objects based on genfer */
function genderProfiles(gender, profiles){
    var group = []
    for (i = 0; i<profiles.length; i++){
        if(profiles[i].gender == gender){
            group.push(profiles[i]);
            }
        }
        // console.log(group)
        return group;
}

/* show all profiles in the list in the HTML target element */
function showProfiles(list, targetElement){
    // alert(typeof(targetElement))
    var element = document.getElementById(targetElement);
    // alert(element)
    element.innerHTML = '';
    for (i = 0; i < list.length; i++){
        
        var details = [list[i].gender, list[i].firstName, list[i].lastName, list[i].userName, list[i].email, list[i].birthDate]
        var userName = list[i].userName;
        var div = document.createElement('div');
        div.setAttribute('id', list[i].id);
        var a = document.createElement('a');
        a.setAttribute('href', 'http://localhost:3000/HTML/profile.html');
        a.innerHTML = userName ;
        div.appendChild(a);
        element.appendChild(div);
        // console.log(element)
    }
}


function showRandomProfilePics(numPics, profileList){}

/* show all profiles with this scratch ID  */
function showProfilesWithScratch(id, profiles, targetElement){
    console.log('showProfilesWithScratch', profiles)
    var group = findProfilesWithScratchID(id, profiles);
    
    showProfiles(group, targetElement);
    return group;
}

/* finds all profiles with this scratch object  */
function findProfilesByScratch(profileList, scratch){
    var group = []
    for (i = 0; i<profileList.length; i++){
        for(j = 0; j<profileList[i].scratches.length; j++){
            // console.log(profiles[i].scratches[j].id)
            // console.log(scratch.id)
            if (profileList[i].scratches[j] == scratch.id){
                group.push(profileList[i])
            }
        }
    }
    console.log('profileswithscratch', group);
    return group;
}

/* finds all profiles with this scratch ID  */
function findProfilesWithScratchID(id, profileList){
    console.log('findProfilesWithScratchID', profileList)
    let result = []
    // var id = scratch.id;

    for (i = 0; i<profileList.length; i++){
        
        // console.log(profileList[i].scratches[0])
        for (j=0; j<profileList[i].scratches.length; j++){
            
            // console.log(scratch.id)
            // console.log(profileList[i].scratches[j].id)
            if ( profileList[i].scratches[j] == id){
                // console.log('match');
                result.push(profileList[i]);
            }
        }
    }
    return result
    // console.log(group)
}

/* returns the profile object with this ID */
function findProfilesByID(profileList, id){
    
    for (i = 0; i<profileList.length; i++){
        // console.log(profileList[i].id);
        if (profileList[i].id == id){
            // alert(profileList[i].firstName)
            return profileList[i];
            
        }
        
    }
}

/* returns a list of common scratch IDs between two profiles */
function findScratchMatchesBetweenProfiles(profile1, profile2){
    console.log(profile1.scratches)
    console.log(profile2.scratches)
    
    let profile1scratchIds = []
    let profile2scratchIds = []
    let matches = 0
    let scratchIDmatches = []
    // console.log(profile2.scratches.length)
    for (i=0; i<profile1.scratches.length; i++){
        // console.log[i]
        let id = (profile1.scratches[i].id);
        profile1scratchIds.push(profile1.scratches[i].id)
        for (j=0; j<profile2.scratches.length; j++){
            // profile2scratchIds.push(profile2.scratches[j].id)
            if(profile2.scratches[j]== id){
                matches += 1
                scratchIDmatches.push(profile2.scratches[j])
            }
        }
    }
    console.log(profile1scratchIds)
    console.log(profile2scratchIds)
    console.log(matches)
    console.log(scratchIDmatches)
    
    scratchIDmatches.push(profile2.scratches[j])
    return scratchIDmatches
}



//DISPLAY FUNCTIONS//

/*   shows scratches from list in target element HTML*/
function showScratches(list, targetElement){
    console.log('here', list)
    var element = document.getElementById(targetElement);
    // alert(element)
    element.innerHTML = '';
    // alert('here')
    for (i = 0; i < list.length; i++){
        // console.log(i)
        let details = [list[i].header + ' - ' + list[i].desc]
        let row = document.createElement('div');
        row.setAttribute('class','row scratchrow');
        row.setAttribute('id', 'sc' + list[i].id);
       
        let colHeader = document.createElement('div');
        colHeader.setAttribute('class', 'col-3 scratchHeader');
        let a = document.createElement('a');
        a.setAttribute('href', 'http://localhost:3000/HTML/scratches.html');
        colHeader.appendChild(a)
        a.innerHTML = list[i].header
        
        let coldesc = document.createElement('div');
        coldesc.setAttribute('class', 'col-9 scratchDesc');
        let a1 = document.createElement('a');
        a1.setAttribute('href', 'http://localhost:3000/HTML/scratches.html');
        coldesc.appendChild(a1)
        a1.innerHTML = list[i].desc;

        row.appendChild(coldesc);
        row.appendChild(colHeader);
        
        element.appendChild(row);
        
    }
    // console.log(element)
}

/*   shows main scratch in designated elements*/
function showScratch(scratchObj){
    var headerSource = document.getElementById('scratchHeader')
    headerSource.innerHTML = scratchObj.header;
    var descSource = document.getElementById('scratchDesc')
    descSource.innerHTML = scratchObj.desc;
    return scratchObj
}

/* find and show all scratches in the list that have this scratche's type value in the target element */
function showScratchesByType(scratch, scratchList, targetElement){
    var group = findScratchMatchByType(scratchList, scratch.type);
    showScratches(group, targetElement)
}

/* find and show all scratches in the list that have this scratche's sub type value in the target element */
function showScratchesBySubType(scratch, scratchList, targetElement){
    var group = findScratchMatchBySubtype(scratchList, scratch.subType);
    showScratches(group, targetElement)
}


/* shows the type options from the list in the frop down menu from */
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

/* shows the sub type options from the list in the frop down menu from */
function showSlelectSubTypes(){
    var element = document.getElementById("subTypeSelect")
    // alert(element)
    for (i=0; i< scratchSubTypes.length; i++){
        var option = document.createElement('option')
        option.innerHTML = scratchSubTypes[i]
        element.appendChild(option);
    }
}

/* displays the profile full name in the target element */
function displayFullName(profile, targetElement){
    // alert(profile.id);
    var fullName = document.getElementById(targetElement);
    fullName.innerHTML = profile.firstName + " " + profile.lastName;
    
}

/* fills the carousell with 3 profiles pics */
function fillCarousellPicFromProfile(profile){
    var car1 = document.getElementById('carouselImg1');
    car1.src = profile.photos[0]
    var car2 = document.getElementById('carouselImg2');
    car2.src = profile.photos[1]
    var car3 = document.getElementById('carouselImg3');
    car3.src = profile.photos[2]
}

/* fills a carousell in the target element with first picture of the profiles in the list */
function fillCarousellPicFromProfileList(profileList, targetElement){
    var targetElement = document.getElementById(targetElement);
    for(i = 0; i < profileList.length; i++){
        let div = document.createElement('div');
        div.setAttribute('class','carousel-item')
        let a = document.createElement('a')
        a.setAttribute('href','http://localhost:3000/HTML/profile.html')
        div.appendChild(a)
        let img = document.createElement('img');
        img.setAttribute('id',profileList[i].id)
        img.setAttribute('src',profileList[i].photos[0]);
        img.setAttribute('alt','file not fount')
        img.setAttribute('class','d-block img-fluid')
        
        a.appendChild(img)
        // console.log(div)
        
        // console.log('success')
        targetElement.appendChild(div)
        // console.log(targetElement)

    }
    
}

/* fills the whole page with the scratch data and links */
function fillPageContent(scratchObj, profiles){
    console.log('fillPageContent', profiles)
    var currentScratch = showScratch(scratchObj);
    var id = currentScratch.id;
    // alert(id);
    var group = findProfilesByScratch(profiles, scratchObj)
    console.log(group)
    fillCarousellPicFromProfileList(group, 'carousel-inner')
    linkToProfile(group);
    showButtonNums(scratchObj)
    showScratchStats(scratchObj, profiles)
}



//GENERAL FUNCTIONS

/* get the value from form input */
function getVariablesFromInput(id){
    // alert(id);
    var inputValue = document.getElementById(id).value;
    // alert(inputValue);
    return inputValue;
}

/* takes a string and takes out the number from it */
function GetNum(str) {
    var num = str.replace(/\D/g,'');
    return(num);
}

/* puts info in the target element ID */
function fillInfo(targetElement, info){
    document.getElementById(targetElement).innerHTML = info
}

//LINKS FUNCTIONS//

/* sending the seleced profile object to local storage by cliking on ther links */
function linkToProfile(list){
    console.log(list)
    for (i = 0; i<list.length; i++){
        // alert('profile'+i)
        document.getElementById(list[i].id).onclick = function(){
            var id  = $(this).attr("id")
            alert(id);
            var selectedProfile = findProfilesByID(list, id);
            localStorage.setItem('selectedProfile',JSON.stringify(selectedProfile));
            // console.log(profile);
        }
    }
}

/* sending the seleced scrtach object to local storage by cliking on ther links */
function linkToScratch(scratchList, scratchPool){
    // alert(list.length)
    for (i = 0; i<scratchList.length; i++){
        
        document.getElementById('sc'+ scratchList[i].id).onclick = function(){
            var id  = $(this).attr("id");
            let selectedScratch = findScratchByHtmlID(scratchPool,id)
            // alert(selectedScratch.id)
            console.log(selectedScratch);
            localStorage.setItem('selectedScratch',JSON.stringify(selectedScratch));
            alert(selectedScratch, "uploaded to local storage")
            return selectedScratch
        }
    }
}



if(window.location.href === "http://localhost:3000/index.html") {
    

    var xhttp = new XMLHttpRequest();
    // console.log(xhttp)
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // console.log(xhttp.responseText)
        var response = JSON.parse(xhttp.responseText);
        var profiles = response.profiles
        var scratches = response.scratches
        // console.log(scratches)
        // localStorage.setItem('scratches',JSON.stringify(scratches))
        // localStorage.setItem('profiles',JSON.stringify(profiles))
        
        document.getElementById('jsondata').innerHTML = response.profiles[0].firstName
        fillCarousellPicFromProfileList(profiles, 'carousel-inner')
        linkToProfile(profiles);
        showScratches(scratches, "scratches");

        linkToScratch(scratches, scratches);
        };  

        
    
        document.getElementById('signUpButton').onclick = function(e){
    
        // alert("here");
        var first = getVariablesFromInput('inputfirstName');
        var last = getVariablesFromInput('inputslastName');
        var userName = getVariablesFromInput('inputUserName');
        var email = getVariablesFromInput('inputEmail');
        var pw = getVariablesFromInput('inputPassword3');
        var newProfile = new Profile(first, last, userName, email, pw);
        // alert("here2");
        //alert(newProfile);
        
        // profiles.push(newProfile);
        // localStorage.setItem('user',JSON.stringify(newProfile));
        // console.table(profiles);/ 
        
        
    }
    
    
    document.getElementById('loginButton').onclick = function(e){
        // e.preventDefault();
        var email = getVariablesFromInput('loginEmail');
        var pw = getVariablesFromInput('loginPw');
    
        if (email === ''){
            alert("please enter email")
        }
        for (i = 0; i < profiles.length; i++){
            alert(profiles[i].email);
            if (email === profiles[i].email){
                // alert(users[i].email)
                if (pw === profiles[i].pw){
                    // alert(users[i].pw)
                    var profile = profiles[i]
                    break
                }
                else{
                    alert("pass word doesnt match the email")
                    }
            }else{
                alert("Email doesn't exist")
                }
        }
        alert(profile.scratches);
        // alert(profile.firstName);
        localStorage.setItem('profile',JSON.stringify(profile));
       
    }
    
    
    document.getElementById("maleButton").onclick = function(){
        var maleProfiles = genderProfiles('male', profiles);
        showProfiles(maleProfiles, 'profiles')
    }
    
    document.getElementById("femaleButton").onclick = function(){
        var femaleProfiles = genderProfiles('female', profiles);
        showProfiles(femaleProfiles, 'profiles')
    }
    
    document.getElementById("maleScrachButton").onclick = function(){
        var maleProfiles = genderProfiles('male', profiles);
        // console.log(maleProfiles);
        var maleScratches = getAllScratches(maleProfiles);
        // console.log(maleScratches);
        // console.log(scratches);
        showScratches(maleScratches, "scratches");
    }
    
    
    document.getElementById("femaleScrachButton").onclick = function(){
        var femaleProfiles = genderProfiles('female');
        // console.log(maleProfiles);
        var femaleScratches = getAllScratches(femaleProfiles);
        // console.log(maleScratches);
        // console.log(scratches);
        showScratches(femaleScratches, "scratches");
    }


    }
    xhttp.open("GET", "data.json", true);
    xhttp.send();//sends to html
    

}


if(window.location.href === "http://localhost:3000/HTML/scratches.html") {

    var xhttp = new XMLHttpRequest();
    // console.log(xhttp)
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            var profiles = response.profiles
            var scratches = response.scratches
            var selectedScratch = JSON.parse(localStorage.getItem('selectedScratch'))
            console.log(selectedScratch, "from storage")
            showSlelectTypes();

            showSlelectSubTypes();
            console.log('onscratch window load', profiles)
            fillPageContent(selectedScratch, profiles)

    
    
            scratchButtons(profiles, scratches)

    
            

            document.getElementById('findScratchesButton').onclick = function(){
    
                var type = document.getElementById('typeSelect').value
                var subType = document.getElementById('subTypeSelect').value
                // alert(type)
                // alert(subType)
                var matchesType = findScratchMatchByType(scratches, type)
                var matchesSubType = findScratchMatchBySubtype(matchesType, subType)
                // console.log(matchesSubType)
                showScratches(matchesSubType, 'foundScratches')
                linkToScratch(matchesSubType, scratches);
                }


        };  


    }
    xhttp.open("GET", "../data.json", true);
    xhttp.send();//sends to html
    
    // var sharedScratches = JSON.parse(localStorage.getItem('scratches'))
    // var profiles = JSON.parse(localStorage.getItem('profiles'))
    // alert(selectedScratch.id);
    
}


if(window.location.href === "http://localhost:3000/HTML/profile.html") {
    var xhttp = new XMLHttpRequest();
    // console.log(xhttp)
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // console.log(xhttp.responseText)
        var response = JSON.parse(xhttp.responseText);
        var profiles = response.profiles
        var scratches = response.scratches
        console.log(profiles)
        console.log(scratches)
        // var profiles = JSON.parse(localStorage.getItem('profiles'))
        // var scratches = JSON.parse(localStorage.getItem('scratches'))
        var selectedProfile = JSON.parse(localStorage.getItem('selectedProfile'));
        console.log(selectedProfile);
        displayFullName(selectedProfile, "fullName");
        let scratchIds = selectedProfile.scratches;
        console.log(scratchIds);
        var scratchList = []

        for (i = 0; i<scratchIds.length; i++){
            console.log(scratchIds[i])
            console.log(scratches)
            for(j = 0; j<scratches.length; j++){
                if (scratches[j].id == scratchIds[i]){
                    scratchList.push(scratches[j])
                 }
            }  
            
        }
        console.log(scratchList);

        showScratches(scratchList, 'scratchesProfile');
        linkToScratch(scratchList, scratches);
        fillCarousellPicFromProfile(selectedProfile);
        let relatedProfiles = [];
        // console.log(profiles)
    };  


}
xhttp.open("GET", "../data.json", true);
xhttp.send();//sends to html
  
    
}


















// document.getElementById('findScratchesButton').onclick = function(){
    // var type = document.getElementById('typeSelect').value
    // var subType = document.getElementById('subTypeSelect').value
    // var matchesType = findScratchMatchByType(uniqueScratches, type)
    // var matchesSubType = findScratchMatchBySubtype(matchesType, subType)
    // showScratches(matchesSubType, 'foundScratches')
// }



})
