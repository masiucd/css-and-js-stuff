type Something = string | boolean | bigint | string[] | number;

function giveMe(param: Something) {
  return param;
}

console.log(giveMe(['a', 'v', 'c']));
console.log(giveMe(true));
