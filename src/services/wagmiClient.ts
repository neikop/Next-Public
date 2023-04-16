import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { coinbaseWallet, metaMaskWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets';
import { CHAIN_ID } from 'env';
import { configureChains, createClient } from 'wagmi';
import { arbitrum, arbitrumGoerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

export const defaultChain = () => {
  const chainList = [arbitrumGoerli, arbitrum];
  return chainList.find((chain) => chain.id === CHAIN_ID) ?? chainList[0];
};

const { chains, provider, webSocketProvider } = configureChains([defaultChain()], [publicProvider()]);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ chains }),
      coinbaseWallet({ appName: 'Auragi Finance dApp', chains }),
      walletConnectWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

export { chains, wagmiClient };
