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
var userid = '';
var username = '';

var firstname = '';
var lastname = '';
var address = '';

var emai = '';

var act_deposit = '';
var transaction_name = '';
var transaction_number = '';
var acc_holder = '';
var branch_name = '';


const sub = document.getElementById('recaptcha');
const bak = document.getElementById('back');
const sub2 = document.getElementById('recaptcha33');

const fileInput = document.getElementById('depfile');

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        //  window.alert("hi"+" "+user.uid);
        var today = new Date();
        userid = user.uid;
        console.log(userid);
        console.log('time' + today.getMinutes());

        var ref5 = firebase.database().ref('user-account').child(userid);

        ref5.on("value", function (snapshot4) {
            if (snapshot4.exists()) {



                username = snapshot4.val().username;


            }



        });

        var ref6 = firebase.database().ref('user-profile').child(userid);
        ref6.on("value", function (snapshot4) {
            if (snapshot4.exists()) {



                firstname = snapshot4.val().firstname;
                lastname = snapshot4.val().lastname;
                emai = snapshot4.val().email;
                balance = snapshot4.val().balance;


            }

            const formattedNumber = parseInt(balance).toLocaleString();

            $('#uname').html(firstname + " " + lastname);
            $('#em').html(emai);
            $('#abalance').html("৳" + formattedNumber + ".00");

            $('#flname').html(firstname.charAt(0).toUpperCase() + lastname.charAt(0).toUpperCase());

        });


    }
});


var select = document.getElementById("course");







var userDataRef2 = firebase.database().ref("deposit_list");


userDataRef2.once("value").then(function (snapshot) {

    if (snapshot.exists()) {

        var content = '';



        snapshot.forEach(function (data) {



            select.innerHTML += "<option>" + data.val().transaction_name + "</option>";

            // console.log(data.val().transaction_name);

            transaction_name = data.val().transaction_name;

        });

        //  console.log(select);




    }


});









var strUser = '';








sub.addEventListener('click', (event) => {




    var select = document.getElementById("course").value;
    var amnt = document.getElementById("amnt33").value;


    if (select == "") {
        alert('Please Select Gateway any one !!!')
        document.getElementById("frm").style.display = "block"
        document.getElementById("frm2").style.display = "none"
    }

    else if (amnt == "") {
        alert('Please Fill amount !!!')
        document.getElementById("frm").style.display = "block"
        document.getElementById("frm2").style.display = "none"
    }

    else {

        document.getElementById("frm").style.display = "none"
        document.getElementById("frm2").style.display = "block"

        var ref5 = firebase.database().ref().child("deposit_list").orderByChild('transaction_name').equalTo(select);


        ref5.once("value").then(function (snapshot) {

            if (snapshot.exists()) {

                var content = '';






                snapshot.forEach(function (data) {



                    var val = data.val();

                    transaction_number = val.transaction_number;
                    acc_holder = val.acc_holder;
                    branch_name = val.branch_name;




                });


                console.log("total deposit : " + acc_holder)


                $('#acc_name').val(acc_holder);
                $('#br_name').val(branch_name);
                $('#tr_name').val(transaction_number);
            }



        });

    }





    /*
    
        var today = new Date();
        var d = String(today.getDate() - 1).padStart(2, '0');
        var m = String(today.getMonth() + 1).padStart(2, '0');
        var y = today.getFullYear();
    
        var amnt = document.getElementById("amnt").value;
    
    
        if (strUser == '' || amnt == '') {
            alert("please fill data!!!")
        }
        else if (amnt <= 1999) {
            alert("please follow the limit!!!")
        }
        else {
            var database = firebase.database();
    
            database.ref('deposit2').child(userid).push().set({
    
                "application_date": d + "-" + m + "-" + y,
                'current_time': d + "-" + m + "-" + y + '-' + today.getHours() + '-' + today.getMinutes(),
    
                'status': 'Pending',
    
                "uid": userid,
                'username': username,
                'amount': amnt,
                "method": strUser
    
    
    
    
            })
    
            database.ref('deposit').push().set({
    
                "application_date": d + "-" + m + "-" + y,
                'current_time': d + "-" + m + "-" + y + '-' + today.getHours() + '-' + today.getMinutes(),
    
                'status': 'Pending',
    
                "uid": userid,
                'username': username,
                'amount': amnt,
                "method": strUser
    
    
    
    
            }).then(() => {
                window.location.href = "/deposit-history.html";
            });
            //alert(userid);
        }
    
    */


});




bak.addEventListener('click', (event) => {







    document.getElementById("frm").style.display = "block"
    document.getElementById("frm2").style.display = "none"

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



sub2.addEventListener('click', (event) => {


    if (document.getElementById("depfile").files.length == 0) {
        alert("Please insert screen short")
    }
    else {
        const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dbcsyo0wi/image/upload';
        const CLOUDINARY_UPLOAD_PRESET = 'preset-for-file-upload3';

        
        const fileInput = document.getElementById('depfile');
        const file = fileInput.files[0];

        const formData = new FormData();

        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        var fimage='';

        axios({
            url: CLOUDINARY_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
    
            },
            data: formData}).then(function(res){
         console.log(res.data.secure_url);
    
         var select = document.getElementById("course").value;
         var amnt = document.getElementById("amnt33").value;
    
    
    
         var today = new Date();
         var d = String(today.getDate()).padStart(2, '0');
         var m = String(today.getMonth() + 1).padStart(2, '0');
         var y = today.getFullYear();
     
         
     
         var database = firebase.database();
     
         database.ref('deposit2').child(userid).push().set({
 
             "application_date": d + "-" + m + "-" + y,
             'current_time': d + "-" + m + "-" + y + '-' + today.getHours() + '-' + today.getMinutes(),
 
             'status': 'Pending',
             
             "uid": userid,
             'username': username,
             'amount': amnt,
           
             'transaction_name' : select,
             'transaction_number' : transaction_number,
             'acc_holder' : acc_holder,
             'branch_name' : branch_name,
         
 
 
 
 
         })
 
         database.ref('deposit').push().set({
 
             "application_date": d + "-" + m + "-" + y,
             'current_time': d + "-" + m + "-" + y + '-' + today.getHours() + '-' + today.getMinutes(),
 
             'status': 'Pending',
 
             "uid": userid,
             'username': username,
             'amount': amnt,
           
             'transaction_name' : select,
             'transaction_number' : transaction_number,
             'acc_holder' : acc_holder,
             'branch_name' : branch_name,
             'simage':res.data.secure_url,
 
 
 
 
         }).then(() => {
             window.location.href = "deposit-history.html";
         });
         //alert(userid);
    
        
    
    
    
    
    
            }).catch(function(err){
                console.error(err);
            })
    }

})