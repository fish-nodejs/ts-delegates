var assert = require('assert');
var delegate = require('../dist/index');

describe('.method(name)', function(){
  it('should delegate methods', function(){
    var obj = {};

    obj.request = {
      echo: function(bar){
        // assert(this == obj.request);
        return bar;
      }
    };
    delegate.method(obj, obj.request, 'echo')

    assert.strictEqual(obj.echo('aaa'), 'aaa')
  })
})



describe('.access(name)', function(){
  it('should delegate getters and setters', function(){
    var obj = {};

    obj.request = {
      get type() {
        return this._type.toUpperCase();
      },

      set type(val) {
        this._type = val;
      }
    }

    delegate(obj, 'request').access('type');

    obj.type = 'hey';
    obj.type.should.equal('HEY');
  })
})

describe('.fluent(name)', function () {
  it('should delegate in a fluent fashion', function () {
    var obj = {
      settings: {
        env: 'development'
      }
    };

    delegate(obj, 'settings').fluent('env');

    obj.env().should.equal('development');
    obj.env('production').should.equal(obj);
    obj.settings.env.should.equal('production');
  })
})
