//As featured on https://ideasandpixels.com/articles/elementor-how-to-make-a-column-or-section-a-link/
//
jQuery(document).ready(function() {
 	jQuery("body:not(.elementor-editor-active)").on("click", ".click-child", function() { 
 		var href = jQuery(this).find("a").attr('href'); window.location = "http://your-link-goes-here.com"; 
 	}); 
});
