let marks = [85, 62, 90, 78, 88, 95, 70, 60, 100, 82];

console.log("Original Marks:", marks);
console.log("Total Students:", marks.length);
console.log("Highest Mark:", Math.max(...marks));
console.log("Lowest Mark:", Math.min(...marks));

let sum = marks.reduce((total, mark) => total + mark, 0);
let avg = (sum / marks.length).toFixed(2);
console.log("Average Mark:", avg);

let ascending = [...marks].sort((a, b) => a - b);
console.log("Ascending Order:", ascending);

let descending = [...marks].sort((a, b) => b - a);
console.log("Descending Order:", descending);

marks.push(76);
marks.unshift(76);
console.log("After Adding 76 at both ends:", marks);

marks.shift();
console.log("After Removing First Mark:", marks);

marks.pop();
console.log("After Removing Last Mark:", marks);

let has90 = marks.includes(90);
console.log("Does 90 exist in the marks array?", has90);
