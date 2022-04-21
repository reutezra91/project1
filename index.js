let cards =["A","B","C","D","E","F"]
let cardDouble= cards.concat(cards)

// function shuffle (arr){
//     let shuffleTimes=20
//     for (i=0;i<shuffleTimes;i++){
//        let place1=Math.round(Math.random()*(arr.length-1))
//        let place2=Math.round(Math.random()*(arr.length-1))
//        random1 = arr[place1] 
//        random2= arr[place2]
//        let arrTemp=random1
//        arr[place1]=random2
//        arr[place2]=arrTemp
    
//     }
//     return arr

// }
// console.log(shuffle(cardDouble))
const selectors = {
    // boardContainer: document.querySelector('.board-container'),
    // board: document.querySelector('.board'),
    moves: document.querySelector('.moves'),
    // timer: document.querySelector('.timer'),
    // start: document.querySelector('button'),
    // win: document.querySelector('.win')
}
const state = {
    // gameStarted: false,
    // flippedCards: 0,
    counter: 0,
    // totalTime: 0,
    // loop: null
}
function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
    return array;
    };
    
    console.log(shuffle(cardDouble))


// אנחנו רוצים להגריל מספר רנדומלי עד 20
//פעמיים
let flipCards=[]
let flipCard = (event)=>{
    
    // event.target.innerText="hello"
    console.log(event.target)
    event.target.classList.add("show")
    if (flipCards.length<2){
        flipCards.push(event.target)
    }
    if (flipCards.length==2){
        // debugger
        if(flipCards[0].innerText==flipCards[1].innerText){
            // alert("match")
            flipCards=[]
        }
        if(flipCards[0].innerText!=flipCards[1].innerText){
                setTimeout(() => {
                    flipCards[0].classList.remove('show');
                    flipCards[1].classList.remove('show');
                    flipCards=[]
                }, 1000);
                
              }
            // // alert("not match")
            // flipCards[0].classList.add("hidden")
            // flipCards[1].classList.remove("show")
            state.counter+=1
        selectors.moves.innerText = `${state.counter} moves` 
        }
       

    }
    

;

for (i of cardDouble){
let board=document.getElementById("game-table");
let elem =document.createElement("div");
elem.innerText=i;
elem.className="card";
board.appendChild(elem)
elem.onclick=flipCard

function isEqual(card1,card2){

}


// console.log(board.appendChild(elem))
}

// elem.className="card"
// this.cards.forEach((card) => {
//     Vue.set(card,'isFlipped',false);
//     Vue.set(card,'isMatched',false);
// });

// flippedCards = [] 

//  function flipCard2(card){
//     card.isFlipped = true;

//     if(this.flippedCards.length < 2)
//         this.flippedCards.push(card);
//     if(this.flippedCards.length === 2)    
//         this._match(card);
// }

// function _match(card){

//     if(this.flippedCards[0].name === this.flippedCards[1].name)
//         this.flippedCards.forEach(card => card.isMatched = true);
//     else
//         this.flippedCards.forEach(card => card.isFlipped = false);
    
//     this.flippedCards = [];
// }