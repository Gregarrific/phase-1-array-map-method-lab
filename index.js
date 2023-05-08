const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const testString = 'what does this keyword mean?'

function titleCased(array)  {
  return tutorials.map(fixString);
}

function fixString(stringArray) {
  let stringSplit = stringArray.split(' ');
  for (let i = 0; i < stringSplit.length; i++) {
    stringSplit[i] = stringSplit[i].charAt(0).toUpperCase() + stringSplit[i].slice(1);
  }
  return stringSplit.join(' ');
}