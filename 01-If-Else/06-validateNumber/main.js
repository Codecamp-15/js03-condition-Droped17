let first_num = prompt("enter first number");
let second_num = prompt("enter second number");
//return string

if(first_num == null || second_num == null || first_num.trim() == '' || second_num.trim() == '' || isNaN(first_num) || isNaN(second_num)){
    alert("Invalid");
}else{
    alert(Number(first_num) + Number(second_num));
}











