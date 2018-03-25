function initMap() {
   var uluru = { lat: 53.3786827, lng: 14.6269007 };
   var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 15,
         center: uluru
   });
   var marker = new google.maps.Marker({
         position: uluru,
         map: map
   });
}