"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Subcategories",
      [
        {
          name: "PlayStation 5",
        },
        {
          name: "Audio",
        },
        {
          name: "Puzzles",
        },
        {
          name: "TV & Home Theater",
        },
        {
          name: "Cell Phones", // 5
        },
        {
          name: "Virtual Reality", // 6
        },
        {
          name: "Nintendo Switch", // 7
        },
        {
          name: "Controllers", // 8
        },
        {
          name: "Trading Cards", // 9
        },
        {
          name: "Board Games", // 10
        },
        {
          name: "Accessories", // 11
        },
        {
          name: "Stuffed Animals & Plush", // 12
        },
        {
          name: "Xbox One", // 13
        },
        {
          name: "PlayStation 4", // 14
        },
        {
          name: "Xbox Series X", // 15
        },
        {
          name: "PC Gaming", // 16
        },
        {
          name: "Smart Home Automation", // 17
        },
        {
          name: "Cameras", // 18
        },
        {
          name: "Drone", // 19
        },
        {
          name: "Scooters & Ride Ons", // 20
        },
        {
          name: "NERF", // 21
        },
        {
          name: "Building & Construction Sets", // 22
        },
        {
          name: "Dolls & Dollhouses", // 23
        },
        {
          name: "Arts & Crafts Toys", // 24
        },
        {
          name: "Play Vehicles", // 25
        },
        {
          name: "Bags", // 26
        },
        {
          name: "Watches", // 27
        },
        {
          name: "Jackets & Outerwear", // 28
        },
        {
          name: "Pants & Shorts", // 29
        },
        {
          name: "T-Shirts", // 30
        },
        {
          name: "Footwear", // 31
        },
        {
          name: "Memory", // 32
        },
        {
          name: "Mounts", // 33
        },
        {
          name: "Square Enix", // 34
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Subcategories",
      {
        name: {
          [Op.in]: [
            "Playstation 5",
            "Audio",
            "TV & Home Theater",
            "Cell Phones",
            "Puzzles",
          ],
        },
      },
      {}
    );
  },
};
