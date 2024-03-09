import "./App.css";

import {
  createWeb3Modal,
  defaultConfig,
  useWeb3Modal,
} from "@web3modal/ethers/react";
// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "fbd53faee2d3ef4be44dfec242edf8da";

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

// 3. Create modal
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://www.bybit.com/web3", // origin must match your domain & subdomain
  icons: ["https://www.bybit.com/favicon.ico"],
};

const featuredWalletIds = [];

// This Bybit Wallet's WalletConnect ID
const bybitWalletId =
  "15c8b91ade1a4e58f3ce4e7a0dd7f42b47db0c8df7e0d84f63eb39bcb96c4e0f";

// Add Bybit Wallet to featuredWalletIds if it's not already there
if (!window?.bybitWallet) {
  featuredWalletIds.push(bybitWalletId);
}

function App() {
  createWeb3Modal({
    ethersConfig: defaultConfig({
      metadata,
      defaultChainId: 1,
      enableEIP6963: true,
      enableInjected: true,
      enableCoinbase: true,
    }),
    chains: [mainnet],
    projectId,
    featuredWalletIds,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
  });

  // 4. Use modal hook
  const { open } = useWeb3Modal();

  return (
    <div className="App">
      <button onClick={() => open()}>Open Connect Modal</button>
    </div>
  );
}

export default App;
