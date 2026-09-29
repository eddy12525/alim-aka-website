document.getElementById('year').textContent = new Date().getFullYear();

// Fill the location field with a Google Maps link to the driver's current position
const locateBtn = document.getElementById('locate');
const locationInput = document.getElementById('location');

if (locateBtn && 'geolocation' in navigator) {
  locateBtn.addEventListener('click', () => {
    locateBtn.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const lat = coords.latitude.toFixed(5);
        const lng = coords.longitude.toFixed(5);
        locationInput.value = `https://maps.google.com/?q=${lat},${lng}`;
        locateBtn.textContent = 'Location added ✓';
      },
      () => {
        locateBtn.textContent = 'Use my location';
        locationInput.placeholder = 'Could not get location. Type it in.';
        locationInput.focus();
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  });
} else if (locateBtn) {
  locateBtn.hidden = true;
}
