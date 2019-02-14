# ts-delegates
ts version of [tj/node-delegates](https://github.com/tj/node-delegates)

## Why do we need delegates?
I am not sure now, but tj write this. May be:
- easy to write `context.request.method` -> `context.method`
- make some propert readonly or writeonly?
  If you just delegates getter, you can not assign to `context.method`

## How does delegates works?
After understand what does delegates do, I know we should use accessor properties.

But this chain call style and his source code was really superise me, I have not idea about this code.

If you give me a task to implement this delegates, I most write code like this `./src/v1.ts` ... how stupid I am..

## I get it ....
delegate(proto, 'request') will return a new object
- this object will store proto and target
- this object like a tool, a servant of proto.
- all methods of this object will server for proto and return itself for chain call.

**How an excellent idea!!!**

- this function require target is property of proto
- can I extend this function so that it can recieve any objects as target? Don't know, may be will cause some bug, memery leak? 

## Object.defineProerty
for some reason, he do not use this, see on issses. 

## constructor
在ECMA规范中，通过internal methods区分了普通函数和构造函数: [[call]] [[constructor]]

但是在实践中，ES只有一个关键字`function`。
这意味着你本意可能是想把这个函数当做构造函数用的，但是别人却把它当做普通函数来用，就有可能产生很多bug。 

这时可以利用到this的绑定机制来区分：

``` js
function Foo() {
  if (!(this instanceof Foo)) {

    // you can throw an Error such as Vue

    // or redirect it to new 
    return new Foo()
  }
```