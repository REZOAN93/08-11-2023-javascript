const student = {
  name: "Sakib Khan",
  id: 123,
  address: "movie cinema",
  isSingle: true,
  friends: ["apu", "Rezza", "Ena", "Nazmul", "Tasfeen"],
  act:function () {
    console.log("Act like Sakib Khan")
  },
  movies: [
    { name: "no 1", year: 2015 },
    { name: "King Khan", year: 2018 },
  ],
  car: {
    brand: "tesla",
    price: 5000000,
    made: 2025,
    manufacturer: {
      name: "Tesla",
      ceo: "Elon Musk",
      country: "Usa",
    },
  },
};

console.log(student);
console.log(student.friends);
console.log(student.car);
console.log(student.car.manufacturer);
student.act()

