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
      image: "https://raw.githubusercontent.com/eglenceeceko/maceshoppingsite123/refs/heads/main/lib/Mace_Shopping_Logo.png",
      name: "Iso Network",
      description: "MaceShopping olarak Iso Network minecraft sunucusunun aktif olarak developerlik hizmetini yapmaktayız. Iso Network towny moduna sahip bir minecraft sunucusudur.",
      link: "https://discord.gg/isonetwork",
    },
    {
      id: 3,
      image: "https://ugc.production.linktr.ee/6RJk9s2pQZ2yAdcxw3Ir_TXX2dLlNmwM2OFdf?io=true&size=avatar-v3_0",
      name: "The Growing Darkness",
      description: "MaceShopping olarak The Growing Darkness modunun aktif olarak developerlik hizmetini yapmaktayız. The Growing Darkness bir minecraft İtemsadder mod içeriğidir. ",
      link: "https://discord.gg/9RVKwYHw",
    },
    {
      id: 4,
      image: "https://raw.githubusercontent.com/eglenceeceko/maceshoppingsite123/refs/heads/main/lib/Mace_Shopping_Logo.png",
      name: "SpeedyNW",
      description: "MaceShopping olarak SpeedyNW minecraft sunucusunun aktif olarak developerlik hizmetini yapmaktayız. SpeedyNW skyblock moduna sahip bir minecraft sunucusudur.",
      link: "https://discord.gg/49VsrUBM",
    },
    {
      id: 5,
      image: "https://raw.githubusercontent.com/eglenceeceko/maceshoppingsite123/refs/heads/main/lib/Mace_Shopping_Logo.png",
      name: "Ottomania",
      description: "MaceShopping olarak Ottomania minecraft sunucusunun aktif olarak developerlik hizmetini yapmaktayız. Ottomania towny moduna sahip bir minecraft sunucusudur.",
      link: "https://discord.gg/Xva7P5Dp",
    },
    {
      id: 6,
      image: "https://raw.githubusercontent.com/eglenceeceko/maceshoppingsite123/refs/heads/main/lib/Mace_Shopping_Logo.png",
      name: "Rain Network",
      description: "MaceShopping olarak Rain Network minecraft sunucusunun aktif olarak developerlik hizmetini yapmaktayız. Rain Network skyblock moduna sahip bir minecraft sunucusudur.",
      link: "https://discord.gg/8vRfQCQU",
    },
    {
      id: 7,
      image: "https://raw.githubusercontent.com/eglenceeceko/maceshoppingsite123/refs/heads/main/lib/Mace_Shopping_Logo.png",
      name: "The Cyrus TV",
      description: "MaceShopping olarak The Cyrus TV minecraft sunucusunun aktif olarak developerlik hizmetini yapmaktayız. The Cyrus TV towny moduna sahip bir minecraft sunucusudur.",
      link: "https://discord.gg/rjZnYtRMgR",
    },
  ];
  res.status(200).json(data);
};
