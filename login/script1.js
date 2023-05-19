console.log("connected");
var a=Document.getElementByid('email');
console.log(a.value);
function check()
{
    if(a.value==admin)
    {
        console.log("login success")
    }
    else
    {
        console.log("login failed");
    }
}

