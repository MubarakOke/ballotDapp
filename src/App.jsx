import { Box, Container, Flex, Text } from "@radix-ui/themes";
import { configureWeb3Modal } from "./connection";
import "@radix-ui/themes/styles.css";
import Header from "./component/Header";
import DelegateVote from "./component/DelegateVote";
import HandleVote from "./component/HandleVote"

import {
    useWeb3ModalAccount,
    useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { isSupportedChain } from "./utils";
import { getProvider } from "./constants/providers";
import { getProposalsContract } from "./constants/contracts";
import { Toaster } from 'react-hot-toast';

configureWeb3Modal();

function App() {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return (
        <Container>
            <Header />
            <main className="mt-6">
                <Box mb="4">
                    <DelegateVote />
                </Box>
                <div>
                    <HandleVote />
                </div>
            </main>
            <Toaster />
        </Container>
    );
}

export default App;
