const delegates = require('delegates')

let obj: Record<string, any> = {}

obj.request = {
  path: 'path',
  write: function(){
    console.log('write')
  }
}

delegates(obj, 'request').getter('path')
delegates(obj, 'request').method('write')

console.log(obj)
console.log(obj.write)

