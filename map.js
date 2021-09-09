function initMap(){
    var location ={lat: 19.846500, lng:-90.536888 };
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 4,
        center: location
    });
}