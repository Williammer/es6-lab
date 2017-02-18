// 1. Inifinte get values.
print(`
1. Inifinte get values.

	function* fibs() {
	  let a = 0;
	  let b = 1;
	  while (true) {
	    yield a;
	    [a, b] = [b, a + b];
	  }
	}

	let [a, b, c, d, e, f] = fibs();
`);

function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let [a, b, c, d, e, f] = fibs();

printKeyValue('a', a);
printKeyValue('b', b);
printKeyValue('c', c);
printKeyValue('d', d);
printKeyValue('e', e);
printKeyValue('f', f);


// 2. Generator used for Iterator
print(`
2. Generator used for Iterator

	const infinity = {
	  [Symbol.iterator]: function*() {
	    var c = 1;
	    for (;;) {
	      yield c++;
	    }
	  }
	}
	for (const n of infinity) {
	  // truncate the sequence at 1000
	  if (n > 10)
	    break;
	}
`);

const infinity = {
  [Symbol.iterator]: function*() {
    var c = 1;
    for (;;) {
      yield c++;
    }
  }
}

for (const n of infinity) {
  // truncate the sequence at 1000
  if (n > 10)
    break;
  print(n);
}
