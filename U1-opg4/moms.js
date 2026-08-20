"use strict";
function beregnMoms(beloeb, moms = 25) {
  return beloeb + (beloeb * moms) / 100;
}

console.log(beregnMoms(100));
