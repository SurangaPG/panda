($ => {

  Drupal.behaviors.niceSelect = {
    attach: (context, settings) => {
      $('select').once().niceSelect()
    }
  }
  
})(jQuery)
