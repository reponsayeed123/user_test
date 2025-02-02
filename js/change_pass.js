const firebaseConfig = {
    apiKey: "AIzaSyBYHfeYu_nB8tJLZKkjtC017kepwtnnkSg",
    authDomain: "loan-5d609.firebaseapp.com",
    databaseURL: "https://loan-5d609-default-rtdb.firebaseio.com",
    projectId: "loan-5d609",
    storageBucket: "loan-5d609.firebasestorage.app",
    messagingSenderId: "710671627106",
    appId: "1:710671627106:web:fec517824971c9a708723b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const signUp = document.getElementById('pchan');
var userid = "";

const auth = firebase.auth();

var conuntry= '';
var email= '';
var passw= '';
var whatnumber= '';





var firstname= '';
var lastname= '';
var address= '';

var emai= '';



firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    //  window.alert("hi"+" "+user.uid);
       userid=user.uid;
    console.log(userid);
    var ref5 = firebase.database().ref('user-account').child(userid);

    var ref6 = firebase.database().ref('user-profile').child(userid);


    ref5.on("value", function (snapshot4) {
      if (snapshot4.exists()) {
  
  
  
          conuntry = snapshot4.val().conuntry;
          email = snapshot4.val().email;
          whatnumber = snapshot4.val().whatnumber;

          
    
  

  
  
      }
  
  
  
  
  
  
  
  
  
  
    });
    } else {
      // No user is signed in.
      /*window.location.replace("http://127.0.0.1:5500/login.html");*/
      window.location.href = "login.html";

    }




    ref6.on("value", function (snapshot4) {
      if (snapshot4.exists()) {



          firstname = snapshot4.val().firstname;
          lastname = snapshot4.val().lastname;
          emai = snapshot4.val().email;
          balance = snapshot4.val().balance;
         

      }

      const formattedNumber = parseInt(balance).toLocaleString();

      $('#uname').html(firstname+" " +lastname);
      $('#em').html(emai);
      $('#abalance').html("৳"+formattedNumber+".00");

    $('#flname').html(firstname.charAt(0).toUpperCase()+lastname.charAt(0).toUpperCase());

  });
  });

 









signUp.addEventListener('click', (event) => {
    // event.preventDefault();

   // const user = firebase.auth().currentUser;
    const newPassword = document.getElementById('password').value;

    const user = auth.currentUser;


    user.updatePassword(newPassword).then(() => {
        alert('Update SuccessFul');

        var database = firebase.database();

        database.ref('user').child(userid).child('account').set({
            email: email,
            passw:newPassword,
            whatnumber:whatnumber,
            conuntry:conuntry
           
        }).then(() =>{
          window.location.href = "dashboard.html";
      });
        // Update successful.

       



    }).catch((error) => {

        alert(error);
        // An error occurred
        // ...
    });






});





const signUp5 = document.getElementById('log');

signUp5.addEventListener('click', (event) => {
    // event.preventDefault();



    firebase.auth().signOut()
        .then(() => {
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error('Error Signing out:', error);
        })






});



const signUp2 = document.getElementById('log2');

signUp2.addEventListener('click', (event) => {
    // event.preventDefault();



    firebase.auth().signOut()
        .then(() => {
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error('Error Signing out:', error);
        })






});