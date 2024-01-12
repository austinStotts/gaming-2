let roomCreationState = {
    map: "arena1",
    players: "1v1"
}

let maps = document.getElementsByClassName("map");
for(let i = 0; i < maps.length; i++) {
    maps[i].addEventListener("click", (e) => {
        clearMaps();
        e.target.classList.add("selected");
        e.target.classList.remove("unselected");
        // set state to be this map
        roomCreationState.map = e.target.id;
        
    })
}

let clearMaps = () => {
    for(let i = 0; i < maps.length; i++) {
        maps[i].classList.remove("selected");
        maps[i].classList.add("unselected");
    }
}



let players = document.getElementsByClassName("players");
for(let i = 0; i < players.length; i++) {
    players[i].addEventListener("click", (e) => {
        clearPlayers();
        e.target.classList.add("selected");
        e.target.classList.remove("unselected");
        // set state to be this map
        roomCreationState.players = e.target.id;
    })
}

let clearPlayers = () => {
    for(let i = 0; i < players.length; i++) {
        players[i].classList.remove("selected");
        players[i].classList.add("unselected");
    }
}

document.getElementById("makeroombtn").addEventListener("click", (e) => { console.log(roomCreationState) })