const delegate = require('./v1');

let obj: Record<string, any> = {};

obj.request = {
  echo: function(bar){
    // assert(this == obj.request);
    return bar;
  }
};
delegate.method(obj, obj.request, 'echo')

console.log(obj)
console.log(obj.echo('hello') === 'hello')