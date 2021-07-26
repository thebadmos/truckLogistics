const firebaseConfig = {
  apiKey: "AIzaSyATDmlGpheS_hsJPPS35O4501TRuyK7chg",
  authDomain: "truckka-f9727.firebaseapp.com",
  databaseURL: "https://truckka-f9727-default-rtdb.firebaseio.com",
  projectId: "truckka-f9727",
  storageBucket: "truckka-f9727.appspot.com",
  messagingSenderId: "235363173685",
  appId: "1:235363173685:web:68be2caaf6a8f7f184787c",
  measurementId: "G-1RY41QHGQV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//Reference messages collection
var messagesRef = firebase.database().ref('messages');
 

//listen for form submit
document.getElementById('bookingForm'),addEventListener('submit',submitForm);
//submit form
function submitForm(e){
    e.preventDefault();
  
    //Get values
     var name = getInputVal('name');
     var phone = getInputVal('phone');
     var email = getInputVal('email');
     var comment = getInputVal('comment');
    //  var investTrucks = getInputVal('investTrucks');
    //  var dedicateTrucks = getInputVal('dedicateTrucks');
    //  var partnerInvest = getInputVal('partnerInvest');
      
     //save message
     saveMessage(name,phone,email,comment);

     //show alert
      document.querySelector('.alert').style.display = 'block';
      
      //Hide alert after 3 seconds
      setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
      },3000);

       //clear form
      document.getElementById('bookingForm').reset();
    }

  

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

 //save message to firebase
 function saveMessage(name,phone,email,comment){
     var newMessageRef = messagesRef.push();
     newMessageRef.set({
         name: name,
         phone: phone,
         email: email,
         comment: comment,
       
});
 }