'use strict';

const arrGroups = [
  'FE2021-5',
  'Fe2020-2',
  'FD2021',
  'fD2022-1',
  'FE2020-3',
  'FD2020/2',
  'fe2021-3',
  'FD2020$5',
  'FE2008-52',
  'Fm2008-23',
  'FM2022-1',
];
  const correct = [];
  const incorrect = [];
arrGroups.forEach((item) => {
  let reg = /^(FE|FD|FM|fe|fd|fm)(20\d{2})(-(\d*))?$/;
    if (reg.test(item)) {
      console.log(`Success ${item}`);
      correct.push(`Success ${item}`);
    return;
    }
    console.log(`Error ${item}`);
  incorrect.push(`Error ${item}`)
});

console.log(correct)
console.log(incorrect)