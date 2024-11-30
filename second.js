function calculateWattage() {
    // Get values from the form inputs
    const ac15tun = document.getElementById('ac 1.5 tun').value;
    const ac1tun = document.getElementById('ac 1 tun').value;
    const ledLight = document.getElementById('ledLight').value;
    const machinery = document.getElementById('machinery').value;
    const freezer = document.getElementById('freezer').value;
    const bulbs = document.getElementById('bulbs').value;
    const cameraLed = document.getElementById('cameraLed').value;
    const airConditionFan = document.getElementById('airConditionFan').value;
    const parkingLights = document.getElementById('parkingLights').value;
    const ledDisplayBoard = document.getElementById('LED display Board').value;
    const waterPump = document.getElementById('water pump').value;

    
    const totalWatts = 
        (ac15tun * 3500) +
        (ac1tun * 2500) +
        (ledLight * 10) +
        (machinery * 2000) +
        (freezer * 3000) +
        (bulbs * 100) +
        (cameraLed * 100) +
        (airConditionFan * 150) +
        (parkingLights * 200) +
        (ledDisplayBoard * 400) +
        (waterPump * 1000);

    // Convert total watts to kilowatts
    const totalKilowatts = totalWatts / 1000;

    // Ask user for the number of hours the devices are used
    const hoursUsed = prompt("Enter the number of hours these devices are used per day:");

    // Calculate kWh
    const totalKWh = totalKilowatts * hoursUsed;

    // Display the result
    document.getElementById('totalWatts').innerText = `${totalWatts} watts (${totalKWh.toFixed(2)} kWh)`;
}
