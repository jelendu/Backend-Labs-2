const db = require("../db.json");
let id = db.length;

module.exports = {
  getHouses: (req, res) => {
    let AllHouses = db;
    res.status(200).send(AllHouses);
  },
  createHouse: (req, res) => {
    let { address, price, imageURL } = req.body;
    let newHouse = {
      id: id,
      address,
      price,
      imageURL,
    };
    db.push(newHouse);
    res.status(200).send(db);
    id++;

    // let newHouse = { ...req.body, id: id };
    // db.push(newHouse);

    // res.status(200).send(db);
    // id++;
  },
  updateHouse: (req, res) => {
    const id = req.params.house_id;
    const { house_id } = req.params;

    for (let i = 0; i < db.length; i++) {
      if (db[i].id === house_id) {
        db.splice(i, 1);
      }
    }
    res.status(200).send(db);
  },
  deleteHouse: (req, res) => {
    const { house_id } = req.params;
    const { type } = req.body;

    console.log(house_id);
    console.log(type);

    for (let i = 0; i < db.length; i++) {
      if (db[i].id === +house_id) {
        if (type === "plus") {
          db[i].rating++;
        }
        if (type === "minus") {
          db[i].rating--;
        }
      }
    }
  },

  // add more logic callbacks
};

// const db = require("./db.json");
// let id = db.length;

// module.exports = {
//   getHouses: (req, res) => {},
//   deleteHouse: (req, res) => {},
//   createHouse: (req, res) => {},
//   updateHouse: (req, res) => {},
// };

// const houses = require("./db");
// let upcomingHouseId = 4;

// module.exports = {
//   getHouses: (req, res) => {
//     res.status(200).send(houses);
//   },

//   deleteHouse: (req, res) => {
//     const { id } = req.params;
//     const index = houses.findIndex((house) => house.id === +id);
//     houses.splice(index, 1);
//     res.status(200).send(houses);
//   },

//   createHouse: (req, res) => {
//     const { address, price, imageURL } = req.body;
//     const newHouse = {
//       id: upcomingHouseId,
//       address,
//       price,
//       imageURL,
//     };
//     houses.push(newHouse);
//     res.status(200).send(houses);
//     upcomingHouseId++;
//   },

//   updateHouse: (req, res) => {
//     const { id } = req.params;
//     const { type } = req.body;
//     const index = houses.findIndex((house) => house.id === +id);

//     if (type === "minus") {
//       houses[index].price -= 10000;
//     } else if (type === "plus") {
//       houses[index].price += 10000;
//     }

//     res.status(200).send(houses);
//   },
// };
