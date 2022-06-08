//bubbleSort 08Jun'22

// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
const ip1Div: HTMLElement = document.getElementById('ip1');
const op1Div: HTMLElement = document.getElementById('op1');
appDiv.innerHTML = `<h1>bubbleSort Starter</h1>`;

let a: number[] = [2, 1, 0, 33, 7, 1111, 1.1];

console.log(ip1Div);
console.log(appDiv);
ip1Div.innerHTML = `UNSORTED ARRAY : ${a}`;

const bubbleSort = (arrayTobeSorted: number[]): number[] => {
  let a = arrayTobeSorted;
  for (let i: number = 0; i < a.length; i++) {
    for (let j: number = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        [a[i], a[j]] = [a[j], a[i]];
      }
    }
  }
  return a;
};

op1Div.innerHTML = `SORTED ARRAY : ${bubbleSort(a)}`;
