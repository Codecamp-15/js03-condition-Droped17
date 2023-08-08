let score = prompt("Enter score");

let result =
  score > 80
    ? alert("A")
    : score >= 70
    ? alert("B")
    : score >= 60
    ? alert("C")
    : score >= 50
    ? alert("D")
    : score < 50
    ? alert("F")
    : alert("invalid");
