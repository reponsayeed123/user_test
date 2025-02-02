
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

var firstname= '';
var lastname= '';
var address= '';
var whatnumber= '';
var emai= '';
var userid ='';
var balance = '';
var total_deposit = 0 ;
var pen_deposit = 0 ;
var rej_deposit = 0 ;
var act_deposit = 0 ;


var total_with = 0 ;
var pen_with = 0 ;
var rej_with = 0 ;
var act_with = 0 ;



var total_loan = 0 ;
var pen_loan = 0 ;
var rej_loan = 0 ;
var act_loan = 0 ;

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        //  window.alert("hi"+" "+user.uid);
        userid = user.uid;
        console.log(userid);
        var ref5 = firebase.database().ref('user-profile').child(userid);

        var total_depo = firebase.database().ref().child("deposit2").child(userid);
        var total_depo_pen = firebase.database().ref().child("deposit2").child(userid).orderByChild('status').equalTo('Pending');
        var total_depo_rej = firebase.database().ref().child("deposit2").child(userid).orderByChild('status').equalTo('Reject');
        var total_depo_act = firebase.database().ref().child("deposit2").child(userid).orderByChild('status').equalTo('Active');




        var total_with_ = firebase.database().ref().child("withdraw2").child(userid);
        var total_with_pen = firebase.database().ref().child("withdraw2").child(userid).orderByChild('status').equalTo('Pending');
        var total_with_rej = firebase.database().ref().child("withdraw2").child(userid).orderByChild('status').equalTo('Reject');
        var total_with_act = firebase.database().ref().child("withdraw2").child(userid).orderByChild('status').equalTo('Active');





        var total_loan_ = firebase.database().ref().child("loan2").child(userid);
        var total_loan_pen = firebase.database().ref().child("loan2").child(userid).orderByChild('status').equalTo('Pending');
        var total_loan_rej = firebase.database().ref().child("loan2").child(userid).orderByChild('status').equalTo('Reject');
        var total_loan_act = firebase.database().ref().child("loan2").child(userid).orderByChild('status').equalTo('Active');



        total_depo.once("value").then(function (snapshot) {

    if (snapshot.exists()) {
  
      var content = '';
  
  
  
  
  
  
      snapshot.forEach(function (data) {
  
  
  
        var val = data.val();

        total_deposit = parseInt(total_deposit) +  parseInt(val.amount) ;
  
       
  
  
      });
  
  
  console.log("total deposit : "+total_deposit)
  
  $('#sub_deposit').html(total_deposit.toLocaleString()+".00");
  
    }
    else{
        $('#sub_deposit').html("0.00");
    }
  
  
  });


  total_depo_act.once("value").then(function (snapshot) {

    if (snapshot.exists()) {
  
      var content = '';
  
  
  
  
  
  
      snapshot.forEach(function (data) {
  
  
  
        var val = data.val();

        act_deposit = parseInt(act_deposit) +  parseInt(val.amount) ;
  
       
  
  
      });
  
  
  console.log("total deposit : "+total_deposit)
  
  $('#s_deposit').html(act_deposit.toLocaleString()+".00 BDT");
  
    }
    else{
        $('#s_deposit').html("0.00");
    }
  
  
  });

  
  total_depo_pen.once("value").then(function (snapshot) {

    if (snapshot.exists()) {
  
      var content = '';
  
  
  
  
  
  
      snapshot.forEach(function (data) {
  
  
  
        var val = data.val();

        pen_deposit = parseInt(pen_deposit) +  parseInt(val.amount) ;
  
       
  
  
      });
  
  

  
  $('#pen_deposit').html(pen_deposit.toLocaleString()+".00");
  
    }

    else{
        $('#pen_deposit').html("0.00");
    }
  
  
  });
      
  total_depo_rej.once("value").then(function (snapshot) {

    if (snapshot.exists()) {
  
      var content = '';
  
  
  
  
  
  
      snapshot.forEach(function (data) {
  
  
  
        var val = data.val();

        rej_deposit = parseInt(rej_deposit) +  parseInt(val.amount) ;
  
       
  
  
      });
  
  

  
  $('#rej_deposit').html(rej_deposit.toLocaleString()+".00");
  
    }
    else{
        $('#rej_deposit').html("0.00");
    }
  
  
  });





  total_with_.once("value").then(function (snapshot) {

    if (snapshot.exists()) {
  
      var content = '';
  
  
  
  
  
  
      snapshot.forEach(function (data) {
  
  
  
        var val = data.val();

        total_with = parseInt(total_with) +  parseInt(val.amount) ;
  
       
  
  
      });
  
  
  console.log("total deposit : "+total_deposit)
  
  $('#sub_with').html(total_with.toLocaleString()+".00");
  
    }
    else{
        $('#sub_with').html("0.00");
    }
  
  
  });


  total_with_pen.once("value").then(function (snapshot) {

    if (snapshot.exists()) {
  
      var content = '';
  
  
  
  
  
  
      snapshot.forEach(function (data) {
  
  
  
        var val = data.val();

        pen_with = parseInt(pen_with) +  parseInt(val.amount) ;
  
       
  
  
      });
  
  
  console.log("total deposit : "+total_deposit)
  
  $('#pen_with').html(pen_with.toLocaleString()+".00");
  
    }
    else{
        $('#pen_with').html("0.00");
    }
  
  
  });



  total_with_rej.once("value").then(function (snapshot) {

    if (snapshot.exists()) {
  
      var content = '';
  
  
  
  
  
  
      snapshot.forEach(function (data) {
  
  
  
        var val = data.val();

        rej_with = parseInt(rej_with) +  parseInt(val.amount) ;
  
       
  
  
      });
  
  
  console.log("total deposit : "+total_deposit)
  
  $('#rej_with').html(rej_with.toLocaleString()+".00");
  
    }
    else{
        $('#rej_with').html("0.00");
    }
  
  
  });



  total_with_act.once("value").then(function (snapshot) {

    if (snapshot.exists()) {
  
      var content = '';
  
  
  
  
  
  
      snapshot.forEach(function (data) {
  
  
  
        var val = data.val();

        act_with = parseInt(act_with) +  parseInt(val.amount) ;
  
       
  
  
      });
  
  
  console.log("total deposit : "+total_deposit)
  
  $('#suc_with').html(act_with.toLocaleString()+".00 BDT");
  
    }
    else{
        $('#suc_with').html("0.00 BDT");
    }
  
  
  });





  
  total_loan_.once("value").then(function (snapshot) {

    if (snapshot.exists()) {
  
      var content = '';
  
  
  
  
  
  
      snapshot.forEach(function (data) {
  
  
  
        var val = data.val();

        total_loan = parseInt(total_loan) +  parseInt(val.amount) ;
  
       
  
  
      });
  
  
  console.log("total deposit : "+total_deposit)
  
  $('#sub_loan').html(total_loan.toLocaleString()+".00");
  
    }
    else{
        $('#sub_loan').html("0.00");
    }
  
  
  });

  total_loan_pen.once("value").then(function (snapshot) {

    if (snapshot.exists()) {
  
      var content = '';
  
  
  
  
  
  
      snapshot.forEach(function (data) {
  
  
  
        var val = data.val();

        pen_loan = parseInt(pen_loan) +  parseInt(val.amount) ;
  
       
  
  
      });
  
  
  console.log("total deposit : "+total_deposit)
  
  $('#pen_loan').html(pen_loan.toLocaleString()+".00");
  
    }
    else{
        $('#pen_loan').html("0.00");
    }
  
  
  });


  total_loan_rej.once("value").then(function (snapshot) {

    if (snapshot.exists()) {
  
      var content = '';
  
  
  
  
  
  
      snapshot.forEach(function (data) {
  
  
  
        var val = data.val();

        rej_loan = parseInt(rej_loan) +  parseInt(val.amount) ;
  
       
  
  
      });
  
  
  console.log("total deposit : "+total_deposit)
  
  $('#rej_loan').html(rej_loan.toLocaleString()+".00");
  
    }
    else{
        $('#rej_loan').html("0.00");
    }
  
  
  });


  total_loan_act.once("value").then(function (snapshot) {

    if (snapshot.exists()) {
  
      var content = '';
  
  
  
  
  
  
      snapshot.forEach(function (data) {
  
  
  
        var val = data.val();

        act_loan = parseInt(act_loan) +  parseInt(val.amount) ;
  
       
  
  
      });
  
  
  console.log("total deposit : "+total_deposit)
  
  $('#tot_loan').html(act_loan.toLocaleString()+".00 BDT");
  
    }
    else{
        $('#tot_loan').html("0.00 BDT");
    }
  
  
  });






        ref5.on("value", function (snapshot4) {
            if (snapshot4.exists()) {



                firstname = snapshot4.val().firstname;
                lastname = snapshot4.val().lastname;
                emai = snapshot4.val().email;
                balance = snapshot4.val().balance;
               

            }

            const formattedNumber = parseInt(balance).toLocaleString();

            $('#uname').html(firstname+" " +lastname);
            $('#em').html(emai);
            $('#abalance').html("৳"+formattedNumber+'.00');

          $('#flname').html(firstname.charAt(0).toUpperCase()+lastname.charAt(0).toUpperCase());

        });




        







    } else {
        // No user is signed in.
        /*window.location.replace("http://127.0.0.1:5500/login.html");*/
        window.location.href = "index.html";

    }
});

const signUp = document.getElementById('log');

signUp.addEventListener('click', (event) => {
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