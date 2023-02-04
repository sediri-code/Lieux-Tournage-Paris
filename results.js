window.onload = function() {

  const results = JSON.parse(decodeURIComponent(window.location.search.substring(9)));

  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";


  results.forEach(location => {
    const locationElement = document.createElement("div");
    locationElement.innerHTML = `
      <h2>${location.fields.nom_tournage}</h2>
      <p class="zip-code" data-lat="${location.fields.latitude}" data-lng="${location.fields.longitude}">${location.fields.ardt_lieu}</p>
    `;
    resultsContainer.appendChild(locationElement);
  });

  
  document.querySelectorAll('.zip-code').forEach(function(element) {
    element.addEventListener('click', function() {
      showLocationOnMap(element.dataset.lat, element.dataset.lng);
    });
  });

  function showLocationOnMap(lat, lng) {

    var map = L.map('map').setView([lat, lng], 13);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    L.marker([lat, lng]).addTo(map);
  }
};