/**
 * 1. basic template parse with es6 template literal tag function
 */
function getFullString(strings, ...interpolatedValues) { // `...` essentially slices the arguments for us.
  return strings.reduce((total, current, index) => { // use an arrow function for brevity here
    total += current;
    print('index: ' + index + ' | current: ' + current);

    if (interpolatedValues.hasOwnProperty(index)) {
      total += interpolatedValues[index];
      print("interpolatedValues[index]: " + interpolatedValues[index]);
    }
    return total;
  }, '');
}

const sb = 'SB',
  sbn = 'n-SB',
  sbs = 'SBS';
getFullString `basic template: Hello
${`nested template: ${sbn}`} and and ${sbs}`;



/**
 * 2. cleaner decoupled template fragments
 */
const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1).toUpperCase();
};

const deleteBtn = ({person, isAdmin}) => {
    return isAdmin ? `<button>Delete ${capitalize(person)}</button>`: '';
};

const pplItem = ({person, isAdmin}) => {
  return `<li>
      <span>${capitalize(person)}</span>
      ${deleteBtn({person, isAdmin})}
    </li>`;
};

const pplList = ({people, isAdmin}) => {
  return `<ul>
    ${people.map(person => `${pplItem({person, isAdmin})}`)}
    </ul>`;
};

const page3 = ({ people, isAdmin }) => {
  return `<h2>People</h2>
    ${pplList({ people, isAdmin })}`;
};

appendToBody(page3({ people: ['Keith', 'Dave', 'Amy' ], isAdmin: true }));
