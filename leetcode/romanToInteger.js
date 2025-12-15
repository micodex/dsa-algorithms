const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s) {
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const current = roman[s[i]];
    const next = roman[s[i + 1]];

    if (!current) {
      throw new Error("Invalid Input");
    }

    if (next && current < next) {
      sum -= current;
    } else {
      sum += current;
    }
  }

  return sum;
}

let number = romanToInt("XXIV"); // 24
console.log(number);

/*
1   I
2	  II
3	  III
4   IV
5	  V
6	  VI
7	  VII
8	  VIII
9   IX
10  X
11  XI
12  XII
13  XIII
14  XIV
15  XV
16  XVI
17  XVII
18  XVIII
19  XIX
20  XX
*/
