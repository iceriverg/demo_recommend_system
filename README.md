<!DOCTYPE html>
<html>
  <head>
    <title>Simple Map</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <style>
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      #map {
        max-width: 600px;
        height: 600px;
      }
      #searchBox {
          margin-top: 20px;
          padding: 10px;
          font-size: 20px;
      }
      #placeInfo {
        line-height: 1.8em;
        font-size: 20px;
      }
      #placeInfo .smallerText {
          font-weight: bold;
      }
      .two-col {
           width:100%;
           margin:0 auto;
        }
        .col-one {
           float:left;
           width:40%;
        }
        .col-one #map {
            margin: 0 auto;
            text-align: center;
        }
        .col-two {
           float:right;
           width:52%;
           padding: 2em;
            border: 3px solid blue;
            -webkit-border-radius: 30px;
-moz-border-radius: 20px;
border-radius: 20px;
        }
    </style>
  </head>
  <body>
    <h1>LGFnet Deep Network to Dig Out More Attractions with Similar Features!</h1>
    <p>
        Search for "Nyhavn" or "Nyhavn, Copenhagen" to get more attractions in Copenhagen with features similar with Nyhavn buildings
    </p>
    <input id="searchBox" type="text" name="searchBox" placeholder="Search Places">
    <div class="two-col">
        <div class="col-one"><div id="map"></div></div>
        <div class="col-two">
        <div id="placeInfo">Attractions with Similar Features in Other Places in Copenhangen Will Show Up Here!</div>
        </div>
    </div>
    <!--  References the searchCode.js script file  -->
    <script>
      function setInput(place){
          document.getElementById('searchBox').value = "UMBC, Hilltop Circle, Baltimore, MD, United States";
      }
    </script>
    <script src="searchCode.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDcmVh8M4yKDZ38XUon2rhCBY7_nwBNgyY&libraries=places&callback=initMap" async defer></script>

  </body>
</html>
