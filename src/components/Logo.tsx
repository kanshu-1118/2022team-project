import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  size: string;
};

const Logo: FC<Props> = ({ size }) => {
  return (
    <Flex w={size} ml="5%">
      <Box
        as="img"
        src="../img/logo.svg"
        alt="おてつだいズ！"
        w="100%"
        h="100%"
        objectFit="contain"
      />
    </Flex>
  );
};

export default Logo;
