// Funktion der beregner et beløb med moms
// moms har en default-værdi på 25%
"use strict";
function beregnMoms(beloeb, moms = 25) {
  // Finder momsbeløbet og lægger det oven i det oprindelige beløb
  console.log(beloeb + (beloeb * moms) / 100);
}

// Kalder funktionen med beløbet 100
// Da der ikke står en moms, bruges default-værdien 25%
beregnMoms(100);
