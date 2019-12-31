  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB1Tr-Q4zm49u9axm3Bbvv0fXMprc3CqP0",
    authDomain: "getinvolvedform.firebaseapp.com",
    databaseURL: "https://getinvolvedform.firebaseio.com",
    projectId: "getinvolvedform",
    storageBucket: "getinvolvedform.appspot.com",
    messagingSenderId: "612695406748",
    appId: "1:612695406748:web:8d8a2e1b7b66a91f2a5559",
    measurementId: "G-C80BL9FZLB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//reference messages collection
function writeData(){
    var messagesRef = firebase.database().ref('messages').set({
        name: document.getElementById('fname').value,
        age: document.getElementById('age').value
    });
} 


// //listen for form submit
// document.getElementById('contactform').addEventListener('submit', submitForm);

// function submitForm(e){
//     e.preventDefault();
//     //get values
//     var fname = getInputVal('fname')
//     var lname = getInputVal('lname')
//     var email = getInputVal('email')
//     var number = getInputVal('number')
//     var age = getInputVal('age')
//     var profession = getInputVal('profession')

//     saveMessage(fname,lname,email,number,age,profession)
// }

// //function to get form values
// function getInputVal(id){
//     document.getElementById(id).value
// }

// //save message to firebase
// function saveMessage(fname,lname,email,number,age,profession){
//     var newMessageRef = messagesRef.push();
//     newMessageRef.set({
//         fname: fname,
//         lname: lname,
//         email: email,
//         number: number,
//         age: age,
//         profession: profession
//     })
// }