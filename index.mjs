let count = 10;
let answer = 10;
for (let i = 0; i < 10; i++){
    let guess = prompt(`Please enter a number between 0 and 100.`);
    if (guess > answer) {
        count--;
        alert(`too large, you have ${count} times left`);
    } else if (guess < answer) {
        count--;
        alert(`too small, you have ${count} times left`);
    } else if (guess == answer){
        alert(`You are correct!`);
        break;
    } 
}
console.log(`The correct answer is ${answer}`);