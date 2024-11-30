// TODO: Manually input Watt power through text input
// TODO: List of appliances should be retrieved from JavaScript rather than hardcoded in HTML
// TODO: User can add new appliances in the given list and can remove them
// TODO: Browser can remember the list of appliances and their values and should display in next time when application is loaded

function calculateWattage() {
    const ac1_5tun = document.getElementById('ac1_5tun').value * 3500;
    const ac1tun = document.getElementById('ac1tun').value * 2500;
    const ledLight = document.getElementById('ledLight').value * 10;
    const chiller = document.getElementById('chiller').value * 2000;
    const freezer = document.getElementById('freezer').value * 3000;
    const bulbs = document.getElementById('bulbs').value * 100;
    const cameraLed = document.getElementById('cameraLed').value * 100;
    const fan = document.getElementById('fan').value * 150;
    const chestFreezer = document.getElementById('chestFreezer').value * 200;
    const signBoard = document.getElementById('signBoard').value * 400;

    const totalWatts = ac1_5tun + ac1tun + ledLight + chiller + freezer + bulbs + cameraLed + fan + chestFreezer + signBoard;

    const hoursUsed = document.getElementById('hoursUsed').value;

    const totalKWh = (totalWatts / 1000) * hoursUsed;

    // Display results
    document.getElementById('totalWatts').innerText = totalWatts.toFixed(2);
    document.getElementById('totalKWh').innerText = totalKWh.toFixed(2);
}