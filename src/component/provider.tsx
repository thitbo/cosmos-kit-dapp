"use client";

import { ChainProvider } from "@cosmos-kit/react";
import { chains, assets } from "chain-registry";
import { wallets } from "@cosmos-kit/fin-extension";
import { ChakraProvider } from "@chakra-ui/react";

const seiNetworks = [ 
  {
    rpc: 'https://rpc-sei-testnet.rhinostake.com',
    rpcConfig: '',
    rest: 'https://rest-sei-testnet.rhinostake.com',
    restConfig: '',
    
    stakeCurrency: {
      coinDenom: 'SEI',
      coinMinimalDenom: 'usei',
      coinDecimals: 6,
      coinGeckoId: 'sei'
    },
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'sei',
      bech32PrefixAccPub: 'seipub',
      bech32PrefixValAddr: 'seivaloper',
      bech32PrefixValPub: 'seivaloperpub',
      bech32PrefixConsAddr: 'seivalcons',
      bech32PrefixConsPub: 'seivalconspub'
    },
    currencies: [
      {
        coinDenom: 'SEI',
        coinMinimalDenom: 'usei',
        coinDecimals: 6,
        coinGeckoId: 'sei'
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'SEI',
        coinMinimalDenom: 'usei',
        coinDecimals: 6,
        coinGeckoId: 'sei'
      }
    ],
    coinType: 118,
    features: [
      'ibc-transfer',
      'ibc-go'
    ],
    defaultFee: 0.1,
    gasPriceStep: {
      low: 0.1,
      average: 0.12,
      high: 0.2
    }
  } 
]


export function Providers({ children }: { children: any }) {
  return (
    // <ChakraProvider>
      <ChainProvider
        chains={[...chains, ...seiNetworks]} // supported chains
        assetLists={assets} // supported asset lists
        wallets={wallets} // supported wallets
        wrappedWithChakra={true}
      >
        {children}
      </ChainProvider>
    // </ChakraProvider>
  );
}
