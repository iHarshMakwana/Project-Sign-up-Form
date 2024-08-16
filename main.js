let password =document.querySelector("#pass").value;
let confirmpassword = document.querySelector("#confirmpass").value;

let message = document.querySelector("#message");

if(password== "" && confirmpassword== "" ){
    message.innerHTML= "*Password does not match";
}else if(password == confirmpassword){
    message.innerHTML= ""
}