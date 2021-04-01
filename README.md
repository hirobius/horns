# Time Estimates

Number and name of feature: ________#1 Display a Modal________________________

Estimate of time needed to complete: __Med___

Start time: __12:40pm___

Finish time: ___1:20__

Actual time needed to complete: __40m___

---

TODO

Disable Hover on Modal and ADRIAN MILSAP at bottom
Style CSS
fix padding/margin error on the side of the card-container

Construct a dyamically filtered array with only 4 options given the # horns
move that array to a separate component for the form
pass props to the separate component
include the form on the app level
make selection fire and render animals that have the exact amount of horns selected (this may impact the {beastarray} on main)

example filter for Odd Values only:

const oddValues = (arr) => {
  let odds = (number) => {
    if (number % 2 === 1) {
      return number;
    }
  };
  return arr.filter(odds);
};