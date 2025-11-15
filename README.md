🇮🇳 @india-geo-state-finder
Find the corresponding Indian State or Union Territory for any given Latitude and Longitude coordinate.

A fast, lightweight utility built on static GeoJSON data for quick, offline geospatial lookups within India, eliminating the need for external API calls.

🚀 Installation
Install the package using npm:

Bash

npm install @india-geo-state-finder
💡 Quick Usage
The package exports a single function, findState(lat, lon), which returns the state name or null if the coordinates fall outside any defined boundary.

Example: Finding the State of Maharashtra
JavaScript

const findState = require('@india-geo-state-finder');

// Coordinates for Mumbai (Latitude: 18.9582, Longitude: 72.8321)
const lat = 18.9582; 
const lon = 72.8321;

const state = findState(lat, lon); 

console.log(state); 
// Output: 'Maharashtra' 

if (state) {
  console.log(`The coordinates fall within: ${state}`);
} else {
  console.log("The coordinates are outside India's boundaries.");
}
ES Module (ESM) Import
If you are using modern Node.js or an ES Module environment ("type": "module" in package.json):

JavaScript

import findState from '@india-geo-state-finder';

// Coordinates for Chennai, Tamil Nadu
const state = findState(13.0827, 80.2707); 
console.log(state); 
// Output: 'Tamil Nadu' 
⚙️ How It Works
This package performs a Point-in-Polygon (PIP) test using the following structure:

Static Data: It bundles a lightweight, comprehensive GeoJSON file containing the official boundaries of all Indian States and Union Territories.

Turf.js: It leverages the highly optimized geospatial algorithms from the Turf.js library to quickly check if the input point (lat, lon) falls inside the polygon of any state.

Result: It returns the state name from the matching feature's properties, making the lookup instantaneous and reliable without needing external service calls.

🤝 Contribution
Contributions are welcome! If you find a bug, inaccuracy in the state boundaries, or want to suggest a feature:

Fork the repository.

Create your feature branch (git checkout -b feature/amazing-feature).

Commit your changes (git commit -m 'feat: added amazing feature').

Push to the branch (git push origin feature/amazing-feature).

Open a Pull Request.

📄 License
Distributed under the MIT License. See LICENSE for more information.