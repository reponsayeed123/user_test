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

















const openModalBtn = document.getElementById('openModalBtn');


const modal = document.getElementById('myModal');
const modal2 = document.getElementById('myModal2');
const modal3 = document.getElementById('myModal3');
const modal4 = document.getElementById('myModal4');
const modal5 = document.getElementById('myModal5');
const modal6 = document.getElementById('myModal6');
const modal7 = document.getElementById('myModal7');
const modal8 = document.getElementById('myModal8');
const modal9 = document.getElementById('myModal9');
const modal10 = document.getElementById('myModal10');
const modal11 = document.getElementById('myModal11');
const modal12 = document.getElementById('myModal12');
const modal13 = document.getElementById('myModal13');
const modal14 = document.getElementById('myModal14');
const modal15 = document.getElementById('myModal15');
const modal16 = document.getElementById('myModal16');
const modal17 = document.getElementById('myModal17');
const modal18 = document.getElementById('myModal18');
const modal19 = document.getElementById('myModal19');


const closeBtn = document.querySelector('.close');
const closeBtn2 = document.getElementById('close2');
const closeBtn3 = document.getElementById('close3');
const closeBtn4 = document.getElementById('close4');
const closeBtn5 = document.getElementById('close5');
const closeBtn6= document.getElementById('close6');
const closeBtn7 = document.getElementById('close7');
const closeBtn8 = document.getElementById('close8');
const closeBtn9 = document.getElementById('close9');
const closeBtn10= document.getElementById('close10');
const closeBtn11= document.getElementById('close11');
const closeBtn12= document.getElementById('close12');
const closeBtn13= document.getElementById('close13');
const closeBtn14= document.getElementById('close14');
const closeBtn15= document.getElementById('close15');
const closeBtn16= document.getElementById('close16');
const closeBtn17= document.getElementById('close17');
const closeBtn18= document.getElementById('close18');
const closeBtn19= document.getElementById('close19');



const signUp = document.getElementById('recaptcha');
const signUp2 = document.getElementById('recaptcha2');
const signUp3 = document.getElementById('recaptcha3');
const signUp4 = document.getElementById('recaptcha4');
const signUp5 = document.getElementById('recaptcha5');
const signUp6 = document.getElementById('recaptcha6');
const signUp7 = document.getElementById('recaptcha7');
const signUp8 = document.getElementById('recaptcha8');
const signUp9 = document.getElementById('recaptcha9');
const signUp10 = document.getElementById('recaptcha10');
const signUp11 = document.getElementById('recaptcha11');
const signUp12 = document.getElementById('recaptcha12');
const signUp13 = document.getElementById('recaptcha13');
const signUp14 = document.getElementById('recaptcha14');
const signUp15 = document.getElementById('recaptcha15');
const signUp16 = document.getElementById('recaptcha16');
const signUp17 = document.getElementById('recaptcha17');
const signUp18 = document.getElementById('recaptcha18');
const signUp19 = document.getElementById('recaptcha19');



const confirm2 = document.getElementById('confirm');
const confirm21 = document.getElementById('confirm2');
const confirm3 = document.getElementById('confirm3');
const confirm4 = document.getElementById('confirm4');
const confirm5 = document.getElementById('confirm5');
const confirm6 = document.getElementById('confirm6');
const confirm7 = document.getElementById('confirm7');
const confirm8 = document.getElementById('confirm8');
const confirm9 = document.getElementById('confirm9');
const confirm10 = document.getElementById('confirm10');
const confirm11 = document.getElementById('confirm11');
const confirm12 = document.getElementById('confirm12');
const confirm13 = document.getElementById('confirm13');
const confirm14 = document.getElementById('confirm14');
const confirm15 = document.getElementById('confirm15');
const confirm16 = document.getElementById('confirm16');
const confirm17 = document.getElementById('confirm17');
const confirm18 = document.getElementById('confirm18');
const confirm19 = document.getElementById('confirm19');

signUp.addEventListener('click', (event) => {


    modal.style.display = 'block';
});

signUp2.addEventListener('click', (event) => {


  modal2.style.display = 'block';
});


signUp3.addEventListener('click', (event) => {


  modal3.style.display = 'block';
});


signUp4.addEventListener('click', (event) => {


  modal4.style.display = 'block';
});


signUp5.addEventListener('click', (event) => {


  modal5.style.display = 'block';
});

signUp6.addEventListener('click', (event) => {


  modal6.style.display = 'block';
});

signUp7.addEventListener('click', (event) => {


  modal7.style.display = 'block';
});


signUp8.addEventListener('click', (event) => {


  modal8.style.display = 'block';
});

signUp9.addEventListener('click', (event) => {


  modal9.style.display = 'block';
});

signUp10.addEventListener('click', (event) => {


  modal10.style.display = 'block';
});

