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
var userid = "";

var email = localStorage.getItem('email');
var username = localStorage.getItem('username');

console.log(email)


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    //  window.alert("hi"+" "+user.uid);
       userid=user.uid;
    console.log(userid)
    } else {
      // No user is signed in.
      /*window.location.replace("http://127.0.0.1:5500/login.html");*/
      window.location.href = "login.html";

    }
  });


  const signUp = document.getElementById('recaptcha');

signUp.addEventListener('click', (event) => {

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const address = document.getElementById('address').value;
    const mobile = document.getElementById('mobile').value;
    
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    
    const city = document.getElementById('city').value;

    var today = new Date();
    var d = String(today.getDate()).padStart(2, '0');
    var m = String(today.getMonth() + 1).padStart(2, '0');
    var y = today.getFullYear();
    
    console.log(d + "-" + m + "-" + y);
    
      

    var database = firebase.database();

            database.ref('user-profile').child(userid).set({
                firstname: firstname,
                lastname:lastname,
                address:address,
                state:state,
                zip:zip,
                'pimage':"no image",
                'mobile':mobile,
                city:city,
                email: email,
                "joindate":d + "-" + m + "-" + y,
                username:username,
                "balance":0,
                'status':'Active'
               
            }).then(() =>{
                window.location.href = "dashboard.html";
            });
   

});