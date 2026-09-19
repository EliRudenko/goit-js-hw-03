function slugify(title) {
    return title.toLowerCase().split(" ").join("-");
}

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

document.getElementById("task-1-output").innerHTML = `
  <p>${slugify("Arrays for begginers")}</p>
  <p>${slugify("English for developer")}</p>
  <p>${slugify("Ten secrets of JavaScript")}</p>
  <p>${slugify("How to become a JUNIOR developer in TWO WEEKS")}</p>
`;