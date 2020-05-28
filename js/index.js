function initMap() {
  let eldoret = {
    lat: 34.0522, 
    lng: -118.2437
  }
  var map = new google.maps.Map(document.getElementById('map'), {
    center: eldoret,
    zoom: 8
  });
}
let div;
div = document.querySelector('#heading');
div.textContent= 'STORE LOCATOR';