function pipe (...callbacks) {
  return function (initValue) {
    callbacks.reverse();
    return callbacks.reduce((prev, current) => current(prev), initValue )
  }
}

const fillUser = pipe (
  (user) => ({ ...user, lastName: "Pass" }),
  (user) => ({ ...user, age: 29 }),
  (user) => ({ ...user, city: "Boston" }),
);
