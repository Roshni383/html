console.log("connected");
var fname=document.getElementById('first');
var lname= document.getElementById('lname');
var phn= document.getElementById('phone');
var adde= document.getElementById('add');
var em= document.getElementById('email');
var eme= document.getElementById('emailid');

console.log(fname.value);
console.log(lname.value);
console.log(phn.value);
console.log(adde.value);
console.log(em.value);
console.log(user.value);
console.log(psw.value);


function check()
{
   //console.log(fname.value.length);
   if( ((fname.value.length)<6) && ((phn.value.length)==10) && ((adde.value.length)<160) && (em.value.includes("@")))
{
    console.log("correct");
}
else
{
    console.log("characters must be less than 6 and numbers must be 10 and must include @");
}
array()  
   
}
function array()
{
    arr=[ fname.value,lname.value,phn.value,adde.value,em.value];
console.log(arr);
}

function login()
{
    if((email.value)==(emailid.value))
{
    console.log("correct"); 
}
    else
{
    console.log("Email does not match");
}
}