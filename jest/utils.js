export function getStudent(name) {
  return { grade: 1, name: name };
}

export function getPhoneNumber() {
  return "010-0000-0000";
}

export function getEmail() {
  return "imhyelim@gmail.com";
}

export function isOne(x) {
  if (x === 1) return true;
  else throw new Error("x is not One");
}

export function drinkAll(callback, flavour) {
  if (flavour !== "octopus") {
    callback(flavour);
  }
}
