let sum = 0;
for(let i=0; i<40 || i % 2 === 1; i++){
    if(i%2 === 1){
        sum += i;
    }
}

console.log(`${sum} is`);


function greet(fname, lname, greeting){
    return `${greeting}, ${fname} ${lname}. Great to have you here.`;
}

console.log(greet("rithvik", "randhir","yo"));