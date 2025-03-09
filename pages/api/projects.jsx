export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://github.com/eglenceeceko/maceshoppingsite123/blob/main/lib/kafkasyamc.jpg?raw=true",
      name: "KafkasyaMC",
      description: "MaceShopping olarak KafkasyaMC minecraft sunucusunun aktif olarak developerlik hizmetini yapmaktayız. KafkasyaMC birden fazla oyun moduna sahip bir minecraft sunucusudur.",
      link: "https://discord.gg/JfmhSXkrN9",
    },
    {
      id: 2,
      image: "https://github.com/eglenceeceko/maceshoppingsite123/blob/main/lib/612dcbf2b3fbb07cf1688f9df5847a4f.png?raw=true",
      name: "Iso Network",
      description: "MaceShopping olarak Iso Network minecraft sunucusunun aktif olarak developerlik hizmetini yapmaktayız. Iso Network towny moduna sahip bir minecraft sunucusudur.",
      link: "https://discord.gg/isonetwork",
    },
    {
      id: 3,
      image: "https://github.com/eglenceeceko/maceshoppingsite123/blob/main/lib/pack.png?raw=true",
      name: "The Growing Darkness",
      description: "MaceShopping olarak The Growing Darkness modunun aktif olarak developer hizmetini yapmaktayız. The Growing Darkness bir minecraft İtemsadder mod içeriğidir. ",
      link: "https://discord.gg/9RVKwYHw",
    },
    {
      id: 4,
      image: "https://github.com/eglenceeceko/maceshoppingsite123/blob/main/lib/SpeedyNW_Skyblock_Logo.jpg?raw=true",
      name: "SpeedyNW",
      description: "MaceShopping olarak SpeedyNW minecraft sunucusunun aktif olarak developerlik hizmetini yapmaktayız. SpeedyNW skyblock moduna sahip bir minecraft sunucusudur.",
      link: "https://discord.gg/49VsrUBM",
    },
    {
      id: 5,
      image: "https://github.com/eglenceeceko/maceshoppingsite123/blob/main/lib/ottomania.png?raw=true",
      name: "Ottomania",
      description: "MaceShopping olarak Ottomania minecraft sunucusunun aktif olarak developerlik hizmetini yapmaktayız. Ottomania towny moduna sahip bir minecraft sunucusudur.",
      link: "https://discord.gg/Xva7P5Dp",
    },
    {
      id: 6,
      image: "https://github.com/eglenceeceko/maceshoppingsite123/blob/main/lib/rainnw.png?raw=true",
      name: "Rain Network",
      description: "MaceShopping olarak Rain Network minecraft sunucusunun aktif olarak developerlik hizmetini yapmaktayız. Rain Network skyblock moduna sahip bir minecraft sunucusudur.",
      link: "https://discord.gg/8vRfQCQU",
    },
    {
      id: 7,
      image: "https://github.com/eglenceeceko/maceshoppingsite123/blob/main/lib/339537a92d0cfc1ef78a9961c04711e4.png?raw=true",
      name: "The Cyrus TV",
      description: "MaceShopping olarak The Cyrus TV minecraft sunucusunun aktif olarak tasarım hizmetini yapmaktayız. The Cyrus TV towny moduna sahip bir minecraft sunucusudur.",
      link: "https://discord.gg/4QUGpvvAc3",
    },
    {
      id: 8,
      image: "https://github.com/eglenceeceko/maceshoppingsite123/blob/main/lib/Mace_Shopping_Logo.png?raw=true",
      name: "MaceShopping Ticket Bot",
      description: "MaceShopping olarak Ticket Botumuzun aktif olarak developerlik hizmetini yapmaktayız. MaceShopping Ticket Bot Mace Shoppinge özel bir ticket discord botudur.",
      link: "https://discord.gg/rjZnYtRMgR",
    },
    {
      id: 9,
      image: "https://github.com/eglenceeceko/maceshoppingsite123/blob/main/lib/Mace_Shopping_Logo.png?raw=true",
      name: "Aurealis Network",
      description: "MaceShopping olarak Aurealis Network minecraft sunucunun aktif olarak developerlik hizmetini yapmaktayız. Aurealis Network towny moduna sahip bir minecraft sunucusudur.",
      link: "https://discord.gg/aurealis",
    },
  ];
  res.status(200).json(data);
};
