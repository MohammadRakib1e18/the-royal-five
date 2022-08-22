/* *******************The common functions************************* */
// Get input-field value by ID
function getIdElementValue(id) {
    let value = parseFloat(document.getElementById(id).value);
    if (isNaN(value)) {
        return 0;
    }
    return value;
}
// Get element by ID
function getIdElement(id) {
    return document.getElementById(id);
}
/* **************************************************** */

// check if the user press any wrong key
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

let selectedPlayerUl = getIdElement("player-list");
let playerDiv = document.querySelectorAll(".player");

// player selection
for (let player of playerDiv) {
    let playerBtn = player.querySelector("#playerButton");
    playerBtn.addEventListener("click", function () {
        if (selectedPlayerUl.children.length === 5) {
            alert("You can't add more than 5 players");
            return;
        }

        playerBtn.style.backgroundColor = "rgb(49, 49, 73)";
        playerBtn.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>SELECTED
        `;
        // playerBtn.appendChild(symbol);
        // playerBtn.innerText = 'SELECTED';
        // playerBtn = symbol + playerBtn;
        playerBtn.setAttribute("disabled", true);

        let playerName = player.querySelector("#playerName");
        let nameText = playerName.innerText;

        let span = document.createElement("span");
        let li = document.createElement("li");
        li.className = "ps-2 py-1 list";
        span.className = "ps-2";
        span.innerText = nameText;
        li.appendChild(span);

        // finally add the list-item
        selectedPlayerUl.appendChild(li);
    });
}

// calculate all players cost(without any other cost)

getIdElement("calculate-btn").addEventListener("click", function () {
    let playerCostText = getIdElement("player-expenses");
    let perPlayerPrice = parseFloat(getIdElementValue("player-price"));

    let totalAddedPlayer = parseFloat(selectedPlayerUl.children.length);

    playerCostText.innerText = "$" + totalAddedPlayer * perPlayerPrice;
});

// Now, calculate all the cost including previous calculated players cost
getIdElement("calculate-total-btn").addEventListener("click", function () {
    // get only the total player balance without dollar sign
    let onlyPlayerCost = parseFloat(
        getIdElement("player-expenses").innerText.split("$")[1]
    );
    let managerCost = parseFloat(getIdElementValue("manager-cost"));
    let coachCost = parseFloat(getIdElementValue("coach-cost"));
    let totalPrice = getIdElement("total");

    totalPrice.innerText = "$" + (onlyPlayerCost + managerCost + coachCost);
});
