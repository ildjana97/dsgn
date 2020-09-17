/* To animate menu into X*/

$( document ).ready(function() {
    $('#navButton').on('click', function(){
      $(this).toggleClass('change');
      
    })

 
});





jQuery(document).ready(function($){

	$('.modal').on('shown.bs.modal', function (e) {
	    $('.banner_slider').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  arrows: false,
			  fade: true,
			  asNavFor: '.thumbnail_slider'
		  });
		$('.thumbnail_slider').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			asNavFor: '.banner_slider',
			dots: false,
			arrows: true,
			centerMode: true,
			focusOnSelect: true,
			responsive: [
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			        dots: false,
			        arrows: true,
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			    // You can unslick at a given breakpoint now by adding:
			    // settings: "unslick"
			    // instead of a settings object
			  ]

		});
	});
});


      // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(33.770050, -118.193741), // Long Beach

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                      styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
                };


                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);
/*
                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(33.770050, -118.193741),
                    map: map,
                    title: 'Snazzy!'
                });

				    var MarkerIcon = L.icon({
				    iconUrl: './assets/images/PIN.png',
				   
				    iconSize:     [38, 95], // size of the icon
				    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
				    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
				});

				L.marker([33.770050, -118.193741], {icon: MarkerIcon}).addTo(map);
				*/

				
				var marker = new google.maps.Marker({
				  position: new google.maps.LatLng(33.770050, -118.193741),
				  map: map,
				  icon: 'assets/images/PIN.png'
				  });

	            }
  

  

  