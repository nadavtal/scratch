$(document).ready(() => {
localStorage.clear();
console.log("main file reloaded")

//  import { profiles } from './data' 

console.table(profiles)

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
    // likes: 0,
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

var sharedScratches = [
    { id: 15, type: typeBody, subType: hateSubType, header: "ריח זיעה בגוף", desc: "זה מגעיל אותי ומוריד לי כל חשק", author: ""},
    { id: 16, type: typeHabbit, subType: freaksSubType, header: "לאכול בפה פתוח", desc: "מה אני צריך לראות את  התהליך הזה בפה שלך!!", author: ""},
    { id: 17, type: typeHabbit, subType: freaksSubType, header: "ריח רגליים", desc: "לא יכול לסבול את זה!!", author: ""},
    { id: 18, type: typeSoul, subType: hateSubType, header: "שיחות על הבוקר", desc: "מוח לא עובד לפני 2 כוסות קפה", author: ""},
    { id: 19, type: typeHabbit, subType: freaksSubType, header: "זקנים", desc: "זה מגרד ונראה ממש מוזר", author: ""},
    { id: 20, type: typeBody, subType: loveSubType, header: "ליטוף בשיער", desc: "מתמסרת כמו כלבלב קטן ומחזירה פינוק פי אלף", author: ""},
    { id: 21, type: typeSoul, subType: crazySubType, header: "נדנודים", desc: "לא צריך להגיד לי כל כמה דקות מה נסגר", author: ""},
    ]



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

var profiles = [
    {
    id: 0,
    gender: "male",
    firstName: "Gadi",
    lastName: "Gross",
    pw: "123",
    userName: "gads",
    email: "gadi@gmail.com",
    birthDate: new Date,
    photos: ['images\clashimg1.jpg'],
    scratches: [
        { id: 0, type: typeHabbit, subType: freaksSubType, header: "קמצנות", desc: "זה אומר הכל על האישיות של הבן אדם", author: ""},
        { id: 1, type: typeBody, subType: hateSubType, header: "אוי רגליים", desc: "לא סובל שנוגעים לי ברגליים", author: ""},
        { id: 2, type: typeBody, subType: crazySubType, header: "קיצי בגב", desc: "אני הופך לכלבלב", author: ""},
        { id: 3, type: typeHabbit, subType: freaksSubType, header: "אמאלה הריח", desc: "רגישות קשה לריחות", author: ""},
        
        { id: 4, type: typeHabbit, subType: hateSubType, header: "נחירות", desc: "לא אפשרי לישון עם זה", author: ""},
        { id: 5, type: typeSoul, subType: hateSubType, header: "בוקר חפירות", desc: "אין עם מי לדבר בבוקר", author: ""},
        { id: 6, type: typeHabbit, subType: loveSubType, header: "להירדם עם טלוויזיה או מוסיקה", desc: "לא מצליחה להירדם בלי...", author: ""},
        sharedScratches[0],
        sharedScratches[3],
        sharedScratches[2],
        sharedScratches[5],
        sharedScratches[4],
            ]
    },
    
    {
    id: 1,
    gender: "male",    
    firstName: "Nadav",
    lastName: "Almagor",
    pw: "123",
    userName: "nadi",
    email: "nadav@gmail.com",
    birthDate: new Date,
    photos: [],
    scratches: [
        { id: 7, type: typeBody, subType: hateSubType, header: "ריח פה", desc: "זה מגעיל אותי ברמות", author: ""},
        { id: 8, type: typeHabbit, subType: freaksSubType, header: "לאכול בפה פתוח", desc: "מה אני צריך לראות את  התהליך הזה בפה שלך!!", author: ""},
        
        { id: 9, type: typeHabbit, subType: freaksSubType, header: "ציפרוניים", desc: "כסיסת ציפורניים...איכססס", author: ''},
        { id: 10, type: typeBody, subType: loveSubType, header: "מסאג' רגליים", desc: "מתמסרת כמו כלבלב קטן ומחזירה פינוק פי אלף", author:''},
        { id: 11, type: typeHabbit, subType: freaksSubType, header: "גירוד רגליים", desc: "מה אתם חופרים שם?? תנקו את זה!!", author: ""},
        { id: 12, type: typeHabbit, subType: hateSubType, header: "להירדם עם טלוויזיה או מוסיקה", desc: "לא מצליחה להירדם עם משהו ברקע...", author: ""},
        { id: 13, type: typeSoul, subType: hateSubType, header: "חפירות", desc: "פשוט לא מצליח לשרוד את זה", author: ""},
        sharedScratches[1],
        sharedScratches[3],
        sharedScratches[4],
        sharedScratches[5],
        ]
    },
    
    {
    id: 2,
    gender: "female",
    firstName: "lior",
    lastName: "sela",
    pw: "123",
    userName: "lili",
    email: "lior@gmail.com",
    birthDate: new Date,
    photos: [],
    scratches: [
        { id: 14, type: typeSoul, subType: hateSubType, header: "שיחות על הבוקר", desc: "מוח לא עובד לפני 2 כוסות קפה", author: ''},
        { id: 15, type: typeHabbit, subType: freaksSubType, header: "ציפרוניים", desc: "כסיסת ציפורניים...איכססס", author: ''},
        { id: 16, type: typeBody, subType: loveSubType, header: "מסאג' רגליים", desc: "מתמסרת כמו כלבלב קטן ומחזירה פינוק פי אלף", author: ''},
        { id: 17, type: typeSoul, subType: hateSubType, header: "צעקות", desc: "לא מבין איך זה תורם לשום דבר ורק יוצר עוד כעס", author: ''},
        sharedScratches[0],
        sharedScratches[4],
        sharedScratches[5],
        sharedScratches[1],
        sharedScratches[3],
        sharedScratches[2],
        ]
    },

] 
// alert(typeof(profiles))
localStorage.setItem('profiles',JSON.stringify(profiles))




function getAllScratches(profileList) {
    var group = []
    for(i = 0; i<profileList.length; i++){
        for (j=0; j<profileList[i].scratches.length; j++){
            group.push(profileList[i].scratches[j])
        }
    }
    // console.log('all scratches', group)
    return group
}
var scratches = getAllScratches(profiles)
localStorage.setItem('scratches',JSON.stringify(scratches))

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
var uniqueScratches = getUniqueScratches(profiles)
localStorage.setItem('uniqueScratches',JSON.stringify(uniqueScratches))


function showProfiles(list, targetElement){
    // alert(typeof(targetElement))
    var element = document.getElementById(targetElement);
    // alert(element)
    element.innerHTML = '';
    for (i = 0; i < list.length; i++){
        
        var details = [list[i].gender, list[i].firstName, list[i].lastName, list[i].userName, list[i].email, profiles[i].birthDate]
        // var today =  Date.now;
        // console.log(today)
        // var age = today - list[i].birthDate
        // console.log(list[i].birthDate)
        var userName = list[i].userName;
        var div = document.createElement('div');
        // console.log(list[i].id);
        // console.log(div);
        div.setAttribute('id', list[i].id);
        // div.onclick = function(){
        //     alert(div.id)
        //     console.log(div)
        // }
        var a = document.createElement('a');
        a.setAttribute('href', './HTML/profile.html');
        a.innerHTML = userName ;
        div.appendChild(a);
        element.appendChild(div);
        // console.log(element)
    }
}
showProfiles(profiles, "profiles");

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
        a.setAttribute('href', './HTML/scratches.html');
        colHeader.appendChild(a)
        a.innerHTML = list[i].header
        
        let coldesc = document.createElement('div');
        coldesc.setAttribute('class', 'col-9 scratchDesc');
        let a1 = document.createElement('a');
        a1.setAttribute('href', './HTML/scratches.html');
        coldesc.appendChild(a1)
        a1.innerHTML = list[i].desc;

        row.appendChild(coldesc);
        row.appendChild(colHeader);
        
        element.appendChild(row);
        
    }
    // console.log(element)
}
showScratches(uniqueScratches, "scratches");

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
// showSlelectTypes();


