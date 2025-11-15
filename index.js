const booleanPointInPolygon = require('@turf/boolean-point-in-polygon').default;
const statesData = require('.data/india-state-boundaries.geojson');
const turf = require('@turf/helpers');

/**
 * Finds the Indian state containing the given latitude and longitude.
 * @param {number} lat - The latitude (e.g., 28.7041 for Delhi).
 * @param {number} lon - The longitude (e.g., 77.1025 for Delhi).
 * @returns {string | null} The name of the state, or null if not found.
 */
function findState(lat, lon) {
  // GeoJSON/Turf.js uses [longitude, latitude] convention (X, Y)
  const point = turf.point([lon, lat]);

  for (const feature of statesData.features) {
    
    const stateNameKey = 'stateName'; // **CHECK YOUR GeoJSON FILE for the correct key!**
    
    if (booleanPointInPolygon(point, feature.geometry)) {
      return feature.properties[stateNameKey];
    }
  }

  return null;
}

module.exports = findState;