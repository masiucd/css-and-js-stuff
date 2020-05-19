type Something = string | boolean | bigint | string[] | number;

function giveMe(param: Something) {
  return param;
}

// console.log(giveMe(['a', 'v', 'c']));
// console.log(giveMe(true));

type Unit = 'METER' | 'CM' | 'KM' | 'MM';
function meterToUnit(distance: number, unit: Unit) {
  if (unit === 'METER') {
    return distance * 1;
  }
  if (unit === 'CM') {
    return distance * 100;
  }
  if (unit === 'KM') {
    return distance / 1000;
  }
  if (unit === 'MM') {
    return distance * 1000;
  }
}

console.log(
  'METER',
  meterToUnit(5, 'METER'),
  'CM',
  meterToUnit(5, 'CM'),
  'KM',
  meterToUnit(5, 'KM'),
  'MM',
  meterToUnit(5, 'MM')
);
