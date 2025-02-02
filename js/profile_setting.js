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



//var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dbcsyo0wi/upload';
//var CLOUDINARY_UPLOAD_PRESET = 'preset-for-file-upload';

const auth = firebase.auth();

var firstname= '';
var lastname= '';
var address= '';
var whatnumber= '';
var emai= '';
var userid ='';
var mobile='';
var address= '';
var state= '';
var zip ='';
var city ='';
var uname = '';
var imgpreview = '';
var balance = '';
var joindate = "";
var sta = "";
const imgpr = document.getElementById('img-preview');





firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        //  window.alert("hi"+" "+user.uid);
        userid = user.uid;
        console.log(userid);
        var ref5 = firebase.database().ref('user-profile').child(userid);
        var ref6 = firebase.database().ref('user-account').child(userid);
        ref5.on("value", function (snapshot4) {
            if (snapshot4.exists()) {



                firstname = snapshot4.val().firstname;
                lastname = snapshot4.val().lastname;
                state = snapshot4.val().state;
                address = snapshot4.val().address;
                zip = snapshot4.val().zip;
                city = snapshot4.val().city;
                imgpreview = snapshot4.val().pimage;
                balance = snapshot4.val().balance;
                joindate = snapshot4.val().joindate;
                sta = snapshot4.val().status;
                emai = snapshot4.val().email;
                uname = snapshot4.val().username; 
                mobile = snapshot4.val().mobile;    

            }

            console.log(imgpreview);

            $('#fname').val(firstname);
            $('#lname').val(lastname);
            $('#state').val(state);
            $('#zip').val(zip);
            $('#city').val(city);
            $('#address').val(address);
            $('#ema').html(" "+emai);
            $('#uname').html(uname);
            $('#jdate').html(joindate);
            $('#mob').html("+880"+mobile);
            $('#uname4').html(uname);

            if(imgpreview == 'no image'){
                imgpr.src = "https://res.cloudinary.com/dbcsyo0wi/image/upload/v1738491333/boyohqoqf7xojvralype.png"
            }
            else
            {
                imgpr.src = imgpreview ;
            }
           
           

            const formattedNumber = parseInt(balance).toLocaleString();

          $('#flname').html(firstname.charAt(0).toUpperCase()+lastname.charAt(0).toUpperCase());

          $('#uname').html(firstname+" " +lastname);
          $('#em').html(emai);
          $('#abalance').html("৳"+formattedNumber+".00");

        });







    } else {
        // No user is signed in.
        /*window.location.replace("http://127.0.0.1:5500/login.html");*/
        window.location.href = "index.html";

    }
});

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dbcsyo0wi/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'preset-for-file-upload';

const signUp = document.getElementById('recaptcha');
signUp.addEventListener('click', (event) => {

    const fileInput = document.getElementById('imageUpload');
    const file = fileInput.files[0];




    if( document.getElementById("imageUpload").files.length == 0 ){


        const firstname = document.getElementById('fname').value;
        const lastname = document.getElementById('lname').value;
        const address = document.getElementById('address').value;
        
        const state = document.getElementById('state').value;
        const zip = document.getElementById('zip').value;
        
        const city = document.getElementById('city').value;
    
        alert('upload success');
    
         var database = firebase.database();
    
         database.ref('user-profile').child(userid).set({
             firstname: firstname,
             lastname:lastname,
             address:address,
             state:state,
             zip:zip,
             'pimage':imgpreview,
             city:city,
             email: emai,
             'mobile':mobile,
             "joindate":joindate,
             'username':uname,
              'status':sta,
             "balance":balance
            
         }).then(() =>{
             window.location.href = "profile_setting.html";
         });
    
    
      
    }
    else{
        const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

     axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',

        },
        data: formData}).then(function(res){
     console.log(res.data.secure_url);

     const firstname = document.getElementById('fname').value;
    const lastname = document.getElementById('lname').value;
    const address = document.getElementById('address').value;
    
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    
    const city = document.getElementById('city').value;

    alert('upload success');

     var database = firebase.database();

     database.ref('user-profile').child(userid).set({
         firstname: firstname,
         lastname:lastname,
         address:address,
         state:state,
         zip:zip,
         'pimage':res.data.secure_url,
         city:city,
         email: emai,
         'mobile':mobile,
         "joindate":joindate,
         'username':uname,
         'status':sta,
         "balance":balance
        
     }).then(() =>{
         window.location.href = "profile_setting.html";
     });






    





        }).catch(function(err){
            console.error(err);
        })
    }


    /*

   

        */
        })





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