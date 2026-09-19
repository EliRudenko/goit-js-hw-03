function makeArray(firstArray, secondArray, maxLength) {
    const combinedArray = [...firstArray, ...secondArray];

    if (combinedArray.length > maxLength) {
        return combinedArray.slice(0, maxLength);
    }

    return combinedArray;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

document.getElementById("task-2-output").innerHTML = `
  <p>${JSON.stringify(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3))}</p>
  <p>${JSON.stringify(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4))}</p>
  <p>${JSON.stringify(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3))}</p>
  <p>${JSON.stringify(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2))}</p>
  <p>${JSON.stringify(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4))}</p>
  <p>${JSON.stringify(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0))}</p>
`;