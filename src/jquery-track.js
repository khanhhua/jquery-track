/*
 * jquery track
 * 
 *
 * Copyright (c) 2014 Khanh Hua
 * Licensed under the MIT license.
 */

(function ($) {
  var console, options;
  if (window && !window.console) {
    console = window.console;
  } else {
    console = {
      warn:function(){},
      log:function(){}
    };
  }
  var sha = function(data) {
    shaObj = new jsSHA(data, 'TEXT');
    return shaObj.getHash('SHA-256','HEX');
  };

  var tracked = [];
  // Collection method.
  $.fn.track = function (o) {
    var defaults = {
      message: 'Are you sure?'
    };
    options = $.extend(defaults,o);

    return this.each(function () {
      if (this.nodeName.toLowerCase()!=='form') {
        console.warn('Only FORM elements are supported');
        return this;
      }
      var form = $(this);
      this._track = sha(form.serialize());
      tracked.push(this);
    });
  };

  var unloadHandler = function(event) {
    for(var i=0;i<tracked.length;i++) {
      $(tracked[i]).blur();
      var recent = sha($(tracked[i]).serialize());
      if (recent!==tracked[i]._track) {
        return options.message;
      }
    }
  };

  window.onbeforeunload = unloadHandler;
}(jQuery));
