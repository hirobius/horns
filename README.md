# Time Estimates

Number and name of feature: ________#1 Display a Modal________________________

Estimate of time needed to complete: __Med___

Start time: __12:40pm___

Finish time: ___1:20__

Actual time needed to complete: __40m___

---

TODO

Construct a dyamically filtered array with only 4 options given the # horns

example filter for Odd Values only:

const oddValues = (arr) => {
  let odds = (number) => {
    if (number % 2 === 1) {
      return number;
    }
  };
  return arr.filter(odds);
};