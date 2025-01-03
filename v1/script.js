const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");
// console.dir(btn);

// Create DOM elements: Render facts in list
factsList.innerHTML = "";

// Load data from Supabase
loadFacts();
async function loadFacts() {
  const res = await fetch(
    "https://aqxqkoovvwltfllciaft.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxeHFrb292dndsdGZsbGNpYWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyMTM3NjQsImV4cCI6MjAyODc4OTc2NH0.TRuc9QmCLJjeR0sAJ9SjmuxL7RzPFA1jjuizQcUQ3Ys",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxeHFrb292dndsdGZsbGNpYWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyMTM3NjQsImV4cCI6MjAyODc4OTc2NH0.TRuc9QmCLJjeR0sAJ9SjmuxL7RzPFA1jjuizQcUQ3Ys",
      },
    }
  );
  const data = await res.json();
  console.log(data);
  // const filteredData = data.filter((fact) => fact.category === "society");
  // createFactsList(filteredData);
  createFactsList(data);
}

// createFactsList(initialFacts);
// createFactsList([{ text: "Ashish" }]);
function createFactsList(dataArray) {
  // factsList.insertAdjacentHTML("afterbegin", "<li>Ashish</li>");

  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
        ${fact.text}
      <a
      class="source"
      href="${fact.source}"
      target="_blank">(Source)
      </a>
    </p>
      <span class="tag" style="background-color: ${
        CATEGORIES.find((category) => category.name === fact.category).color
      }">${fact.category}</span>
    </li>`
  );
  // console.log(htmlArr);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

console.log([5, 10, 1, 15, -3].filter((el) => el > 5));
console.log([5, 10, 1, 15, -3].find((el) => el > 5));

// console.log(CATEGORIES.find((category) => category.name === "technology").color);

/*
let votesInteresting = 23;
let votesMindblowing = 5;
const text = "Lisbon is the capital of Portugal";

votesInteresting = votesInteresting + 1;
votesInteresting++;
console.log(votesInteresting); // 25

let totalUpvotes = votesInteresting + votesMindblowing;
console.log("Upvotes:", totalUpvotes); // Upvotes: 30

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect); // true


const parseIntExample = parseInt('45.553cccd');
console.log(parseIntExample);

console.log(parseInt("44.553cccd"));
*/

/*
function calcFactAge(factYear) {
  const currentYear = new Date().getFullYear();
  const factAge = currentYear - factYear;
  if (factAge >= 0) return factAge;
  else return `Impossible Year. Year needs to be less or equal ${currentYear}`;
  // if(factYear > currentYear) {
  //   console.log("This is invalid fact");
  // }
}

const age1 = calcFactAge(2018);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(2039));

// const calcFactAge2 = (factYear) => 2022 - factYear;
const calcFactAge2 = (factYear) =>
  factYear <= new Date().getFullYear()
    ? new Date().getFullYear() - factYear
    : `Impossible Year. Year needs to be less or equal ${new Date().getFullYear()}`;

console.log(calcFactAge2(2018));
console.log(calcFactAge2(2025));
*/

/*
let votesInteresting = 20;
let votesMindblowing = 5;
if (votesInteresting === votesMindblowing) {
  alert("This fact is equally interesting and mindblowing");
} else if (votesInteresting > votesMindblowing) {
  console.log("Interesting Facts!");
} else if (votesInteresting < votesMindblowing) {
  console.log("MindBlowing Facts!");
}

// falsy values: 0, '', null, undefined, NaN
// truthy value: everything else...

if (votesMindblowing) {
  console.log("MINDBLOWING FACT!!");
} else {
  console.log("Not so special...");
}

let votesFalse = 77;
let totalUpvotes = votesInteresting + votesMindblowing;
const message =
  totalUpvotes > votesFalse
    ? "The Fact is true"
    : "Might be false, check other sources";
// alert(message);

const text = "Lisbon is the capital of Portugal";
const upperText = text.toUpperCase();
console.log(upperText);

const str = `The current fact is "${text}". It is ${calcFactAge(
  2018
)} years old. It is probably ${
  totalUpvotes > votesFalse ? "correct" : "not true"
}.`;

console.log(str);
*/

// const fact = ["Lisbon is the capital of portugal", 2015, true];
// console.log(fact[1]);
// console.log(fact.length);
// console.log(fact[fact.length - 1]);

// const [text, createdIn, isCorrect] = fact;
// console.log(createdIn);

// const newFact = [...fact, "Spanish"];
// console.log(newFact);

/*
// ARRAY CALL, ARRAY LENGTH
const fact = ["Lisbon is the capital of portugal", 2015, true];
console.log(fact[2]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

// DESTRUCTURING
const [text, createdIn] = fact;
console.log(text);

// SPREAD OPERATOR
const newFact = [...fact, "society"];
console.log(newFact);

// OBJECTS
const factObj = {
  text: "Lisbon is the capital of portugal",
  category: "society",
  createdIn: 2015,
  isCorrect: true,
  createSummary: function () {
    return `The fact "${
      this.text
    }" is from the ${this.category.toUpperCase()}.`;
  },
};

console.log(factObj.text);
console.log(factObj["text"]);

const { category, isCorrect } = factObj;
console.log(category);
console.log(factObj.createSummary());

// Practice
const factObj2 = {
  text: "Hello, I am under the water",
  type: "meme",
  createdIn: 2022,
  isCorrect: false,
  createSummary: function () {
    return `The fact "${
      this.text
    }" is a type of ${this.type.toUpperCase()}, and so it'll be a ${
      this.isCorrect
    } fact.`;
  },
};

console.log(factObj2.createSummary());


// FOREACH

// [2, 4, 6, 8].forEach(function (el) {
//   console.log(el);
// });


// MAP

// const times10 = [2, 4, 6, 8].map(function (el) {
//   return el * 10;
// });

const times10 = [2, 4, 6, 8].map((el) => el * 10);
console.log(times10);

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function calcFactAge(factYear) {
  const currentYear = new Date().getFullYear();
  const factAge = currentYear - factYear;

  if (factAge >= 0) return factAge;
  else return `Impossible Year. Year needs to be less or equal ${currentYear}`;
}

const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(factAges);
console.log(factAges.join(" & "));
console.log(factAges.join("-"));

*/
