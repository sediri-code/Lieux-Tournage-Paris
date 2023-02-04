 async function searchData() {
    const searchInput = document.getElementById("searchInput").value;
    const response = await fetch(`https://opendata.paris.fr/api/records/1.0/search/?dataset=lieux-de-tournage-a-paris&facet=type_tournage&facet=nom_tournage&facet=nom_realisateur&facet=nom_producteur&facet=ardt_lieu&q=${searchInput}`);
    const data = await response.json();
  
    const results = encodeURIComponent(JSON.stringify(data.records));
    window.location.href = `results.html?results=${results}`;
  } 