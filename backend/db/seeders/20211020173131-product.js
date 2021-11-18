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
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/10161250/Grand-Theft-Auto-V-Premium-Edition---PlayStation-4?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/01.webp",
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
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/02.jpg",
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
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/03.jpg",
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
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/04.jpg",
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
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/05.jpg",
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
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/06.jpg",
          ],
        },
        {
          name: "Oculus Quest 2 256GB",
          description:
            "Oculus Quest 2 is our most advanced all-in-one VR system yet. Every detail has been engineered to make virtual worlds adapt to your movements, letting you explore awe-inspiring games and experiences with unparalleled freedom. No PC or console required. Get the most out of each moment with blazing-fast performance and next-generation graphics. Stay focused with a stunning display that features 50% more pixels than the original Quest. Or take a break from the action and grab front-row seats to live concerts, exclusive events and more. The redesigned Touch controllers feature improved ergonomics and intuitive controls that transport your gestures, motions and actions directly into VR. You can even connect your VR headset to a gaming-compatible computer with an Oculus Link cable to access hundreds of PC VR games and experiences. Oculus Quest 2 also lets you bring your friends into the action. With live casting, you can share your VR experience with people around you. Or meet up with friends in virtual worlds to battle in multiplayer competitions or just spend some time together. With Oculus Quest 2, there’s no end in sight to what you can play, create and discover in virtual reality.",
          brandId: 7,
          price: 399.99,
          categoryId: 4,
          subcategoryId: 6,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11107422/Oculus-Quest-2-256GB?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/07.jpg",
          ],
          rating: 4.5,
        },
        {
          name: "Nintendo Switch Console Neon Blue and Neon Red Joy-con",
          description:
            "Introducing Nintendo Switch, the new home video game system from Nintendo. In addition to providing single and multiplayer thrills at home, the Nintendo Switch system can be taken on the go so players can enjoy a full home Nintendo Switch console experience anytime, anywhere. The mobility of a handheld is now added to the power of a home gaming system, with unprecedented new play styles brought to life by the two new Nintendo Switch Joy-Con controllers.",
          brandId: 8,
          price: 279.99,
          categoryId: 4,
          subcategoryId: 7,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11095819/Nintendo-Switch-Console-Neon-Blue-and-Neon-Red-Joy-con?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/08.jpg",
          ],
          rating: 4.7,
        },
        {
          name: "Microsoft Xbox Elite Series 2 Wireless Controller Black",
          description:
            "Play like a pro with the world's most advanced controller. Designed to meet the needs of today's competitive gamers, the all-new Xbox Elite Wireless Controller Series 2 features over 30 new ways to play like a pro. Enhance your aiming with new adjustable-tension thumbsticks, fire even faster with shorter hair trigger locks, and stay on target with a wrap-around rubberized grip. ",
          brandId: 1,
          price: 134.99,
          categoryId: 5,
          subcategoryId: 8,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/10178670/Microsoft-Xbox-Elite-Series-2-Wireless-Controller-Black?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/09.jpg",
          ],
          rating: 4.2,
        },
        {
          name: "Star Wars Millennium Falcon Wireless Charger with AC Adapter GameStop Exclusive",
          description:
            "Star Wars Millennium Falcon Wireless Charge Pad It may not look like much, but it’s got it where it counts. Compatible with Samsung, Apple and any other device that has wireless charging capabilities, this wireless charger will have your phone topped up in light-speed. This wireless charger pad is also a detailed replica of the fastest hunk of junk in the galaxy, which will look super stylish and cool on your desk. Plus, the thrusters glow blue when your device is fully charged. This deal is definitely getting better all the time. Exclusive to GameStop.",
          brandId: 10,
          price: 49.99,
          categoryId: 3,
          subcategoryId: 5,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11095928/Star-Wars-Millennium-Falcon-Wireless-Charger-with-AC-Adapter-GameStop-Exclusive?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/10.jpg",
          ],
          rating: 4.7,
        },
        {
          name: "Nintendo Switch Lite Console Blue",
          description:
            "The Nintendo Switch™ Lite is a version of the Nintendo Switch system that is optimized for personal, handheld play. Nintendo Switch Lite is a small and light Nintendo Switch system at a great price. With a built-in +Control Pad, and a sleek, unibody design, Nintendo Switch Lite is great for on-the-go gaming. Nintendo Switch Lite is compatible with popular games such as Super Mario Odyssey™, Mario Kart™ 8 Deluxe, Super Smash Bros.™ Ultimate, The Legend of Zelda™: Breath of the Wild, and more. If you’re looking for a gaming system all your own, Nintendo Switch Lite is ready to hit the road whenever you are. The Nintendo Switch™ Lite – Blue will be released 5/21/2021.",
          brandId: 8,
          price: 199.99,
          categoryId: 4,
          subcategoryId: 7,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11137570/Nintendo-Switch-Lite-Console-Blue?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/11.jpg",
          ],
          rating: 4.8,
        },
        {
          name: "Dungeons and Dragons Dice and Tray",
          description:
            "This Dungeons and Dragons Dice and Tray Set consists of 12 dice and one tray. The dice are made from a heavy metal and a bronze finish. The tray is lined with felt to hold the dice.",
          brandId: 10,
          price: 29.99,
          categoryId: 2,
          subcategoryId: 9,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11102567/Dungeons-and-Dragons-Dice-and-Tray?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/12.jpg",
          ],
          rating: 4.6,
        },
        {
          name: "Monopoly: Animal Crossing New Horizons Edition Board Game",
          description:
            "In this Monopoly board game, players can enjoy island life and immerse themselves in the colorful and creative world of Animal Crossing New Horizons. Moving around the board with tokens inspired by the video game, players complete island tasks and meet other characters. Instead of buying properties and paying rent, players collect bugs, fish, fossils, and fruit. They can also stop at Nook's Cranny and cash in Bells to buy decorations. Decorations are worth Nook Miles and the player with the most Nook Miles wins the game. Monopoly: Animal Crossing New Horizons board game is for ages 8 and up and makes a fun indoor activity for kids.",
          brandId: 11,
          price: 19.79,
          categoryId: 2,
          subcategoryId: 10,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11131838/Monopoly-Animal-Crossing-New-Horizons-Edition-Board-Game?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/13.jpg",
          ],
          rating: 4.8,
        },
        {
          name: "Super Mario Bros. 3 Raccoon Mario Hat",
          description:
            "Level up your Super Mario collection with this Super Mario Bros. 3 Raccoon Mario Hat. This Super Mario hat features plush raccoon ears and an embroidered Super Mario graphic on front.",
          brandId: 12,
          price: 24.99,
          categoryId: 6,
          subcategoryId: 11,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11099550/Super-Mario-Bros.-3-Raccoon-Mario-Hat?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/14.jpg",
          ],
          rating: 4.6,
        },
        {
          name: "Pokemon Pikachu with Santa Hat Plush 24 in Only at GameStop",
          description:
            "The cute and cuddly 24-inch Seasonal Holiday Pikachu plush is here just in time to celebrate the Holidays! Pikachu is one of the most popular Electric-type Pokémon and now you can take it with you on all of your Holiday themed adventures! With incredible detail and a unique Santa Hat accessory, this Super Sized Seasonal Holiday Pikachu plush is the perfect gift for Pokémon fans of all ages! Gotta Catch ‘Em All!™ An Officially licensed Pokémon product from Wicked Cool Toys, a Jazwares Company! Ages: 2+",
          brandId: 13,
          price: 39.99,
          categoryId: 2,
          subcategoryId: 12,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11100899/Pokemon-Pikachu-with-Santa-Hat-Plush-24-in-Only-at-GameStop?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/15.jpg",
          ],
          rating: 4.7,
        },
        {
          name: "Elden Ring Collector's Edition - PlayStation 5",
          description:
            "GameStop invites you to a mythical world filled with adventure in ELDEN RING Collector's Edition on PS5. Danger lurks in every corner in this action RPG video game. Explore an open world rich with magic, ruins, and combat. Encounter the game’s secrets as you discover the mysteries of ELDEN RING.",
          brandId: 14,
          price: 189.99,
          categoryId: 1,
          subcategoryId: 1,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11172340_ALT01/Elden-Ring-Collectors-Edition---PlayStation-5?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/16.jpg",
          ],
          rating: 3.0,
        },
        {
          name: "Mario Party Superstars - Nintendo Switch",
          description:
            "Calling all Superstars! Mario Party™ is back with 5 classic boards from the Nintendo 64 Mario Party games. Frosting meets flowers as you race to get the most stars (and sabotage your opponents) on the Peach’s Birthday Cake board from the original Mario Party game. Or watch the countdown that unleashes Bowser Coin Beam and hold onto those coins on the Space Land board. The tides can turn quickly in Mario Party, so stay vigilant, partygoers. This and all other modes can be played online, too! 100 classic minigames return from the Nintendo 64 and Nintendo GameCube™ games and more! Try your hand at a Superstar collection of minigames from throughout the Mario Party series. Whether you are saving up coins for stars in board game mode or practicing in free play, there is nothing quite like being the last one standing in Mushroom Mix-Up or Shy Guy Says. All minigames are played with button controls, so you can stick to the Joy-Con™ controller or bust out the Nintendo Switch™ Pro Controller (sold separately) or a Nintendo Switch Lite system. Mario Party™ Superstars releases 10/29/2021.",
          brandId: 8,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 7,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11149254/Mario-Party-Superstars----Nintendo-Switch?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/17.jpg",
          ],
          rating: 4.6,
        },
        {
          name: "Mario Kart 8 Deluxe",
          description:
            "Hit the road with the definitive version of Mario Kart 8 and play anytime, any-where! Race your friends or battle them in a revised battle mode on new and returning battle courses. Play locally in up to 4-player multiplayer in 1080p while playing in TV Mode. Every track from the Wii U version, including DLC, makes a glorious return. Plus, the Inklings appear as all-new guest characters, along with returning favorites, such as King Boo, Dry Bones, and Bowser Jr.!",
          brandId: 8,
          price: 46.99,
          categoryId: 1,
          subcategoryId: 7,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/10141928/Mario-Kart-8-Deluxe---Nintendo-Switch?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/18.jpg",
          ],
          rating: 4.8,
        },
        {
          name: "Super Smash Bros. Ultimate",
          description:
            "Gaming icons clash in the ultimate brawl you can play anytime, anywhere! Smash rivals off the stage as new characters Simon Belmont and King K. Rool join Inkling, Ridley, and every fighter in Super Smash Bros. history. Enjoy enhanced speed and combat at new stages based on the Castlevania series, Super Mario Odyssey, and more! Having trouble choosing a stage? Then select the Stage Morph option to transform one stage into another while battling—a series first! Plus, new echo fighters Dark Samus, Richter Belmont, and Chrom join the battle. Whether you play locally or online, savor the faster combat, new attacks, and new defensive options, like a perfect shield. Jam out to 900 different music compositions and go 1-on-1 with a friend, hold a 4-player free-for-all, kick it up to 8-player battles and more! Feel free to bust out your GameCube controllers—legendary couch competitions await—or play together anytime, anywhere!",
          brandId: 8,
          price: 46.99,
          categoryId: 1,
          subcategoryId: 7,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/10159620/Super-Smash-Bros.-Ultimate----Nintendo-Switch?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/19.jpg",
          ],
          rating: 4.8,
        },
        {
          name: "Call of Duty: Vanguard - Xbox One",
          description:
            "GameStop joins the fight with Call of Duty Vanguard on Xbox One! COD returns with breathtaking gameplay that redefines war like you’ve never seen before. Immerse yourself into the most gritty and tumultuous WWII battle ever in this epic, first-person shooter video game.",
          brandId: 15,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 13,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11156597/Call-of-Duty-Vanguard---Xbox-One?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/20.jpg",
          ],
          rating: 4.0,
        },
        {
          name: "Call of Duty: Vanguard - Playstation 4",
          description:
            "GameStop joins the fight with Call of Duty Vanguard on PS4! COD returns with breathtaking gameplay that redefines war like you’ve never seen before. Immerse yourself into the most gritty and tumultuous WWII battle ever in this epic, first-person shooter video game.",
          brandId: 15,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11156596/Call-of-Duty-Vanguard---PlayStation-4?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/21.jpg",
          ],
          rating: 4.0,
        },
        {
          name: "Madden NFL 22 - PlayStation 4",
          description:
            "GameStop puts your skills to the test with Madden 22 on PS4! Take down the competition, hone your skills, and build your fantasy roster with Madden 22 Face of the Franchise, The Yard, and Ultimate Team in this highly-anticipated NFL football video game.",
          brandId: 16,
          price: 35.99,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11116341/Madden-NFL-22----PlayStation-4?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/22.jpg",
          ],
          rating: 3.7,
        },
        {
          name: "Madden NFL 22 - Xbox One",
          description:
            "GameStop puts your skills to the test with Madden 22 on Xbox One! Take down the competition, hone your skills, and build your fantasy roster with Madden 22 Face of the Franchise, The Yard, and Ultimate Team in this highly-anticipated NFL football video game.",
          brandId: 16,
          price: 35.99,
          categoryId: 1,
          subcategoryId: 13,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11116262/Madden-NFL-22----Xbox-One?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/23.jpg",
          ],
          rating: 3.7,
        },
        {
          name: "NBA 2K22 - PlayStation 4",
          description:
            "GameStop takes the court with NBA 2K22 on PS4! Enjoy competitive gameplay, online features, and a variety of game modes, including myCAREER, as you put together your dream team in this highly-anticipated basketball video game. A WORLD OF BASKETBALL. NBA 2K22 puts the entire basketball universe in your hands. PLAY NOW in real NBA and WNBA environments against authentic teams and players. Build your own dream team in MyTEAM with today's stars and yesterday's legends. Live out your own pro journey in MyCAREER and experience your personal rise to the NBA. Flex your management skills as a powerful Executive in MyGM and MyLEAGUE. Anyone, anywhere can hoop in NBA 2K22.",
          brandId: 17,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11151961/NBA-2K22---PlayStation-4?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/24.jpg",
          ],
          rating: 4.2,
        },
        {
          name: "NBA 2K22 - Xbox One",
          description:
            "GameStop takes the court with NBA 2K22 on Xbox One! Enjoy competitive gameplay, online features, and a variety of game modes, including myCAREER, as you put together your dream team in this highly-anticipated basketball video game. A WORLD OF BASKETBALL. NBA 2K22 puts the entire basketball universe in your hands. PLAY NOW in real NBA and WNBA environments against authentic teams and players. Build your own dream team in MyTEAM with today's stars and yesterday's legends. Live out your own pro journey in MyCAREER and experience your personal rise to the NBA. Flex your management skills as a powerful Executive in MyGM and MyLEAGUE. Anyone, anywhere can hoop in NBA 2K22.",
          brandId: 17,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 13,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11151960/NBA-2K22----Xbox-One?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/25.jpg",
          ],
          rating: 4.2,
        },
        {
          name: "Far Cry 6 - Xbox Series X",
          description:
            "GameStop is excited to bring you Far Cry 6 on Xbox One and Xbox Series X. Experience the brilliant open-world gameplay and explore stunning new terrain in this gripping, first-person shooter video game, release date 10/7/2021. Upgrade to the Xbox Series X|S version of the game at no additional cost. **CONDITIONS AND RESTRICTIONS APPLY. This game leverages Smart Delivery allowing access to both the Xbox One title and the Xbox Series X|S title. To upgrade eligible physical disc copies, a console with a disc drive is required. Visit ubi.li/NextGenUpgrades for details. Welcome to Yara, a tropical paradise frozen in time. As the dictator of Yara, Anton Castillo is intent on restoring his nation back to its former glory by any means, with his son, Diego, following in his bloody footsteps. Their oppressive rule has ignited a revolution.",
          brandId: 18,
          price: 49.94,
          categoryId: 1,
          subcategoryId: 13,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11103983/Far-Cry-6---Xbox-Series-X?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/26.webp",
          ],
          rating: 4.2,
        },
        {
          name: "Far Cry 6 - PlayStation 4",
          description:
            "GameStop is excited to bring you Far Cry 6 on PS4! Experience the brilliant open-world gameplay and explore stunning new terrain in this gripping, first-person shooter video game, release date 10/7/2021. Upgrade to the digital PlayStation 5 version of the game at no additional cost. **CONDITIONS AND RESTRICTIONS APPLY. To upgrade eligible PS4 physical disc copies, players need a PS5 console with a disc drive. Visit PlayStation.com/help for details. Welcome to Yara, a tropical paradise frozen in time. As the dictator of Yara, Anton Castillo is intent on restoring his nation back to its former glory by any means, with his son, Diego, following in his bloody footsteps. Their oppressive rule has ignited a revolution.",
          brandId: 18,
          price: 49.94,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11103984/Far-Cry-6---PlayStation-4?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/27.jpg",
          ],
          rating: 4.2,
        },
        {
          name: "FIFA 22 - PlayStation 4",
          description:
            "GameStop joins the game with FIFA 22 on PS4! Elevate your game to a new level, score points, attack plays, and break down the defense in this highly-anticipated sports video game. PlayStation®4 game playable on PlayStation®5.  PS5™ system features and content not available on this product. Powered by Football™, EA SPORTS™ FIFA 22 brings the game even closer to the real thing with fundamental gameplay advances and a new season of innovation across every mode. New gameplay features in FIFA 22 give you more consistency between the posts with a goalkeeper rewrite that brings more composure to the most important position on the pitch, alongside new ball physics, explosive sprint that better matches the acceleration of the game’s quickest players, and new attacking tactics that let you take control of how your team plays. In Career Mode, live out your football dreams as you create and manage the game’s newest club to glory. VOLTA FOOTBALL rewards you for your flair with restyled small-sided gameplay and new ways to play and progress each season. Get the squad together in Pro Clubs with enhanced team customization and updated progression that puts you in control of your Virtual Pro’s development, and welcome back some of football’s most memorable players as new FUT Heroes in FIFA Ultimate Team™ with a redefined competition structure that makes testing your skills against other players more accessible. However you play, enjoy unrivaled authenticity everywhere with over 17,000 players, 700+ teams, and more than 30 leagues including the UEFA Champions League, CONMEBOL Libertadores, and the brand new UEFA Europa Conference League - only available in FIFA 22.",
          brandId: 16,
          price: 39.88,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11151937/FIFA-22----PlayStation-4?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/28.jpg",
          ],
          rating: 4.2,
        },
        {
          name: "Grand Theft Auto: Trilogy - The Definitive Edition - PlayStation 4",
          description:
            "Play the genre-defining classics of the original GTA Trilogy updated for a new generation, now with across-the-board enhancements including brilliant new lighting and environmental upgrades, high-resolution textures, increased draw distances, GTAV-style controls and targeting, and much more. Release date 12/07/2021.",
          brandId: 2,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11170500/Grand-Theft-Auto-Trilogy---The-Definitive-Edition---PlayStation-4?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/29.jpg",
          ],
          rating: 4.2,
        },
        {
          name: "G920 Driving Force Racing Wheel for Xbox One and PC",
          description:
            "Logitech G920 Driving Force Steering Wheel is the definitive sim racing wheel for the latest Xbox One™ and PC titles. With realistic dual-motor force feedback and helical gearing for quiet, smooth steering. On-wheel controls and paddle shifters are easy to access so you can make crisp, precise gear transitions. The separate pedal unit gives you natural, responsive control, with a nonlinear brake pedal that mimics the feel of high-performance vehicles. Driving Force racing wheel for Xbox One is built for comfort and durability with hand-stitched leather and stainless steel components. Built-in clamps and bolt points keeps Logitech Driving Force racing wheel mounted securely to a table or racing rig, minimizing shifting or wobbling during aggressive maneuvers.",
          brandId: 19,
          price: 244.99,
          categoryId: 5,
          subcategoryId: 8,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/10126519/Logitech-G920-Driving-Force-Racing-Wheel-for-Xbox-One-and-PC?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/30.jpg",
          ],
          rating: 4.4,
        },
        {
          name: "Nintendo Switch Joy-Con (L)/(R) Neon Red/Neon Blue",
          description:
            "Introducing Joy-Con, controllers that make new kinds of gaming possible, for use with Nintendo Switch.The versatile Joy-Con offer multiple surprising new ways for players to have fun. Two Joy-Con can be used independently in each hand, or together as one game controller when attached to the Joy-Con grip. They can also attach to the main console for use in handheld mode, or be shared with friends to enjoy two-player action in supported games. Each Joy-Con has a full set of buttons and can act as a standalone controller, and each includes an accelerometer and gyro-sensor, making independent left and right motion control possible.",
          brandId: 8,
          price: 69.99,
          categoryId: 5,
          subcategoryId: 8,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/10141870/Nintendo-Switch-Joy-Con-L/R-Wireless-Controller-Neon-Red/Neon-Blue?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/31.webp",
          ],
          rating: 4.3,
        },
        {
          name: "Sony PlayStation 4 VR Motion Camera",
          description:
            "Broadcast yourself in play with PlayStation Camera. Become a community sensation by adding a picture-in-picture video of yourself in gameplay livestreams. Create and share narrated game walkthroughs in HD video and voice chat through four built-in microphones. Enjoy stunning new levels of immersion as the 3D depth-sensing camera and DUALSHOCK 4 wireless controller's light bar track player movements through space. Log in instantly with facial recognition and navigate PS4™ system menu hands-free with voice inputs. The PS4 Camera allows you to experience unbelievable gaming moments on the VR camera and unlock exciting features on your PlayStation 4.",
          brandId: 9,
          price: 49.99,
          categoryId: 5,
          subcategoryId: 8,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/10109953/Sony-PlayStation-4-VR-Motion-Camera?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/33.jpg",
          ],
          rating: 2.3,
        },
        {
          name: "Razer DeathAdder V2 Wired Optical Gaming Mouse - HALO Infinite Edition",
          description:
            "Best-in-class ergonomic shape for maximum comfort Razer™ Optical Mouse Switch for actuation at the speed of light Razer™ Focus+ 20K Optical Sensor for cutting-edge precision Razer™ Speedflex Cable for minimal drag and smooth control 5 on-board memory profiles for personalized settings wherever you go 8 programmable buttons for extended controls Ergonomics Without Equal View Less",
          brandId: 20,
          price: 79.99,
          categoryId: 4,
          subcategoryId: 16,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11156469/Razer-DeathAdder-V2-Wired-Optical-Gaming-Mouse---HALO-Infinite-Edition?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/34.jpg",
          ],
          rating: 4.8,
        },
        {
          name: "Alienware 27-In Full HD Gaming Monitor AW2720HF",
          description:
            "A 27 inch IPS gaming monitor with a blazing 240Hz refresh rate and true 1ms response time. Now featuring both AMD FreeSync and NVIDIA® G-SYNC® compatibility for effortlessly smooth gaming.",
          brandId: 21,
          price: 299.99,
          categoryId: 4,
          subcategoryId: 16,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11166631/Alienware-27-In-Full-HD-Gaming-Monitor-AW2720HF?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/32.jpg",
          ],
          rating: 2.1,
        },
        {
          name: "Skytech Gaming Blaze 3.0 Gaming PC GeForce RTX 3080 GPU AMD Ryzen 7 3700X GPU 16GB RAM 1TB SSD",
          description:
            "Skytech Blaze 3.0 Powerful Gaming at 1440p and VR Ready. Take your game to the next level. Skytech's Blaze 3.0 lets you play with higher settings, faster frame rates and more powerful multi-tasking capabilities than standard gaming PCs. Featuring more power to game and stream simultaneously with no lag, a Skytech Blaze 3.0 gives gamers even more power to back up your team mates and create better content",
          brandId: 22,
          price: 2329.99,
          categoryId: 4,
          subcategoryId: 16,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11158594/Skytech-Gaming-Blaze-3.0-Gaming-PC-GeForce-RTX-3080-GPU-AMD-Ryzen-7-3700X-GPU-16GB-RAM-1TB-SSD?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/35.webp",
          ],
          rating: 0,
        },
        {
          name: "MSI Pulse GL66 Intel 11th Gen i7-11800H GeForce RTX 3050 Series 16GB GDDR6 SDRAM Ram 1TB NVMe SSD Gaming Laptop",
          description:
            "Your Journey Starts Here. The Pulse GL66 Gaming Laptop is packed with the latest 11th Gen. Intel ® Core™ i7 processors and NVIDIA® GeForce RTX™ 30 series graphics. The titanium gray metal armor and contour lines is perfect for those who loves a sturdy and futuristic design. At every corner of the universe and every scenario, the Tribe of the Dragon marches through the galaxy, unstoppable and invincible. They are the possessors of endless knowledge and power. They can withstand countless artillery fire and still prevail. As the legions of Dragon Warriors march on and spacecraft fly by, the soldiers stand out in their titanium powered-armor armed with Pulse Energy weapons. The claw blades overflowing with electric current hum in the background as they conquer the galaxy... GeForce RTX™ 30 Series GPUs deliver the ultimate performance for gamers and creators. They’re powered by Ampere—NVIDIA’s 2nd gen RTX architecture—with new RT Cores, Tensor Cores, and streaming multiprocessors for the most realistic ray-traced graphics and cutting-edge AI features. Enjoy every detail in games at 1920x1080 resolution and the blazing fast 144Hz refresh rate panel. It's time for a more vibrant visual experience.",
          brandId: 23,
          price: 1149.99,
          categoryId: 4,
          subcategoryId: 16,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11155944/MSI-Pulse-GL66-Intel-11th-Gen-i7-11800H-GeForce-RTX-3050-Series-16GB-GDDR6-SDRAM-Ram-1TB-NVMe-SSD-Gaming-Laptop?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/36.jpg",
          ],
          rating: 4.5,
        },
        {
          name: "Samsung Odyssey G9 Series Curved 49 Inch Gaming Monitor",
          description:
            "Whether you’re in game development, finance, web development or any other industry that works with lots of fast-moving content at once, the Samsung Odyssey G9 is the solution. Featuring a 49 super ultra-wide 1000R curved screen, the Odyssey G9 is the equivalent of two 16:9 QHD monitors side by side—with no gap. Quantum dot technology and HDR 1000 support provide stunningly realistic color and contrast, while a 240Hz refresh rate helps to ensure the smoothest gaming, video and motion graphics.",
          brandId: 24,
          price: 1399.99,
          categoryId: 4,
          subcategoryId: 16,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11137443/Samsung-Odyssey-G9-Series-Curved-49-Inch-Gaming-Monitor?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/37.jpg",
          ],
          rating: 3.2,
        },
        {
          name: "Razer BlackWidow V3 Mechanical Green Switches Gaming Keyboard - HALO Infinite Edition",
          description:
            "Razer™ Green Mechanical Switches for precise execution with a clicky, tactile feel - Hear and feel the satisfying feedback in every keystroke you make, with a classic design that offers optimized actuation and reset points for better performance when gaming. Transparent switch housing for brighter Razer Chroma RGB lighting - Its completely clear design displays the true brilliance of what Razer Chroma RGB can do—from deep lighting customizations to greater immersion as it dynamically reacts with over 150 integrated games.",
          brandId: 20,
          price: 179.99,
          categoryId: 4,
          subcategoryId: 16,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11156471_ALT01/Razer-BlackWidow-V3-Mechanical-Green-Switches-Gaming-Keyboard---HALO-Infinite-Edition?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/39.jpg",
          ],
          rating: 4.1,
        },
        {
          name: "Yeti Blackout Black USB Microphone",
          description:
            "Create unparalleled recordings with your computer using Blue's best-selling Yeti family of USB microphones. Thanks to our proprietary tri-capsule technology, Yeti microphones produce pristine, studio-quality recordings with legendary ease. And four different pattern settings offer incredible flexibility so you can record vocals, music, podcasts, audio for video, interviews, or even cryptozoology lectures in ways that would normally require multiple microphones. Whether you're recording at home, on the road, or in the Himalayas, Yeti helps you produce studio-quality recordings every time.",
          brandId: 25,
          price: 102.99,
          categoryId: 4,
          subcategoryId: 16,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/10131344/Yeti-Blackout-USB-Microphone?$pdp$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/40.webp",
          ],
          rating: 4.7,
        },
        {
          name: "QuadCast Red and Black Microphone",
          description:
            "The HyperX QuadCast Microphone is the ideal all-inclusive standalone microphone for the aspiring streamer or podcaster looking for a condenser mic with quality sound. QuadCast black and red microphone comes with its own anti-vibration shock mount to help reduce the rumbles of daily life and a built-in pop filter to muffle pesky percussive sounds. Instantly know your mic status with the LED indicator, and simply tap-to-mute to avoid awkward broadcasting accidents. The QuadCast S model provides RGB lighting and dynamic effects that are customizable through HyperX NGENUITY software.",
          brandId: 25,
          price: 131.99,
          categoryId: 4,
          subcategoryId: 16,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11100805/QuadCast-Red-and-Black-Microphone?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/41.jpg",
          ],
          rating: 4.7,
        },
        {
          name: "Ring Video Doorbell 3 Satin Nickel",
          description:
            "Meet our next-generation doorbell, with upgraded security features to protect any home. That includes improved motion detection, enhanced wifi and customizable motion zones, so you can keep an eye on what's happening anytime, from anywhere. Adjust your motion zones to focus on key areas, minimize false alerts and send only the notifications you care about most. With Video Doorbell 3, you'll be closer to home than ever before.",
          brandId: 26,
          price: 179.99,
          categoryId: 3,
          subcategoryId: 17,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11150754/Ring-Video-Doorbell-3?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/42.jpg",
          ],
          rating: 4.7,
        },
        {
          name: "Netgear Nighthawk XR1000 AX5400 WiFi 6 Gaming Router",
          description:
            "First Nighthawk Pro Gaming router with WiFi 6 and DumaOS 3.0, perfectly designed to give you the ultimate gaming experience.",
          brandId: 26,
          price: 318.82,
          categoryId: 3,
          subcategoryId: 17,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11118121/Netgear-Nighthawk-XR1000-AX5400-WiFi-6-Gaming-Router?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/42a.jpg",
          ],
          rating: 4.7,
        },
        {
          name: "GoPro MAX 360 Degree Action Camera",
          description:
            "Classic Hero-style skills. Spherical-capture wizardry. Unbreakable stabilization. Make way for Max, the most creative GoPro ever. Capture traditional GoPro video and photos or shoot 360 footage of everything around you. Snap a panoramic shot without having to pan— Just point and click. Choose a digital lens to capture your footage exactly how you imagine it. And with six mics onboard, you get immersive 360 audio and the best sound we’ve ever delivered.",
          brandId: 27,
          price: 499.99,
          categoryId: 3,
          subcategoryId: 18,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11153227/GoPro-MAX-360-Degree-Action-Camera?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/43.jpg",
          ],
          rating: 3.7,
        },
        {
          name: "Minolta 20.0 Megapixel 1080p Full HD Wi-Fi MN35Z Bridge Red Digital Camera",
          description:
            "The Minolta 20-Megapixel 1080p Full HD Wi-Fi MN35Z Bridge Camera with 35x Zoom features a high-resolution sensor for crystal clear still images and 1080p Full HD videos at 60fps. The 35x optical zoom provides a focal length of 25mm-875mm, covering wide-angle to super telephoto shots. With built-in Wi-Fi, you can use your smartphone as a remote shutter and even transfer your media for easy sharing-it's made for today's wireless world.",
          brandId: 29,
          price: 221.24,
          categoryId: 3,
          subcategoryId: 18,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11120147/Minolta-20.0-Megapixel-1080p-Full-HD-Wi-Fi-MN35Z-Bridge-Red-Digital-Camera?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/44.jpg",
          ],
          rating: 5.0,
        },
        {
          name: "GabbaGoods 720P USB Webcam Black/Red",
          description:
            "Capture natural sound on calls and recorded videos. Perfect for streaming, conference video chatting, webinars, gaming, distance learning and more.",
          brandId: 30,
          price: 17.99,
          categoryId: 3,
          subcategoryId: 18,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11152307/GabbaGoods-720P-USB-Webcam-Black/Red?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/45.jpg",
          ],
          rating: 1.2,
        },
        {
          name: "LG 65-In C1 Class 4K Smart OLED TV with AI ThinQ OLED65C1PUB",
          description:
            "LG OLED TV is a joy to behold. Self-lit pixels have evolved to allow even more spectacular picture quality and a whole host of design possibilities, while the latest cutting-edge technologies help deliver unprecedented levels of wonder. This is everything you love about TV — elevated in every way.",
          brandId: 31,
          price: 1796.99,
          categoryId: 3,
          subcategoryId: 4,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11170587/LG-65-In-C1-Class-4K-Smart-OLED-TV-with-AI-ThinQ-OLED65C1PUB?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/47.jpg",
          ],
          rating: 4.1,
        },
        {
          name: "DJI FPV Drone with FPV Goggles V2 and FPV Remote Controller 2",
          description:
            "Fully immerse yourself in the amazing aerial views and unbridled speed of drone flying with the combo version of the DJI FPV Drone. Using the bundled FPV Goggles V2, you get a first-person view of what the drone sees, with footage that makes it feel like you're the one flying through the sky. The onboard 4K60 fps gimbal camera can send low-latency video to your goggles for a near real-time experience. The 150° super-wide FOV lets you take in and appreciate the scope of the vistas you fly over.",
          brandId: 32,
          price: 1299.99,
          categoryId: 3,
          subcategoryId: 19,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11158639/DJI-FPV-Drone-with-FPV-Goggles-V2-and-FPV-Remote-Controller-2?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/48.jpg",
          ],
          rating: 4.9,
        },
        {
          name: "JBL True Wireless 9.1 Surround with Dolby Atmos Soundbar",
          description:
            "Dolby Atmos, DTS:X and four upfiring speakers. Two detachable speakers w/ built-in batteries offer up to 10 hours of playtime. 820W System output. 10 Wireless subwoofer. Ultra HD 4K Pass-through with Dolby Vision. Transducer: 4 x racetrack driver + 2 x full-range drivers + 3 0.75 tweeter. HDMI input and HDMI HDCP 2.3. Optical input. USB port. Bluetooth 4.2. Supports 2.4Ghz and 5Ghz wireless frequency range. Includes: Remote control with batteries. Power cords. HDMI cable. Wall mount brackets.",
          brandId: 33,
          price: 1399.95,
          categoryId: 3,
          subcategoryId: 2,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11151461/JBL-True-Wireless-9.1-Surround-with-Dolby-Atmos-Soundbar?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/48a.jpg",
          ],
          rating: 3.7,
        },
        {
          name: "Bose SoundLink Revolve+ II Bluetooth Speaker",
          description:
            "This true 360° speaker was engineered to spread deep, jaw-dropping sound in every direction. That means, when everyone stands around it, everyone gets the same experience. If you set it near a wall, sound will radiate and reflect around the room, immersing you in that same feeling you felt at your favorite concert. And with a flexible handle, it’s designed to go wherever you want to bring the music.",
          brandId: 34,
          price: 329.99,
          categoryId: 3,
          subcategoryId: 2,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11158922_triple-black/Bose-SoundLink-Revolve-II-Bluetooth-Speaker-triple-black?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/49.jpg",
          ],
          rating: 4.5,
        },
        {
          name: "Bose Noise Cancelling Headphones 700",
          description:
            "World-class adjustable noise cancellation — with situational awareness for when you want to let the world in. High-fidelity audio with adjustable EQ so you can tune music to your liking. Unrivaled voice pickup for the clearest calls. And protein leather cushions for all-day comfort. It’s everything you demand from wireless Bluetooth headphones — amplified. Bose Noise Cancelling Headphones 700, our most advanced headphones ever.",
          brandId: 34,
          price: 379.99,
          categoryId: 3,
          subcategoryId: 2,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11158915_luxe-silver/Bose-Noise-Cancelling-Headphones-700-luxe-silver?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/50.jpg",
          ],
          rating: 4.8,
        },
        {
          name: "Razer BlackWidow V3 Pro Wireless Yellow Switch Mechanical Gaming Keyboard Black with Chroma RGB",
          description:
            "FEEL THE DIFFERENCE. UNLEASHED. The world’s first and most iconic mechanical gaming keyboard makes its next game-changing evolution. Enter a new wireless meta with the Razer BlackWidow V3 Pro—with 3 modes of connection for unrivalled versatility, and a satisfying gaming experience comprised of best-in-class switches and full-height keys",
          brandId: 20,
          price: 179.99,
          categoryId: 4,
          subcategoryId: 16,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11155932/Razer-BlackWidow-V3-Pro-Wireless-Yellow-Switch-Mechanical-Gaming-Keyboard-Black-with-Chroma-RGB?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/52.jpg",
          ],
          rating: 2.7,
        },
        {
          name: "Pro Type Wireless Mechanical Productivity Keyboard",
          description:
            "A big part of producing top-quality work comes from the quality of your office equipment—so why settle for anything less? Take your productivity to the next level with a Razer Pro Type wireless keyboard that offers a superior typing experience, engineered for the optimal balance of performance and comfort.",
          brandId: 20,
          price: 125.99,
          categoryId: 4,
          subcategoryId: 16,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11134715/Razer-Pro-Type-Wireless-Mechanical-Productivity-Keyboard?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/51.jpg",
          ],
          rating: 4.2,
        },
        {
          name: "Huntsman Mini Mercury Edition 60 Percent Optical Purple Switches Wired Gaming Keyboard",
          description:
            "Enter a new dimension of deadly with the Razer Huntsman Mini Keyboard - a 60% gaming keyboard with cutting-edge Razer Optical Switches. Highly portable and ideal for streamlined setups, it's time to experience lightning-fast actuation in our most compact form factor yet. The Razer Huntsman Mini Gaming Keyboard is lighter, faster, and smoother - a step above the rest.",
          brandId: 20,
          price: 125.99,
          categoryId: 4,
          subcategoryId: 16,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11105808_white/Razer-Huntsman-Mini-Mercury-Edition-60-Percent-Optical-Purple-Switches-Wired-Gaming-Keyboard-white?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/54.jpg",
          ],
          rating: 4.3,
        },
        {
          name: "A40 TR Generation 4 Wired Gaming Headset for Xbox One",
          description:
            "Play like a Pro! The ASTRO Gaming A40 TR Headset is the premier gaming headset for professional gamers, including esports athletes, content creators and live steamers. It was developed with esports athletes to meet their rigorous standards for audio fidelity, comfort, and durability. Mod Kit Ready, the A40 TR Xbox One headset adapts to any gaming environment. The A40 TR headphones arrive as an open-back headset featuring a swappable boom mic and customizable Speaker Tags. For loud tournament environments, one can transform the A40 TR into a closed-back noise-isolating headset by adding a Mod Kit (sold separately) with sealed Speaker Tags, synthetic leather ear cushions, and a voice-isolating microphone.",
          brandId: 35,
          price: 129.99,
          categoryId: 3,
          subcategoryId: 2,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11048300/Astro-Gaming-A40-TR-Generation-4-Wired-Gaming-Headset-for-Xbox-One?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/54.webp",
          ],
          rating: 3.3,
        },
        {
          name: "Pokemon Trading Card Game: First Partner Kanto Pack",
          description:
            "Celebrate 25 Years in a Gigantic Way! A big celebration—with gigantic Pokémon TCG cards! This First Partner Pack contains a set of 3 awesome oversize cards for your Pokémon TCG collection, featuring the three first partner Pokémon of the Kanto region—Bulbasaur, Charmander, and Squirtle—plus two regular Pokémon TCG booster packs! Collect your favorites, trade them, and celebrate 25 awesome years of Pokémon with the first partners who stick with you from your very first Pokémon moments!",
          brandId: 3,
          price: 9.99,
          categoryId: 2,
          subcategoryId: 9,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11116809/Pokemon-Trading-Card-Game-First-Partner-Kanto-Pack?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/56.jpg",
          ],
          rating: 4.7,
        },
        {
          name: "Vibe Commuting Electric Scooter with Rubber Tires 15.5MPH and 7 Mile Range",
          description:
            "The GOTRAX Vibe is an improved version of the popular G2 Electric Scooter. The Vibe brings a fresh new look with 4 unique, eye catching colors. Perfect for commuting to work or riding around campus. The 36V Battery carries riders up to 7 miles on a single charge. The Vibe utilizes its 200 watt motor to reach speeds up to 15.5 mph. Commute in safety with the Vibes 6.5” and a bright LED light. Enjoy full control of your ride with the Vibe’s LED Smart Display & Anti-Locking Electromagnetic Braking system. Ride and shop safe with GOTRAX and the Vibe E-Scooter.",
          brandId: 36,
          price: 249.99,
          categoryId: 2,
          subcategoryId: 20,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11120629_red/Vibe-Commuting-Electric-Scooter-with-Rubber-Tires-15.5MPH-and-7-Mile-Range-red?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/57.jpg",
          ],
          rating: 5.0,
        },
        {
          name: "Nerf LMTD Halo Needler Blaster with Light-Up Needles",
          description:
            "The Nerf LMTD Halo Needler blaster captures the look of the blaster from the Halo video game franchise! Imagine yourself as one of the Banished or Covenant and get ready to battle the UNSC! This Nerf dart blaster recreates the blaster's distinctive design with flexible needles that light up when you grip the handle! Fire the darts and watch the needles go dark to simulate how they launch from the blaster in the game. Other light-up accents add to the exciting visual presentation. This fully motorized blaster unleashes 10 darts in a row from the rotating, 10-dart drum. Includes 10 Nerf Elite foam darts. Switch to display mode to illuminate the blaster and showcase it on the included stand. Includes a game card with in-game content in the Halo Infinite game.",
          brandId: 37,
          price: 99.99,
          categoryId: 2,
          subcategoryId: 21,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11168848/Nerf-LMTD-Halo-Needler-Blaster-with-Light-Up-Needles?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/57a.jpg",
          ],
          rating: 2.9,
        },
        {
          name: "Pokemon Bulbasaur Plush 24 in",
          description:
            "This cute and cuddly 24 Bulbasaur Plush is ready to join you on your next Pokémon adventure! Bulbasaur doesn't get bigger or better than this super-sized plush made with material that makes it perfect to play with and cuddle! With details that make it look it jumped right out of the smash-hit Pokémon Animated Series, the 24 Bulbasaur Plush is the perfect gift for any Pokémon fan! Gotta Catch Em All!™ An Officially licensed Pokémon product from Wicked Cool Toys, a Jazwares Company! For ages 2 and up.",
          brandId: 13,
          price: 39.99,
          categoryId: 2,
          subcategoryId: 12,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11100845/Pokemon-Bulbasaur-Plush-24-in?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/58.jpg",
          ],
          rating: 0,
        },
        {
          name: "Nova Hoverboard with LED Lights and Self Balancing Mode",
          description:
            "Bring your adventure on the go with the GOTRAX Nova electric self balancing scooter.While one of the most affordable hoverboard scooters on the market today, you won’t have to sacrifice fun for price! The GOTRAX Nova hoverboard comes in several colorful variations and have many features. Light up the night with intuitive headlights and tail lights! Engage Self Balancing mode to have your hoverboard automatically level itself with the ground, making it easier to step on and off. Powerful 200-watt electric motors, you can take your adventure to a fun and safe top speed of 6.2 mph. Spend more time riding and less time plugged-in with the Edge smart hoverboard’s extended range - explore up to 3.1 miles on a single battery charge. When the hoverboad needs charging the self indicating battery lights will let you know. Simply plug in the 2 wheel self-balancing scooter and be ready to take on your next big ride. Whether you’re looking for the next trend to take to the street to maximize your fun, or you’re seeking the perfect fit gift to give to your child, the GOTRAX Nova hoverboard can be tailored to fit anyone’s imagination.",
          brandId: 36,
          price: 119.99,
          categoryId: 2,
          subcategoryId: 20,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11120626_pink/Nova-Hoverboard-with-LED-Lights-and-Self-Balancing-Mode-pink?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/60.jpg",
          ],
          rating: 4.2,
        },
        {
          name: "Razor Pocket Mod Electric Scooter Purple",
          description:
            "You’re all about style, retro or vintage, and your color story is just as important to you as your Algebra final. With the Razor Pocket Mod miniature electric scooter, you’ve got up to 40 minutes of uninterrupted ride time on a single battery charge. With speeds up to 15 mph (24 km/h), a secret storage compartment, dual kickstand, padded seat, and controls at your fingertips – it all adds up to an amazing ride, so sit back, relax, and enjoy the bliss",
          brandId: 20,
          price: 349.99,
          categoryId: 2,
          subcategoryId: 20,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11166758/Razor-Pocket-Mod-Electric-Scooter-Purple?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/60a.jpg",
          ],
          rating: 4.8,
        },
        {
          name: "Jazwares Squishville Mini Squishmallows Brilliant Besties 14-Pack 2.6-In Plushes",
          description:
            "Get ready to squish in with Squishville’s Mini-Squishmallows Brilliant Besties Multipack, featuring irresistibly soft and colorfully fun Mini-Squishmallows. This adorably soft plush set features your favorite Squishmallows plush characters in a mini 2-inch size. Bring the Brilliant Besties Multipack home to your Squishville world collection! With a total of 14 Mini-Squishmallows plush characters, the set includes characters representing all the colors of the rainbow, from Cici the Red Panda to Holly the Purple Owl, and all the colors in between! The characters are as cute as can be: a corgi, an octopus, a koala, a dino, and so many more to kickstart your Squishville Squad collection! The Squishville toy world is made with super-soft filling, making these cute toys the ultimate play companions. With vehicles, playsets, and your favorite Squishmallow plush characters, the Squishville plush toy world is bursting with personality!",
          brandId: 13,
          price: 34.99,
          categoryId: 2,
          subcategoryId: 12,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11121396/Jazwares-Squishville-Mini-Squishmallows-Brilliant-Besties-14-Pack-2.6-In-Plushes?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/61.jpg",
          ],
          rating: 4.0,
        },
        {
          name: "K'nex K-Force Battle Bow Building Set",
          description:
            "Kids will enjoy fun blasting action with the K'nex K-Force battle bow building set! This set allows K'nex builders to create four different blasters and target models one at a time. Your child can become an agent or an Archer, striking targets using the battle bow. The bulding set comes with five soft foam darts that kids can fire up to 75 feet, so kids — and kids at heart — will enjoy long-range striking power.",
          brandId: 38,
          price: 19.99,
          categoryId: 2,
          subcategoryId: 22,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11146074/Knex-K-Force-Battle-Bow-Building-Set?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/62.jpg",
          ],
          rating: 4.0,
        },
        {
          name: "Connect 4: Shots Space Jam: A New Legacy Edition",
          description:
            "It's frenzied free-4-all fun with Tunes vs. Goons launchers! The Connect 4 Shots: Space Jam A New Legacy Edition game is inspired by the movie starring basketball star LeBron James, Bugs Bunny, Lola Bunny, and other Looney Tunes friends. Players choose to be on the Goon Squad or Tune Squad then at the same time they battle to shoot the balls into the Connect 4 grid using the launchers. Kids will love the exciting head-to-head competition as they try to get 4 in a row for the win. Each team gets a metallic multiplier ball that can change a player's score in an instant. After the game, store the launchers under the game base for easy clean up. The Connect 4 game is for 2 or more players, and makes a great indoor activity as well as a birthday or holiday gift for kids ages 6 and up.",
          brandId: 11,
          price: 19.99,
          categoryId: 2,
          subcategoryId: 10,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11140776/Connect-4-Shots-Space-Jam-A-New-Legacy-Edition?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/64.jpg",
          ],
          rating: 5.0,
        },
        {
          name: "Disney Princess Ultimate Celebration Castle",
          description:
            "Celebrate along with the Disney Princess characters in the Ultimate Celebration Castle! Standing 4 feet tall with its classic silhouette, this dollhouse features 3 stories and 6 rooms, including a bathroom with tub and sink, bedroom with bed and vanity, a kitchen with stove, and a dining room with table and chairs. The upstairs window lights up like fireworks while music plays, so kids can imagine the Disney Princess characters watching a spectacular fireworks show. The set also includes 29 accessories, like forks, spoons, a teapot, teacups, plates, a comb, mirror, and more to help kids’ imaginations come to life. There’s a sofa that converts to a garden swing for outside of the castle. With its size, furniture, accessories, lights, and music, this Disney Princess castle dollhouse makes a great gift for girls 3 year and up. It's a great home for Disney Princess dolls and no tools are required for adults to assemble. (Dolls not included. Sold separately. Subject to availability.)",
          brandId: 11,
          price: 19.99,
          categoryId: 2,
          subcategoryId: 23,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11152237/Disney-Princess-Ultimate-Celebration-Castle?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/65.jpg",
          ],
          rating: 1.0,
        },
        {
          name: "Play-Doh 65 Ultra Color Collection Set",
          description:
            "Celebrate any occasion with color, color, and more color! This Play-Doh 65-pack is perfect for kids to share, and it comes with a wide variety of 60 colors. These small 1-ounce Play-Doh cans feature 5 cans of sparkly blue Play-Doh Sapphire compound plus 32 classic colors, 7 Play-Doh Confetti colors, 13 Play-Doh Sparkle colors, and 8 Color Burst mixing colors. This fun size Play-Doh set has plenty of modeling compound for party favors, goodie bag fillers, arts and crafts activities, or a great gift for kids 3 and up who love to get creative with modeling clay!",
          brandId: 11,
          price: 20.99,
          categoryId: 2,
          subcategoryId: 24,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11156211/Play-Doh-65-Ultra-Color-Collection-Set?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/63.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "Transformers: Cyberverse Dinobots Unite Roll N' Change Optimus Prime",
          description:
            "The battle between heroic Autobots and evil Decepticons continues on the Bumblebee Cyberverse Adventures animated series! As a powerful new threat targets Cybertron, it is up to Grimlock and his new friends, the Dinobots, to unite and save the planet! Discover the unique powers and skills of each Cyberverse character, and see how those powers will be used to defend Cybertron… or threaten it.",
          brandId: 11,
          price: 52.99,
          categoryId: 2,
          subcategoryId: 25,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11156216/Transformers-Cyberverse-Dinobots-Unite-Roll-N-Change-Optimus-Prime?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/66.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "Nerf Roblox MM2: Shark Seeker Blaster",
          description:
            "This Nerf Roblox MM2: Shark Seeker blaster takes its inspiration from Roblox game MM2. It includes a special code that allows you to redeem a virtual item on Roblox!* The blaster features an awesome shark design including a fin that you move to prime the blaster. It comes with 3 Nerf Mega foam darts. To start blasting, load 3 darts into the front of the blaster, move the top fin backward and forward, and press the trigger to fire 1 dart. Official Nerf Mega foam darts are tested and approved for performance and quality, and are great for indoor and outdoor play. Eyewear recommended (not included). No batteries required.",
          brandId: 11,
          price: 20.99,
          categoryId: 2,
          subcategoryId: 21,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11153616/Nerf-Roblox-MM2-Shark-Seeker-Blaster?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/67.jpg",
          ],
          rating: 4.6,
        },
        {
          name: "Magic: The Gathering Unsanctioned",
          description:
            "Unsanctioned contains five combinable 30-card, silver-bordered decks for wacky Un- fun. The set contains sixteen brand-new Un- cards to trip your Un- trigger, plus the reprinting of beloved Un- cards from previous Un- sets. It's unbelievable! Unsanctioned also comes with new full-art black-bordered basic lands that will do the Un- line proud—with a new Un- style and new art. Regular, gorgeous art.",
          brandId: 39,
          price: 39.99,
          categoryId: 2,
          subcategoryId: 9,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11100218/Magic-The-Gathering-Unsanctioned?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/68.jpg",
          ],
          rating: 5.0,
        },
        {
          name: "Jenga: Super Mario Bros. Edition Game",
          description:
            "Inspired by the beloved Super Mario video games, the Jenga: Super Mario Edition game has players racing up the tower as Mario, Luigi, Peach, or Toad. Each character gets its own character card to refer to throughout the game. Players earn points by collecting coins as they stack, steal, climb, and defeat Bowser. But watch out…if the tower falls on a player's turn, they'll lose coins and it's game over. Spin the spinner to find out the next move: How many layers to climb, how many blocks to remove and stack, whether to collect coins, or whether the game will reverse directions. It's a battle to the top as players move their own pegs up and their opponents' pegs down, all while trying not to make the tower crash. It's a great gaming experience for fans of Super Mario and Jenga alike!",
          brandId: 11,
          price: 20.99,
          categoryId: 2,
          subcategoryId: 10,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11105163/Jenga-Super-Mario-Bros.-Edition-Game?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/69.jpg",
          ],
          rating: 4.4,
        },
        {
          name: "The Game of Life Super Mario Edition Board Game",
          description:
            "In The Game of Life: Super Mario Edition board game, players choose to play as Mario, Luigi, Peach, or Yoshi, journeying through the Mushroom Kingdom, and finally spinning to win in a battle against Bowser! They move around the looping paths of the gameboard as they collect coins, power up with items and Companions, and play fun minigames along the way such as Rock Paper Scissors, Thumb Wars, and Spin-Offs. As they approach Bowser's Castle, players will also buy stars to boost their battle-spin; each star collected adds 1 point to their spin total, and players will need to spin higher than a 12 to defeat Bowser and win the game. This fun game for kids and families is for 2-4 players, ages 8 and up.",
          brandId: 11,
          price: 26.88,
          categoryId: 2,
          subcategoryId: 10,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11148583/The-Game-of-Life-Super-Mario-Edition-Board-Game?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/69.jpg",
          ],
          rating: 4.9,
        },
        {
          name: "Sheriff of Nottingham Second Edition Board Game",
          description:
            "In Sheriff of Nottingham 2nd Edition, players take turns playing the Sheriff, looking for contraband goods, and the Merchants trying to stock their Stall with the best goods. The Sheriff can inspect any bag they want, but they must be careful, as they’ll have to pay a penalty if they find the Merchants were telling the truth. This new edition includes updated rules, as well as expansions such as the 6th Merchant, Black Market, and Sheriff’s Deputies.",
          brandId: 40,
          price: 39.99,
          categoryId: 2,
          subcategoryId: 10,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11153708/Sheriff-of-Nottingham-Second-Edition-Board-Game?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/71.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "Star Wars: Legion Board Game",
          description:
            "In the Star Wars Legion: Clone Wars Core Set, war has engulfed the galaxy. The vast forces of the Separatist Alliance, bolstered by seemingly endless ranks of battle droids, have pushed the Galactic Republic to the brink of dissolution and defeat. The Republic’s only hope is its army of elite clone troopers, led into battle by noble, Force-wielding Jedi Knights. The war between them is an epic struggle where every battle could turn the tide and change the fate of the galaxy. You can immerse yourself in this epic conflict, assembling your forces and leading them against your opponents in the legendary ground battles of Star Wars with the Clone Wars Core Set for Star Wars™: Legion!",
          brandId: 40,
          price: 79.96,
          categoryId: 2,
          subcategoryId: 10,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11153713/Star-Wars-Legion-Board-Game?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/72.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "YAHTZEE: Cup Noodles",
          description:
            "Play with your food in this delicious version of the classic Shake, Score & Shout dice game! YAHTZEE® Cup Noodles serves up instant fun and nostalgia with custom dice featuring your favorite flavors: Chicken, Beef, Shrimp, Lime, Corn, and Carrots! Roll the right ingredients to score big or try for a YAHTZEE that's Much More Than a Soup! Caution: Competition gets heated.",
          brandId: 41,
          price: 14.99,
          categoryId: 2,
          subcategoryId: 10,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11112992/YAHTZEE-Cup-Noodles?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/73.jpg",
          ],
          rating: 5.0,
        },
        {
          name: "USAopoly Clue: The Office Board Game",
          description:
            "Outwit your co-workers and overcome the “World’s Best Boss” to win a version of the classic mystery game based on an Emmy Award-winning comedy! In CLUE®: The Office, Dunder Mifflin’s Regional Manager Michael Scott has called a mandatory team-building event for which six employees must work independently to figure out WHO killed Toby Flenderson, WHAT office weapon was used, and WHERE at Dunder Mifflin it occurred! If questions aren’t answered by close of business, Michael will give up on his team and take the winner’s week of paid vacation off the table.",
          brandId: 41,
          price: 39.99,
          categoryId: 2,
          subcategoryId: 10,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11112984/USAopoly-Clue-The-Office-Board-Game?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/74.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "iPhone 12 Pro 128GB - Unlocked",
          description:
            "iPhone 12 Pro. 5G to download huge files on the go and stream HDR video. Large 6.1-inch Super Retina XDR display. Ceramic Shield with 4x better drop performance. Incredible low-light photography and 4x optical zoom range. Cinema-grade Dolby Vision video recording, editing, and playback. Night mode portraits and next-level AR experiences with the LiDAR Scanner. Powerful A14 Bionic chip and MagSafe accessories for easy attach and faster wireless charging. For infinitely spectacular possibilities.",
          brandId: 4,
          price: 773.99,
          categoryId: 3,
          subcategoryId: 5,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11114625_silver/iPhone-12-Pro-128GB---Unlocked-silver?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/75.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "iPhone 11 Pro Max 256GB - Unlocked",
          description:
            "Shoot amazing videos and photos with the Ultra Wide, Wide, and Telephoto cameras. Capture your best low-light photos with Night mode. Watch HDR movies and shows on the 6.5-inch Super Retina XDR display. Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. And get all-day battery life and a new level of water resistance. All in the first iPhone powerful enough to be called Pro.",
          brandId: 4,
          price: 718.99,
          categoryId: 3,
          subcategoryId: 5,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11098256_space-gray/iPhone-11-Pro-Max-256GB---Unlocked-space-gray?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/76.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "iPhone 12 Pro 256GB - Unlocked",
          description:
            "iPhone 12 Pro. 5G to download huge files on the go and stream HDR video. Large 6.1-inch Super Retina XDR display. Ceramic Shield with 4x better drop performance. Incredible low-light photography and 4x optical zoom range. Cinema-grade Dolby Vision video recording, editing, and playback. Night mode portraits and next-level AR experiences with the LiDAR Scanner. Powerful A14 Bionic chip and MagSafe accessories for easy attach and faster wireless charging. For infinitely spectacular possibilities.",
          brandId: 4,
          price: 828.99,
          categoryId: 3,
          subcategoryId: 5,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11114626_silver/iPhone-12-Pro-256GB---Unlocked-silver?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/77.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "iPhone 12 Pro Max 128GB - Unlocked",
          description:
            "iPhone 12 Pro Max. 5G to download huge files on the go and stream HDR video. Larger 6.7-inch Super Retina XDR display. Ceramic Shield with 4x better drop performance. Incredible low-light photography with the best Pro camera system on an iPhone, and 5x optical zoom range. Cinema-grade Dolby Vision video recording, editing, and playback. Night mode portraits and next-level AR experiences with the LiDAR Scanner. Powerful A14 Bionic chip and new MagSafe accessories for easy attach and faster wireless charging. For infinitely spectacular possibilities.",
          brandId: 4,
          price: 878.99,
          categoryId: 3,
          subcategoryId: 5,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11160384_blue/iPhone-12-Pro-Max-128GB---Unlocked-blue?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/78.jpg",
          ],
          rating: 4.4,
        },
        {
          name: "iPhone 11 Pro Max 64GB - Unlocked",
          description:
            "Shoot amazing videos and photos with the Ultra Wide, Wide, and Telephoto cameras. Capture your best low-light photos with Night mode. Watch HDR movies and shows on the 6.5-inch Super Retina XDR display. Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. And get all-day battery life and a new level of water resistance. All in the first iPhone powerful enough to be called Pro.",
          brandId: 4,
          price: 649.99,
          categoryId: 3,
          subcategoryId: 5,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11098255_green/iPhone-11-Pro-Max-64GB---Unlocked-green?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/79.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "iPhone 12 Pro Max 128GB - ATT",
          description:
            "iPhone 12 Pro Max. 5G to download huge files on the go and stream HDR video. Larger 6.7-inch Super Retina XDR display. Ceramic Shield with 4x better drop performance. Incredible low-light photography with the best Pro camera system on an iPhone, and 5x optical zoom range. Cinema-grade Dolby Vision video recording, editing, and playback. Night mode portraits and next-level AR experiences with the LiDAR Scanner. Powerful A14 Bionic chip and new MagSafe accessories for easy attach and faster wireless charging. For infinitely spectacular possibilities.",
          brandId: 4,
          price: 878.99,
          categoryId: 3,
          subcategoryId: 5,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11114628_blue/iPhone-12-Pro-Max-128GB---ATT-blue?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/80.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "Jurassic World Evolution 2 - Xbox Series X",
          description:
            "Jurassic World Evolution 2 is the much-anticipated sequel to Frontier’s highly successful Jurassic World Evolution, building upon the groundbreaking and immersive 2018 management simulation. It introduces a compelling, new narrative campaign, incredible new features, and awe-inspiring new dinosaurs brought to life with captivating authenticity. Together with expanded construction and more customisation options, the result is an even bigger, better and authentic Jurassic World game.",
          brandId: 42,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 15,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11157921/Jurassic-World-Evolution-2---Xbox-Series-X?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/81.webp",
          ],
          rating: 5.0,
        },
        {
          name: "Jurassic World Evolution 2 - PS4",
          description:
            "Jurassic World Evolution 2 is the much-anticipated sequel to Frontier’s highly successful Jurassic World Evolution, building upon the groundbreaking and immersive 2018 management simulation. It introduces a compelling, new narrative campaign, incredible new features, and awe-inspiring new dinosaurs brought to life with captivating authenticity. Together with expanded construction and more customisation options, the result is an even bigger, better and authentic Jurassic World game.",
          brandId: 42,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11157919/Jurassic-World-Evolution-2---PlayStation-4?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/82.webp",
          ],
          rating: 5.0,
        },
        {
          name: "Forza Horizons 5 - Xbox Series X",
          description:
            "GameStop is excited to bring you Forza Horizon 5 on Xbox Series X. Explore incredible landscapes, experience intense weather, and meet awesome new characters in this racing simulation video game. Forza Horizon 5 release date 11/09/2021.",
          brandId: 1,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 15,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11148773/Forza-Horizons-5---Xbox-Series-X?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/83.webp",
          ],
          rating: 5.0,
        },
        {
          name: "Shin Megami Tensei V SteelBook Launch Edition - Nintendo Switch",
          description:
            "GameStop is excited to bring you Shin Megami Tensei V Steelbook Launch Edition on Nintendo Switch! Experience a dark post-apocalyptic adventure and discover an alternate demon-infested Tokyo in this RPG video game. Shin Megami Tensei 5 Release date 11/12/2021.",
          brandId: 43,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 7,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11149943/Shin-Megami-Tensei-V-SteelBook-Launch-Edition----Nintendo-Switch?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/84.webp",
          ],
          rating: 5.0,
        },
        {
          name: "Star Wars Jedi Knight Collection - PlayStation 4",
          description:
            "Get two classic Star Wars™ games with the Star Wars™ Jedi Knight Collection, which includes Star Wars™ Jedi Knight II: Jedi Outcast and Star Wars™ Jedi Knight: Jedi Academy. Meet iconic Star Wars™ characters such as Lando Calrissian and Luke Skywalker in Star Wars™ Jedi Knight II: Jedi Outcast, where you play as the Jedi Kyle Katarn, employing a unique mix of weapons, Force™ powers and your lightsaber™ in single-player first- and third-person action. Follow an ancient tradition and learn the powers - and dangers - of the Force™ in Star Wars™ Jedi Knight: Jedi Academy, a single- and multiplayer action combat game.",
          brandId: 44,
          price: 29.99,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11158712/Star-Wars-Jedi-Knight-Collection---PlayStation-4?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/85.webp",
          ],
          rating: 5.0,
        },
        {
          name: "Star Wars Jedi Knight Collection - Nintendo Switch",
          description:
            "Get two classic Star Wars™ games with the Star Wars™ Jedi Knight Collection, which includes Star Wars™ Jedi Knight II: Jedi Outcast and Star Wars™ Jedi Knight: Jedi Academy. Meet iconic Star Wars™ characters such as Lando Calrissian and Luke Skywalker in Star Wars™ Jedi Knight II: Jedi Outcast, where you play as the Jedi Kyle Katarn, employing a unique mix of weapons, Force™ powers and your lightsaber™ in single player first- and third-person action. Follow an ancient tradition and learn the powers - and dangers - of the Force™ in Star Wars™ Jedi Knight: Jedi Academy, a single- and multiplayer action combat game.",
          brandId: 44,
          price: 29.99,
          categoryId: 1,
          subcategoryId: 7,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11161600/Star-Wars-Jedi-Knight-Collection---Nintendo-Switch?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/86.webp",
          ],
          rating: 5.0,
        },
        {
          name: "Star Wars Racer and Commando Combo - PlayStation 4",
          description:
            "Get two classic Star Wars™ games with the Star Wars™ Racer and Commando Combo which includes Star Wars™: Episode I Racer and Star Wars™ Republic Commando. Climb on, strap in, and experience the pure adrenaline-pumping excitement of the Podracing sequence from Star Wars™: Episode I The Phantom Menace in Star Wars™: Episode I Racer. In Star Wars™ Republic Commando you are the leader of your elite squad of Republic Commandos. Your mission is to infiltrate, dominate, and ultimately, annihilate the enemy.",
          brandId: 44,
          price: 29.99,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11158713/Star-Wars-Racer-and-Commando-Combo---PlayStation-4?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/87.webp",
          ],
          rating: 5.0,
        },
        {
          name: "Star Wars Racer and Commando Combo - Nintendo Switch",
          description:
            "Get two classic Star Wars™ games with the Star Wars™ Racer and Commando Combo which includes Star Wars™: Episode I Racer and Star Wars™ Republic Commando. Climb on, strap in, and experience the pure adrenaline-pumping excitement of the Podracing sequence from Star Wars™: Episode I The Phantom Menace in Star Wars™: Episode I Racer. In Star Wars™ Republic Commando you are the leader of your elite squad of Republic Commandos. Your mission is to infiltrate, dominate, and ultimately, annihilate the enemy.",
          brandId: 44,
          price: 29.99,
          categoryId: 1,
          subcategoryId: 7,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11161601/Star-Wars-Racer-and-Commando-Combo---Nintendo-Switch?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/89.webp",
          ],
          rating: 5.0,
        },
        {
          name: "The Smurfs: Mission Vileaf Smurftastic Edition - Xbox One",
          description:
            "The Smurfs are back at GameStop with The Smurfs: Mission Vileaf Smurftastic Edition on Xbox One! Join the the Smurf characters and help them defend the village from the evil wizard in this unique, platform adventure video game. Release date 11/16/2021.",
          brandId: 45,
          price: 39.99,
          categoryId: 1,
          subcategoryId: 13,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11156034/The-Smurfs-Mission-Vileaf-Smurftastic-Edition----Xbox-One?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/89a.webp",
          ],
          rating: 0.0,
        },
        {
          name: "The Smurfs: Mission Vileaf Smurftastic Edition - PlayStation 4",
          description:
            "The Smurfs are back at GameStop with The Smurfs: Mission Vileaf Smurftastic Edition on PS4! Join the the Smurf characters and help them defend the village from the evil wizard in this unique, platform adventure video game. Release date 11/16/2021.",
          brandId: 45,
          price: 39.99,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11156033/The-Smurfs-Mission-Vileaf-Smurftastic-Edition----PlayStation-4?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/91.webp",
          ],
          rating: 0.0,
        },
        {
          name: "Battlefield - PlayStation 5",
          description:
            "GameStop can’t wait to bring you Battlefield 2042 on PS5! Experience massive battles and immersive gameplay and encounter destruction and combat to the extreme in this epic, first-person shooter video game.",
          brandId: 16,
          price: 69.88,
          categoryId: 1,
          subcategoryId: 1,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11148122/Battlefield-2042---PlayStation-5?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/91a.webp",
          ],
          rating: 2.7,
        },
        {
          name: "Battlefield 2042 - Xbox Series X",
          description:
            "GameStop can’t wait to bring you Battlefield 2042 on Xbox Series X! Experience massive battles and immersive gameplay and encounter destruction and combat to the extreme in this epic, first-person shooter video game.",
          brandId: 16,
          price: 69.88,
          categoryId: 1,
          subcategoryId: 15,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11148121/Battlefield-2042---Xbox-Series-X?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/92.webp",
          ],
          rating: 2.7,
        },
        {
          name: "Battlefield 2042 - PlayStation 4",
          description:
            "GameStop can’t wait to bring you Battlefield 2042 on PS4! Experience massive battles and immersive gameplay and encounter destruction and combat to the extreme in this epic, first-person shooter video game.",
          brandId: 16,
          price: 59.88,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11148124/Battlefield-2042----PlayStation-4?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/93.webp",
          ],
          rating: 4.2,
        },
        {
          name: "Pokemon Shining Pearl - Nintendo Switch",
          description:
            "Experience the nostalgic story from the Pokémon Pearl Version game in a reimagined adventure, Pokémon™ Shining Pearl, now on the Nintendo Switch™ system! Adventures in the Pokémon Shining Pearl game will take place in the familiar Sinnoh region. Rich in nature and with mighty Mount Coronet at its heart, Sinnoh is a land of many myths passed down through the ages. You’ll choose either Turtwig, Chimchar, or Piplup to be your first partner Pokémon and then set off on your journey to become the Champion of the Pokémon League. Along the way, you’ll be able to encounter the Legendary Pokémon Palkia.",
          brandId: 8,
          price: 59.88,
          categoryId: 1,
          subcategoryId: 7,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11120693/Pokemon-Shining-Pearl---Nintendo-Switch?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/94.webp",
          ],
          rating: 5.0,
        },
        {
          name: "Pokemon Brilliant Diamond - Nintendo Switch",
          description:
            "Experience the nostalgic story from the Pokémon Diamond Version game in a reimagined adventure, Pokémon™ Brilliant Diamond, now on the Nintendo Switch™ system! Adventures in the Pokémon Brilliant Diamond game will take place in the familiar Sinnoh region. Rich in nature and with mighty Mount Coronet at its heart, Sinnoh is a land of many myths passed down through the ages. You’ll choose either Turtwig, Chimchar, or Piplup to be your first partner Pokémon and then set off on your journey to become the Champion of the Pokémon League. Along the way, you’ll be able to encounter the Legendary Pokémon Dialga.",
          brandId: 8,
          price: 59.88,
          categoryId: 1,
          subcategoryId: 7,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11120693/Pokemon-Shining-Pearl---Nintendo-Switch?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/95.webp",
          ],
          rating: 2.0,
        },
        {
          name: "Kena: Bridge of Spirits Deluxe Edition - PlayStation 5",
          description:
            "A story-driven, action adventure combining exploration with fast-paced combat. As Kena, players find and grow a team of charming spirit companions called the Rot, enhancing their abilities and creating new ways to manipulate the environment.",
          brandId: 45,
          price: 49.99,
          categoryId: 1,
          subcategoryId: 1,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11165934/Kena-Bridge-of-Spirits-Deluxe-Edition---PlayStation-5?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/96.webp",
          ],
          rating: 5.0,
        },
        {
          name: "Kena: Bridge of Spirits Deluxe Edition - PlayStation 4",
          description:
            "A story-driven, action adventure combining exploration with fast-paced combat. As Kena, players find and grow a team of charming spirit companions called the Rot, enhancing their abilities and creating new ways to manipulate the environment.",
          brandId: 45,
          price: 49.99,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11165933/Kena-Bridge-of-Spirits-Deluxe-Edition---PlayStation-4?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/97.webp",
          ],
          rating: 5.0,
        },
        {
          name: "Farming Simulator 22 - Xbox Series X",
          description:
            "GameStop is excited to bring you Farming Simulator on Xbox One and Xbox Series X. Experience an open world enriched with farming activities and enjoy a farming game where you can tend to your livestock, grow crops, and operate farming vehicles. Farming Simulator 22 release date 11/22/2021.",
          brandId: 46,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 13,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11149939/Farming-Simulator-22---Xbox-Series-X?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/98.webp",
          ],
          rating: 4.0,
        },
        {
          name: "Nintendo Switch Lite Turquoise",
          description:
            "Introducing Nintendo Switch Lite, a new version of the Nintendo Switch system that's optimized for personal, handheld play. Nintendo Switch Lite Turquoise is a small and light Nintendo Switch system at a great price. With a built-in +Control Pad, and a sleek, unibody design, Nintendo Switch Lite is great for on-the-go gaming. Nintendo Switch Lite games are compatible with popular games such as Super Mario Odyssey™, Mario Kart™ 8 Deluxe, Super Smash Bros.™ Ultimate, The Legend of Zelda™: Breath of the Wild, and more. If you're looking for a gaming system all your own, Nintendo Switch Lite is ready to hit the road whenever you are.",
          brandId: 8,
          price: 184.99,
          categoryId: 4,
          subcategoryId: 7,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11095775/Nintendo-Switch-Lite-Console-Turquoise?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/99.jpg",
          ],
          rating: 4.7,
        },
        {
          name: "Nintendo Switch with Gray Joy-Con",
          description:
            "Introducing Nintendo Switch, the new home video game system from Nintendo. In addition to providing single and multiplayer thrills at home, the Nintendo Switch can be taken on the go so players can enjoy a full home Nintendo Switch console experience anytime, anywhere. The mobility of a handheld is now added to the power of a home gaming system, with unprecedented new play styles brought to life by the two new Nintendo Switch Joy-Con controllers.",
          brandId: 8,
          price: 279.99,
          categoryId: 4,
          subcategoryId: 7,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11095821/Nintendo-Switch-Console-Gray-Joy-Con?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/100.jpg",
          ],
          rating: 4.7,
        },
        {
          name: "Xbox One S White 1TB",
          description:
            "With the Xbox One S, you can play your favorite games, including Xbox 360 classics, on a 40% smaller console. Experience high-quality video with HDR technology, premium audio, and fast, reliable online gaming with friends. Stream 4K video and access all your favorite entertainment through apps like on YouTube, Netflix and Amazon Video, and watch UHD Blu-ray movies in stunning 4K Ultra HD. Own the Xbox One S 1TB Console and get access to over 2,200 games that you can only play on Xbox One. This bundle includes a 1-Month Xbox Game Pass Ultimate trial and 14-Day Xbox Live Gold Trial. Whether you’re playing with instant access to over 100 games on Xbox Game Pass, watching 4K movies, or streaming live gameplay, there's never been a better time to game with Xbox One.",
          brandId: 1,
          price: 289.99,
          categoryId: 4,
          subcategoryId: 13,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/10138875/Microsoft-Xbox-One-S-1TB-Console-White?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/101.jpg",
          ],
          rating: 4.4,
        },
        {
          name: "PlayStation 4 Pro Black 1TB",
          description:
            "Experience gaming at a whole new level with the PS4 Pro. The PlayStation 4 Pro has faster frame rates, double the power of PS4, and with 4K TV gaming for stunning clarity and realistic visuals. Play the latest PS4 games with the PS4 controller and stream your favorite videos with compatible 4K services. Enrich your gaming with HDR and experience the lifelike colors and details while you play. Heighten your senses with the PlayStation 4 Pro. The PS4 Pro 1TB is gaming at its best.",
          brandId: 9,
          price: 389.99,
          categoryId: 4,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/10134659/Sony-PlayStation-4-Pro-1TB-Console-Black?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/102.jpg",
          ],
          rating: 4.6,
        },
        {
          name: "Microsoft Xbox One X 1TB Console Black",
          description:
            "Better, faster, more powerful. With the Xbox One X console, you can enjoy a more immersive gaming experience, with 4K gaming for realistic graphic details and HDR for brilliant colors. With 40% more power than any other console, you can increase your game performance with better load times and graphic memory. Stream hundreds of videos with 4K video on entertainment apps like Netflix, Amazon, Hulu. There is so much you can do, the possibilities are endless. Take the game to the next level with the Xbox One X 1TB console.",
          brandId: 1,
          price: 389.99,
          categoryId: 4,
          subcategoryId: 13,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/10174659/Microsoft-Xbox-One-X-1TB-Console-Black?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/103.jpg",
          ],
          rating: 3.9,
        },
        {
          name: "Microsoft Xbox One 500GB Console Black with Original Controller",
          description:
            "Cutting-edge design meets cutting-edge technology with the Xbox One console. By continuously adding features, content, and capabilities, Xbox One was built to grow with you. Updates from Xbox Live will happen in the background while you enjoy your favorite game. Sign in to any Xbox One to see your home screen and play your digital games. Your digital content, profile, and saves go where you go. Xbox One was built by gamers, for gamers.",
          brandId: 1,
          price: 239.99,
          categoryId: 4,
          subcategoryId: 13,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/10115705/Microsoft-Xbox-One-500GB-Console-Black-with-Original-Controller?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/104.jpg",
          ],
          rating: 4.0,
        },
        {
          name: "Pokemon Journeys Ash Ketchum Baseball Cap",
          description:
            "Become the very best just like Ash Ketchum by rising to the challenge and channeling your innter Pokemon Master in this Pokemon baseball cap.",
          brandId: 12,
          price: 16.99,
          categoryId: 6,
          subcategoryId: 11,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11157532/Pokemon-Journeys-Ash-Ketchum-Baseball-Cap?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/105.jpg",
          ],
          rating: 4.9,
        },
        {
          name: "Pokemon Pikachu Graffiti Tote Bag",
          description:
            "Catch all your favorite games, collectibles, trading cards, apparel and more in this special Pikachu re-usable shopping bag, exclusively at GameStop.",
          brandId: 10,
          price: 4.99,
          categoryId: 6,
          subcategoryId: 26,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11110007/Pokemon-Pikachu-Graffiti-Tote-Bag?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/106.jpg",
          ],
          rating: 4.8,
        },
        {
          name: "Loungefly The Nightmare Before Christmas Simply Meant to Be Mini Backpack",
          description:
            "Gothic romance abounds in Loungefly and Disney’s newest collaboration! Featuring Jack Skellington and Sally on a festive stroll through Halloween Town, this bag is designed with the romantic super-fan in mind. Sometimes, two souls are simply meant to be!",
          brandId: 47,
          price: 69.99,
          categoryId: 6,
          subcategoryId: 26,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11159109/Loungefly-The-Nightmare-Before-Christmas-Simply-Meant-to-Be-Mini-Backpack?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/107.jpg",
          ],
          rating: 2.7,
        },
        {
          name: "Pokemon Go-tcha Evolve Watch",
          description:
            "Pokemon Go just got even better with the Pokemon GO-Tcha Evolve Watch. Catching and Pokémon and collecting items just got easy - this Pokemon Go watch provides on-screen and vibrate alerts. Simply tap the Go-thca screen to grab the items. Select 'Auto-Catch' mode and you don't even need to respond - Go-tcha does it all! Collect Pokéballs, Potions, Eggs and other items at Pokéstops without having to check your smartphone.",
          brandId: 48,
          price: 49.99,
          categoryId: 6,
          subcategoryId: 27,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11098266/Pokemon-Go-tcha-Evolve-Watch?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/108.jpg",
          ],
          rating: 3.6,
        },
        {
          name: "GameStop Logo Zip Unisex Hooded Jacket",
          description:
            "There was only one idea when we came up with this hoodie: It’s gotta be everyone’s favorite hoodie of all time. Yep. We’re going for it. This bad boy is comfy, cool, and with our GameStop logo it’s the perfect way to rep your favorite store for games, collectibles, consoles, apparel, and more.",
          brandId: 49,
          price: 69.99,
          categoryId: 6,
          subcategoryId: 28,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11166188/GameStop-Logo-Zip-Unisex-Hooded-Jacket?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/109.jpg",
          ],
          rating: 5.0,
        },
        {
          name: "Pokemon GO-Tcha Bracelet",
          description:
            "Pokemon Go just got even better with the Pokemon GO-Tcha Bracelet. Catching and Pokémon and collecting items just got easy - Go-tcha provides on-screen and vibrate alerts. Simply tap the Go-thca screen to grab the items. Select 'Auto-Catch' mode and you don't even need to respond - Go-tcha does it all! Collect Pokéballs, Potions, Eggs and other items at Pokéstops without having to check your smartphone.",
          brandId: 48,
          price: 34.99,
          categoryId: 6,
          subcategoryId: 27,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/10147896/Pokemon-GO-Tcha-Bracelet?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/110.jpg",
          ],
          rating: 3.0,
        },
        {
          name: "GameStop Logo Unisex Joggers",
          description:
            "We love a good jog. Especially when it’s a jog over to the console table to grab a controller. Or, a virtual jog through the post-apocalyptic landscape of Fallout. Anyway, we crafted these joggers to be the perfect companion for whatever type of jogger you are inclined (or reclined) to be! Enjoy responsibly.",
          brandId: 49,
          price: 49.99,
          categoryId: 6,
          subcategoryId: 29,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11166189/GameStop-Logo-Unisex-Joggers?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/111.jpg",
          ],
          rating: 5.0,
        },
        {
          name: "GameStop Logo Hooded Sweatshirt",
          description: "Officially Licensed Art From Threadless",
          brandId: 49,
          price: 39.99,
          categoryId: 6,
          subcategoryId: 28,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11121558_black/GameStop-Logo-Hooded-Sweatshirt-black?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/112.jpg",
          ],
          rating: 4.7,
        },
        {
          name: "GameStop Premium Logo Unisex T-Shirt",
          description:
            "There are the tees in the bottom of a t-shirt drawer, and then there are the ones you hang in the front of your closet. Your go-to, look-forward to wearing shirts. The ones that put you in a good mood because they’re so damn comfortable and aged perfectly. Well that feeling, that look, it’s right out of the package with the classic, semi-vintage black GameStop logo tee. It’s the t-shirt best friend you’ve been waiting for. Get a hangar ready.",
          brandId: 49,
          price: 29.99,
          categoryId: 6,
          subcategoryId: 30,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11151222_black/GameStop-Premium-Logo-Unisex-T-Shirt-black?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/113.jpg",
          ],
          rating: 4.8,
        },
        {
          name: "WandaVision Power Pack Jewelry Set Only at GameStop",
          description:
            "Everyone loves a good love story – and this set has it all. Wanda’s engagement and wedding ring, Vision’s wedding ring, a S.W.O.R.D. necklace, and of course, Wanda’s Scarlet Witch crown. This striking set comes in a special WandaVision collectible box, designed for ease of display, though the durable pieces within the box could be worn for cosplay or as everyday jewelry. This limited edition set is certain to delight anyone who loves the show, Scarlet Witch, and Vision.",
          brandId: 51,
          price: 89.99,
          categoryId: 6,
          subcategoryId: 11,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11116337/WandaVision-Power-Pack-Jewelry-Set-Only-at-GameStop?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/114.jpg",
          ],
          rating: 3.9,
        },
        {
          name: "GameStop Logo Unisex Hooded Sweatshirt",
          description:
            "Load Game. You’re back in black with this totally awesome, totally comfy GameStop hoodie. Rep your favorite spot for games, collectibles, and more with this simple, cool hoodie. Sometimes you just can’t beat a classic.",
          brandId: 49,
          price: 52.99,
          categoryId: 6,
          subcategoryId: 28,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11166186/GameStop-Logo-Unisex-Hooded-Sweatshirt?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/115.jpg",
          ],
          rating: 5.0,
        },
        {
          name: "GameStop Rocket Unisex Button Up Short-Sleeve Shirt",
          description:
            "3. 2. 1. Let’s go. At GameStop we are big fans of exploration. We believe games are another way to explore ourselves and society and the universe. Nothing says, “Get out there and explore” like a rocket. Enjoy this shirt and blast off to the worlds that matter most in your gaming life.",
          brandId: 49,
          price: 69.99,
          categoryId: 6,
          subcategoryId: 30,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11166187/GameStop-Rocket-Unisex-Button-Up-Short-Sleeve-Shirt?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/116.jpg",
          ],
          rating: 4.8,
        },
        {
          name: "GameStop Logo Unisex Sweat Shorts",
          description:
            "You know the kind of game that makes you feel like you’re getting a workout? These sweat shorts are built for that game in mind. There’s no reason you should have to win the big boss fight in an ordinary pair of pants. Instead, embrace the gamer within and go with these comfy sweat shorts. Also good for fridge-runs, binge-watching, and answering the door when your in-laws come over.",
          brandId: 49,
          price: 44.99,
          categoryId: 6,
          subcategoryId: 29,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11166181/GameStop-Logo-Unisex-Sweat-Shorts?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/117.jpg",
          ],
          rating: 4.9,
        },
        {
          name: "GameStop Power To The Players Unisex T-Shirt",
          description:
            "It’s your game. Your rules. Your way. “Power To The Players” is our motto at GameStop, because we believe in the power of playing -- in creating your own characters, in embodying the best that have ever been created, in action, in horror, in humor, in love. We believe that when you put the power in the hands of the player, anything is possible. We present this t-shirt so you can share in celebrating our motto and love of games.",
          brandId: 49,
          price: 29.99,
          categoryId: 6,
          subcategoryId: 30,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11166665/GameStop-Power-To-The-Players-Unisex-T-Shirt?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/118.jpg",
          ],
          rating: 4.9,
        },
        {
          name: "GameStop Logo Youth Crew Socks",
          description:
            "Socks are so in. It used to be that a white pair of socks was the norm, but now EVERYONE likes to rock socks as an accent piece. These socks dial it up to 11 and go beyond an accent straight into, “Yes, you’re looking at me,” territory. Level up your sock game with a logo that’s all about play.",
          brandId: 49,
          price: 9.99,
          categoryId: 6,
          subcategoryId: 31,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11166182_white?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/118.5.jpg",
          ],
          rating: 5.0,
        },
        {
          name: "Godzilla Big Print Crew Socks",
          description:
            "Kick your feet up with these officially licensed Godzilla Big Print Crew Socks. Crafted with soft, stretchable fabric for all-day comfort, these Godzilla crew socks give you a secure fit.",
          brandId: 12,
          price: 7.99,
          categoryId: 6,
          subcategoryId: 31,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11146877/Godzilla-Big-Print-Crew-Socks?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/119.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "GameStop Logo Unisex Beanie",
          description:
            "Sup? How you doin’? Oh us, we’re doing F-I-N-E fine in our new GameStop beanie. Just in time for the fall, we’re rolling out this exclusive beanie for folks who like to look cool while keeping their noggins warm.",
          brandId: 49,
          price: 14.99,
          categoryId: 6,
          subcategoryId: 11,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11166184/GameStop-Logo-Unisex-Beanie?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/121.jpg",
          ],
          rating: 4.9,
        },
        {
          name: "Fortnite Minty Legends Pack - PlayStation 4",
          description:
            "Keep it fresh and and fierce with the Fortnite Minty Legends Pack!",
          brandId: 52,
          price: 29.99,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11160790/Fortnite-Minty-Legends-Pack---PlayStation-4?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/122.jpg",
          ],
          rating: 3.0,
        },
        {
          name: "Pokemon Brilliant Diamond and Shining Pearl Double Pack - Nintendo Switch",
          description:
            "A double pack containing the Pokémon™ Brilliant Diamond and Pokémon™ Shining Pearl games are also available for purchase as a packaged version or as a digital downloadable version. The packaged version includes 1 physical Pokémon Brilliant Diamond game and 1 physical Pokémon Shining Pearl game while the downloadable version includes digital versions of both the Pokémon Brilliant Diamond game and the Pokémon Shining Pearl game.",
          brandId: 8,
          price: 119.98,
          categoryId: 1,
          subcategoryId: 7,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11147420/Pokemon-Brilliant-Diamond-and-Shining-Pearl-Double-Pack----Nintendo-Switch?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/123.jpg",
          ],
          rating: 5.0,
        },
        {
          name: "Fortnite Minty Legends Pack - Xbox Series X",
          description:
            "Keep it fresh and and fierce with the Fortnite Minty Legends Pack!",
          brandId: 52,
          price: 29.99,
          categoryId: 1,
          subcategoryId: 15,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11160793/Fortnite-Minty-Legends-Pack---Xbox-Series-X?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/124.jpg",
          ],
          rating: 5.0,
        },
        {
          name: "Fortnite Minty Legends Pack - PlayStation 5",
          description:
            "Keep it fresh and and fierce with the Fortnite Minty Legends Pack!",
          brandId: 52,
          price: 29.99,
          categoryId: 1,
          subcategoryId: 1,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11160792/Fortnite-Minty-Legends-Pack---PlayStation-5?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/125.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "Just Dance 2022 - PlayStation 4",
          description:
            "GameStop joins the dance party with Just Dance 2022 on PS4! Step up your dance skills and experience all the fun with new songs, custom playlists, and choreographies to choose from in the ultimate dance video game.",
          brandId: 18,
          price: 41.88,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11148894/Just-Dance-2022---PlayStation-4?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/126.webp",
          ],
          rating: 0.0,
        },
        {
          name: "Just Dance 2022 - PlayStation 5",
          description:
            "GameStop joins the dance party with Just Dance 2022 on PS5! Step up your dance skills and experience all the fun with new songs, custom playlists, and choreographies to choose from in the ultimate dance video game.",
          brandId: 18,
          price: 41.88,
          categoryId: 1,
          subcategoryId: 1,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11148897/Just-Dance-2022---PlayStation-5?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/127.webp",
          ],
          rating: 0.0,
        },
        {
          name: "Just Dance 2022 - Xbox One",
          description:
            "GameStop joins the dance party with Just Dance 2022 on Xbox One and Xbox Series X! Step up your dance skills and experience all the fun with new songs, custom playlists, and choreographies to choose from in the ultimate dance video game.",
          brandId: 18,
          price: 41.88,
          categoryId: 1,
          subcategoryId: 13,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11148895/Just-Dance-2022---Xbox-Series-X?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/128.webp",
          ],
          rating: 1.0,
        },
        {
          name: "Riders Republic Gold Edition - PlayStation 4",
          description:
            "GameStop is excited to bring you Riders Republic Gold Edition on PS4! Take on a multitude of downhill races, team competitions and challenges and get ready for the ultimate thrill in this action-packed sports video game.",
          brandId: 18,
          price: 98.99,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11108586/Riders-Republic-Gold-Edition---PlayStation-4?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/129.webp",
          ],
          rating: 4.0,
        },
        {
          name: "Riders Republic - Xbox One",
          description:
            "GameStop is excited to bring you Riders Republic on Xbox One and Xbox Series X! Take on a multitude of downhill races, team competitions and challenges and get ready for the ultimate thrill in this action-packed sports video game. Riders Republic release date 10/28/2021.",
          brandId: 18,
          price: 49.94,
          categoryId: 1,
          subcategoryId: 15,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11108584/Riders-Republic---Xbox-One?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/130.webp",
          ],
          rating: 5.0,
        },
        {
          name: "Riders Republic - PlayStation 5",
          description:
            "GameStop is excited to bring you Riders Republic on PS5! Take on a multitude of downhill races, team competitions and challenges and get ready for the ultimate thrill in this action-packed sports video game. Riders Republic release date 10/28/2021.",
          brandId: 18,
          price: 49.94,
          categoryId: 1,
          subcategoryId: 1,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11108585/Riders-Republic---PlayStation-5?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/131.webp",
          ],
          rating: 3.0,
        },
        {
          name: "Marvel's Guardians of the Galaxy - PlayStation 5",
          description:
            "GameStop is excited to bring you the new Marvel Guardians of the Galaxy video game on PS5! Set out on an adventure of a lifetime with Marvel’s mightiest band of misfits. Guardians of the Galaxy release date 10/26/2021.",
          brandId: 53,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 1,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11149082/Marvels-Guardians-of-the-Galaxy----PlayStation-5?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/132.webp",
          ],
          rating: 4.6,
        },
        {
          name: "Marvel's Guardians of the Galaxy - Xbox Series X",
          description:
            "GameStop is excited to bring you the new Marvel Guardians of the Galaxy video game on Xbox Series X! Set out on an adventure of a lifetime with Marvel’s mightiest band of misfits. Guardians of the Galaxy release date 10/26/2021.",
          brandId: 53,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 15,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11149081/Marvels-Guardians-of-the-Galaxy---Xbox-Series-X?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/133.webp",
          ],
          rating: 4.4,
        },
        {
          name: "Marvel's Guardians of the Galaxy - PlayStation 4",
          description:
            "GameStop is excited to bring you the new Marvel Guardians of the Galaxy video game on PS4! Set out on an adventure of a lifetime with Marvel’s mightiest band of misfits. Guardians of the Galaxy release date 10/26/2021.",
          brandId: 53,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11149080/Marvels-Guardians-of-the-Galaxy----PlayStation-4?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/134.webp",
          ],
          rating: 4.0,
        },
        {
          name: "Back 4 Blood - Xbox One",
          description:
            "Back 4 Blood is a thrilling cooperative first-person shooter from the creators of the critically acclaimed Left 4 Dead franchise. You are at the center of a war against the Ridden. Theseonce-human hosts of a deadly parasite have turned into terrifying creatures bent on devouring what remains of civilization. With humanity’s extinction on the line, it’s up to you and your friends to take the fight to the enemy, eradicate the Ridden, and reclaim the world.",
          brandId: 53,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 15,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11113148/Back-4-Blood---Xbox-Series-X?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/135.webp",
          ],
          rating: 3.5,
        },
        {
          name: "Back 4 Blood - PlayStation 4",
          description:
            "Back 4 Blood is a thrilling cooperative first-person shooter from the creators of the critically acclaimed Left 4 Dead franchise. You are at the center of a war against the Ridden. Theseonce-human hosts of a deadly parasite have turned into terrifying creatures bent on devouring what remains of civilization. With humanity’s extinction on the line, it’s up to you and your friends to take the fight to the enemy, eradicate the Ridden, and reclaim the world.",
          brandId: 53,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11113001/Back-4-Blood---PlayStation-4?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/136.webp",
          ],
          rating: 3.9,
        },
        {
          name: "Back 4 Blood - PlayStation 5",
          description:
            "Back 4 Blood is a thrilling cooperative first-person shooter from the creators of the critically acclaimed Left 4 Dead franchise. You are at the center of a war against the Ridden. Theseonce-human hosts of a deadly parasite have turned into terrifying creatures bent on devouring what remains of civilization. With humanity’s extinction on the line, it’s up to you and your friends to take the fight to the enemy, eradicate the Ridden, and reclaim the world.",
          brandId: 53,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 1,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11113149/Back-4-Blood---PlayStation-5?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/137.webp",
          ],
          rating: 4.1,
        },
        {
          name: "NHL 22 - Xbox One",
          description:
            "GameStop hits the ice with NHL 22 on Xbox One! Take down the competition with new moves, maneuvers, and plays as you take control of the game in this highly-anticipated hockey video game, release date 10/15/2021.",
          brandId: 16,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 13,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11156048/NHL-22---Xbox-One?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/138.webp",
          ],
          rating: 4.6,
        },
        {
          name: "NHL 22 - PlayStation 4",
          description:
            "GameStop hits the ice with NHL 22 on PS4! Take down the competition with new moves, maneuvers, and plays as you take control of the game in this highly-anticipated hockey video game, release date 10/15/2021.",
          brandId: 16,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11156049/NHL-22---PlayStation-4?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/139.webp",
          ],
          rating: 4.2,
        },
        {
          name: "NHL 22 - PlayStation 5",
          description:
            "GameStop hits the ice with NHL 22 on PS5! Take down the competition with new moves, maneuvers, and plays as you take control of the game in this highly-anticipated hockey video game, release date 10/15/2021.",
          brandId: 16,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 1,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11156046/NHL-22---PlayStation-5?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/140.webp",
          ],
          rating: 4.5,
        },
        {
          name: "Halo Infinite - Xbox Series X",
          description:
            "GameStop is excited to bring you Halo Infinite on Xbox One and Xbox Series X! Master Chief is back in his most epic adventure to date. Experience the ultimate gameplay and explore a stunning sci-fi world in this riveting, first person shooter video game. Halo Infinite release date Holiday 2021.",
          brandId: 1,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 15,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11108375/Halo-Infinite---Xbox-Series-X?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/141.jpg",
          ],
          rating: 4.5,
        },
        {
          name: "Hasbro Star Wars: The Black Series The Mandalorian - Death Watch Helmet GameStop Exclusive",
          description:
            "The warrior clans of Mandalore were believed to have been wiped out ages ago, their tattered remnants exiled to the Concordia moon. Their ways were resurrected, and with them, their legendary combat armor that was feared across the galaxy. Beskar can withstand blaster bolts, nearly impenetrable protection that made the warrior class difficult to defeat at the height of their power Fans can imagine the biggest battles and missions in the Star Wars saga with premium roleplay items from Star Wars The Black Series! This roleplay item with premium deco, realistic detail, and series-inspired design is a great addition to any Star Wars fan’s collection. Featuring a flip-down rangefinder with flashing LED lights and an illuminated heads-up display (HUD), fans can imagine what it was like for the members of the Mandalorian Death Watch to suit up for galactic action!",
          brandId: 11,
          price: 119.99,
          categoryId: 6,
          subcategoryId: 11,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11127309/Hasbro-Star-Wars-The-Black-Series-The-Mandalorian---Death-Watch-Helmet-GameStop-Exclusive?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/142.jpg",
          ],
          rating: 4.1,
        },
        {
          name: "Horizon Forbidden West Launch Edition - PlayStation 5",
          description:
            "GameStop is excited to bring you Horizon Forbidden West on PS5! – the sequel to the critically-acclaimed Horizon Zero Dawn! Aloy is back on a new adventure. Journey with her across a beautiful post-apocalyptic world dominated by machine-like creatures and experience immersive gameplay as she faces staggering odds in this open-world action-adventure RPG video game. Horizon Forbidden West release date 2/18/2022.",
          brandId: 9,
          price: 69.99,
          categoryId: 1,
          subcategoryId: 1,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11158704/Horizon-Forbidden-West-Launch-Edition---PlayStation-5?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/144.webp",
          ],
          rating: 5.0,
        },
        {
          name: "Horizon Forbidden West Launch Edition - PlayStation 4",
          description:
            "GameStop is excited to bring you Horizon Forbidden West on PS4! – the sequel to the critically-acclaimed Horizon Zero Dawn! Aloy is back on a new adventure. Journey with her across a beautiful post-apocalyptic world dominated by machine-like creatures and experience immersive gameplay as she faces staggering odds in this open-world action-adventure RPG video game. Horizon Forbidden West release date 2/18/2022.",
          brandId: 9,
          price: 69.99,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11158740/Horizon-Forbidden-West-Launch-Edition---PlayStation-4?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/143.webp",
          ],
          rating: 5.0,
        },
        {
          name: "Saints Row Criminal Custom Edition GameStop Exclusive - PlayStation 5",
          description:
            "Welcome to Santo Ileso, a vibrant fictional city in the heart of the American Southwest. In a world rife with crime, where lawless factions fight for power, a group of young friends embark on their own criminal venture, as they rise to the top in their bid to become Self Made.",
          brandId: 55,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 1,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11157662/Saints-Row-Criminal-Custom-Edition-GameStop-Exclusive---PlayStation-5?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/145.webp",
          ],
          rating: 1.8,
        },
        {
          name: "Saints Row Criminal Custom Edition GameStop Exclusive - PlayStation 4",
          description:
            "Welcome to Santo Ileso, a vibrant fictional city in the heart of the American Southwest. In a world rife with crime, where lawless factions fight for power, a group of young friends embark on their own criminal venture, as they rise to the top in their bid to become Self Made.",
          brandId: 55,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11157661/Saints-Row-Criminal-Custom-Edition-GameStop-Exclusive---PlayStation-4?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/146.webp",
          ],
          rating: 1.8,
        },
        {
          name: "Saints Row Criminal Custom Edition GameStop Exclusive - Xbox Series X",
          description:
            "Welcome to Santo Ileso, a vibrant fictional city in the heart of the American Southwest. In a world rife with crime, where lawless factions fight for power, a group of young friends embark on their own criminal venture, as they rise to the top in their bid to become Self Made.",
          brandId: 55,
          price: 59.99,
          categoryId: 1,
          subcategoryId: 15,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11157663/Saints-Row-Criminal-Custom-Edition-GameStop-Exclusive---Xbox-Series-X?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/147.webp",
          ],
          rating: 1.8,
        },
        {
          name: "Gran Turismo 7 Launch Edition for PlayStation 5",
          description:
            "Whether you’re a competitive or casual racer, collector, tuner, livery designer, or photographer – find your line with Gran Turismo 7 and its staggering collection of game modes including fan-favorites like GT Campaign*, Arcade, and Driving School*.",
          brandId: 9,
          price: 69.99,
          categoryId: 1,
          subcategoryId: 1,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11162003/Gran-Turismo-7-Launch-Edition---PlayStation-5?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/148.webp",
          ],
          rating: 5.0,
        },
        {
          name: "Gran Turismo 7 Launch Edition for PlayStation 4",
          description:
            "Whether you’re a competitive or casual racer, collector, tuner, livery designer, or photographer – find your line with Gran Turismo 7 and its staggering collection of game modes including fan-favorites like GT Campaign*, Arcade, and Driving School*.",
          brandId: 9,
          price: 69.99,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11162004/Gran-Turismo-7-Launch-Edition---PlayStation-4?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/149.webp",
          ],
          rating: 5.0,
        },
        {
          name: "microSDXC Card 128GB for Nintendo Switch",
          description:
            "With incredible speed, the officially licensed SanDisk® microSDXC™ card for the Nintendo Switch™ console lets you add up to 128GB of space to your system. Spend less time waiting and more time gaming with read and write speeds of up to 100MB/s and 90MB/s respectively. Perfect for keeping your favorite games in one place. Backed by a lifetime limited warranty, so you’re ready for the long haul. ",
          brandId: 56,
          price: 19.99,
          categoryId: 5,
          subcategoryId: 32,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/10156940/SanDisk-128GB-microSDXC-Card-for-Nintendo-Switch?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/150.jpg",
          ],
          rating: 4.7,
        },
        {
          name: "Seagate 2TB Game Drive for Xbox One Green",
          description:
            "Add-on storage for your Xbox One® and Xbox 360®.Nothing says “Game Over” for the Xbox One® experience like a full hard drive. Boost your console’s storage capacity with the Seagate® Game Drive, the only external hard drive designed exclusively for Xbox. Designed to work in harmony with both the Xbox Series X|S and Xbox One — the Seagate Game Drive has no problems bringing all your favorite games to the next generation. Archive new Xbox Series X|S games, plus play your legacy titles straight from the external drive. Grab a Seagate Game Drive for your Xbox Series X|S and stay ahead of the game.",
          brandId: 57,
          price: 84.99,
          categoryId: 5,
          subcategoryId: 32,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/10123892/Seagate-2TB-Game-Drive-for-Xbox-One-Green?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/151.jpg",
          ],
          rating: 4.7,
        },
        {
          name: "Next Level Racing F-GT Lite Foldable Simulator Cockpit iRacing Edition",
          description:
            "Introducing the Next Level Racing F-GT Lite iRacing Edition. An officially licensed product based on the popular Next Level Racing F-GT Lite customized specifically for the iRacing community. The revolutionary design allows you to be in true racing positions for both Formula and GT racing in the comfort of your home. As a result of its minimalist design, F-GT Lite iRacing Edition is the ideal cockpit for any user with limited space. With new innovative Next Level Racing® Hubs, the user can switch racing positions in mere minutes and get racing immediately.",
          brandId: 58,
          price: 349.99,
          categoryId: 5,
          subcategoryId: 33,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11159868/Next-Level-Racing-F-GT-Lite-Foldable-Simulator-Cockpit-iRacing-Edition?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/152.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "Samsung CHG90 QLED 49 Inch Gaming Monitor",
          description:
            "The ultra-wide 49-inch screen with its innovative 32:9 aspect ratio means you always get to see game scenes in their entirety, exactly as their developers intended. And the 1800R curved panel immerses you in gameplay and delivers cinematic viewing for movies and video content.",
          brandId: 24,
          price: 899.99,
          categoryId: 4,
          subcategoryId: 16,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11137441/Samsung-CHG90-QLED-49-Inch-Gaming-Monitor?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/153.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "TygerClaw 42-in to 70-in Full Motion Flat Panel TV Wall Mount",
          description:
            "TygerClaw give your TV the perfect spot in the wall with this Full Motion Wall Mount. This mount is constructed with cold steel material to maximize the durability and support, this wall mount can extend, tilt, and swivel your screen so you'll always can find the perfect viewing angle. This mount was built to give options for TV from 42 in. to 70 in. with weighing up to 165 lb. and articulated arm allows movement of TV up to 580 mm from wall, also an innovative locking mechanism gives quick and easy installation. This mount is the best solution for mounting TV on the wall without any hesitation.",
          brandId: 24,
          price: 304.99,
          categoryId: 5,
          subcategoryId: 33,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11150356/TygerClaw-42-in-to-70-in-Full-Motion-Flat-Panel-TV-Wall-Mount?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/154.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "GameStop Logo Toddler Unisex Hooded Sweatshirt",
          description:
            "At GameStop, we’re all about fun for all ages. Look out! Here comes the Toddler Squad! Now your kiddos can show off their favorite spot for games and collectibles with this awesome toddler hoodie. It’s the perfect attire for your little co-op partner in training.",
          brandId: 49,
          price: 24.99,
          categoryId: 6,
          subcategoryId: 28,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11166668/GameStop-Logo-Toddler-Unisex-Hooded-Sweatshirt?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/155.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "Sony DUALSHOCK 4 Wireless Controller",
          description:
            "Enhance your gaming experience with the Sony DualShock 4 Wireless Controller for PlayStation 4. Play your favorite video games with a PS4 controller that combines revolutionary features and comfort with intuitive, precision controls. Its definitive analog sticks and trigger buttons deliver greater response and sensitivity along with a multi touch pad for more instinctive and natural gameplay. In addition, the PlayStation Camera and Share button features makes social media capabilities and playing with friends easy and painless. Join a new era of gaming with the Sony PlayStation 4 DualShock 4 Wireless Controller.",
          brandId: 9,
          price: 54.99,
          categoryId: 5,
          subcategoryId: 8,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11157867_glacier-white/Sony-DUALSHOCK-4-Wireless-Controller-for-PlayStation-4-glacier-white?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/156.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "Nintendo Switch Joy-Con (L)/(R) Neon Purple/Orange",
          description:
            "Take your gaming to a whole new level with this Joy-Con L/R in Neon Purple and Neon Orange from Nintendo Switch. Share it with your friends or attach it to the main console, each Joy-Con controller includes a gyro-sensor and accelerometer providing greater flexibility to jump, shoot, run and attack.",
          brandId: 8,
          price: 68.99,
          categoryId: 5,
          subcategoryId: 8,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11095815/Nintendo-Switch-Joy-Con-L/R-Wireless-Controller-Neon-Purple/Orange?$pdp$$&fmt=webp",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/157.webp",
          ],
          rating: 0.0,
        },
        {
          name: "Marvel's Spider-Man: Miles Morales - PlayStation 4",
          description:
            "There's a new Spider-Man in town and his name is Miles Morales. Take Spider-Man to new heights in Marvel's Spider-Man: Miles Morales on PS4 from GameStop. Be greater. Be yourself. Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
          brandId: 9,
          price: 49.99,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11108924/Marvels-Spider-Man-Miles-Morales---PlayStation-4?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/158.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "FINAL FANTASY VII Remake",
          description:
            "The first entry in a multi-part saga, delivering a level of depth inconceivable for the original. The mind-blowing story, unforgettable characters, epic battles and technical excellence collide. The world has fallen under the control of the Shinra Electric Power Company, a shadowy corporation controlling the planet's very life force as mako energy. In the sprawling city of Midgar, an anti-Shinra organization calling themselves Avalanche has stepped up its resistance. Cloud Strife, a former member of Shinra's elite SOLDIER unit now turned mercenary, lends his aid to the group, unaware of the epic consequences that await him.",
          brandId: 34,
          price: 24.99,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/10177032/Final-Fantasy-VII-Remake---PlayStation-4?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/159.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "Sony DualSense Wireless Controller White",
          description:
            "Discover a deeper, highly immersive gaming experience that brings the action to life in the palms of your hands. The PlayStation 5 DualSense™ wireless controller offers immersive haptic feedback, dynamic adaptive triggers and a built-in microphone, all integrated into an iconic comfortable design. Take gaming to the next level with this wireless PS5 controller.",
          brandId: 9,
          price: 69.99,
          categoryId: 5,
          subcategoryId: 8,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11106262/Sony-DualSense-Wireless-Controller-White?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/160.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "Disney Classic Games Collection - PlayStation 4",
          description:
            "Disney Classic Games Collection is the latest and greatest compilation of classic Disney games based on some of the most beloved Disney movies of all time: Aladdin, The Lion King, and now, The Jungle Book! This package combines Disney Classic Games: Aladdin and The Lion King with the ALL NEW “The Jungle Book and MORE Aladdin Pack”. Now you can play ALL of the critically acclaimed 16-Bit console versions of “Aladdin”, along with classic games based on Disney’s “The Jungle Book”! These all-new, fan requested, and beloved games complete this collection, making this the only way to experience all 16-bit console versions of Aladdin and The Jungle Book. Play as some of your favorite Disney characters, including Aladdin, Simba, and Mowgli, all while experiencing some of the best graphics the 16-Bit era had to offer. Play through multiple versions of each included game and enjoy tons of new features, enhancements, game modes, easy game saves, and display options. Retail Edition includes 1 of 4 retro style instruction manuals inside the box!(While supplies last)",
          brandId: 59,
          price: 29.99,
          categoryId: 1,
          subcategoryId: 14,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11162654/Disney-Classic-Games-Collection---PlayStation-4?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/161.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "Funko Five Nights at Freddy's: Security Breach - Vannie 16-in Plush Gamestop Exclusive",
          description:
            "Want a safer, cuddlier way to bring your favorite Five Nights at Freddy’s Security characters home? Look no further than the 16-inch Five Nights at Freddy's plush of Vannie. Collectible plush is approximately 16-inches tall.",
          brandId: 60,
          price: 29.99,
          categoryId: 2,
          subcategoryId: 12,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11118428/Funko-Five-Nights-at-Freddys-Security-Breach---Vannie-16-in-Plush-Gamestop-Exclusive?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/163.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "Funko Five Nights at Freddy's: Freddy Fazbear's Pizzeria Simulator - Rockstar Freddy 16-in Plush Gamestop Exclusive",
          description:
            "Want a safer, cuddlier way to bring your favorite Five Nights at Freddy’s Pizzeria Simulator characters home? Look no further than the 16-inch Five Nights at Freddy's plush of Rockstar Freddy. Collectible plush is approximately 16-inches tall.",
          brandId: 60,
          price: 29.99,
          categoryId: 2,
          subcategoryId: 12,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11118429/Funko-Five-Nights-at-Freddys-Freddy-Fazbears-Pizzeria-Simulator---Rockstar-Freddy-16-in-Plush-Gamestop-Exclusive?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/164.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "Spam Can Plush",
          description:
            "Bring home a snack food favorite, Spam, as a fun Funko plush. A delicious addition to any Ad Icon collection. Collectible plush is approximately 7-inches tall.",
          brandId: 60,
          price: 8.79,
          categoryId: 2,
          subcategoryId: 12,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11102960/Spam-Can-Plush?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/165.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "Pokemon Poke Ball Popcorn Popper",
          description:
            "Add a little whimsy to your kitchen with this Pokemon Pokeball Popcorn Maker. It's as easy as catching a Magikarp -- plug in, add corn kernels, and watch as it makes a healthy snack for movie night. When all else fails...this Pokeball Popcorn Maker will catch 'em all - kernels, that is.",
          brandId: 3,
          price: 49.99,
          categoryId: 3,
          subcategoryId: 34,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11047745/Pokemon-Poke-Ball-Popcorn-Popper?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/166.jpg",
          ],
          rating: 0.0,
        },
        {
          name: "POP! and Tee: X-Men Cyclops First Appearance Glow in the Dark Only at GameStop",
          description:
            "From X-Men comes Cyclops in a T-Shirt and POP! figure combo from Funko! The Cyclops POP! collectible stands 3.75 inches tall. The T-shirt features a printed Cyclops graphic on front. Perfect for any X-Men fan! Collect all X-Men POP vinyl toy figures!",
          brandId: 60,
          price: 29.99,
          categoryId: 6,
          subcategoryId: 30,
          furtherSubcategoryId: null,
          images: [
            "https://media.gamestop.com/i/gamestop/11097893/Funko-POP-and-Tee-X-Men-Cyclops-First-Appearance-Glow-in-the-Dark-Only-at-GameStop?$pdp2x$",
            "https://gamestopclonebucket.s3.us-west-1.amazonaws.com/167.jpg",
          ],
          rating: 0.0,
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
