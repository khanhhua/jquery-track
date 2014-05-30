/*
 * jquery track
 * 
 *
 * Copyright (c) 2014 Khanh Hua
 * Licensed under the MIT license.
 */

(function ($) {
  var console;
  if (window && !window.console) {
    console = window.console;
  } else {
    console = {
      warn:function(){},
      log:function(){}
    };
  }
  // Collection method.
  $.fn.track = function () {
    return this.each(function () {
      if (this.nodeName.toLowerCase()!=='form') {
        console.warn('Only FORM elements are supported');
        return this;
      }
      this._track = '';

      var form = $(this);
      this._track = form.serialize();
    });
  };
}(jQuery));
