"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Grand Theft Auto V",
          description:
            "When a young street hustler, a retired bank robber and a terrifying psychopath land themselves in trouble, they must pull off a series of dangerous heists to survive in a city in which they can trust nobody, least of all each other.",
          brandId: 2,
          price: 19.99,
          categoryId: 1,
          subcategoryId: 1,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/10161250/Grand-Theft-Auto-V-Premium-Edition---PlayStation-4?$pdp$$&fmt=webp",
          ],
          rating: 5.0,
        },
        {
          name: "Pokemon Celebration 100-Piece Puzzle",
          description:
            "This 100-piece Pokémon jigsaw puzzle features an energetic group of Pokémon having a celebration! Pikachu, Meowth, Bulbasaur, Rowlet, Emolga, Piplup, Jigglypuff, and more are in attendance surrounded by decorations and presents. Come join the celebration as you piece together this delightful puzzle!",
          brandId: 3,
          price: 6.99,
          categoryId: 2,
          subcategoryId: 3,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11156160/Pokemon-Celebration-100-Piece-Puzzle?$pdp2x$",
            "https://media.gamestop.com/i/gamestop/11156160_ALT01/Pokemon-Celebration-100-Piece-Puzzle?$pdp2x$",
          ],
        },
        {
          name: "Microsoft Xbox Series X Wireless Stereo Gaming Headset",
          description:
            "Game loud and clear with the Xbox Wireless Headset, compatible with Xbox Series X and Xbox One. Surround yourself with spatial sound technologies including Windows Sonic, Dolby Atmos, and DTS Headphone:X. Auto-mute and voice isolation reduce background noise and allow for crystal-clear chat. The flexible, lightweight design with an adjustable headband makes for a more comfortable experience during extended play sessions while rotating earcup dials provide a quick and intuitive way to adjust volume and game/chat balance. Fine-tune your headset with the Xbox Accessories app for a customized audio experience. Pair directly to your console with Xbox Wireless radio without the need for dongles, cables, or a base station, and connect to your mobile device with Bluetooth® for on-the-go music or chat, even pair to your phone and Xbox simultaneously to chat with a friend on your phone while playing on your console.",
          brandId: 1,
          price: 88.01,
          categoryId: 3,
          subcategoryId: 2,
          furtherSubcategoryId: 1,
          images: [
            "https://media.gamestop.com/i/gamestop/11112241/Microsoft-Xbox-Series-X-Wireless-Stereo-Gaming-Headset?$pdp2x$",
          ],
        },
        {
          name: "VIZIO 85-in P-Series Quantum X 4K HDR Smart TV P85QX-H1",
          description:
            "This is power, beauty, and performance to the extreme. The VIZIO P-Series® Quantum X 4K HDR Smart TV has up to an explosive 3000 nits peak brightness and 180% more quantum-dot color, driven by VIZIO’s best-ever Active Full Array® backlight with up to 792 local dimming zones. Quantum X hits an explosive 3000 nits peak (800 nits full-screen), making it the brightest in the industry, turbocharging every pixel for incredibly deep black levels and breathtaking contrast. Dolby Vision and HDR10+, reveal surprises you never knew were there in premium streaming content, brought to you by the award-winning SmartCast™ platform. The revolutionary IQ Ultra processor™ is VIZIO’s fastest, smartest chip, with onboard AI and machine-learning capabilities for ultra-performance. Quantum X also supports 4K video at 120Hz for ultra-clarity, while the new Pro Gaming Engine™ upgrades the Xbox/PlayStation® experience with VIZIO’s lowest input lag and Variable Refresh Rate (48Hz-120Hz) for even smoother visuals. Apple AirPlay 2 and Chromecast are built-in, plus seamless voice control with Siri, the Google Assistant and Alexa-enabled devices. Like we said: Extreme.",
          brandId: 6,
          price: 3099.99,
          categoryId: 3,
          subcategoryId: 4,
          furtherSubcategoryId: 2,
          images: [
            "https://media.gamestop.com/i/gamestop/11111626/VIZIO-85-in-P-Series-Quantum-X-4K-HDR-Smart-TV-P85QX-H1?$pdp2x$",
          ],
        },
        {
          name: "iPhone 12 Pro Max 512GB",
          description:
            "iPhone 12 Pro Max. 5G to download huge files on the go and stream HDR video. Larger 6.7-inch Super Retina XDR display. Ceramic Shield with 4x better drop performance. Incredible low-light photography with the best Pro camera system on an iPhone, and 5x optical zoom range. Cinema-grade Dolby Vision video recording, editing, and playback. Night mode portraits and next-level AR experiences with the LiDAR Scanner. Powerful A14 Bionic chip and new MagSafe accessories for easy attach and faster wireless charging. For infinitely spectacular possibilities.",
          brandId: 4,
          price: 959.99,
          categoryId: 3,
          subcategoryId: 5,
          images: [
            "https://media.gamestop.com/i/gamestop/11114638_blue/iPhone-12-Pro-Max-512GB---ATT-blue?$pdp2x$",
          ],
        },
        {
          name: "Helix Ultra-Durable 6-ft 4K HDMI Cable with 90 Degree Adapter",
          description:
            "Experience crystal clear, ultra-HD resolution with the Helix HDMI cable. It supports 4k resolution and includes a bonus 90° adapter that’s perfect for mounted TVs and displays.",
          brandId: 5,
          price: 9.99,
          categoryId: 3,
          subcategoryId: 4,
          furtherSubcategoryId: 3,
          images: [
            "https://media.gamestop.com/i/gamestop/11156621/Helix-Ultra-Durable-6-ft-4K-HDMI-Cable-with-90-Degree-Adapter?$pdp2x$",
          ],
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Products",
      {
        name: {
          [Op.in]: [
            "Grand Theft Auto V",
            "Pokemon Celebration 100-Piece Puzzle",
            "Microsoft Xbox Series X Wireless Stereo Gaming Headset",
            "VIZIO 85-in P-Series Quantum X 4K HDR Smart TV P85QX-H1",
            "iPhone 12 Pro Max 512GB",
            "Helix Ultra-Durable 6-ft 4K HDMI Cable with 90 Degree Adapter",
          ],
        },
      },
      {}
    );
  },
};
