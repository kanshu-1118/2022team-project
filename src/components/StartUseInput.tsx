import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { FC, useState } from 'react';

type Props = {
  data: string;
};

const StartUseInput: FC<Props> = ({ data }) => {
  const [array, setArray] = useState([data, `お母さん\nお父さん`]);
  return (
    <Flex gap="24px">
      {array.map((item, i) => (
        <Center
          as="button"
          w="240px"
          h="240px"
          bg="white"
          borderStyle="string"
          borderWidth="4px"
          borderColor="black200"
          borderRadius="16px"
          key={item + i}
        >
          <Text as="pre" fontSize="4rem">
            {item}
          </Text>
        </Center>
      ))}
    </Flex>
  );
};

export default StartUseInput;