function showSlelectSubTypes(){
    var element = document.getElementById("subTypeSelect")
    // alert(element)
    for (i=0; i< scratchSubTypes.length; i++){
        var option = document.createElement('option')
        option.innerHTML = scratchSubTypes[i]
        element.appendChild(option);
    }
}
// showSlelectSubTypes();

// alert(typeof(profiles[2].scratches[0].author))














function getVariablesFromInput(id){
    // alert(id);
    var inputValue = document.getElementById(id).value;
    // alert(inputValue);
    return inputValue;
}
// getVariablesFromInput('inputfirstName')



function findScratchMatchByType(list, value){
    console.log(value)
    var matches = []
    for (i = 0; i<list.length; i++){
        // alert("here");
        console.log(list[i].type);
        if (list[i].type == value){
            matches.push(list[i]);
        }
    }
    console.log(matches);
    return matches;
}

function findProfilesByScratch(profileList, scratch){
    var group = []
    for (i = 0; i<profileList.length; i++){
        // console.log(profiles[i].scratches)
        if (profileList[i].scratches.includes(scratch)){
            group.push(profileList[i])
        }
    }
    // console.log(group);
    return group;
}
// findProfilesByScratch(profiles, scratches[6]);

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
    console.log(matches);
    return matches;
}


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
    console.log(matches);
    return matches;
}

