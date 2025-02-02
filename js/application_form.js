
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


var userid = "a";
var username = '';



var firstname= '';
var lastname= '';
var address= '';

var emai= '';


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        //  window.alert("hi"+" "+user.uid);
        var today = new Date();
        userid = user.uid;
        console.log(userid);
        console.log('time'+ today.getMinutes())
        var ref5 = firebase.database().ref('user-account').child(userid);

ref5.on("value", function (snapshot4) {
    if (snapshot4.exists()) {



        username = snapshot4.val().username;
        

    }

 

});
    } else {

        console.log(userid)
        // No user is signed in.
        /*window.location.replace("http://127.0.0.1:5500/login.html");*/
        //window.location.href = "login.html";

    }

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
});





















var loamount = localStorage.getItem('amount');
var loaname = localStorage.getItem('lname');
var month = localStorage.getItem('month');
var rate = localStorage.getItem('rate');


document.getElementById('loamount').textContent = "৳" + loamount + ".00";
document.getElementById('loaname').textContent = loaname;
document.getElementById('month').textContent = month;


var perInstallment = parseInt(loamount) + parseInt((loamount * rate) / 100);
var pmonth = parseInt(perInstallment / month);

document.getElementById('pmonth').textContent = "৳" + pmonth + ".00";
document.getElementById('npay').textContent = "৳" + perInstallment + ".00";

console.log(loamount);
console.log(loaname);
console.log(pmonth);




const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dbcsyo0wi/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'preset-for-file-upload2';

const CLOUDINARY_URL2 = 'https://api.cloudinary.com/v1_1/dbcsyo0wi/image/upload';
const CLOUDINARY_UPLOAD_PRESET2 = 'preset-for-file-upload2';

const signUp = document.getElementById('recaptcha');
signUp.addEventListener('click', (event) => {



    const modal17 = document.getElementById('pls');
    const name_of_applicant = document.getElementById('name_of_applicant').value;
    const phone_number = document.getElementById('phone_number').value;
    const profession = document.getElementById('profession').value;
    const monthly_income = document.getElementById('monthly_income').value;
    const account_holder_name_ = document.getElementById('account_holder_name_:').value;
    const account_number = document.getElementById('account_number:').value;
    const bank_name = document.getElementById('bank_name:').value;
    const branch_code_ = document.getElementById('branch_code_:').value;


    //var ref5 = firebase.database().ref('loan').child(userid).push();


    var today = new Date();
    var d = String(today.getDate()).padStart(2, '0');
    var m = String(today.getMonth() + 1).padStart(2, '0');
    var y = today.getFullYear();
    modal17.style.display = 'block';




    if (document.getElementById("idfront").files.length == 0 || document.getElementById("idback").files.length == 0) {


        console.log('no file selected');

        
        console.log(userid);
        alert('Application success');
 var database2 = firebase.database();

        database2.ref('loan2').child(userid).push().set({

            'applinant_name': name_of_applicant,
            'phone_number': phone_number,
            'amount': loamount,
            "application_date": d + "-" + m + "-" + y,
            'current_time':d + "-" + m + "-" + y+'-'+today.getHours()+'-'+today.getMinutes(),
            'status': 'Pending',
           
        });


       
        var database = firebase.database();

        database.ref('loan').push().set({
            'applinant_name': name_of_applicant,
            'phone_number': phone_number,
            'profession': profession,
            'monthly_income': monthly_income,
            'account_holder_name_': account_holder_name_,
            'account_number': account_number,
            'bank_name': bank_name,
            'branch_code': branch_code_,
            "application_date": d + "-" + m + "-" + y,
            'current_time':d + "-" + m + "-" + y+'-'+today.getHours()+'-'+today.getMinutes(),
            'idfront': 'no image',
            'idback': 'no image',
            'status': 'Pending',
            "plan": loaname,
            "uid":userid,
            'username':username,
            'amount': loamount,
            'per_installment': pmonth,
            'total_installment': month,
            'rate':rate,
            'total_payable':perInstallment
         


        }).then(() => {
            window.location.href = "myloan.html";
        });

    }

    else {


        
        const fileInput = document.getElementById('idfront');
        const file = fileInput.files[0];
        const fileInput2 = document.getElementById('idback');
        const file2 = fileInput2.files[0];
    
        const formData = new FormData();
        const formData2 = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        formData2.append('file', file2);
        formData2.append('upload_preset', CLOUDINARY_UPLOAD_PRESET2);
        var fimage='';
        var bimage = '';
    
         axios({
            url: CLOUDINARY_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
    
            },
            data: formData}).then(function(res){
       //  console.log(res.data.secure_url);
          fimage = res.data.secure_url
       
    
          axios({
            url: CLOUDINARY_URL2,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
    
            },
            data: formData2}).then(function(res2){

                bimage = res2.data.secure_url
        
             

                
                console.log('front image :'+ fimage);
                console.log('back image :'+ bimage);    
       
    
        alert('upload success');



        var database2 = firebase.database();

    database2.ref('loan2').child(userid).push().set({

        'applinant_name': name_of_applicant,
        'phone_number': phone_number,
       
        "application_date": d + "-" + m + "-" + y,
        'current_time':d + "-" + m + "-" + y+'-'+today.getHours()+'-'+today.getMinutes(),
        'status': 'Pending',
       
    });
    
        var database = firebase.database();

        database.ref('loan').push().set({
            'applinant_name': name_of_applicant,
            'phone_number': phone_number,
            'profession': profession,
            'monthly_income': monthly_income,
            'account_holder_name_': account_holder_name_,
            'account_number': account_number,
            'bank_name': bank_name,
            'branch_code': branch_code_,
            "application_date": d + "-" + m + "-" + y,
            'current_time':d + "-" + m + "-" + y+'-'+today.getHours()+'-'+today.getMinutes(),
            'idfront': fimage,
            'idback': bimage,
            "uid":userid,
            'status': 'Pending',
            "plan": loaname,
            'amount': loamount,
            'username':username,
            'per_installment': pmonth,
            'total_installment': month,
            'rate':rate,
            'total_payable':perInstallment
         


        }).then(() => {
            window.location.href = "myloan.html";
        });
    
      
    

            }).catch(function(err){
                console.error(err);
            })

         
    
      
    
    
            }).catch(function(err){
                console.error(err);
            });
    
          

               
    }




    
  
    
    
                
});