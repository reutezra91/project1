let cards =["😍 ","😅","😉","🙂","🤣","😭","😴","🤯"]

let playerNum = Number (prompt('Welcome to my memory game! \n how many players?'))


let cardDouble=[]
let level = Number(prompt("what level you choose?(1-3)\n 1.easy(8 cards)\n 2.medium (12 cards) \n 3. hard (16 cards)"))
// debugger switchCase
if (level==1){
let cards1= cards.slice(0,4)
 cardDouble= cards1.concat(cards1)

}
else if (level==2){
    let cards2= cards.slice(0,6)
cardDouble= cards2.concat(cards2)

}
else if (level==3){
     cardDouble= cards.concat(cards)

}
else{
    prompt ("sorry, this is not an option")
    
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
    


let playersList=[]


function createPlayer(playerName,score,moves,){
    return{
        playerName,
            score,
            moves,
        }
    }

addNewPlayer()
  
    function addNewPlayer (){
        for(i=1; i<=playerNum;i++){
        let playerName =prompt("enter the name of the "+ i+ " player:")
        let playerName_toUpperCase=playerName.charAt(0).toUpperCase() + playerName.slice(1);
        let score=0
        let moves=0
        let newPlayer= createPlayer(playerName_toUpperCase,score,moves)
        playersList.push(newPlayer)
    }
  }  


  for (i of playersList){
      let listArea=document.getElementById("list");
    // debugger
      let elem2 =document.createElement("div");
      elem2.innerText=`player: ${i.playerName} 
       score: ${i.score}`
      elem2.className="score";
      elem2.setAttribute ("id",i.playerName)
      listArea.appendChild(elem2)
      i.id=document.getElementById(i.playerName)
  }


// let playersList=[
//     { playerName:"a", score:0, id:document.getElementById('player1'), moves:0},
//     { playerName:"b", score:0,id:document.getElementById('player2'),moves:0},
//     { playerName:"c", score:0,id:document.getElementById('player3'),moves:0},
// ]

// let p1= document.getElementById('player1')
// let p2= document.getElementById('player2')
// let p3= document.getElementById('player3')
// p1.innerText=`player ${playersList[0].playerName}\n ${playersList[0].score} `
// p2.innerText=`player ${playersList[1].playerName}\n${playersList[1].score}`
// p3.innerText=`player ${playersList[2].playerName}\n${playersList[2].score} `

let counter=0
let match=0


let flipCards=[]
playersList[counter].id.classList.add('turn')

let flipCard = (event)=>{
        console.log(event.target)
    if (!event.target.classList.contains("show")){
        event.target.classList.add("show")
        if (flipCards.length<2){
            flipCards.push(event.target)
        }
    }
    
    
    if (flipCards.length==2){
        playersList[counter].moves+=1
        if(flipCards[0].innerText==flipCards[1].innerText){
            flipCards=[]
            match+=1
            playersList[counter].score+=1
            glow(playersList[counter])
            let myAudio = document.querySelector('#audio')
            myAudio.play()
            playersList[counter].id.innerText=`player ${ playersList[counter].playerName} 
            score: ${ playersList[counter].score}`
            if (match==cards.length){
                
                
            }

        }
        if(flipCards[0].innerText!=flipCards[1].innerText){
            let myAudio2 = document.querySelector('#audio2')
            myAudio2.play()
                setTimeout(() => {
                    flipCards[0].classList.remove('show');
                    flipCards[1].classList.remove('show');
                    flipCards=[]
                    if(counter== playersList.length-1){
                        playersList[counter].id.classList.remove('turn')
                        counter=0
                        playersList[counter].id.classList.add('turn')
                        return
                    }
                    if (counter< playersList.length-1){
               
                  playersList[counter+1].id.classList.add('turn')
                  playersList[counter].id.classList.remove('turn')
                  counter++
                  
                    }
                }, 1000);
             
        }
       

    }
}
    

;

// for (i of cardDouble){
// let board=document.getElementById("game-table");
// let elem =document.createElement("div");
// elem.innerText=i;
// elem.className="card";
// board.appendChild(elem)
// elem.onclick=flipCard


// }


function glow(object){
    object.id.classList.add('glow')
    setTimeout(() => {
object.id.classList.remove('glow')
}, 1000);
}

for (i of cardDouble){
    let board=document.getElementById("game-table");
    let elem =document.createElement("div");
    elem.innerText=i;
    elem.className="card";
    board.appendChild(elem)
    elem.onclick=flipCard
    
    
    }
