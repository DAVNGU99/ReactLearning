/* fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json)
  .then((data) => console.log(data));

console.log("jonas");
 */

async function g() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  console.log(data);
}

g();
