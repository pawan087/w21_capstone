"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Brands",
      [
        {
          name: "Microsoft", // 1
        },
        {
          name: "Rockstar Games", // 2
        },
        {
          name: "Pokemon", //3
        },
        {
          name: "Apple", // 4
        },
        {
          name: "Helix", // 5
        },
        {
          name: "Vizio", // 6
        },
        {
          name: "Oculus", // 7
        },
        {
          name: "Nintendo", // 8
        },
        {
          name: "Sony", // 9
        },
        {
          name: "GeekNet", // 10
        },
        {
          name: "Hasbro", // 11
        },
        {
          name: "Bioworld Merchandising", // 12
        },
        {
          name: "Jazwares", // 13
        },
        {
          name: "FromSoftware", // 14
        },
        {
          name: "Activision", // 15
        },
        {
          name: "Electronic Arts", // 16
        },
        {
          name: "2K Games", // 17
        },
        {
          name: "Ubisoft", // 18
        },
        {
          name: "Logitech", // 19
        },
        {
          name: "Razer", // 20
        },
        {
          name: "Alienware", // 21
        },
        {
          name: "Skytech Gaming", // 22
        },
        {
          name: "MSI", // 23
        },
        {
          name: "Samsung", // 24
        },
        {
          name: "Blue Microphones", // 25
        },
        {
          name: "Ring", // 26
        },
        {
          name: "GoPro", // 27
        },
        {
          name: "Natinoal Geographic", // 28
        },
        {
          name: "Minolta", // 29
        },
        {
          name: "GabbaGoods", // 30
        },
        {
          name: "LG", // 31
        },
        {
          name: "DJI", // 32
        },
        {
          name: "JBL", // 33
        },
        {
          name: "Bose", // 34
        },
        {
          name: "Astro Gaming", // 35
        },
        {
          name: "GOTRAX", // 36
        },
        {
          name: "NERF", // 37
        },
        {
          name: "Basic Fun", // 38
        },
        {
          name: "Wizards of the Coast", // 39
        },
        {
          name: "Asmodee", // 40
        },
        {
          name: "USAopoly", // 41
        },
        {
          name: "Sold Out Sales", // 42
        },
        {
          name: "Sega", // 43
        },
        {
          name: "THQ", // 44
        },
        {
          name: "Maximum Games", // 45
        },
        {
          name: "Giants Software", // 46
        },
        {
          name: "Loungefly", // 47
        },
        {
          name: "U&I Entertainment", // 48
        },
        {
          name: "GameStop", // 47
        },
        {
          name: "Datel", //49 48
        },
        {
          name: "SalesOne", // 49
        },
        {
          name: "Epic Games", // 50
        },
        {
          name: "Square Enix", // 51
        },
        {
          name: "Warner Bros Interactive Entertainment", // 52
        },
        {
          name: "Deep Silver",
        },
        {
          name: "SanDisk",
        },
        {
          name: "Seagate",
        },
        {
          name: "Next Level Racing",
        },
        {
          name: "Nighthawk Interactive",
        },
        {
          name: "Funko",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Brands",
      {
        name: {
          [Op.in]: [
            "Microsoft",
            "Rockstar Games",
            "Pokemon",
            "Apple",
            "Helix",
            "Vizio",
          ],
        },
      },
      {}
    );
  },
};
