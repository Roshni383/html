console.log("HELLO WORLD");
var a=5;
var b="hello world";
console.log(a,b);
for (let i=0;i<5;i++)
{
    for(let j=0;j<5;j++)
    {
    console.log(i,j);
    }
}
// window.alert("username is incorrect");
var username="admini";
var password="password";
var input_username="admin";
var input_password="password";
if((username==input_username) && (password==input_password))
{
    window.alert("login successful");
}      
else
{
    window.alert("alert login failed ");
}