signUp11.addEventListener('click', (event) => {


  modal11.style.display = 'block';
});

signUp12.addEventListener('click', (event) => {


  modal12.style.display = 'block';
});

signUp13.addEventListener('click', (event) => {


  modal13.style.display = 'block';
});

signUp14.addEventListener('click', (event) => {


  modal14.style.display = 'block';
});

signUp15.addEventListener('click', (event) => {


  modal15.style.display = 'block';
});

signUp16.addEventListener('click', (event) => {


  modal16.style.display = 'block';
});


signUp17.addEventListener('click', (event) => {


  modal17.style.display = 'block';
});

signUp18.addEventListener('click', (event) => {


  modal18.style.display = 'block';
});


signUp19.addEventListener('click', (event) => {


  modal19.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
   
  });

  closeBtn2.addEventListener('click', (event) => {


    modal2.style.display = 'none';
  });


  closeBtn3.addEventListener('click', (event) => {


    modal3.style.display = 'none';
  });
  

  closeBtn4.addEventListener('click', (event) => {


    modal4.style.display = 'none';
  });


  closeBtn5.addEventListener('click', (event) => {


    modal5.style.display = 'none';
  });

  
  closeBtn6.addEventListener('click', (event) => {


    modal6.style.display = 'none';
  });


  closeBtn7.addEventListener('click', (event) => {


    modal7.style.display = 'none';
  });

  closeBtn8.addEventListener('click', (event) => {


    modal8.style.display = 'none';
  });
  

  closeBtn9.addEventListener('click', (event) => {


    modal9.style.display = 'none';
  });
  closeBtn10.addEventListener('click', (event) => {


    modal10.style.display = 'none';
  });
  closeBtn11.addEventListener('click', (event) => {


    modal11.style.display = 'none';
  });


  closeBtn12.addEventListener('click', (event) => {


    modal12.style.display = 'none';
  });

  closeBtn13.addEventListener('click', (event) => {


    modal13.style.display = 'none';
  });

  closeBtn14.addEventListener('click', (event) => {


    modal14.style.display = 'none';
  });


  closeBtn15.addEventListener('click', (event) => {


    modal15.style.display = 'none';
  });



  closeBtn16.addEventListener('click', (event) => {


    modal16.style.display = 'none';
  });

  closeBtn17.addEventListener('click', (event) => {


    modal17.style.display = 'none';
  });

  closeBtn18.addEventListener('click', (event) => {


    modal18.style.display = 'none';
  });

    

  closeBtn19.addEventListener('click', (event) => {


    modal19.style.display = 'none';
  });




  // Close modal if clicked outside the content
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      
    }
    if (event.target === modal2) {
     
      modal2.style.display = 'none';
    }

    if (event.target === modal3) {
     
      modal3.style.display = 'none';
    }

    if (event.target === modal4) {
     
      modal4.style.display = 'none';
    }

    if (event.target === modal5) {
     
      modal5.style.display = 'none';
    }

    if (event.target === modal6) {
     
      modal6.style.display = 'none';
    }

    
    if (event.target === modal7) {
     
      modal7.style.display = 'none';
    }

    if (event.target === modal8) {
     
      modal8.style.display = 'none';
    }

    if (event.target === modal9) {
     
      modal9.style.display = 'none';
    }

    
    if (event.target === modal10) {
     
      modal10.style.display = 'none';
    }

    if (event.target === modal11) {
     
      modal11.style.display = 'none';
    }

    if (event.target === modal12) {
     
      modal12.style.display = 'none';
    }
    if (event.target === modal13) {
     
      modal13.style.display = 'none';
    }
    if (event.target === modal14) {
     
      modal14.style.display = 'none';
    }

    if (event.target === modal15) {
     
      modal15.style.display = 'none';
    }
  
    if (event.target === modal16) {
     
      modal16.style.display = 'none';
    }
          
    if (event.target === modal17) {
     
      modal17.style.display = 'none';
    }
    
    if (event.target === modal18) {
     
      modal18.style.display = 'none';
    }
 
    if (event.target === modal19) {
     
      modal19.style.display = 'none';
    }



  });


  confirm2.addEventListener('click', (event) => {

    const fileInput = document.getElementById('amount').value;

  if(fileInput >= 50000 && fileInput <= 1000000){

    localStorage.setItem('amount',fileInput);
    localStorage.setItem('lname','Home / Car Loan 2 years');
    localStorage.setItem('month',24);
    localStorage.setItem('rate',2.96);

      window.location.href = "application_form.html";
  
    
  }

  else
  {
    alert("Amount must be range 50,000 to 10,00000 tk");
  }
    
});


