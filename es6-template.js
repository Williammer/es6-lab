// basic template parse with es6 template literal tag function
function getFullString(strings, ...interpolatedValues) { // `...` essentially slices the arguments for us.
  return strings.reduce((total, current, index) => { // use an arrow function for brevity here
    total += current;
    console.log('index: ' + index + ' | current: ' + current);

    if (interpolatedValues.hasOwnProperty(index)) {
      total += interpolatedValues[index];
      console.log("interpolatedValues[index]: " + interpolatedValues[index]);
    }
    return total;
  }, '');
}


const sb = 'SB',
  sbs = 'SBS';
getFullString `basic template: Hello ${sb} and and ${sbs}`;


// nested interpolated values
