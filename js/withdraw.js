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

var address2 = "";


var balance2 = "";
var city2 = "";

var email2 = "";

var firstname2 = "";

var joindate2 = "";

var lastname2 = "";

var mobile2 = "";

var pimage2 = "";

var state2 = "";


var username2 = "";

var zip2 = "";
var rate2 = "";
var ke = '';


var firstname= '';
var lastname= '';
var address= '';

var emai= '';


const sub = document.getElementById('recaptcha');

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        //  window.alert("hi"+" "+user.uid);
        var today = new Date();
        userid = user.uid;
        console.log(userid);
        console.log('time' + today.getMinutes());



        var user_profile = firebase.database().ref().child("user-profile").child(userid);



        user_profile.on("value", function (snapshot4) {
            if (snapshot4.exists()) {




                address2 = snapshot4.val().address;
                balance2 = snapshot4.val().balance;

                city2 = snapshot4.val().city;
                email2 = snapshot4.val().email;
                firstname2 = snapshot4.val().firstname;
                joindate2 = snapshot4.val().joindate;
                lastname2 = snapshot4.val().lastname;
                mobile2 = snapshot4.val().mobile;
                pimage2 = snapshot4.val().pimage;
                state2 = snapshot4.val().state;
                status2 = snapshot4.val().status;
                username2 = snapshot4.val().username;

                zip2 = snapshot4.val().zip;



            }


            console.log(email2);





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
      
            $('#uname').html(firstname+" " +lastname);
            $('#em').html(emai);
            $('#abalance').html("৳"+formattedNumber+".00");
      
          $('#flname').html(firstname.charAt(0).toUpperCase()+lastname.charAt(0).toUpperCase());
      
        });




    }
});

var strUser = '';

function selectNum() {
    strUser = document.getElementById("method_code").value;
    console.log(strUser);
}

sub.addEventListener('click', (event) => {


    var didConfirm = confirm("Are you sure You want to Withdraw ??");

    if (didConfirm == true) {
      

        var amnt = document.getElementById("amnt").value;

        const profit = parseInt(balance2) + 1;
    
        var today = new Date();
        var d = String(today.getDate()).padStart(2, '0');
        var m = String(today.getMonth() + 1).padStart(2, '0');
        var y = today.getFullYear();
    
        console.log(profit)
    
        if (strUser == '' || amnt == '') {
            alert("please fill data!!!")
        }
        else if (amnt <= 999) {
            alert("please follow the limit!!!")
        }
    
        else if (amnt >= profit) {
            alert("please check your balance !!")
        }
    
        else {
            var database = firebase.database();
    
    
            database.ref('user-profile').child(userid).set({
    
    
    
                'address': address2,
    
                "balance": parseInt(balance2) - parseInt(amnt),
                'city': city2,
                'email': email2,
                'firstname': firstname2,
                "joindate": joindate2,
                'lastname': lastname2,
                "mobile": mobile2,
                'pimage': pimage2,
                'state': state2,
                'status': status2,
                'username': username2,
                'zip': zip2
    
    
            });
            database.ref('withdraw2').child(userid).push().set({
    
                "application_date": d + "-" + m + "-" + y,
                'current_time': d + "-" + m + "-" + y + '-' + today.getHours() + '-' + today.getMinutes(),
    
                'status': 'Pending',
    
                "uid": userid,
                'username': username2,
                'amount': amnt,
                "method": strUser
    
    
    
    
            });


            database.ref('transactions').child(userid).push().set({
    
                "application_date": d + "-" + m + "-" + y,
                'current_time': d + "-" + m + "-" + y + '-' + today.getHours() + '-' + today.getMinutes(),
    
                "balance": parseInt(balance2) - parseInt(amnt),
    
                "uid": userid,
                'method': 'Withdraw',
                'amount': amnt,
                
    
    
    
    
            });
    
    
            database.ref('withdraw').push().set({
    
                "application_date": d + "-" + m + "-" + y,
                'current_time': d + "-" + m + "-" + y + '-' + today.getHours() + '-' + today.getMinutes(),
    
                'status': 'Pending',
    
                "uid": userid,
                'username': username2,
                'amount': amnt,
                "method": strUser
    
    
    
    
            }).then(() => {
                window.location.href = "withdraw-history.html";
            });
    
    
        }
    


    } else {
        return false;
    }




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