confirm21.addEventListener('click', (event) => {

  const fileInput2 = document.getElementById('amount2').value;

if(fileInput2 >= 100000 && fileInput2 <= 1000000){

  localStorage.setItem('amount',fileInput2);
  localStorage.setItem('lname','Home / Car Loan 3 years');
  localStorage.setItem('month',36);
  localStorage.setItem('rate',2.96);

    window.location.href = "application_form.html";

  
}

else
{
  alert("Amount must be range 100,000.00 to 1000,000.00 tk");
}
  
});




confirm3.addEventListener('click', (event) => {

  const fileInput3 = document.getElementById('amount3').value;

if(fileInput3 >= 100000 && fileInput3 <= 1000000){

  localStorage.setItem('amount',fileInput3);
  localStorage.setItem('lname','Home / Car Loan 5 years');
  localStorage.setItem('month',60);
  localStorage.setItem('rate',3.2);

    window.location.href = "application_form.html";

  
}

else
{
  alert("Amount must be range 100,000.00 to 1000,000.00 tk");
}
  
});




confirm4.addEventListener('click', (event) => {

  const fileInput4 = document.getElementById('amount4').value;

if(fileInput4 >= 50000 && fileInput4 <= 2500000){

  localStorage.setItem('amount',fileInput4);
  localStorage.setItem('lname','Home / Car Loan 10 years');
  localStorage.setItem('month',120);
  localStorage.setItem('rate',3.2);

    window.location.href = "application_form.html";

  
}

else
{
  alert("Amount must be range 50,000.00 to 2,500,000.00 tk");
}
  
});



confirm5.addEventListener('click', (event) => {

  const fileInput5 = document.getElementById('amount5').value;

if(fileInput5 >= 50000 && fileInput5 <= 2500000){

  localStorage.setItem('amount',fileInput5);
  localStorage.setItem('lname','Home / Car Loan 15 years');
  localStorage.setItem('month',180);
  localStorage.setItem('rate',4.4);

    window.location.href = "application_form.html";

  
}

else
{
  alert("Amount must be range 50,000.00 to 2,500,000.00 tk");
}
  
});


confirm6.addEventListener('click', (event) => {

  const fileInput6 = document.getElementById('amount6').value;

if(fileInput6 >= 100000 && fileInput6 <= 1000000){

  localStorage.setItem('amount',fileInput6);
  localStorage.setItem('lname','Agriculture Loan 2 years');
  localStorage.setItem('month',24);
  localStorage.setItem('rate',2.96);

    window.location.href = "application_form.html";

  
}

else
{
  alert("Amount must be range 100,000.00 to 1000,000.00 tk");
}
  
});


confirm7.addEventListener('click', (event) => {

  const fileInput7 = document.getElementById('amount7').value;

if(fileInput7 >= 100000 && fileInput7 <= 1000000){

  localStorage.setItem('amount',fileInput7);
  localStorage.setItem('lname','Agriculture Loan 3 years');
  localStorage.setItem('month',36);
  localStorage.setItem('rate',2.96);

    window.location.href = "application_form.html";

  
}

else
{
  alert("Amount must be range 100,000.00 to 1000,000.00 tk");
}
  
});


confirm8.addEventListener('click', (event) => {

  const fileInput8 = document.getElementById('amount8').value;

if(fileInput8 >= 100000 && fileInput8 <= 1500000){

  localStorage.setItem('amount',fileInput8);
  localStorage.setItem('lname','Agriculture Loan 5 years');
  localStorage.setItem('month',60);
  localStorage.setItem('rate',3.2);

    window.location.href = "application_form.html";

  
}

else
{
  alert("Amount must be range 100,000.00 to 1500,000.00 tk");
}
  
});


confirm9.addEventListener('click', (event) => {

  const fileInput9 = document.getElementById('amount9').value;

if(fileInput9 >= 100000 && fileInput9 <= 1000000){

  localStorage.setItem('amount',fileInput9);
  localStorage.setItem('lname','Remittance Loan 2 years');
  localStorage.setItem('month',24);
  localStorage.setItem('rate',2.96);

    window.location.href = "application_form.html";

  
}

else
{
  alert("Amount must be range 100,000.00 to 1000,000.00 tk");
}
  
});



confirm10.addEventListener('click', (event) => {

  const fileInput10 = document.getElementById('amount10').value;

if(fileInput10 >= 100000 && fileInput10 <= 2500000){

  localStorage.setItem('amount',fileInput10);
  localStorage.setItem('lname','Remittance Loan 3 years');
  localStorage.setItem('month',36);
  localStorage.setItem('rate',2.96);

    window.location.href = "application_form.html";

  
}

else
{
  alert("Amount must be range 100,000.00 to 2,500,000.00 tk");
}
  
});



confirm11.addEventListener('click', (event) => {

  const fileInput11 = document.getElementById('amount11').value;

if(fileInput11 >= 100000 && fileInput11 <= 2500000){

  localStorage.setItem('amount',fileInput11);
  localStorage.setItem('lname','Remittance Loan 5 years');
  localStorage.setItem('month',60);
  localStorage.setItem('rate',3.2);

    window.location.href = "application_form.html";

  
}

else
{
  alert("Amount must be range 100,000.00 to 2,500,000.00 tk");
}
  
});


