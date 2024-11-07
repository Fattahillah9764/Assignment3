//Soal 1
function compareNumbers(FirstNumber, SecondNumber) {
    if (SecondNumber > FirstNumber) {
        return "True"
        } else if (SecondNumber < FirstNumber) {
        return "false"
        } else {return "-1"}
    }

console.log(compareNumbers(5, 8)); //True
console.log(compareNumbers(5, 3)); //False
console.log(compareNumbers(4, 4)); //-1
console.log(compareNumbers(3, 3)); //-1
console.log(compareNumbers(17, 2)); //False
console.log("======================Soal 1================================");

//Soal 2
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString('Hello World and Coders'));
console.log(reverseString('Jhon Doe'));
console.log(reverseString('I am a book worm'));
console.log(reverseString('Coding is my hobby'));
console.log(reverseString('Super'));
console.log("======================Soal 2================================");

//Soal 3
function urutHuruf(text) {
    return text.split('').sort().join('');
}

console.log(urutHuruf("halo"));  //ahlo
console.log(urutHuruf("qwerty"));  //eqrtwy
console.log(urutHuruf("qwertyuiopasdfghjklzxcvbnm")); //abcdefghijklmnopqrstuvwxyz
console.log("======================Soal 3================================");

//Soal 3_1
function urutHuruf2(text){
    let arrayText = text.split("")
    let smaller
    for (let i = 0; i < arrayText.length; i++) {
        for (let j = i+1; j < arrayText.length; j++) {
            if (arrayText[i] > arrayText[j]) {
                smaller = arrayText[j]
                arrayText[j] = arrayText[i]
                arrayText[i] = smaller
            }
        }
    }
    return arrayText.join("")
}
console.log(urutHuruf2("halo"));  //ahlo
console.log(urutHuruf2("qwerty"));  //eqrtwy
console.log(urutHuruf2("qwertyuiopasdfghjklzxcvbnm")); //abcdefghijklmnopqrstuvwxyz
console.log("======================Soal 3_1================================");

//Soal 4
function isArithmeticProgression(arr) {
    if (arr.length < 2) {
        return false; 
    }
    const difference = arr[1] - arr[0];

        for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== difference) {
            return false;
        }
    }

    return true;
}

console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6,])); //True
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); //False
console.log(isArithmeticProgression([2, 4, 6, 8])); //true
console.log(isArithmeticProgression([2, 6, 18, 54])); //false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); //false
console.log("======================Soal 4================================");

//Soal 5
function threestepAB(str) {
      for (let i = 0; i < str.length - 4; i++) {
        if (str[i] === 'a' && str[i + 4] === 'b') {
            return true;
        } else if (str[i] === 'b' && str[i + 4] === 'a') {
            return true;
        }
    }
    return false;
}
console.log(threestepAB('lane borrowed')); //True
console.log(threestepAB('I am sick')); //False
console.log(threestepAB('You are boring')); //True
console.log(threestepAB('barbarian')); //True
console.log(threestepAB('Bacon and meat')); //False
console.log("======================Soal 5================================");

//Soal 6
function gcd(a, b) {
        while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(gcd(12, 16)); //4
console.log(gcd(50, 40)); //10
console.log(gcd(22, 99)); //11
console.log(gcd(24, 36)); //12
console.log(gcd(17, 23)); //1
console.log("======================Soal 6================================");

//Soal 7
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;  

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;
}

console.log(isPrime(2)); //True
console.log(isPrime(7)); //True
console.log(isPrime(6)); //False
console.log(isPrime(23)); //True
console.log(isPrime(33)); //False
console.log("======================Soal 7================================");

//Soal 8

function ListPrima(y, z) {
    let prima = [];
    for (let i = y; i <= z; i++) {
        if (isPrime(i)) {
            prima.push(i);
        }}
    return prima;  
    }
    
console.log(ListPrima(1, 5)); // [2, 3, 5]
console.log(ListPrima(5, 10)); // [5, 7]
console.log(ListPrima(10, 20)); // [11, 13, 17, 19]
console.log("======================Soal 8================================");
