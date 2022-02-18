// 1:
const ages = [3, 9, 23, 64, 2, 8, 28, 93];

// 1a:
console.log(ages[ages.length -1] - ages[0]);

// 1b:
ages.splice(8, 0, 17);
console.log(ages[ages.length -1] - ages[0]);

// 1c:
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum+= ages[i]; 
}
console.log(sum / ages.length); 

//2.
let arrayNames = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// 2a:
sum = 0;
for (let i = 0; i < arrayNames.length; i++) {
     sum += arrayNames[i].length;
}
console.log(sum / arrayNames.length); 

// 2b:
let basket = '';
for (let i = 0; i < arrayNames.length; i++) {
   basket = basket + ' ' + arrayNames[i]
}
console.log(basket); 

 //3: How do you access the last element of any array? 
 const cats = ['Tabby', 'Calico', 'Shorthair']
console.log(cats[cats.length - 1]);
// 4: How do you access the first element of any array?
console.log(cats[0]); 

//5:
let nameLengths = [];
for (let y = 0; y < arrayNames.length; y++) {
    nameLengths.push(arrayNames[y].length);
}
console.log(nameLengths); 

 // 6: 
sum = 0
for (let x = 0; x < nameLengths.length; x++) {
    sum += nameLengths[x];
}
console.log(sum); 

// 7: 
function twoParameters(word, n){
    let tempWord = '';
    for (let i = 0; i < n; i++) {
        tempWord += word;
        console.log(tempWord);
        console.log(i);
    }
        return tempWord;
}
console.log(twoParameters('Hello', 3)); 

//8:
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}  
console.log(fullName('Amelia', 'Earhart')); 

//9:
 sum = 0;
let numberArray = [50, 60, 70];
function numberSum(arr){
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    if(sum > 100){
        return true;
    } else {return false};
}
console.log(numberSum(numberArray)); 


//10:
function array(arrayNum){
    let sum = 0;
    for (let it = 0; it < arrayNum.length; it++){
        sum += arrayNum[it];
    }
    return sum / arrayNum.length
} 
console.log(array(numberArray)); 

// 11:
let bagels = [20, 30, 50];
let donuts = [5, 10, 15];
function whichIsMore(arrayOne, arrayTwo){
    let total = 0
    for (let p = 0; p < arrayOne.length; p++) {
        total += arrayOne[p]     
    }
    let bagelVariable = total / arrayOne.length;

    let complete = 0
    for (let p = 0; p < arrayTwo.length; p++) {
        complete += arrayTwo[p]     
    }
    let donutVariable = complete / arrayTwo.length;
    if (bagelVariable > donutVariable) {
        return true;
    } else {return false};
}     

console.log(whichIsMore(bagels, donuts));

// 12:
function willBuyDrink(isHotOutside, moneyInPocket){
 if (isHotOutside = true && moneyInPocket >= 10.50){
     return true;
 } else{return false};
}
console.log(willBuyDrink(true, 12));

// 13: Cat #1 owns the pink bowl, and cat #2 owns the blue bowl.
//If cat #2 has more food than cat #1, then we must feed cat #1 or it will wreak havoc. If cat #2 has less food than 
//cat #1, all is fine, do not feed the cats.
//If the pink cat food bowl has less than the blue cat food bowl, feed the cats. 
//If the pink cat food bowl has the same amount or more of the blue catfood bowl, do not feed the cats.
let pinkBowl = 10
let blueBowl = 15

function feedWhichCat(pinkNumber, blueNumber){
    if (pinkNumber < blueNumber){
        return 'Feed cats.';
    } else {return 'Do not feed the cats.'}
   
}
   console.log(feedWhichCat(blueBowl, pinkBowl));