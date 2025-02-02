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


var firstname= '';
var lastname= '';
var address= '';

var emai= '';


const imgpr = document.getElementById('idfront');


var transaction_name = '';
var application_date = '';


var amount= '';
var statu= '';
var acc_holder= '';

var transaction_number= '';
var branch_name= '';
var idfront= '';













const sub = document.getElementById('recaptcha');

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        //  window.alert("hi"+" "+user.uid);
        var today = new Date();
        userid = user.uid;
        console.log(userid);
        console.log('time' + today.getMinutes());

        var deposit = firebase.database().ref().child("deposit").orderByChild('uid').equalTo(userid);;

        deposit.once("value").then(function (snapshot) {

            if (snapshot.exists()) {
        
                var content = '';
        
        
        
        
        
        
                snapshot.forEach(function (data) {
        
                    var ss = '';
        
                    var val = data.val();
        
                    if (val.status == "Active") {
                        ss = "green"
                    }
                    else if (val.status == "Reject") {
                        ss = 'red'
                    }
        
        
                    else {
                        ss = '#d1a72a'
                    }
        
                    content += '<tr name="bc">';
        
                    // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';
        
        
                    content += '<td >' + val.transaction_name + '</td>';
        
                    content += '<td >' + '<span style="font-size:14px;font-weight: 800;">৳ </span>' + parseInt(val.amount).toLocaleString() + '</td>';
                   
                    content += '<td >' + val.application_date + '</td>';
        
                    content += '<td style="color:' + ss + ';font-weight: bold;">' + val.status + '</td>';
                    // content += '<td>'+"<img src='img/Men.png' id='output' name='file1' height='50' width='50' />"+'</td>';
        
                   
                    content += "<td style='text-align:center'>" + '<button type="button" class="btn" onclick=edit("' + data.key + '")><span class="layer"></span>Details</button>' +


                    "</td>";
        
                    content += '</tr>';
        
        
        
        
        
        
                });
        
        
        
        
        
        
        
                $('#atttbl_posts_body').html(content);
        
        
        
        
            }
        
        
            else {
                document.getElementById("ndata").style.display = "block"
                document.getElementById("pdata").style.display = "none"
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
      
            $('#uname').html(firstname+" " +lastname);
            $('#em').html(emai);
            $('#abalance').html("৳"+formattedNumber+".00");
      
          $('#flname').html(firstname.charAt(0).toUpperCase()+lastname.charAt(0).toUpperCase());
      
        });


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




function edit(key) {
  

    //alert(key)
    document.getElementById("abc").style.display = "none"
   // document.getElementById("serc").style.display = "none"
  
  
  
  
   document.getElementById("prof").style.display = "block"
  //  document.getElementById("pdata").style.display = "block"
  
  
  
  
    var ref5 = firebase.database().ref().child("deposit").child(key);
  
  
    ref5.on("value", function (snapshot4) {
      if (snapshot4.exists()) {
  
  
  
        transaction_name = snapshot4.val().transaction_name;
        application_date = snapshot4.val().application_date;
        amount = snapshot4.val().amount;
        acc_holder = snapshot4.val().acc_holder;
        transaction_number = snapshot4.val().transaction_number;
        branch_name = snapshot4.val().branch_name;

       
        idfront = snapshot4.val().simage

        statu = snapshot4.val().status
        plan = snapshot4.val().plan
        username = snapshot4.val().username;
   
  
  
  
  
  
  
      }



console.log(statu)
     

      if(statu == "Active"){

        document.getElementById("statu").style.color = 'green';

      }

      else if (statu == "Reject"){

        document.getElementById("statu").style.color = 'red';

      }

      else{
        document.getElementById("statu").style.color = 'blue';
      }
  
  
      const formattedNumber = parseInt(amount).toLocaleString();
  
      $('#acc_holder').html(acc_holder);
  
      $('#application_date').html(application_date);
  
      $('#transaction_name').html(transaction_name);
      $('#amount').html(formattedNumber + ".00" + " BDT");
  
  
  

      //
      $('#statu').html(statu);
  
      $('#transaction_number').html(transaction_number);
      $('#branch_name').html(branch_name);
  
 
       $('#username').html(username);
      //  $('#jdate').html('Joined On :'+jdate);
      // $('#usname').html('Username :'+username);
      //  $('#jdate').html('Joined On :'+jdate);
      // $('#usname').html('Username :'+username);
      //  $('#jdate').html('Joined On :'+jdate);
  
  
      if (idfront == 'no image') {
        imgpr.src = "https://res.cloudinary.com/dbcsyo0wi/image/upload/v1738491333/boyohqoqf7xojvralype.png"
      }
      else {
        imgpr.src = idfront;
      }
  
  
  
  
  
  
 
  
  
  
    });
  
  
  
  
  
  
  
  }
  
  function myImage5() {
    console.log(idfront)
  
    window.open(idfront, '_blank')
  
  
  }


  function cls() {


    document.getElementById("abc").style.display = "block"
    // document.getElementById("serc").style.display = "none"
   
   
   
   
    document.getElementById("prof").style.display = "none"
   //  document.getElementById("pdata").style.display = "block"


  }