confirm12.addEventListener('click', (event) => {

  const fileInput12 = document.getElementById('amount12').value;

if(fileInput12 >= 50000 && fileInput12 <= 1000000){

  localStorage.setItem('amount',fileInput12);
  localStorage.setItem('lname','Business Loan 2 years');
  localStorage.setItem('month',24);
  localStorage.setItem('rate',2.96);

    window.location.href = "application_form.html";

  
}

else
{
  alert("Amount must be range 50,000 to 10,00000 tk");
}
  
});




confirm13.addEventListener('click', (event) => {

  const fileInput13 = document.getElementById('amount13').value;

if(fileInput13 >= 100000 && fileInput13 <= 1000000){

  localStorage.setItem('amount',fileInput13);
  localStorage.setItem('lname','Business Loan 3 years');
  localStorage.setItem('month',36);
  localStorage.setItem('rate',2.96);

    window.location.href = "application_form.html";

  
}

else
{
  alert("Amount must be range 100,000 to 10,00000 tk");
}
  
});



confirm14.addEventListener('click', (event) => {

  const fileInput14 = document.getElementById('amount14').value;

if(fileInput14 >= 100000 && fileInput14 <= 25000000){

  localStorage.setItem('amount',fileInput14);
  localStorage.setItem('lname','Business Loan 5 years');
  localStorage.setItem('month',60);
  localStorage.setItem('rate',3.2);

    window.location.href = "application_form.html";

  
}

else
{
  alert("Amount must be range 100,000 to 2,500,0000 tk");
}
  
});




confirm15.addEventListener('click', (event) => {

  const fileInput15 = document.getElementById('amount15').value;

if(fileInput15 >= 50000 && fileInput15 <= 25000000){

  localStorage.setItem('amount',fileInput15);
  localStorage.setItem('lname','Business Loan 10 years');
  localStorage.setItem('month',120);
  localStorage.setItem('rate',3.2);

    window.location.href = "application_form.html";

  
}

else
{
  alert("Amount must be range 100,000 to 2,500,0000 tk");
}
  
});



confirm16.addEventListener('click', (event) => {

  const fileInput16 = document.getElementById('amount16').value;

if(fileInput16 >= 50000 && fileInput16 <= 25000000){

  localStorage.setItem('amount',fileInput16);
  localStorage.setItem('lname','Business Loan 10 years');
  localStorage.setItem('month',120);
  localStorage.setItem('rate',3.2);

    window.location.href = "application_form.html";

  
}

else
{
  alert("Amount must be range 100,000 to 2,500,0000 tk");
}
  
});




confirm17.addEventListener('click', (event) => {

  const fileInput17 = document.getElementById('amount17').value;

if(fileInput17 >= 50000 && fileInput17 <= 10000000){

  localStorage.setItem('amount',fileInput17);
  localStorage.setItem('lname','Personal Loan 2 years');
  localStorage.setItem('month',24);
  localStorage.setItem('rate',2.96);

    window.location.href = "application_form.html";

  
}

else
{
  alert("Amount must be range 50,000 to 1,000,0000 tk");
}
  
});


confirm18.addEventListener('click', (event) => {

  const fileInput18 = document.getElementById('amount18').value;

if(fileInput18 >= 50000 && fileInput18 <= 10000000){

  localStorage.setItem('amount',fileInput18);
  localStorage.setItem('lname','Personal Loan 3 years');
  localStorage.setItem('month',36);
  localStorage.setItem('rate',2.96);

    window.location.href = "application_form.html";

  
}

else
{
  alert("Amount must be range 50,000 to 1,000,0000 tk");
}
  
});



confirm19.addEventListener('click', (event) => {

  const fileInput19 = document.getElementById('amount19').value;

if(fileInput19 >= 50000 && fileInput19 <= 10000000){

  localStorage.setItem('amount',fileInput19);
  localStorage.setItem('lname','Personal Loan 5 years');
  localStorage.setItem('month',60);
  localStorage.setItem('rate',3.2);

    window.location.href = "application_form.html";

  
}

else
{
  alert("Amount must be range 50,000 to 1,000,0000 tk");
}
  
});



const signUp55 = document.getElementById('log');

signUp55.addEventListener('click', (event) => {
    // event.preventDefault();



    firebase.auth().signOut()
        .then(() => {
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error('Error Signing out:', error);
        })






});



const signUp25 = document.getElementById('log2');

signUp25.addEventListener('click', (event) => {
    // event.preventDefault();



    firebase.auth().signOut()
        .then(() => {
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error('Error Signing out:', error);
        })






});