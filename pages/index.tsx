import type { NextPage } from 'next';
import { Box, Center, Flex } from '@chakra-ui/react';
// import otatudaicategory from './OtetudaiArray';
// import OtetudaiArray from './OtetudaiArray';
import Logo from '../src/components/Logo';
import StartBtn from '../src/components/Btn';

const Home: NextPage = () => {

  return (
    <Center
      flexDirection="column"
      gap="24px"
      w="100vw"
      h="100vh"
      bg="url('./img/index_animal_left.png'), url('./img/index_animal_right.png'), url('./img/index_whether_left.png'), url('./img/index_whether_right.png'), url('./img/index_whether_bottom.png'), url('./img/index_bg.png')"
      bgSize="40vw auto, 40vw auto, 35vw auto, 30vw auto, auto 45vh, cover"
      bgPosition="left -16px bottom 24px, right -16px bottom 24px, left -80px top 32px, right -80px top 56px, center bottom -160px, center center"
      bgRepeat="no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat"
      pb="24px"
    >
      <Logo size="90vw" />
      <StartBtn dataIndex={0} path="start" />
    </Center>
  );
  
};

export default Home;

