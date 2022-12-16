import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';

const StartNameInput: FC = () => {
  return (
    <Box>
      <Box
        as="input"
        placeholder="タッチして入力してね！"
        w="55vw"
        h="160px"
        borderStyle="string"
        borderWidth="4px"
        borderColor="black200"
        borderRadius="16px"
        textAlign="center"
        textStyle="start"
      />
    </Box>
  );
};

export default StartNameInput;
