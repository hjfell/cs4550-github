// JQuery: Novice to Ninja by Earle Castledine & Craig Sharkie

$(document).ready(function() {
  $('#fruits').selectable({
    stop: function() {
      // The user stopped selecting!
      var names = $.map($('.ui-selected, this'), function(element, i) {
        return $(element).text();
      });
      
      $('li', this)
        .filter(function() {
          return ($.inArray($(this).text(), names) != -1);
        })
        .addClass('ui-selected');
    }
  });
});
