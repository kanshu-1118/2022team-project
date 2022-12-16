import { FC, Key } from 'react';
import { Flex, Text, Box, color } from '@chakra-ui/react';
import OriginalSpacer from './OriginalSpacer';
import { categoryType } from '../types/category';
import { category } from '../libs/category';

import Icon from '../assets/vercel';

const hoge: {
  title: string;
  category: number;
}[] = [
  { title: 'くつならべ', category: 2 },
  { title: 'くつならべ', category: 0 },
];

const OtetsudaiAdd: FC = () => {
  return (
    <Flex>
      <Text color="pink300" fontSize="2rem">
        お手伝いを追加する
      </Text>
      <Box
        w="88px"
        h="88px"
        bg="pink300"
        border="4px solid #ffffff"
        borderRadius="9999px"
        boxShadow="-4px -4px 0 #ED4076 inset"
      />
    </Flex>
  );
};

export default OtetsudaiAdd;
