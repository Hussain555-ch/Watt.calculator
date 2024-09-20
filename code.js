function calculateWattage() {
    const ac1_5Tun = parseFloat(document.getElementById("ac 1.5 tun").value) * 3500 || 0;
    const ac1Tun = parseFloat(document.getElementById("ac 1 tun").value) * 2500 || 0;
    const ledLight = parseFloat(document.getElementById("ledLight").value) * 10 || 0;
    const machinery = parseFloat(document.getElementById("machinery").value) * 2000 || 0;
    const freezer = parseFloat(document.getElementById("freezer").value) * 3000 || 0;
    const bulbs = parseFloat(document.getElementById("bulbs").value) * 100 || 0;
    const cameraLed = parseFloat(document.getElementById("cameraLed").value) * 100 || 0;
    const fan = parseFloat(document.getElementById("fan").value) * 150 || 0;
    const chestFreezer = parseFloat(document.getElementById("chest freezer").value) * 2500 || 0;
    const ledDisplayBoard = parseFloat(document.getElementById("LED display Board").value) * 400 || 0;
    const waterPump = parseFloat(document.getElementById("water pump").value) * 1000 || 0;

    const totalWatts = ac1_5Tun + ac1Tun + ledLight + machinery + freezer + bulbs + cameraLed + fan + chestFreezer + ledDisplayBoard + waterPump;

    const totalKilowattHours = totalWatts / 1000;

    document.getElementById("totalWatts").innerText = totalKilowattHours.toFixed(2) + " kWh";
}
