const assert = require('assert');
const delegate = require('../dist/src/v1');

it('should delegate method', function(){
  let obj = {}

  obj.request = {
    echo: function(bar){
      return bar
    }
  }

  delegate.method(obj, obj.request, 'echo')
  
  assert.strictEqual(obj.echo('aaa'), 'aaa')
})

it('should delegate getters', function(){
  var obj = {};

  obj.request = {
    get type() {
      return 'text/html';
    }
  }

  delegate.getter(obj, obj.request, 'type')

  assert.strictEqual(obj.type, 'text/html')
})

it('should delegate setters', function(){
  var obj = {};

  obj.response = {
    statusCode: 0
  }

  delegate.setter(obj, obj.response, 'statusCode')
  obj.statusCode = 200

  assert.strictEqual(obj.response.statusCode, 200)
})
  
