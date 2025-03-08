export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://avatars.githubusercontent.com/u/82614585?s=400&u=ae44c9641228c314076aa777b8257b153dd0eb35&v=4",
      name: "KafkasyaMC",
      description: "MaceShopping olarak KafkasyaMC minecraft sunucusunun aktif olarak developerlik hizmetini yapmaktayız. KafkasyaMC birden fazla oyun moduna sahip bir minecraft sunucusudur.",
      link: "https://discord.gg/JfmhSXkrN9",
    },
    {
      id: 2,
      image: "<img src="https://raw.githubusercontent.com/eglenceeceko/maceshoppingsite123/main/lib/Mace_Shopping_Logo.png" alt="Mace Shopping Logo">",
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
  ];
  res.status(200).json(data);
};
