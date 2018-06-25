$(document).ready(() => {

alert("main file reloaded")





var profile = {
    firstName: "Gadi",
    lastName: "Gross",
    pw: "12345",
    userName: "",
    birthDate: new Date,
    photos: [],
    scratches: []
}

function Profile(fName, lName, userName, email, pw){
    this.firstName = fName;
    this.lastName = lName;
    this.userName = userName;
    this.email = email;
    this.pw = pw;
    this.birthDate = Date.now;
    this.photos = [];
    this.scratches = []
            
    }

var scratch = {
    type: "",
    subType: "",
    // label: "",
    header: "",
    desc: "",
    author: profile.userName,
    // level: 0,
    // likes: 0,
    // comments: [],

}

function Scratch(type, subType, label, header, desc, level, author){
    this.type = type;
    this.subType = subType;
    // this.label = label,
    this.header = header,
    this.desc = desc,
    this.author = author
} 

var scratchTypes = ["גוף", "נפש", "הרגלים מגונים"]
var scratchSubTypes = ["אוהב/ת", "שונא/ת", "מחרפן אותי", "חולה על זה ברמות"]
var labels = ""
var profiles = [
    {firstName: "Gadi",
    lastName: "Gross",
    pw: "12345",
    userName: "gads",
    email: "gadi@gmail.com",
    birthDate: new Date,
    photos: [],
    scratches: [
        // { type: "גוף", subType: "אוהב/ת", header: "אוי הרגליים", desc: "לא סובל שנוגעים לי ברגליים", author: profiles[0].firstName},
        // { type: "הרגלים מגונים", subType: "מחרפן אותי", header: "אמאלה הריח", desc: "רגישות קשה לריחות", author: profiles[2].firstName}
      ]
    },
    
    {firstName: "Nadav",
    lastName: "Almagor",
    pw: "123",
    userName: "nadi",
    email: "nadav@gmail.com",
    birthDate: new Date,
    photos: [],
    scratches: [
        // { type: "נפש", subType: "שונא/ת", header: "קיצי בגב", desc: "אני הופך לכלבלב", author: profiles[1].firstName},
        // { type: "הרגלים מגונים", subType: "מחרפן אותי", header: "אמאלה הריח", desc: "רגישות קשה לריחות", author: profiles[2].firstName}
        
    ]
    },
   
    {firstName: "lior",
    lastName: "sela",
    pw: "zaq",
    userName: "lili",
    email: "lior@gmail.com",
    birthDate: new Date,
    photos: [],
    scratches: [
        // { type: "גוף", subType: "אוהב/ת", header: "אוי הרגליים", desc: "לא סובל שנוגעים לי ברגליים", author: profiles[0].firstName},
        // {type: "נפש", subType: "שונא/ת", header: "קיצי בגב", desc: "אני הופך לכלבלב", author: profiles[1].firstName}
        ]
    
    },

]


var scratches = [
    { type: "גוף", subType: "אוהב/ת", header: "אוי הרגליים", desc: "לא סובל שנוגעים לי ברגליים", author: profiles[0].firstName},
    { type: "נפש", subType: "שונא/ת", header: "קיצי בגב", desc: "אני הופך לכלבלב", author: profiles[1].firstName},
    { type: "הרגלים מגונים", subType: "מחרפן אותי", header: "אמאלה הריח", desc: "רגישות קשה לריחות", author: profiles[2].firstName},
    
]

function showProfiles(){
    for (i = 0; i < profiles.length; i++){
        var details = [profiles[i].firstName, profiles[i].lastName, profiles[i].userName, profiles[i].email, profiles[i].birthDate]
        var div = document.createElement('div')
        div.innerHTML = details 
        var element = document.getElementById("profiles");
        element.appendChild(div);
    }
}
showProfiles();

function showScratches(){
    for (i = 0; i < scratches.length; i++){
        var details = [scratches[i].type, scratches[i].subType, scratches[i].header, scratches[i].desc, scratches[i].author]
        var div = document.createElement('div')
        div.innerHTML = details 
        var element = document.getElementById("scratches");
        element.appendChild(div);
    }
}
showScratches();



function getVariablesFromInput(id){
    // alert(id);
    var inputValue = document.getElementById(id).value;
    // alert(inputValue);
    return inputValue;
}
// getVariablesFromInput('inputfirstName')


document.getElementById('signUpButton').onclick = function(e){
    
    alert("here");
    var first = getVariablesFromInput('inputfirstName');
    var last = getVariablesFromInput('inputslastName');
    var userName = getVariablesFromInput('inputUserName');
    var email = getVariablesFromInput('inputEmail');
    var pw = getVariablesFromInput('inputPassword3');
    var newProfile = new Profile(first, last, userName, email, pw);
    alert("here2");
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
    alert(profile);
    alert(profile.firstName);
    localStorage.setItem('profile',JSON.stringify(profile));
   
}


})
