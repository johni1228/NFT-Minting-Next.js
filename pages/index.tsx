import Head from 'next/head';
import Image from 'next/image';
import { Contract } from 'ethers';
import Body from '../components/body';
import NavBar from '../components/NavBar';
import { useState } from 'react';
import {
  faqs,
  NFT_CONTRACT_ADDRESS,
  purchaseSteps,
} from '../types/consts';
import { ethers } from 'ethers';
import PurchaseStepCard from '../components/PurchaseStepCard';
import { Accordion } from '../components/accordion';
import ArchieNFTAbi from '../abis/archie-nft.json';
import useGlobalState from '../hooks/useGlobalState';
import ConnectWalletButton from '../components/ConnectWalletButton';

import { shimmerUrl } from '../components/blur-image';

export const Home = (): JSX.Element => {
  const [message, setMessage] = useState('');
  const { web3Provider } = useGlobalState()
  const [isMinting, setIsMinting] = useState(false);
  const [merkleProof, setMerkleProof] = useState('');

  const onMint = async () => {
    try {
      setIsMinting(true);
      setMessage('');
      const provider = web3Provider;
      const price = ethers.utils.parseUnits("1.0", 16);
      const signer = await provider.getSigner();
      const contract = new Contract(NFT_CONTRACT_ADDRESS, ArchieNFTAbi, web3Provider.getSigner());
      const mintTx = await contract.mint([merkleProof], {from: signer.getAddress( ), value: price});
      await mintTx.wait();
      alert('Success: Minted CCW')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      setMessage(e.reason || e.message || 'Contract interaction error');
    } finally {
      setIsMinting(false);
    }
  }
  return (
    <div className="bg-gray-900 text-white">
      <Head>
        <title>Longevity Collections</title>
        <link rel="icon" href="/assets/mark.jfif" />
      </Head>
      <header>
        <NavBar/>
      </header>
      <div>
        <Body />
      </div>
      <main className="container mt-16 mx-auto px-3 md:px-4">
        <section id="mint">
          <p className="text-center text-4xl font-bold text-orange-400">MINT IS LIVE</p>
          <div className="max-w-full md:max-w-screen-lg mx-auto mt-4 flex flex-col items-center md:flex-row">
            <div className="w-full md:w-1/2 px-0 md:px-4">
              <Image src="/assets/longevity.gif" className='rounded-lg' layout="responsive" width={400} height={400} alt="nekos" placeholder="blur" blurDataURL={shimmerUrl} />
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col px-4">
              <p className="text-4xl font-bold">ARCHIE NEKO</p>
              <div className="mt-6">
                <p className="mb-2">Please input your merkle proof.</p>
                <div className="flex items-center mb-4">
                  <input type="string" className="w-100 h-12 outline-0 text-gray-900 px-2" placeholder="0x..." value={merkleProof} onChange={evt => setMerkleProof(evt.target.value)}/>
                </div>
                {web3Provider ? <button className="btn mt-6 w-64" onClick={onMint} disabled={isMinting}>{isMinting ? 'MINTING...' : 'MINT'}</button> : <ConnectWalletButton/>}
                <p className="text-red-300" dangerouslySetInnerHTML={{ __html: message || '&nbsp;' }}/>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
          {purchaseSteps.map(step => <PurchaseStepCard
            key={step.title}
            image={step.image}
            title={step.title}
            content={step.content}
            label={step.label}
            link={step.link}
            padding={step.padding}
          />)}
        </section>

        <section className="mt-20">
          <p className="text-4xl mb-10 text-sky-500 text-center font-bold">FREQUENTLY ASKED QUESTIONS</p>
          <div className="px-0 md:px-20">
            {faqs.map(faq => <Accordion content={faq.content} name={faq.title} key={faq.title} expanded/>)}
          </div>
        </section>

        <section className="mt-20">
          <p className="text-2xl text-sky-500 font-semibold text-center">What are you waiting for?</p>
          <p className="text-4xl font-bold text-center mt-6">BECOME AN Longevity World</p>
        </section>

        <section className="mt-20">
          <p className="text-sky-500 text-center font-semibold pb-4">&copy; 2022 Longevity World Club. All rights reserved</p>
        </section>
      </main>
    </div>
  )
}

export default Home
