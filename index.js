function check() {

    var username = document.querySelectorAll('#username')[0].value;
    var mail = document.querySelectorAll('#email')[0].value;
    var password = document.querySelectorAll('#password')[0].value;
    var confirmpassword = document.querySelectorAll('#cpassword')[0].value;

  
    checkusername(username);
    checkanyemail(mail);
    checkpassword(password);
    checkcpasswordsmatach(password, confirmpassword); 
}  

function checkusername(username)
{

    if (username.length > 7 ) 
    {
        
             document.getElementById("username").classList.add('success');
             document.getElementById('username').classList.replace ('error' , 'success');
             document.getElementById('users_error').innerText = '' 
    
} else 
{
document.getElementById("username").classList.add('error');
document.querySelector("#users_error").innerText = "Enter Correct Username";

} 

}

function checkanyemail(mail)
{

    if (mail.length > 7 && mail.includes('@gmail'))
    {
        
             document.getElementById("email").classList.add('success');
             document.getElementById('email').classList.replace ('error' , 'success');
             document.getElementById('email_error').innerText = '' ;
    
} else 
{
document.getElementById("email").classList.add('error');
document.querySelector("#email_error").innerText = "Enter Valid Email Id with 8 letters and @gmail";

} 

}
 
function checkpassword(password)
{

    if (password.length > 7 && password.includes("."))
    {
        
             document.getElementById("password").classList.add('success');
             document.getElementById('password').classList.replace ('error' , 'success');
             document.getElementById('pwd_error').innerText = '' ;
    
} else 
{
document.getElementById("password").classList.add('error');
document.querySelector("#pwd_error").innerText = "Enter Strong Password";

} 

}
 
 function checkcpasswordsmatach(password, confirmpassword)
{

    if (password === confirmpassword && confirmpassword!= '')
    {
        
             document.getElementById("cpassword").classList.add('success');
             document.getElementById('cpassword').classList.replace ('error' , 'success');
             document.getElementById('pwd_confirm_error').innerText = '' ;
    
} else 
{
document.getElementById("cpassword").classList.add('error');
document.querySelector("#pwd_confirm_error").innerText = "Password Not Matching";

} 

} 