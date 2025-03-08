import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';


export default function Home() {
  const { data: _projects } = swr('/api/projects');
  const projects = _projects ? _projects : null;

  return (
    <>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold text-center">İletişim Desteği</p>
        <p className="text-xl text-white/50 font-normal text-center mb-5">Aşağıdaki adreslerden benimle iletişim kurabilirsin.</p>
        <div className=" flex justify-center flex-col items-center">
            <div className="max-w-lg w-full">
            <a target="_blank" rel="norefferer" href="https://discord.gg/dhXcFgaxr2">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-discord fa-2x" />
                        <p className="font-semibold text-xl">Mace Shopping</p>
                    </div>
                </a>
                <a target="_blank" rel="norefferer" href="https://instagram.com/maceshoppingg">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-instagram fa-2x" />
                        <p className="font-semibold text-xl">Mace Shopping</p>
                    </div>
                </a>
                <a target="_blank" rel="norefferer" href="https://discord.gg/dhXcFgaxr2">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-telegram fa-2x" />
                        <p className="font-semibold text-xl">BAKIMDA</p>
                    </div>
                </a>
                <a href="mailto:umutbayraktar55@gmail.com">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fa fa-envelope fa-2x" />
                        <p className="font-semibold text-xl">BAKIMDA</p>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </>
  )
}
