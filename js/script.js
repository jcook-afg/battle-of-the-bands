// JavaScript source code
// Save the band seeds to localStorage
function saveSeeds() {
    let seeds = {
        division1: [],
        division2: [],
        division3: [],
        division4: []
    };

    for (let i = 1; i <= 16; i++) {
        seeds.division1.push(document.getElementById(`division1-seed${i}`).value);
        seeds.division2.push(document.getElementById(`division2-seed${i}`).value);
        seeds.division3.push(document.getElementById(`division3-seed${i}`).value);
        seeds.division4.push(document.getElementById(`division4-seed${i}`).value);
    }

    localStorage.setItem('bandSeeds', JSON.stringify(seeds));
    alert("Seeds saved!");
}

// Load seeds into the bracket
window.onload = function () {
    let seeds = JSON.parse(localStorage.getItem('bandSeeds'));

    if (seeds) {
        for (let i = 1; i <= 16; i++) {
            document.getElementById(`division1-seed${i}`).innerText = seeds.division1[i - 1];
            document.getElementById(`division2-seed${i}`).innerText = seeds.division2[i - 1];
            document.getElementById(`division3-seed${i}`).innerText = seeds.division3[i - 1];
            document.getElementById(`division4-seed${i}`).innerText = seeds.division4[i - 1];
        }
    }
};

// Advance the winning band to the next round
function advance(seedId) {
    let winner = document.getElementById(seedId).innerText;
    localStorage.setItem(seedId + '-winner', winner);
    alert(winner + ' advances!');
}

// Final match logic
function declareWinner() {
    let finalist1 = localStorage.getItem('finalist1');
    let finalist2 = localStorage.getItem('finalist2');
    alert(finalist1 + ' vs ' + finalist2 + ' - Winner Declared!');
}

// Reset bracket but retain seeds
function resetBracket() {
    localStorage.removeItem('division1-winner');
    localStorage.removeItem('division2-winner');
    localStorage.removeItem('division3-winner');
    localStorage.removeItem('division4-winner');
    alert("Bracket reset!");
}

// Clear all data
function clearSeeds() {
    localStorage.clear();
    alert("Seeds and bracket cleared!");
}
