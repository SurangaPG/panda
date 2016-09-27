($ => {

  Drupal.behaviors.niceSelect = {
    attach: (context, settings) => {
      $('select').niceSelect()
    }
  }
  
})(jQuery)
