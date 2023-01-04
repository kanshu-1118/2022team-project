import { FC } from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import { defaultName } from '../libs/name';
import OtetsudaiBtn from './OtetsudaiBtn';

const OtetsudaiRecommend: FC = () => {
  return (
    <Box w="28vw" h="60vh" pos="relative">
      <Flex
        flexDirection="column"
        w="100%"
        h="100%"
        p="20px 0"
        boxShadow="0 4px #ED4076"
        textStyle="boxInsideTemplate"
      >
        <Text color="pink500" textStyle="boxHeadingTemplate">
          {defaultName}に
          <br />
          おすすめのお手伝い
        </Text>
        <OtetsudaiBtn />
      </Flex>
      <Box bg="pink300" borderColor="pink500" textStyle="boxBgTemplate" />
    </Box>
  );
};

export default OtetsudaiRecommend;
