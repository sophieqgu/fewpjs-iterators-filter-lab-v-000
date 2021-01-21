// Code your solution here
function findMatching(array_of_drivers, target) {
  return array_of_drivers.filter( driver => driver === target);
}

function fuzzyMatch(array_of_drivers, target) {
  return array_of_drivers.filter( driver => driver.toLowerCase() == target.toLowerCase());
}
