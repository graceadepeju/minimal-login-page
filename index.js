let acceptEmail = "appclick@gmail.com";
let acceptPassword = "1234AppClick";

email = document.querySelector(".emailbtn");
password = document.querySelector(".passwordbtn");
login = document.querySelector(".login");

login.addEventListener("click",function(){
    if (acceptEmail === email.value && acceptPassword === password.value){
        alert("Login Successful")
    } else{
        alert("Incorrect Details")
    }
})
