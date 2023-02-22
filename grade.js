
function grade(test, exam){



score = test + exam 
console.log(score);

if (score >=80) {
    console.log("you got an A");
}
else if (score >= 70) {
    console.log("you got a B");
}
else if (score >= 60) {
    console.log("you got a C");
}
else if (score >= 50) {
    console.log("you got a D");
}
else {
    console.log("you failed");
}

}


grade(20, 40);


