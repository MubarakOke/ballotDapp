import { Box, Button, Card, Flex, Text, TextField } from "@radix-ui/themes";
import useProposals from "../hooks/useProposals";
import Proposal from "../component/Proposal"

const DelegateVote = () => {
    const { loading, data: proposals } = useProposals();

    return (
        <>
        <Flex wrap={"wrap"} gap={"6"}>
            {loading ? (
                <Text>Loading...</Text>
            ) : proposals.length !== 0 ? (
                proposals.map((item, index) => (
                    <Proposal
                        key={index}
                        name={item.name}
                        id={index}
                        voteCount={Number(item.voteCount)}
                    />
                ))
            ) : (
                <Text>Could not get proposals!!</Text>
            )}
        </Flex>
        </>
    );
};

export default DelegateVote;
