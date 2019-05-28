(function ($) {
	"use strict";
    
    /*----------------------------
    START - Google Map Active
    ------------------------------ */
	if ($.fn.gmap3) {
		var center = [47.772323, -112.214897];
	    $('.google-map')
		  .gmap3({
			center:[41.850033, -87.650052],
			zoom:15,
			mapTypeId: "shadeOfGrey", // to select it directly
			mapTypeControlOptions: {
			  mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
			}
		  })
		  .styledmaptype(
			"shadeOfGrey",
			[
			  {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},
			  {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
			  {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
			  {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
			  {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
			  {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},
			  {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},
			  {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},
			  {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},
			  {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},
			  {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},
			  {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},
			  {"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}
			]
		);
	}

}(jQuery));