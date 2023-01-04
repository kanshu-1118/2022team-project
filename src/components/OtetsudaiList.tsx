import { FC } from 'react';
import { Flex, Text, Box, Center } from '@chakra-ui/react';
import { defaultName } from '../libs/name';
import OtetsudaiAdd from './OtetsudaiAdd';
import Owattayo from './Owattayo';
import OtetsudaiBtn from './OtetsudaiBtn';

const OtetsudaiList: FC = () => {
  return (
    <Box w="62vw" h="90%" pos="relative">
      <Flex
        justifyContent="center"
        gap="28px"
        h="100%"
        boxShadow="0 4px #04AFAA"
        p="104px 14px 0 0"
        textStyle="boxInsideTemplate"
      >
        <Center w="110%" h="110px" pos="absolute" inset="-24px auto auto -5%">
          <Center
            gap="8px"
            w="100%"
            color="white"
            pr="16px"
            fontSize="2.7rem"
            pos="absolute"
            zIndex="3"
          >
            <Text>{defaultName}のおてつだいリスト</Text>
            <OtetsudaiAdd />
          </Center>
          <Box
            w="100%"
            borderBottomStyle="solid"
            borderBottomWidth="100px"
            borderBottomColor="orange300"
            borderLeft="28px solid transparent"
            borderRight="28px solid transparent"
            pos="absolute"
            zIndex="2"
          />
          <Box
            w="calc(100% + 10px)"
            borderBottomStyle="solid"
            borderBottomWidth="110px"
            borderBottomColor="orange500"
            borderLeft="28px solid transparent"
            borderRight="28px solid transparent"
            pos="absolute"
            zIndex="1"
          />
        </Center>
        <Box>
          <OtetsudaiBtn />
        </Box>
        <Box w="28vw" h="92%" pos="relative" transform="translateY(14px)">
          <Flex
            alignItems="center"
            flexDirection="column"
            h="100%"
            boxShadow="0 4px #049DD9"
            textStyle="boxInsideTemplate"
          >
            <Owattayo />
            <OtetsudaiBtn />
          </Flex>
          <Box
            bg="skyblue300"
            borderColor="skyblue500"
            textStyle="boxBgTemplate"
          />
        </Box>
      </Flex>
      <Box bg="green300" borderColor="green500" textStyle="boxBgTemplate" />
    </Box>
  );
};

export default OtetsudaiList;
