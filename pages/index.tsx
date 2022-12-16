import type { NextPage } from 'next';
import { Box, Flex } from '@chakra-ui/react';
import OtetsudaiBtn from '../src/components/OtetsudaiBtn';
import OtetsudaiAdd from '../src/components/OtetsudaiAdd';
import Setting from '../src/components/Setting';

const Home: NextPage = () => {
  return (
    <Box
      minWidth="100vw"
      minHeight="100vh"
      bg="url('./img/bg.png')"
      bgSize="cover"
      bgPosition="center bottom"
    >
      <Box>おてつだいず！</Box>
      <OtetsudaiBtn />
      <OtetsudaiAdd />
      <Setting />
      <Flex w="240px" h="56px">
        <Box
          as="img"
          src="img/text_owattayo.png"
          alt="終わったよ！"
          w="100%"
          h="100%"
          objectFit="contain"
        />
      </Flex>
    </Box>
  );
};

export default Home;
