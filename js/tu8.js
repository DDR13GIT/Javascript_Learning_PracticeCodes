let age = 65;
if (age == 65) {
  console.log("You can vote");
} else if (age === "65") {
  // 3 eual sign is used to compare both value and type
  console.log("You can vote");
} else if (age !== "65") {
  // 2 eual sign and one ! is used to compare both value and type
  console.log("You can vote");
} else {
  console.log("You can't vote");
}

switch (age) {
  case 18:
    console.log("You can vote");
    break;

  case 20:
    console.log("You can vote");
    break;
  default:
    console.log("You are a unknown person to vote");
    break;
}
