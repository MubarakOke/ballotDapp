import { Box, Button, Card, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";

import useDelegateVote from "../hooks/useDelegateVote";

const DelegateVote = ({ to, handleDelegate }) => {
    const [address, setAddress] = useState("");

    const handleDelegateVote = useDelegateVote(address);

    return (
        <Card size="2" style={{ width: 425 }}>
            <Flex gap="" align="center">
                <Box width={"100%"}>
                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Delegate&apos;s Address
                            </Text>
                            <TextField.Input 
                                value={address}
                                onChange={(e) => setAddress(e.target.value)} 
                                placeholder="Enter Delegate's Address" 
                            />
                        </label>
                        <Button onClick={handleDelegateVote}>
                            Delegate vote
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Card>
    );
};

export default DelegateVote;
