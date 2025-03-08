import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';
import Tippy from '@tippyjs/react';


export default function Home() {
  const { data: _repositories } = swr("/api/repos");
  const repositories = _repositories ? _repositories : null;

  return (
    <>
      <div className="bg-neutral-800/10 shadow-xl rounded-lg w-full h-auto mt-6">
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between w-full p-6 px-8 items-center h-full">
              <div className="flex flex-col lg:justify-start justify-center items-center lg:items-start mt-5 lg:mt-0 w-full">
                <div className="flex items-center">
                <p className="flex items-center text-white text-4xl font-semibold">
                  Mace Shopping
                </p>
            
                </div>
                <p className="text-white/50 text-md mt-3">
        <p>Hepinize selamlar! <strong>MaceShopping</strong>, mağazası olarak 2023 yılında kurulduk fakat 2025 tarihinde işleve geçtik. MaceShopping olarak discord botu, plugin, itemsadder rank tasarım, developer, sunucunuza özel sıfırdan paket, map hizmetleri vermekteyiz.</p>
        <br></br>
        <h1><strong>DENEYİM</strong></h1>
        <ul>
            <li><strong>* Discord Bot:</strong> 2019 tarihinden beri çeşitli discord botları kodlayıp kullanmış bulunmaktayım. Hatta 1 adet botum onaylanma mesajı aldık, botumuz kısa bir süreli onaylı kalıp kendi isteğimle kapattım.</li>
            <li><strong>* Plugin Hizmeti:</strong> 2016 tarihinden beri minecraft oynamaktayım. Sunucu işine ilk olarak 2023 tarihinde atıldım, ne yazıkki sunucum tutmadı ve kapatmak zorunda kaldım.</li>
            <li><strong>* İtemsadder Rank Tasarım:</strong> 2020 tarihinden beri grafik hizmeti sunuyorum, bir aralar Mace Design diye bir firmam daha vardı ama özel sebeplerden dolayı kapatmak zorunda kaldım.</li>
            <li><strong>* Developer Hizmeti:</strong> 2020 tarihinden beri yazılım işi ile uğraşıyorum. Hatta okul projem için bir oyun kodlamışlığım bile oldu. Yazılım olarak discord botları, skript kodlaması bile yaptım.</li>
            <li><strong>* Sıfırdan Paket:</strong> 2023 tarihinden beri sıfırdan paket tasarlıyorum. İlk olarak kendi minecraft sunucumu kodlamıştım.</li>
            <li><strong>* Map Hizmeti:</strong> 2024 tarihinden beri minecraft sunucuları için sıfırdan harita tasarlıyorum.</li>
        </ul>
        <br></br>
        <h1><strong>SOSYAL MEDYA HESAPLARIMIZ</strong></h1>
        <ul>
            <li><a href="https://discord.gg/dhXcFgaxr2" target="_blank">* maceshopping - Discord Adresimiz</a></li>
            <li><a href="https://instagram.com/maceshoppingg" target="_blank">* maceshoppingg - Instagram Adresimiz</a></li>
            <li><a href="https://www.itemsatis.com/p/maceshopping" target="_blank">* maceshopping - Mağaza Adresimiz</a></li>
            <li><a href="https://youtube.com/maceshopping" target="_blank">* maceshopping - YouTube Adresimiz</a></li>
        </ul>
<br></br>
        <h1><strong>PROJELERİMİZ</strong></h1>
        <p><strong>MaceMC:</strong> Projelerimize projeler kategorimizden bakabilirsin. (<a href="https://maceshopping.vercel.app/projects" rel="follow" target="_blank">REFERANS</a>)</p>
        <p><strong>MaceMC:</strong> MaceShopping mağazasının resmi minecraft sunucusu. (<a href="https://discord.gg/dhXcFgaxr2" rel="follow" target="_blank">BAKIMDA</a>)</p>
<br></br>
        <h1><strong>HEDEFLERİMİZ</strong></h1>
        <p>MaceShopping olarak ilk hedefimiz daha büyük kitlelere ulaşmak ve müşteri dostu bir firma olarak kalmaya devam etmemiz. Hiçbir zaman para için bu işe girmedim, girmeyeceğimde. Kalite olarak aynı kalmamız hatta fiyatlarımızın dahada ucuzlayarak müşterilerimizin yanında olmak istememizdir.</p>
        <br></br>
        <p>İkinci hedefim ise daha büyük kitleye ulaşmak ve büyük minecraft sunucularının geliştirici yani developerlik hizmetini üstlenmek. 😊</p>
                
                </p>
              </div>
              <div className={`order-first lg:order-last flex-shrink-0 relative w-[160px] h-[160px] rounded-full pulse-avatar-online `}>
                <img alt="maceshopping" src={`https://github.com/eglenceeceko/maceshoppingsite123/blob/main/lib/Mace_Shopping_Logo.png?raw=true`} width="160" height="160" className={`bg-neutral-700 w-[160px] h-[160px] rounded-full`} />
              </div>
              
            </div>
            <br></br><br></br>
            <span style={{ zIndex: '-1' }} className="text-white/5 absolute bottom-3 left-7 text-xl sm:text-2xl md:text-4xl lg:text-3xl font-semibold">BU KISIM BAKIMDA / MaceShopping</span>
          </div>
      </div>
    </>
  )
}
