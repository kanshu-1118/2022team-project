import type { NextPage } from 'next';
import { Box, Flex } from '@chakra-ui/react';
import OtetsudaiBtn from '../src/components/OtetsudaiBtn';
import OtetsudaiAdd from '../src/components/OtetsudaiAdd';
import otatudaicategory from './OtetudaiArray';
import OtetudaiArray from './OtetudaiArray';
import OtetudaiModal from '../src/components/parents/OtetsudaiModal';
import OtetudaiCateBtn from '../src/components/OtetudaiCateBtn';
import OtetudaiModalKanryou from '../src/components/parents/OtetsudaiModalKanryou';
import Array from "./api/otetudai"
import OtetudaiModalZumi from '../src/components/parents/OtetsudaiModalZumi';
import OtetudaiModalCheck from '../src/components/parents/OtetsudaiModalCheck';
import OtetudaiModalStanp from '../src/components/parents/OtetsudaiModalStanp';
import OtetudaiModalHomeru from '../src/components/parents/OtetsudaiModalHomeru';
import OtetudaiModalCheckChild from '../src/components/child/OtetsudaiModalCheck';
import OtetudaiModalStanpChild from '../src/components/child/OtetsudaiModalStanp';
import OtetudaiModalHomeruChild from '../src/components/child/OtetsudaiModalHomeru';
import OtetudaiModalStartChild from '../src/components/child/OtetsudaiModalStart';
import OtetudaiModalPointChild from '../src/components/child/OtetsudaiModalPoint';



const Add: NextPage = () => {

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
      {/* <OtetudaiCateBtn />
      <OtetudaiModalKanryou />
      <OtetudaiModalZumi />
      <OtetudaiModalCheck />
      <OtetudaiModalStanp />
      <OtetudaiModalHomeru />
      <OtetudaiModalCheckChild />
      <OtetudaiModalStanpChild />
      <OtetudaiModalHomeruChild /> */}
      <OtetudaiModalStartChild />
      {/* <OtetudaiModalPointChild /> */}
    </Box>
  );
};

export default Add;
