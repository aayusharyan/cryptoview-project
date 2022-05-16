
function convertToJSON(response) {
  return response.json();
}

document.getElementById('nav-search-button').addEventListener('click', function() {
  window.location.href = "/search.html";
})