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
var userid = "a";
var a =""

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    //  window.alert("hi"+" "+user.uid);
       userid=user.uid;
    console.log(userid)
    } else {

      console.log(userid)
      // No user is signed in.
      /*window.location.replace("http://127.0.0.1:5500/login.html");*/
      //window.location.href = "login.html";

    }
  });


  const signUp = document.getElementById('recaptcha');

signUp.addEventListener('click', (event) => {
  
if(userid == "a"){
  window.location.href = "registrtation.html";
}
else{
  window.location.href = "dashboard.html";
}
    
});
