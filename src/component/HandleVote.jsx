import { Box, Button, Card, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useProposals from "../hooks/useProposals";
import Proposal from "../component/Proposal"

import useHandleVote from "../hooks/useHandleVote";

const DelegateVote = () => {
    const { loading, data: proposals } = useProposals();

    const handleVote = useHandleVote;

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
                        handleVote={handleVote}
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
