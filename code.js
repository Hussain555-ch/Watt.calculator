function calculateWattage() {
    const ac1_5Tun = parseFloat(document.getElementById("ac 1.5 tun").value) * 3500;
    const ac1Tun = parseFloat(document.getElementById("ac 1 tun").value) * 2500;
    const ledLight = parseFloat(document.getElementById("ledLight").value) * 10;
    const machinery = parseFloat(document.getElementById("machinery").value) * 2000;
    const freezer = parseFloat(document.getElementById("freezer").value) * 3000;
    const bulbs = parseFloat(document.getElementById("bulbs").value) * 100;
    const cameraLed = parseFloat(document.getElementById("cameraLed").value) * 100;
    const fan = parseFloat(document.getElementById("fan").value) * 150;
    const parkingLights = parseFloat(document.getElementById("parkingLights").value) * 200;
    const ledDisplayBoard = parseFloat(document.getElementById("LED display Board").value) * 400;
    const waterPump = parseFloat(document.getElementById("water pump").value) * 1000;

    const totalWatts = ac1_5Tun + ac1Tun + ledLight + machinery + freezer + bulbs + cameraLed + airConditionFan + parkingLights + ledDisplayBoard + waterPump;

    const totalKilowattHours = totalWatts / 1000;

    document.getElementById("totalWatts").innerText = totalKilowattHours.toFixed(2);
}                                                                                                                                                                                                                                      
