// 1. delete prop - replaced delete operator
print(`
let target = { foo: 'bar', baz: 'wat' }
Reflect.deleteProperty(target, 'foo')
`);

let target = { foo: 'bar', baz: 'wat' };
Reflect.deleteProperty(target, 'foo');

print(target);


// 2. Reflect.construct
print(`
const d = Reflect.construct(Date, [1776, 6, 4]);
`);

// const newDate = function() {}; // could override with newDate on 3rd param.
const d = Reflect.construct(Date, [1776, 6, 4] /*, newDate*/ );

printKeyValue('d instanceof Date', d instanceof Date); // true
print('Reflect.getPrototypeOf(d):');
print(Reflect.getPrototypeOf(d));
printKeyValue('d.getFullYear()', d.getFullYear()); // 1776


// 3. Default behavior in Proxy Traps
print(`
const handler = {
  get() {
    return Reflect.get(...arguments);
  }
};

const target2 = { a: 'b' };
const proxy = new Proxy(target, handler);
`);

const handler = {
  get() {
    return Reflect.get(...arguments);
  }
};
const target2 = { a: 'b' };
const proxy = new Proxy(target2, handler);
printKeyValue('proxy.a', proxy.a);
