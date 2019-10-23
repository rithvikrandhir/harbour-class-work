/*3 subjects out of 10. 

English - ?/10
Maths - ?/10
Biology - ?/10

A - 10-8
B - 8-6
C - 5-3
F - 0-3

*/ 

let englishScore = 10;
let mathsScore = 5;
let biologyScore = 3; 
let englishGrade;
let mathsGrade;
let biologyGrade; 
let overallGrade;
let overallScore = englishScore+mathsScore+biologyScore;

if(englishScore >= 8 ){
    englishGrade = 'A';
} else if (englishScore >= 6){
    englishGrade = 'B';
}else if (englishScore >= 3){
    englishGrade = 'C';
} else {
    englishGrade = 'F';
}

if(mathsScore >= 8 ){
    mathsGrade = 'A';
} else if (mathsScore >= 6){
    mathsGrade = 'B';
}else if (mathsScore >= 3){
    mathsGrade = 'C';
} else {
    mathsGrade = 'F';
}

if(biologyScore >= 8 ){
    biologyGrade = 'A';
} else if (biologyScore >= 6){
    biologyGrade = 'B';
}else if (biologyScore >= 3){
    biologyGrade = 'C';
} else {
    biologyGrade = 'F';
}

if(overallScore >= 24 ){
    overallGrade = 'A';
} else if (overallScore >= 18){
    overallGrade = 'B';
}else if (overallScore >= 12){
    overallGrade = 'C';
} else {
    overallGrade = 'F';
}

console.log(`English Score : ${englishGrade},
English Score : ${mathsGrade},
English Score : ${biologyGrade}

Overall Grade : ${overallGrade}

`);