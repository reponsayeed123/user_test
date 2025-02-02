



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




const auth = firebase.auth();
const db = firebase.firestore();
const signUp = document.getElementById('recaptcha');

var mcode ="880";









signUp.addEventListener('click', (event) => {
    // event.preventDefault();
    const email = document.getElementById('rEmail').value;
    const username = document.getElementById('username').value;
   
    
    const password = document.getElementById('pass').value;
    console.log("+"+mcode);


    var mobile = "";

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {

          

            var database = firebase.database();

            database.ref('user-account').child(userCredential.user.uid).set({
                email: email,
                passw:password,
                username:username,
              
                'pimage':"no image"
               
            }).then(() =>{
                localStorage.setItem('email',email);
                localStorage.setItem('username',username);
                window.location.href = "user_data.html";
            });
            //alert('Registration successful');
            //console.log(userCredential.user.uid);

          //  window.open('/user_data.html')     

         //  location.href = "/user_data.html";

          //  window.location.href = "/user_data.html";
        })
        .catch(error => {
            alert(error.message);



        });




});