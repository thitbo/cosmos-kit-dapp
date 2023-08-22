"use client";

import { ChainProvider } from "@cosmos-kit/react";
import { chains, assets } from "chain-registry";
import { wallets } from "@cosmos-kit/fin-extension";
import { ChakraProvider } from "@chakra-ui/react";


export function Providers({ children }: { children: any }) {
  console.log({chains})
  return (
    // <ChakraProvider>
      <ChainProvider
        chains={chains} // supported chains
        assetLists={assets} // supported asset lists
        wallets={wallets} // supported wallets
        wrappedWithChakra={true}
      >
        {children}
      </ChainProvider>
    // </ChakraProvider>
  );
}