function genderProfiles(gender){
    var group = []
    for (i = 0; i<profiles.length; i++){
        if(profiles[i].gender == gender){
            group.push(profiles[i]);
            }
        }
        // console.log(group)
        return group;
}
// genderProfiles('female')



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
linkToProfile(profiles);

function linkToScratch(list){
    // alert(list.length)
    for (i = 0; i<list.length; i++){
        // console.log('sc' + i);
        document.getElementById('sc'+ i).onclick = function(){
            var id  = $(this).attr("id");
            // alert('here')
            var scratch = findScratchByID(scratches,id)
            // console.log(scratch);
            localStorage.setItem('scratch',JSON.stringify(scratch));
        }
    }
}
linkToScratch(uniqueScratches);


document.getElementById('signUpButton').onclick = function(e){
    
    // alert("here");
    var first = getVariablesFromInput('inputfirstName');
    var last = getVariablesFromInput('inputslastName');
    var userName = getVariablesFromInput('inputUserName');
    var email = getVariablesFromInput('inputEmail');
    var pw = getVariablesFromInput('inputPassword3');
    var newProfile = new Profile(first, last, userName, email, pw);
    // alert("here2");
    alert(newProfile);
    // localStorage.setItem('user', newUser);
    // localStorage.setItem('first', first);
    // localStorage.setItem('last', last);
    // localStorage.setItem('email', email);
    // localStorage.setItem('pw', pw);
    // localStorage.setItem('wins', 0);
    // localStorage.setItem('losses', 0);
    // localStorage.setItem('balance', 0);
    // profiles.push(newProfile);
    // localStorage.setItem('user',JSON.stringify(newProfile));
    console.table(profiles);
    
    
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
    var maleProfiles = genderProfiles('male');
    showProfiles(maleProfiles, 'profiles')
}

document.getElementById("femaleButton").onclick = function(){
    var femaleProfiles = genderProfiles('female');
    showProfiles(femaleProfiles, 'profiles')
}

document.getElementById("maleScrachButton").onclick = function(){
    var maleProfiles = genderProfiles('male');
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
// document.getElementById('findScratchesButton').onclick = function(){
//     var type = document.getElementById('typeSelect').value
//     var subType = document.getElementById('subTypeSelect').value
//     var matchesType = findScratchMatchByType(uniqueScratches, type)
//     var matchesSubType = findScratchMatchBySubtype(matchesType, subType)
//     showScratches(matchesSubType, 'foundScratches')
// }



})
