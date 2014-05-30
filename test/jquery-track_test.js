(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#track', {
    // This will run before each test in this module.
    setup: function() {
      this.forms = $('form');
      this.dummy = $('#dummy');
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.forms.track(), this.forms, 'should be chainable');
  });

  test('only works with forms', function() {
    expect(2);
    this.dummy.track();
    var dummyTrack = this.dummy[0]._track;

    this.forms.track();
    var formTrack = this.forms[0]._track;

    ok(dummyTrack===undefined, 'dummyTrack should be undefined');
    ok(formTrack!==undefined, 'formTrack should be defined');
  });

  module('jQuery#serialize', {
    setup: function() {
      this.forms = $('form');
    }
  });

  test('static form data - single text input', function(){
    expect(1);
    this.forms.track();
    var track = this.forms[0]._track;
    strictEqual(track,'number=1', 'track should be defined');
  });

}(jQuery));
