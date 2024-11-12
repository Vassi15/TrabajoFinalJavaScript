let options = {
    enableHeighAccuracy: true,
    timeout: 5000,
    maximunAge: 0
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        success,
        error,
        options
    );
} else {
    alert("Los servicios de geolocalizacíon no están disponibles en en tu dispositivo");
}


function success(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let map = L.map('mapa',{
        center:[latitude,longitude],
        zoom: 14
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution: 'Mi openStreetMap'}).addTo(map);

    let control = L.Routing.control({
        waypoints: [
            L.latLng(latitude , longitude),
            L.latLng(37.112157 , -4.0309515,7)
        ],
        language:'es',
    }).addTo(map);
    let greenIcon = L.icon({
        iconUrl:'../assets/img/iconomapa/bitmap.webp',
        iconSize:[80,50],
        iconAnchor:[30,30],
        popupAnchor:[-3,-76]
    })
    var circulo = L.circle([37.112157, -4.0309515,7], { 
            color: 'black',    
             fillColor: 'black',  
                fillOpacity: 0.5,    
                 radius: 5000 }).addTo(map)


    let popup = L.popup().setLatLng([37.112157,-4.0309515,7]).setContent('<a>href="http://www.aacv.es"</a><p>JM salon Span | Monica Peña</p><p>Dirección:Santa cruz de tenerife. calle el draguillo</p>');
    let marker = L.marker([37.112157,-4.0309515,7],{icon:greenIcon}).bindPopup(popup).openPopup().addTo(map);
}
function error(){
    let map = L.map('mapa',{
        center:[37.112157 , -4.0309515,7],
        zoom: 14
    })
    let greenIcon = L.icon({
        iconUrl:'../assets/img/iconomapa/bitmap.webp',
        iconSize:[80,50],
        iconAnchor:[30,30],
        popupAnchor:[-3,-76]
    })
    var circulo = L.circle([37.112157, -4.0309515,7], { 
        color: 'black',    
         fillColor: 'black',  
            fillOpacity: 0.5,    
             radius: 500 }).addTo(map)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution: 'Mi openStreetMap'}).addTo(map);
    let popup = L.popup().setLatLng([37.112157,-4.0309515,7]).setContent('<a>href="http://www.aacv.es"</a><p>JM salon Span | Monica Peña</p><p>Dirección:Santa cruz de tenerife. calle el draguillo</p>');
    let marker = L.marker([37.112157,-4.0309515,7],{icon:greenIcon}).bindPopup(popup).openPopup().addTo(map);
}




/*let mapa = L.map('mapa').setView([-9.071612,-78.596312],19)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap </a> contributors'
}).addTo(mapa)

//let marker = L.marker([-9.075507,-78.59556]).bindTooltip('<p>Estoy aqui</p>').openTooltip().addTo(mapa);
//ew#map=19/-9.071612/-78.596312&layers=N

let greenIcon = L.icon({
    iconUrl:'../assets/img/iconomapa/bitmap.webp',
    iconSize:[80,50],
    iconAnchor:[22,94],
    popupAnchor:[-3,-76]
})

let popup = L.popup().setLatLng([-9.071612,-78.596312]).setContent('<a>href="http://www.aacv.es" Estoy Aquí </a>');
let marker = L.marker([-9.071612,-78.596312],{icon:greenIcon}).bindPopup(popup).openPopup().addTo(mapa);*/