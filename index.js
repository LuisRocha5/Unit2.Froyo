// Function to prompt the user for froyo flavors
const order = () => {
  return prompt("Please enter your froyo flavors separated by commas (no space after the comma):");
}
// Prompt the user for froyo flavors
const orderFlavored = order();

// Count the occurrences of each flavor
const countFroyo = (orderFlavored) => {
  const froyoFlavors = orderFlavored.split(",");

  const flavorCounts = {};

  for (let i = 0; i < froyoFlavors.length; i++) {
    const flavor = froyoFlavors[i];
    if (flavorCounts[flavor] === undefined) {
      flavorCounts[flavor] = 1;
    } else {
      flavorCounts[flavor]++;
    }
  };

  return flavorCounts;
}

// Function to display the flavor counts in the console
const displayFlavorCounts = (flavorCounts) => {
  console.log("Flavor Count");
  for (const flavor in flavorCounts) {
    console.log(`${flavor} ${flavorCounts[flavor]}`);
  }
}

// Count the froyo flavors
const flavorCounts = countFroyo(orderFlavored);

// Display the flavor counts in the console
console.log(flavorCounts);
