// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Jeison Geronimo" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total= 0
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`


//set tables
let gbAddCell = document.querySelector('#qty-gb');
let gbMinusCell = document.querySelector('#qty-gb');
let totalVotesCell = document.querySelector('#qty-total')
//set var
let gbAdd = document.querySelector('#add-gb');
let gbMinus = document.querySelector('#minus-gb');

//local storage
let gbStore = localStorage.getItem('gb-store')

if (gbStore){
    gbAddCell.textContent = gbStore;
    gbMinusCell.textContent = gbStore;
}

//event

gbAdd.addEventListener('click', function(){
    let gbAddCount = parseInt(gbAddCell.textContent);
    gbAddCount = gbAddCount + 1;
    gbAddCell.textContent = gbAddCount;
    totalVotesCell.textContent = gbAddCount + gbMinusCount + ccAddCount + ccMinusCount + sugarAddCount + sugarMinusCount;
    localStorage.setItem('gb-store', gbAddCount);
    

})

gbMinus.addEventListener('click', function(){
    let gbMinusCount = parseInt(gbMinusCell.textContent);
    gbMinusCount = gbMinusCount - 1;
    gbMinusCell.textContent = gbMinusCount;
    totalVotesCell.textContent = gbAddCount + gbMinusCount + ccAddCount + ccMinusCount + sugarAddCount + sugarMinusCount;
    localStorage.setItem('gb-store', gbMinusCount)


})



//CC
let ccAddCell = document.querySelector('#qty-cc');
let ccMinusCell = document.querySelector('#qty-cc');
let ccAdd = document.querySelector('#add-cc');
let ccMinus = document.querySelector('#minus-cc');

//local storage
let ccStore = localStorage.getItem('cc-store')

if (ccStore){
    ccAddCell.textContent = ccStore;
    ccMinusCell.textContent = ccStore;
}


//ccEventListener
ccAdd.addEventListener('click', function(){
    let ccAddCount = parseInt(ccAddCell.textContent);
    ccAddCount = ccAddCount + 1;
    ccAddCell.textContent = ccAddCount;
    totalVotesCell.textContent = gbAddCount + gbMinusCount + ccAddCount + ccMinusCount + sugarAddCount + sugarMinusCount;
    localStorage.setItem('cc-store', ccAddCount);



})

ccMinus.addEventListener('click', function(){
    let ccMinusCount = parseInt(ccMinusCell.textContent);
    ccMinusCount = ccMinusCount - 1;
    ccMinusCell.textContent = ccMinusCount;
    totalVotesCell.textContent = gbAddCount + gbMinusCount + ccAddCount + ccMinusCount + sugarAddCount + sugarMinusCount;
    localStorage.setItem('cc-store', ccMinusCount);


})

//sugar

let sugarAddCell = document.querySelector('#qty-sugar');
let sugarMinusCell = document.querySelector('#qty-sugar');
let sugarAdd = document.querySelector('#add-sugar');
let sugarMinus = document.querySelector('#minus-sugar');


//local storage
let sugarStore = localStorage.getItem('sugar-store')

if (sugarStore){
    sugarAddCell.textContent = sugarStore;
    sugarMinusCell.textContent = sugarStore;
}

//sugarEvent
sugarAdd.addEventListener('click', function(){
    let sugarAddCount = parseInt(sugarAddCell.textContent);
    sugarAddCount = sugarAddCount + 1;
    sugarAddCell.textContent = sugarAddCount;
    totalVotesCell.textContent = gbAddCount + gbMinusCount + ccAddCount + ccMinusCount + sugarAddCount + sugarMinusCount;
    localStorage.setItem('sugar-store', sugarAddCount);


})

sugarMinus.addEventListener('click', function(){
    let sugarMinusCount = parseInt(sugarMinusCell.textContent);
    sugarMinusCount = sugarMinusCount - 1;
    sugarMinusCell.textContent = sugarMinusCount;
    totalVotesCell.textContent = gbAddCount + gbMinusCount + ccAddCount + ccMinusCount + sugarAddCount + sugarMinusCount;
    localStorage.setItem('sugar-store', sugarMinusCount);


})




