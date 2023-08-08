let username = prompt("Enter username");
let password = prompt("Enter password");

if(username == "" || password ==""){
    alert("user is required");
}else if(username == "admin" && password == "1234" || username == "john" && password == "qwerty"){
    alert(`Hello ${username}`);
} 
else{
    alert("Invalid username or password");
}
