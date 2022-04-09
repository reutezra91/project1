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

for (i of cardDouble){
let board=document.getElementById("game-table");
let elem =document.createElement("div");
elem.innerText=i;
elem.className="card";

console.log(board.appendChild(elem))
}

// elem.className="card"