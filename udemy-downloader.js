// Open up all section tabs
jQuery('.section--section--BukKG [data-purpose="section-label"]').each(function() {
    this.click();
});

// After tabs have opened, open each video and download it
setTimeout(function() {
  var videoLinks = jQuery('.section--section--BukKG li [role="link"]');

  var time = 5000;

  videoLinks.each(function() {
      let videoLink = this;
      setTimeout( function(){
          jQuery('[data-purpose="download-lecture"]').each(function() {
              this.click();
          });
          setTimeout( function() { jQuery(videoLink).click(); }, 2500 );
      }, time)
      time += 5000;
  });
}, 10000);
