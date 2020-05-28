function initMap() {
  let eldoret = {
    lat: 0.5143, 
    lng: 35.2698
  }
  var map = new google.maps.Map(document.getElementById('map'), {
    center: eldoret,
    zoom: 8
  });
}
let div;
div = document.querySelector('#heading');
div.textContent= 'STORE LOCATOR';