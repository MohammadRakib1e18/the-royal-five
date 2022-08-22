// common function
function getIdElementValue(id) {
    let value = parseFloat(document.getElementById(id).value);
    if (isNaN(value)) {
        return 0;
    }
    return value;
}

// common function
function getIdElement(id) {
    return document.getElementById(id);
}

let selectedPlayerUl = getIdElement("player-list");

let playerDiv = document.querySelectorAll(".player");
for (let player of playerDiv) {
    let playerBtn = player.querySelector("#playerButton");
    playerBtn.style.cursor = "pointer";
    playerBtn.addEventListener("click", function () {
        if (selectedPlayerUl.children.length === 5) {
            alert("You can't add more than 5 players");
            return;
        }

        playerBtn.style.backgroundColor = "rgb(49, 49, 73)";
        playerBtn.setAttribute("disabled", true);

        let playerName = player.querySelector("#playerName");
        let nameText = playerName.innerText;

        let span = document.createElement("span");
        let li = document.createElement("li");
        li.className = "ps-2 py-1 list";
        span.className = "ps-2";
        span.innerText = nameText;
        li.appendChild(span);

        selectedPlayerUl.appendChild(li);
    });
}

let allInputs = document.querySelectorAll("input");
for (let input of allInputs) {
    input.addEventListener("keyup", function () {
        if (isNaN(input.value) === true) {
            alert("Sorry! Only Positive Number is allowed");
            input.value = "";
        } else if (parseFloat(input.value) < 0) {
            alert("Sorry! Negative number is not allowed");
            input.value = "";
        }
    });
}

getIdElement("calculate-btn").addEventListener("click", function () {
    let playerCostText = getIdElement("player-expenses");
    let perPlayerPrice = parseFloat(getIdElementValue("player-price"));

    let totalAddedPlayer = parseFloat(selectedPlayerUl.children.length);


    playerCostText.innerText = "$"+ (totalAddedPlayer * perPlayerPrice);
});


getIdElement("calculate-total-btn").addEventListener("click", function () {
    let onlyPlayerCost = parseFloat(getIdElement("player-expenses").innerText.split('$')[1]);
    let managerCost = parseFloat(getIdElementValue("manager-cost"));
    let coachCost = parseFloat(getIdElementValue("coach-cost"));
    let totalPrice = getIdElement('total');

    totalPrice.innerText = "$" + (onlyPlayerCost + managerCost + coachCost)
});
