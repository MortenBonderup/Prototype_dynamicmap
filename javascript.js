// Initialize the map
const map = L.map('map').setView([51.505, -0.09], 2);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Pin data
const pinData = {
    red: [
        { coords: [51.5, -0.09], info: "Red Pin 1" },
        { coords: [48.8566, 2.3522], info: "Red Pin 2" }
    ],
    green: [
        { coords: [34.0522, -118.2437], info: "Green Pin 1" },
        { coords: [40.7128, -74.0060], info: "Green Pin 2" }
    ],
    blue: [
        { coords: [35.6895, 139.6917], info: "Blue Pin 1" },
        { coords: [55.7558, 37.6173], info: "Blue Pin 2" }
    ]
};

// Function to add pins based on button click
function addPins(color) {
    // Clear existing pins
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    // Add new pins
    pinData[color].forEach(pin => {
        const marker = L.marker(pin.coords).addTo(map);
        marker.bindPopup(pin.info);
    });
}

// Event listeners for buttons
document.getElementById('redButton').addEventListener('click', () => addPins('red'));
document.getElementById('greenButton').addEventListener('click', () => addPins('green'));
document.getElementById('blueButton').addEventListener('click', () => addPins('blue'));
