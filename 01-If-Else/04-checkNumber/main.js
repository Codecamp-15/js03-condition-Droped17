let input = prompt("enter number");

if(input == null || input.trim() == '' || isNaN(input)){
    alert("Invalid number");
} else if(+input > 0){
    alert("Positive number");
} else if(+input < 0){
    alert("Negative number");
} else if(+input == 0){
    alert("Zero");
}


