



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

signUp.addEventListener('click', (event) => {
    // event.preventDefault();
    const email = document.getElementById('username').value;
 
    
    const password = document.getElementById('password').value;

    //const auth=getAuth();


    auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {

        
      console.log('Login successful');
      const user=userCredential.user;
    //  localStorage.setItem('loggedInUserId', user.uid);
      window.location.href='dashboard.html';
    
    })
    .catch(error => {

      alert('Incorrect Email or Password');

     
    });




});