
function alphabetCheck(elmid) {
  
  var letters = /^[A-Za-z]+$/;

 
  var elementId = elmid.value; //textfield value will get
  if (elementId.match(letters)) {
    //true
   
    return true;
  } else {
    //false
    alert("Please Enter Alphabets Only");
    elmid.value = ""; //Wrong erase code
    elmid.focus(); //focus the field
    return false;
  }
}


function pass1(){
  //alert('password verify')
  var psw1=document.reg_form.password1;
  var psw2=document.reg_form.password2;
  //alert('password verify2')
  if(psw1.value==psw2.value)
  {
      //alert('password both are equal')
   return false
  }
  else(psw1!=psw2)
  {alert("Password Mismatch")
  psw2.value = "";
  psw1.value = ""; 
  psw1.focus(); 
 
return false}
}
function pass(inputtxt) 
{ 
var passw=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(inputtxt.value.match(passw)) 
{ 
//alert('Correct, try another...')
return true;
}
else
{ 
alert('password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character')
inputtxt.value = ""; //Wrong erase code
inputtxt.focus(); //focus the field
    return false;
}
}

function emailOnlyCheck(elmid) {
    var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    var elementId = elmid.value;
    if (elementId.match(format)) {
    
      return true;
    } else {
      alert("Invalid Email-id Format");
     
      elmid.value = ""; 
      elmid.focus();
      return false;
    }
  }

  function address(elmid)
  {
    var elementId = elmid.value;
   
    if(elementId.value.length==0)
    {
    alert("please Enter the details");
    return false;
    }
      else{return true;}


  }
 
  function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if((inputtxt.value.match(phoneno)))
    {
      return true;
     }
      else
        {
        alert("Enter Valid 10 digit mobile number");
        inputtxt.focus();
        return false;
        }
}

function required(inputtx, msg) {
    if (
      inputtx.value.length == 0 ||
      inputtx.value == "" ||
      inputtx.value == undefined ||
      inputtx.value == "undefined" ||
      inputtx.value == null
    ) {
      alert(msg);
      inputtx.value = ""; //Wrong erase code
      inputtx.focus(); //focus the field
      return false;
    }
    return true;
  }

function Regvalidation()
{
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var password1 = document.getElementById("password1");
    var password2 = document.getElementById("password2");
    var gender = document.getElementById("gender");
    var address = document.getElementById("adddress");
    
      if (!required(firstname, "Please enter Firstname!")) {
        return false;
      }
      if (!required(lastname, "Please enter lastname!")) {
        return false;
      }
      if (!required(email, "Please enter email!")) {
        return false;
      }
      if (!required(password1, "Please enter Password!")) {
        return false;
      }
      if (!required(password2, "Please enter Conformpassword!")) {
        return false;
      }
      var firstname1 = document.reg_form.firstname;
      var fn=firstname1.value;
      alert("Registration is sucessfully"+fn);
      window.print(reg_form);
      
}
