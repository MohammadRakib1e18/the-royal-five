// function getIdElement(id, flag = 0) {
//     if (!flag) return document.getElementById(id);
//     if (flag === 1) return parseFloat(document.getElementById(id));
//     let value = parseFloat(document.getElementById(id).value);
//     if (isNaN(value)) {
//         return 0;
//     }
//     return value;
// }

// common function
function getIdElement(id){
    return document.getElementById(id);
}


let selectedPlayerUl = getIdElement('player-list');

{/* <li class="ps-2 py-1 list"> <span class="ps-2">Virat Kohli</span></li> */}

let playerDiv = document.querySelectorAll('.player')
for(let player of playerDiv){
    let playerBtn = player.querySelector('#playerButton');
    playerBtn.style.cursor="pointer";
    playerBtn.addEventListener('click', function(){

        if(selectedPlayerUl.children.length===5){
            alert("You can't add more than 5 players");
            return;
        }
        
        playerBtn.style.backgroundColor='rgb(49, 49, 73)';
        playerBtn.setAttribute('disabled', true);
        

        let playerName = player.querySelector('#playerName');
        let nameText = playerName.innerText;
        
        let span = document.createElement('span');
        let li   = document.createElement('li');
        li.className="ps-2 py-1 list";
        span.className="ps-2";
        span.innerText = nameText;
        li.appendChild(span);

        selectedPlayerUl.appendChild(li);

    })
}

// for(let playerbtn of playerButtons){
//     playerbtn.addEventListener('click', function(){
//         // let parentPlayer = playerbtn.parentNode.getElementById('playerName');
//         // playerbtn.innerText.style.color="red";
//         let text = playerbtn.innerText;
//         text.style.color = 'red';
//         // let newPlayer = playerbtn.previousSibling;
//         // console.log(newPlayer.innerText);
//         // let span = document.createElement('span');
//         // span.className="ps-2";
//     });
// }

