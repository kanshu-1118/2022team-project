import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';

const Owattayo: FC = () => (
  <Flex w="240px" h="56px" m="20px 0 0">
    <Box
      as="img"
      src="../img/text_owattayo.png"
      alt="終わったよ！"
      w="100%"
      h="100%"
      objectFit="contain"
    />
  </Flex>
);

export default Owattayo;
