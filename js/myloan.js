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

const imgpr = document.getElementById('idfront');
const imgpr2 = document.getElementById('idback');

var status = "";


var firstname= '';
var lastname= '';
var address= '';

var emai= '';


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        //  window.alert("hi"+" "+user.uid);
        userid = user.uid;

        var pendingloan = firebase.database().ref().child("loan").orderByChild('uid').equalTo(userid);;

        pendingloan.once("value").then(function (snapshot) {

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
                        ss = 'blue'
                    }
        
                    content += '<tr name="bc">';
        
                    // content +='<td>' + ' <input type="checkbox" class="check">' +'</td>';
        
        
                    content += '<td >' + val.plan + '</td>';
        
                    content += '<td >' + '<span style="font-size:14px;font-weight: 800;">৳ </span>' + parseInt(val.amount).toLocaleString() + '</td>';
                    content += '<td >' + '<span style="font-size:14px;font-weight: 800;">৳ </span>' + parseInt(val.per_installment).toLocaleString() + ".00" + '</td>';
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


function edit(key) {
  

    //alert(key)
    document.getElementById("abc").style.display = "none"
   // document.getElementById("serc").style.display = "none"
  
  
  
  
   document.getElementById("prof").style.display = "block"
  //  document.getElementById("pdata").style.display = "block"
  
  
  
  
    var ref5 = firebase.database().ref().child("loan").child(key);
  
  
    ref5.on("value", function (snapshot4) {
      if (snapshot4.exists()) {
  
  
  
        applinant_name = snapshot4.val().applinant_name;
        phone_number = snapshot4.val().phone_number;
        profession = snapshot4.val().profession;
        monthly_income = snapshot4.val().monthly_income;
        account_holder_name_ = snapshot4.val().account_holder_name_;
        account_number = snapshot4.val().account_number;
        bank_name = snapshot4.val().bank_name;
        branch_code = snapshot4.val().branch_code;
        application_date = snapshot4.val().application_date
        idfront = snapshot4.val().idfront
        idback = snapshot4.val().idback;
        status = snapshot4.val().status
        plan = snapshot4.val().plan
        username = snapshot4.val().username;
        amount = snapshot4.val().amount
        per_installment = snapshot4.val().per_installment
        total_installment = snapshot4.val().total_installment;
        total_payable = snapshot4.val().total_payable;
        uid = snapshot4.val().uid;
  
        curentime = snapshot4.val().current_time;
  
  
  
  
  
  
      }


      console.log("fffffff:"+ status);

     

      if(status == "Active"){

        document.getElementById("statu").style.color = 'green';

      }

      else if (status == "Reject"){

        document.getElementById("statu").style.color = 'red';

      }

      else{
        document.getElementById("statu").style.color = 'blue';
      }
  
  
      const formattedNumber = parseInt(amount).toLocaleString();
  
      $('#plan').html(plan);
  
  
  
      $('#application_date').html(application_date);
      $('#amount').html(formattedNumber + ".00" + " BDT");
  
  
  
  
  
      $('#per_installment').html(parseInt(per_installment).toLocaleString() + ".00" + " BDT");
      $('#total_installment').html(total_installment);
  
      $('#total_payable').html(parseInt(total_payable).toLocaleString() + ".00" + " BDT");
      const profit = parseInt(total_payable) - parseInt(amount);
      $('#profit').html(parseInt(profit).toLocaleString() + ".00" + " BDT");;
      //
      $('#statu').html(status);
  
      $('#applinant_name').html(applinant_name);
      $('#phone_number').html(phone_number);
  
      $('#profession').html(profession);
      $('#monthly_income').html(monthly_income);
      $('#account_holder_name_').html(account_holder_name_);
      $('#account_number').html(account_number);
      $('#bank_name').html(bank_name);
      $('#branch_code').html(branch_code);
      // $('#usname').html('Username :'+username);
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
  
  
  
  
      if (idback == 'no image') {
        imgpr2.src = "https://res.cloudinary.com/dbcsyo0wi/image/upload/v1738491333/boyohqoqf7xojvralype.png"
      }
      else {
        imgpr2.src = idback;
      }
  
  
  
  
      var user_profile = firebase.database().ref().child("user-profile").child(uid);
  
  
  
      user_profile.on("value", function (snapshot4) {
        if (snapshot4.exists()) {
  
  
  
  
          address = snapshot4.val().address;
          balance = snapshot4.val().balance;
        
          city = snapshot4.val().city;
          email = snapshot4.val().email;
          firstname = snapshot4.val().firstname;
          joindate = snapshot4.val().joindate;
          lastname = snapshot4.val().lastname;
          mobile = snapshot4.val().mobile;
          pimage = snapshot4.val().pimage;
          state = snapshot4.val().state;
          status = snapshot4.val().status;
          username2 = snapshot4.val().username;
  
          zip = snapshot4.val().zip;
  
  
  
        }
  
  
       // console.log(key2);
  
        
  
      
  
      });
  
  
  
  
    });
  
  
  
  
  
  
  
  }
  




  function cls() {


    document.getElementById("abc").style.display = "block"
    // document.getElementById("serc").style.display = "none"
   
   
   
   
    document.getElementById("prof").style.display = "none"
   //  document.getElementById("pdata").style.display = "block"

   window.location.href = "myloan.html";

  }



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