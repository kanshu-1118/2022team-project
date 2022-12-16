import { Box, Center, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import StartConfirmText from './StartConfirmText';

const age = [3, 4, 5, 6, 7, 8];
// const age = 8;

const StartAgeInput: FC = () => {
  return (
    <Flex w="100vw" overflow="scroll">
      <Flex w={`calc(240px * ${age.length})`}>
        {age.map((item: number, i: number) => (
          <Center
            key={item}
            fontSize="12rem"
            w="240px"
            h="200px"
            color="orange500"
            bg="white"
            borderWidth="10px"
            borderStyle="solid"
            borderColor="orange300"
            borderRadius="16px"
          >
            {item}
          </Center>
        ))}
      </Flex>
    </Flex>
  );
};

export default StartAgeInput;
