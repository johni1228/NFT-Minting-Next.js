import WalletConnectProvider from '@walletconnect/web3-provider';
import WalletLink from 'walletlink';
import { BigNumber } from 'ethers';

const INFURA_ID = '460f40a260564ac4a4f4b3fffb032dad';

export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID, // required
    },
  },
  'custom-walletlink': {
    display: {
      logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
      name: 'Coinbase',
      description: 'Connect to Coinbase Wallet (not Coinbase App)',
    },
    options: {
      appName: 'Coinbase', // Your app name
      networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
      chainId: 1,
    },
    package: WalletLink,
    connector: async (_, options) => {
      const { appName, networkUrl, chainId } = options;
      const walletLink = new WalletLink({
        appName,
      });
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
      await provider.enable();
      return provider;
    },
  },
};
export const purchaseSteps = [
  {
    image: '/assets/steps/metamask.gif',
    title: 'DOWNLOAD METAMASK',
    content: 'The Chrome Metamask extension will allow you to make purchases with Binance. If you are on mobile, please use the Metamask app.',
    label: 'METAMASK',
    link: 'https://metamask.io',
  },
  {
    image: '/assets/steps/binance.gif',
    title: 'ADD SOME BNB',
    content: 'You can purhcase Binance through your Metamask wallet using Wyre or send Binance from an exchange like Coinbase.',
    label: 'COINBASE',
    link: 'https://coinbase.com',
  },
  {
    image: '/assets/mark.jfif',
    title: 'MINT A Longevity World',
    content: 'Connect your Metamask to our website. Once connected, you will be able to mint your Catcoin World and approve the transaction.',
    label: 'MINT',
    link: '#mint',
    padding: 2,
  },
];
export const faqs = [
  {
    title: 'WHAT IS THE Longevity World CLUB?',
    content: 'The Longevity World CLUB is a collection of 78 Non Fungible Token going absolutely bonkers within the Binance blockchain.',
  },
  {
    title: 'HOW MUCH WILL IT COST TO MINT?',
    content: 'The price of the mint is 2BNB.',
  },
  {
    title: 'WHEN WILL MINING BE AVAILABLE?',
    content: 'The Longevity World reveal occurs on May.',
  },
  {
    title: 'HOW MANY CAN WE MINT PER WALLET?',
    content: 'You can mint as many as you could',
  },
  {
    title: 'HOW CAN I USE MY NFT?',
    content: 'You will be able to use your NFT as an avatar in the metaverse.',
  },
  {
    title: 'WAHT IS THE METAVERSE?',
    content: 'The Metaverse refers to a shared virtual experience where land, avatars and names can be bought and sold, often using cryptocurrency. The future pahses in the NFT club\'s roadmap will allow you to join this Metaverse using the assets you own.',
  },
];
// export const NFT_CONTRACT_ADDRESS = '0xd8a984a2d4887721dedf0ffb59fd8432fa60243b'; // ETH mainnet
export const NFT_CONTRACT_ADDRESS = '0x67E13E0E68c8e9661C965493c1c7464EceA9659B'; // BSC Testnet

