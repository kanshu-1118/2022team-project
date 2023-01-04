import { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';

const OtetsudaiAdd: FC = () => {
  return (
    <Flex alignItems="center" w="fit-content" pos="relative">
      <Text
        display="flex"
        alignItems="center"
        h="64px"
        color="pink300"
        bg="white"
        p="0 48px 0 20px"
        fontSize="2rem"
        borderWidth="4px"
        borderStyle="solid"
        borderColor="pink300"
        borderRadius="9999px"
      >
        おてつだいを追加
      </Text>
      <Flex
        justifyContent="center"
        alignItems="center"
        w="80px"
        h="80px"
        bg="url('../img/parts_highlight.svg'), linear-gradient(#F2798F, #F2798F)"
        bgRepeat="no-repeat, no-repeat"
        bgPosition="top 12px left 12px, center"
        border="4px solid #ffffff"
        borderRadius="9999px"
        boxShadow="-3px -3px 0 #ED4076 inset"
        pos="absolute"
        inset="auto -40px auto auto"
        sx={{
          '&::before': {
            content: "''",
            display: 'block',
            width: '8px',
            height: '32px',
            background: 'white',
            borderRadius: '3px',
            pos: 'absolute',
          },
          '&::after': {
            content: "''",
            display: 'block',
            width: '32px',
            height: '8px',
            background: 'white',
            borderRadius: '3px',
            pos: 'absolute',
          },
        }}
      />
    </Flex>
  );
};

export default OtetsudaiAdd;
