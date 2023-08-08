let user = prompt("Enter User");

if (user === null || user.trim() === '') {
    user = "guest";
    console.log(user);
} else if(user == "codecamp"){
    let password = prompt("enter password");
    if (password == '123456') {
        user = "codecamp"
        alert(`Welcome ${user}`);
    }else{
        alert("Wrong password");
    }
}
else{
    user = "guest";
    alert(`Welcome ${user}`);
}

