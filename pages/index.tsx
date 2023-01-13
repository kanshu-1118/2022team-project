import type { NextPage } from 'next';
import { Box, Flex } from '@chakra-ui/react';
import OtetsudaiBtn from '../src/components/OtetsudaiBtn';
import OtetsudaiAdd from '../src/components/OtetsudaiAdd';
import otatudaicategory from './OtetudaiArray';
import OtetudaiArray from './OtetudaiArray';
import OtetudaiModal from '../src/components/OtetsudaiModal';
import OtetudaiCateBtn from '../src/components/OtetudaiCateBtn';
import OtetudaiModalKanryou from '../src/components/OtetsudaiModalKanryou';
import Array from "../src/types/otetudai"
import OtetudaiModalZumi from '../src/components/OtetsudaiModalZumi';
import OtetudaiModalCheck from '../src/components/OtetsudaiModalCheck';
import OtetudaiModalStanp from '../src/components/OtetsudaiModalStanp';



const Home: NextPage = () => {

  const Arrays = Array.ArrayList
  return (
    <Box
      minWidth="100vw"
      minHeight="100vh"
      bg="url('img/bg.png')"
      bgSize="cover"
      bgPosition="center bottom"
    >
      {/* <Box>おてつだいず！！！</Box> */}
      {/* <OtetsudaiBtn />
      <OtetsudaiAdd />
      <Flex w="240px" h="56px">
        <Box
          as="img"
          src="img/text_owattayo.png"
          alt="終わったよ！"
          w="100%"
          h="100%"
          objectFit="contain"
        />
      </Flex> */}
      {/* <OtetudaiArray /> */}
      {/* <OtetudaiModal /> */}
      {/* <OtetudaiCateBtn /> */}
      {/* <OtetudaiModalKanryou /> */}
      {/* <OtetudaiModalZumi /> */}
      {/* <OtetudaiModalCheck /> */}
      <OtetudaiModalStanp />
    </Box>
  );
};

export default Home;

