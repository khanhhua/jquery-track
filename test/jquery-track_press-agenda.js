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
  var sha = function(data) {
    shaObj = new jsSHA(data, 'TEXT');
    return shaObj.getHash('SHA-256','HEX');
  };

  module('jQuery#track', {
    // This will run before each test in this module.
    setup: function() {
      this.forms = $('#createPressAgendaForm');
    }
  });

  test('Form exits', function(){
    expect(1);
    equal(this.forms.length, 1, 'There must be one form');
  });

  test('Serialize agenda', function(){
    expect(2);
    this.forms.track();
    ok(this.forms[0]._track!==undefined, 'Track must be defined');
    equal(this.forms[0]._track,sha($(this.forms[0]).serialize()), 'Serialized data');
  });
}(jQuery));
