// Code your solution here
/function findMatching(drivers,name) {
  return drivers.filter(driver =>driver.toLowerCase() === name.toLowerCase());
}
function fuzzyMatch(drivers,testString ) {
  return drivers.filter(driver => driver.startsWith(testString));
}
function matchName(drivers, name) {
  return drivers.filter(driver=> driver.name===name);
}