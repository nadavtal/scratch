$(document).ready(() => {
// localStorage.clear();
// console.log("main file reloaded")

//  import { profiles } from './data' 

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

var sharedScratches = [
    { id: 0, type: typeHabbit, subType: freaksSubType, header: "קמצנות", desc: "זה אומר הכל על האישיות של הבן אדם", author: "", likes: 34, dislikes: 23},
    { id: 1, type: typeBody, subType: hateSubType, header: "אוי רגליים", desc: "לא סובל שנוגעים לי ברגליים", author: "", likes: 45, dislikes: 23},
    { id: 2, type: typeBody, subType: crazySubType, header: "קיצי בגב", desc: "אני הופך לכלבלב", author: "", likes: 14, dislikes: 12},
    { id: 3, type: typeHabbit, subType: freaksSubType, header: "אמאלה הריח", desc: "רגישות קשה לריחות", author: "", likes: 25, dislikes: 34},
    { id: 4, type: typeHabbit, subType: hateSubType, header: "נחירות", desc: "לא אפשרי לישון עם זה", author: "", likes: 12, dislikes: 35},
    { id: 5, type: typeSoul, subType: hateSubType, header: "בוקר חפירות", desc: "אין עם מי לדבר בבוקר", author: "", likes: 23, dislikes: 56},
    { id: 6, type: typeHabbit, subType: loveSubType, header: "להירדם עם טלוויזיה או מוסיקה", desc: "לא מצליחה להירדם בלי...", author: "", likes: 34, dislikes: 23},
    { id: 7, type: typeBody, subType: hateSubType, header: "ריח פה", desc: "זה מגעיל אותי ברמות", author: "", likes: 23, dislikes: 54},
    { id: 8, type: typeHabbit, subType: freaksSubType, header: "לאכול בפה פתוח", desc: "מה אני צריך לראות את  התהליך הזה בפה שלך!!", author: "", likes: 78, dislikes: 45},
    { id: 9, type: typeHabbit, subType: freaksSubType, header: "ציפרוניים", desc: "ציפורניים ארוכות לגברים??? ", author: '', likes: 34, dislikes: 56},
    { id: 10, type: typeBody, subType: loveSubType, header: "מסאג' רגליים", desc: "מוריד ממני את כל לחצי היום!", author:'', likes: 23, dislikes: 54},
    { id: 11, type: typeHabbit, subType: freaksSubType, header: "גירוד רגליים", desc: "מה אתם חופרים שם?? תנקו את זה!!", author: "", likes: 0, dislikes: 34},
    { id: 12, type: typeHabbit, subType: hateSubType, header: "להירדם עם טלוויזיה או מוסיקה", desc: "לא מצליחה להירדם עם משהו ברקע...", author: "", likes: 24, dislikes: 45},
    { id: 13, type: typeSoul, subType: hateSubType, header: "חפירות", desc: "פשוט לא מצליח לשרוד את זה", author: "", likes: 46, dislikes: 24},
    { id: 14, type: typeSoul, subType: crazySubType, header: "שיחות על הבוקר", desc: "מוח לא עובד לפני 2 כוסות קפה", author: '', likes: 66, dislikes: 44},
    { id: 15, type: typeHabbit, subType: freaksSubType, header: "ציפרוניים", desc: "כסיסת ציפורניים...איכססס", author: '', likes: 34, dislikes: 57},
    { id: 16, type: typeHabbit, subType: crazySubType, header: "לאכול בפה פתוח", desc: "מה אני צריך לראות את  התהליך הזה בפה שלך!!", author: "", likes: 34, dislikes: 36},
    { id: 17, type: typeHabbit, subType: freaksSubType, header: "ריח רגליים", desc: "לא יכול לסבול את זה!!", author: "", likes: 26, dislikes: 36},
    { id: 18, type: typeSoul, subType: hateSubType, header: "שיחות על הבוקר", desc: "מוח לא עובד לפני 2 כוסות קפה", author: "", likes: 45, dislikes: 67},
    { id: 19, type: typeHabbit, subType: freaksSubType, header: "זקנים", desc: "זה מגרד ונראה ממש מוזר", author: "", likes: 67, dislikes: 35},
    { id: 20, type: typeBody, subType: loveSubType, header: "ליטוף בשיער", desc: "אפשר לפתור הכל עם קצת ליטופי שיער", author: "", likes: 26, dislikes: 34},
    { id: 21, type: typeSoul, subType: crazySubType, header: "נדנודים", desc: "לא צריך להגיד לי כל כמה דקות מה נסגר", author: "", likes: 24, dislikes: 87},
    { id: 22, type: typeBody, subType: loveSubType, header: "מסאג' רגליים", desc: "מתמסרת כמו כלבלב קטן ומחזירה פינוק פי אלף", author: '', likes: 65, dislikes: 45},
    { id: 23, type: typeSoul, subType: hateSubType, header: "צעקות", desc: "לא מבין איך זה תורם לשום דבר ורק יוצר עוד כעס", author: '', likes: 54, dislikes: 45},
    { id: 24, type: typeHabbit, subType: hateSubType, header: "קמצנות", desc: "זה מוריד לי ברמות", author: "", likes: 34, dislikes: 25},
    { id: 24, type: typeBody, subType: hateSubType, header: "ריח זיעה בגוף", desc: "זה מגעיל אותי ומוריד לי כל חשק", author: "", likes: 56, dislikes: 67},
]
localStorage.setItem('sharedScratches',JSON.stringify(sharedScratches))



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
    photos: ['../images/male.jpg', '../images/male2.jpg', '../images/male3.jpg'],
    scratches: [
        sharedScratches[0],
        sharedScratches[3],
        sharedScratches[2],
        sharedScratches[5],
        sharedScratches[4],
        sharedScratches[11],
        sharedScratches[10],
        sharedScratches[20],
        sharedScratches[23],
        sharedScratches[21],
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
    photos: ['../images/male4.jpg', "../images/male5.jpg", '../images/male6.jpg'],
    scratches: [
        sharedScratches[1],
        sharedScratches[3],
        sharedScratches[4],
        sharedScratches[5],
        sharedScratches[0],
        sharedScratches[20],
        sharedScratches[21],
        sharedScratches[22],
        sharedScratches[23],
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
    photos: ["../images/female.jpg", "../images/female1.jpg", '../images/female2.jpg'],
    scratches: [
        sharedScratches[21],
        sharedScratches[23],
        sharedScratches[13],
        sharedScratches[11],
        sharedScratches[12],
        sharedScratches[6],
        sharedScratches[16],
        sharedScratches[2],
        sharedScratches[18],
        sharedScratches[19],
        sharedScratches[15],
        ]
    },
    {
    id: 3,
    gender: "female",
    firstName: "מיטל",
    lastName: "כהן",
    pw: "123",
    userName: "meitalush",
    email: "meital@gmail.com",
    birthDate: new Date,
    photos: ["../images/female3.jpg", "../images/female4.jpg", '../images/female5.jpg'],
    scratches: [
        sharedScratches[0],
        sharedScratches[4],
        sharedScratches[5],
        sharedScratches[1],
        sharedScratches[3],
        sharedScratches[2],
        sharedScratches[13],
        sharedScratches[14],
        sharedScratches[15],
        sharedScratches[16],
        sharedScratches[4],
        ]
    },
    {
        id: 4,
        gender: "male",
        firstName: "רון",
        lastName: "שדה",
        pw: "123",
        userName: "רונצ'ו",
        email: "ron@gmail.com",
        birthDate: new Date,
        photos: ['../images/male8.jpg', "../images/male6.jpg", "../images/male7.jpg"],
        scratches: [
            sharedScratches[23],
            sharedScratches[22],
            sharedScratches[21],
            sharedScratches[20],
            sharedScratches[1],
            sharedScratches[10],
            sharedScratches[13],
            sharedScratches[12],
            sharedScratches[15],
            sharedScratches[14],
                ]
        },
        
        {
        id: 5,
        gender: "male",    
        firstName: "שי",
        lastName: "אלמגור",
        pw: "123",
        userName: "שייצ'וק",
        email: "shai@gmail.com",
        birthDate: new Date,
        photos: ['../images/male9.jpg', "../images/male10.jpg", '../images/male8.jpg'],
        scratches: [
            sharedScratches[1],
            sharedScratches[3],
            sharedScratches[4],
            sharedScratches[5],
            sharedScratches[9],
            sharedScratches[7],
            sharedScratches[8],
            sharedScratches[13],
            sharedScratches[12],
            sharedScratches[15],
            sharedScratches[14],
            ]
        },
        
        {
        id: 6,
        gender: "female",
        firstName: "Dana",
        lastName: "galon",
        pw: "123",
        userName: "danush",
        email: "dana@gmail.com",
        birthDate: new Date,
        photos: ["../images/female.jpg", "../images/female1.jpg", '../images/female2.jpg'],
        scratches: [
            sharedScratches[0],
            sharedScratches[4],
            sharedScratches[9],
            sharedScratches[1],
            sharedScratches[3],
            sharedScratches[2],
            sharedScratches[7],
            sharedScratches[8],
            sharedScratches[12],
            sharedScratches[22],
            sharedScratches[15],
            sharedScratches[17],
            sharedScratches[20],
            ]
        },
        {
        id: 7,
        gender: "female",
        firstName: "תרצה",
        lastName: "גלאון",
        pw: "123",
        userName: "tirta123",
        email: "rirtza@gmail.com",
        birthDate: new Date,
        photos: ["../images/female6.jpg", "../images/female4.jpg", '../images/female5.jpg'],
        scratches: [
            sharedScratches[9],
            sharedScratches[4],
            sharedScratches[5],
            sharedScratches[1],
            sharedScratches[7],
            sharedScratches[8],
            sharedScratches[3],
            sharedScratches[11],
            sharedScratches[19],
            sharedScratches[18],
            sharedScratches[13],
            sharedScratches[15],
            sharedScratches[14],
            ]
        },
] 
// alert(typeof(profiles))
localStorage.setItem('profiles',JSON.stringify(profiles))



//SCRATCH FUNCTIONS//

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

function findScratchByID(scratchList, id){
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


function showButtonNums(scratch){
    document.getElementById('canliveSpan').innerHTML = scratch.likes
    document.getElementById('NopeSpan').innerHTML = scratch.dislikes

}

function scratchButtons(){
    document.getElementById('havetooButton').onclick = function(){
        let scratch = sharedScratches[Math.floor(Math.random()*sharedScratches.length)]
        
        fillPageContent(scratch)
    }
    document.getElementById('canliveButton').onclick = function(){
        let scratch = sharedScratches[Math.floor(Math.random()*sharedScratches.length)]
        
        fillPageContent(scratch)
    }
    document.getElementById('NopeButton').onclick = function(){
        let scratch = sharedScratches[Math.floor(Math.random()*sharedScratches.length)]
        
        fillPageContent(scratch)
    }
}



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

function scratchPercentage(scratch, list){
    // alert('here')
    var allScratches = getAllScratches(list);
    var length = allScratches.length
    var scratchAcurrences = 0
    for(i=0; i< length; i++){
        if (allScratches[i].id == scratch.id){
            scratchAcurrences += 1
        }
    }
    var scratchPerc = (scratchAcurrences/length*100).toFixed(2)
    return scratchPerc
}

function showStat(stat, targetElement){
    document.getElementById(targetElement).innerHTML = stat 
    // console.log(length, scratchAcurrences);
    // console.log(scratchPerc)
}

function showScratchStats(scratch){
    let scratchPercent = scratchPercentage(scratch, profiles);
    let males = genderProfiles('male');
    let maleScratchPercent = scratchPercentage(scratch, males);
    let females = genderProfiles('female');
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
        a.setAttribute('href', 'http://localhost:3000/HTML/profile.html');
        a.innerHTML = userName ;
        div.appendChild(a);
        element.appendChild(div);
        // console.log(element)
    }
}

function showRandomProfilePics(numPics){}

function showProfilesWithScratch(id){
    var group = findProfilesWithScratchID(id, profiles);
    
    showProfiles(group, 'relatedprofilesType');
    return group;
}


function findProfilesByScratch(profileList, scratch){
    var group = []
    for (i = 0; i<profileList.length; i++){
        for(j = 0; j<profileList[i].scratches.length; j++){
            // console.log(profiles[i].scratches[j].id)
            // console.log(scratch.id)
            if (profileList[i].scratches[j].id == scratch.id){
                group.push(profileList[i])
            }
        }
    }
    // console.log(group);
    return group;
}
// console.log(profiles)
// findProfilesByScratch(profiles, scratches[11])

function findProfilesWithScratchID(id, profileList){
    let result = []
    // var id = scratch.id;

    for (i = 0; i<profileList.length; i++){
        
        // console.log(profileList[i].scratches[0])
        for (j=0; j<profileList[i].scratches.length; j++){
            
            // console.log(scratch.id)
            // console.log(profileList[i].scratches[j].id)
            if ( profileList[i].scratches[j].id == id){
                // console.log('match');
                result.push(profileList[i]);
            }
        }
    }
    return result
    // console.log(group)
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


function findScratchMatchesBetweenProfiles(profile1, profile2){
    console.log(profile1.scratches)
    console.log(profile2.scratches)
    
    let profile1scratchIds = []
    let profile2scratchIds = []
    let matches = 0
    // console.log(profile2.scratches.length)
    for (i=0; i<profile1.scratches.length; i++){
        // console.log[i]
        let id = (profile1.scratches[i].id);
        profile1scratchIds.push(profile1.scratches[i].id)
        for (j=0; j<profile2.scratches.length; j++){
            // profile2scratchIds.push(profile2.scratches[j].id)
            if(profile2.scratches[j].id == id){
                matches += 1
            }
        }
    }
    console.log(profile1scratchIds)
    console.log(profile2scratchIds)
    console.log(matches)
}

findScratchMatchesBetweenProfiles(profiles[0], profiles[5])

//DISPLAY FUNCTIONS//

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
    console.log(element)
}

function showScratch(scratchObj){
    var headerSource = document.getElementById('scratchHeader')
    headerSource.innerHTML = scratchObj.header;
    var descSource = document.getElementById('scratchDesc')
    descSource.innerHTML = scratchObj.desc;
    return scratchObj
}


function showScratchesByType(scratch){
    var group = findScratchMatchByType(scratches, scratch.type);
    showScratches(group, 'relatedScratchesType')
}


function showScratchesBySubType(scratch){
    var group = findScratchMatchBySubtype(scratches, scratch.subType);
    showScratches(group, 'relatedScratchesSubtype')
}

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


function showSlelectSubTypes(){
    var element = document.getElementById("subTypeSelect")
    // alert(element)
    for (i=0; i< scratchSubTypes.length; i++){
        var option = document.createElement('option')
        option.innerHTML = scratchSubTypes[i]
        element.appendChild(option);
    }
}

function displayFullName(profile, targetElement){
    // alert(profile.id);
    var fullName = document.getElementById(targetElement);
    fullName.innerHTML = profile.firstName + " " + profile.lastName;
    
}

function fillCarousellPicFromProfile(profile){
    var car1 = document.getElementById('carouselImg1');
    car1.src = profile.photos[0]
    var car2 = document.getElementById('carouselImg2');
    car2.src = profile.photos[1]
    var car3 = document.getElementById('carouselImg3');
    car3.src = profile.photos[2]
}

function fillCarousellPicFromProfileList(profileList, targetElement){
    var targetElement = document.getElementById(targetElement);
    for(i = 0; i < profileList.length; i++){
        let div = document.createElement('div');
        div.setAttribute('class','carousel-item')
        let a = document.createElement('a')
        a.setAttribute('href','http://localhost:3000/HTML/profile.html')
        div.appendChild(a)
        let img = document.createElement('img');
        img.setAttribute('id',i)
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



function fillPageContent(scratchObj){
    var currentScratch = showScratch(scratchObj);
    var id = currentScratch.id;
    // alert(id);
    var group = showProfilesWithScratch(id);
    linkToProfile(group);
    showButtonNums(scratchObj)
    showScratchStats(scratchObj)
}



//GENERAL FUNCTIONS


function getVariablesFromInput(id){
    // alert(id);
    var inputValue = document.getElementById(id).value;
    // alert(inputValue);
    return inputValue;
}

function GetNum(str) {
    var num = str.replace(/\D/g,'');
    return(num);
}

function fillInfo(source, info){
    document.getElementById(source).innerHTML = info
}

//LINKS FUNCTIONS//

function linkToProfile(list){
    for (i = 0; i<list.length; i++){
        // alert('profile'+i)
        document.getElementById(list[i].id).onclick = function(){
            var id  = $(this).attr("id")
            // alert(id);
            var selectedProfile = findProfilesByID(list, id);
            localStorage.setItem('selectedProfile',JSON.stringify(selectedProfile));
            // console.log(profile);
        }
    }
}


function linkToScratch(list){
    // alert(list.length)
    for (i = 0; i<list.length; i++){
        
        document.getElementById('sc'+ list[i].id).onclick = function(){
            var id  = $(this).attr("id");
            let selectedScratch = findScratchByHtmlID(scratches,id)
            // alert(selectedScratch.id)
            // console.log(scratch);
            localStorage.setItem('selectedScratch',JSON.stringify(selectedScratch));
            // alert(scratch.id);
            return selectedScratch
        }
    }
}



if(window.location.href === "http://localhost:3000/index.html") {
    // alert('http://localhost:3000/index.html')
    // showProfiles(profiles, "profiles");

    
    fillCarousellPicFromProfileList(profiles, 'carousel-inner')
    
    showScratches(uniqueScratches, "scratches");

    linkToProfile(profiles);
    

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


    
    
    

}

if(window.location.href === "http://localhost:3000/HTML/scratches.html") {
    sharedScratches
    var sharedScratches = JSON.parse(localStorage.getItem('sharedScratches'))
    var selectedScratch = JSON.parse(localStorage.getItem('selectedScratch'))
    var profiles = JSON.parse(localStorage.getItem('profiles'))
    // alert(selectedScratch.id);
    
    
    showSlelectTypes();

    showSlelectSubTypes();

    fillPageContent(selectedScratch)

    
    
    scratchButtons()

    

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
    
    

}


if(window.location.href === "http://localhost:3000/HTML/profile.html") {

    var profiles = JSON.parse(localStorage.getItem('profiles'))
    var selectedProfile = JSON.parse(localStorage.getItem('selectedProfile'));
    console.log(selectedProfile);
    displayFullName(selectedProfile, "fullName");
    let scratchList = selectedProfile.scratches;
    showScratches(scratchList, 'scratchesProfile');
    linkToScratch(scratchList);
    fillCarousellPicFromProfile(selectedProfile);
    let relatedProfiles = [];
    // console.log(profiles)
    // for (i = 0; i < scratchList.length; i++){
    //     // alert('here')
    //     console.log(i);
    //     console.log(scratchList[i].id)
        // var group = findProfilesWithScratchID(scratchList[i].id, profiles);
    //     console.log(group);
    //     // alert('here');
    //     // relatedProfiles.push(group);
        // }
    //     console.log(relatedProfiles);   
    // 
    
}


















// document.getElementById('findScratchesButton').onclick = function(){
    // var type = document.getElementById('typeSelect').value
    // var subType = document.getElementById('subTypeSelect').value
    // var matchesType = findScratchMatchByType(uniqueScratches, type)
    // var matchesSubType = findScratchMatchBySubtype(matchesType, subType)
    // showScratches(matchesSubType, 'foundScratches')
// }



})
