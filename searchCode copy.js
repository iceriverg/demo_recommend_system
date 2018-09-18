// added map
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.2555, lng: -76.7113},
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
var input = document.getElementById('searchBox');
  var searchBox = new google.maps.places.SearchBox(input);

// check for bounds to change and sets the bounds
// based on search result
map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

// stores the location markers we add
var markers = [];

// below is the listener for the searchBox
searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();
    console.log(places[0]);
    var placeDiv = document.getElementById('placeInfo');
    placeDiv.innerHTML = places[0]['formatted_address'] + "<br>";
    
    var photos = places[0]['photos'];
    
    console.log(typeof photos);
    
    var photoUrls1 = [
    'file:///Users/rihuazeng/Desktop/google-maps-api-tutorial-master2/CopenWeek/02_0271_2014-09_y_c01.jpg',
     'file:///Users/rihuazeng/Desktop/google-maps-api-tutorial-master2/CopenWeek/02_0255_2017-06_y_c01.jpg',
     'file:///Users/rihuazeng/Desktop/google-maps-api-tutorial-master2/CopenWeek/02_0255_2017-06_y_c02.jpg',
     'file:///Users/rihuazeng/Desktop/google-maps-api-tutorial-master2/CopenWeek/02_0917_2016-07_y_c02.jpg',
     'file:///Users/rihuazeng/Desktop/google-maps-api-tutorial-master2/CopenWeek/02_0227_2015-03_y_c01.jpg',
    'file:///Users/rihuazeng/Desktop/google-maps-api-tutorial-master2/CopenWeek/02_1156_2016-01_y_c01.jpg',
        
    ];
    var photoUrls2 = [
    'file:///Users/rihuazeng/Desktop/google-maps-api-tutorial-master2/CopenWeek/OrstedsPark_002.jpg',
     'file:///Users/rihuazeng/Desktop/google-maps-api-tutorial-master2/CopenWeek/Torvehallerne_007.jpg',
     'file:///Users/rihuazeng/Desktop/google-maps-api-tutorial-master2/CopenWeek/Kalaset_002.jpg',
     'file:///Users/rihuazeng/Desktop/google-maps-api-tutorial-master2/CopenWeek/Norreport_001.jpg',
     'file:///Users/rihuazeng/Desktop/google-maps-api-tutorial-master2/CopenWeek/OrstedsPark_003.jpg',
    'file:///Users/rihuazeng/Desktop/google-maps-api-tutorial-master2/CopenWeek/QueenLouiseBridge_002.jpg',
     'file:///Users/rihuazeng/Desktop/google-maps-api-tutorial-master2/CopenWeek/OrstedsPark_001.jpg',
     'file:///Users/rihuazeng/Desktop/google-maps-api-tutorial-master2/CopenWeek/QueenLouiseBridge_001.jpg',
     'file:///Users/rihuazeng/Desktop/google-maps-api-tutorial-master2/CopenWeek/Torvehallerne_005.jpg',
     'file:///Users/rihuazeng/Desktop/google-maps-api-tutorial-master2/CopenWeek/Norreport_004.jpg',
                    ];
    
    
    try{
        for(var i = 0; i < photoUrls1.length; i++){
            //var photoUrl = photos[i].getUrl({'maxWidth': 200, 'maxHeight': 200});
             photoUrl1 = photoUrls1[i];
             var L1 = photoUrl1.length;
             var N_b = i +1;
             placeDiv.innerHTML += "------------------------------------------------------------------------------------" + "<br>";
             placeDiv.innerHTML += "<p><font size='5' color='red'><b>Building # "+N_b +" in Nyhavn:</b><i> "+photoUrl1.substring(L1-25,L1)+"</i></font></p>" 
             var imgStr = "<img src='"+ photoUrl1 +"' alt='image'>";
             placeDiv.innerHTML += imgStr;
             
             var j = i + 1; 
             var k = i + 2;
             photoUrl2 = photoUrls2[i];
             photoUrl3 = photoUrls2[j];
             photoUrl4 = photoUrls2[k];
            
             var L2 = photoUrl2.length;
             var L3 = photoUrl3.length;
             var L4 = photoUrl4.length;
             
            
             placeDiv.innerHTML += "<p><font size='4' color='blue'><i>Buildings found with similar features with Nyhavn # "+N_b+" at:</i><br><b>"+photoUrl2.substring(75,L2-8)+"</b><br>" ;
             var imgStr = "<img src='"+ photoUrl2 +"' alt='image'>";
             placeDiv.innerHTML += imgStr;
            
             placeDiv.innerHTML += "<p><font size='4' color='blue'>" +  photoUrl3.substring(75,L3-8) + "</p><br>";
             var imgStr = "<img src='"+ photoUrl3 +"' alt='image'>";
             placeDiv.innerHTML += imgStr;
            
             placeDiv.innerHTML += "<br>" +  photoUrl4.substring(75,L4-8) + "<br>";
             var imgStr = "<img src='"+ photoUrl4 +"' alt='image'>";
             placeDiv.innerHTML += imgStr;
             placeDiv.innerHTML += "<br>" +"------------------------------------------------------------------------------------" + "<br>";
            
        }
        var reviews = places[0]['reviews'];
        console.log(reviews);
        placeDiv.innerHTML += "<br><ol class='smallerText'>";
        for(var index in reviews){

            placeDiv.innerHTML += "<li>" + reviews[index]["text"] + "</li>";
            
        }
        placeDiv.innerHTML += "</ol>";
    }catch(err){
        placeDiv.innerHTML += "Sorry No Images!";
    }
    if (places.length == 0) {
      return;
    }
    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];
    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
    
});
    
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

}
