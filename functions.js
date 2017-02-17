function eat(food) {
  if (typeof food === "string") {
	return food + ' tasted really good.';
  }
  else {
    return "food should be in string.";
  }
}
console.log(eat('bananas'));
