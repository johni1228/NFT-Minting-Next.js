import { IChainData } from './types'
// 
// export const CHAIN_ID_ETHEREUM = 1;
// export const CHAIN_ID_ETHEREUM_HEX = '0x1';
export const CHAIN_ID_MUMBAI_TESTNET = 80001;
export const CHAIN_ID_MUMBAI_TESTNET_HEX = '0x13881';

// export const DEFAULT_CHAIN_ID = CHAIN_ID_ETHEREUM;
// export const DEFAULT_CHAIN_ID_HEX = CHAIN_ID_ETHEREUM_HEX;
export const DEFAULT_CHAIN_ID = CHAIN_ID_MUMBAI_TESTNET;
export const DEFAULT_CHAIN_ID_HEX = CHAIN_ID_MUMBAI_TESTNET_HEX;

const supportedChains: IChainData[] = [
  // {
  //   name: 'Ethereum Mainnet',
  //   short_name: 'eth',
  //   chain: 'ETH',
  //   network: 'mainnet',
  //   chain_id: CHAIN_ID_BSC_TESTNET,
  //   network_id: 1,
  //   rpc_url: 'https://mainnet.infura.io/v3/%API_KEY%',
  //   native_currency: {
  //     symbol: 'ETH',
  //     name: 'Ethereum',
  //     decimals: '18',
  //     contractAddress: '',
  //     balance: '',
  //   },
  // },
  {
    name: 'Binance Smart Chain',
    short_name: 'bsc',
    chain: 'smartchain',
    network: 'mainnet',
    chain_id: 56,
    network_id: 56,
    rpc_url: 'https://bsc-dataseed1.defibit.io/',
    native_currency: {
      symbol: 'BNB',
      name: 'BNB',
      decimals: '18',
      contractAddress: '',
      balance: '',
    },
  },
  {
    name: 'Mumbai Network',
    short_name: 'mumbai',
    chain: 'smartchain',
    network: 'testnet',
    chain_id: 80001,
    network_id: 80001,
    rpc_url: 'https://speedy-nodes-nyc.moralis.io/5519e49d3522b31ac6aee0ea/polygon/mumbai',
    native_currency: {
      symbol: 'MATIC',
      name: 'MATIC',
      decimals: '18',
      contractAddress: '',
      balance: '',
    },
  },
  // {
  //
  // {
  //   name: 'Ethereum Classic Mainnet',
  //   short_name: 'etc',
  //   chain: 'ETC',
  //   network: 'mainnet',
  //   chain_id: 61,
  //   network_id: 1,
  //   rpc_url: 'https://ethereumclassic.network',
  //   native_currency: {
  //     symbol: 'ETH',
  //     name: 'Ethereum',
  //     decimals: '18',
  //     contractAddress: '',
  //     balance: '',
  //   },
  // },
  // {
  //   name: 'POA Network Sokol',
  //   short_name: 'poa',
  //   chain: 'POA',
  //   network: 'sokol',
  //   chain_id: 77,
  //   network_id: 77,
  //   rpc_url: 'https://sokol.poa.network',
  //   native_currency: {
  //     symbol: 'POA',
  //     name: 'POA',
  //     decimals: '18',
  //     contractAddress: '',
  //     balance: '',
  //   },
  // },
  // {
  //   name: 'POA Network Core',
  //   short_name: 'skl',
  //   chain: 'POA',
  //   network: 'core',
  //   chain_id: 99,
  //   network_id: 99,
  //   rpc_url: 'https://core.poa.network',
  //   native_currency: {
  //     symbol: 'POA',
  //     name: 'POA',
  //     decimals: '18',
  //     contractAddress: '',
  //     balance: '',
  //   },
  // },
  // {
  //   name: 'xDAI Chain',
  //   short_name: 'xdai',
  //   chain: 'POA',
  //   network: 'dai',
  //   chain_id: 100,
  //   network_id: 100,
  //   rpc_url: 'https://dai.poa.network',
  //   native_currency: {
  //     symbol: 'xDAI',
  //     name: 'xDAI',
  //     decimals: '18',
  //     contractAddress: '',
  //     balance: '',
  //   },
  // },
  // {
  //   name: 'Callisto Mainnet',
  //   short_name: 'clo',
  //   chain: 'callisto',
  //   network: 'mainnet',
  //   chain_id: 820,
  //   network_id: 1,
  //   rpc_url: 'https://clo-geth.0xinfra.com/',
  //   native_currency: {
  //     symbol: 'CLO',
  //     name: 'CLO',
  //     decimals: '18',
  //     contractAddress: '',
  //     balance: '',
  //   },
  // },
]

export default supportedChains
