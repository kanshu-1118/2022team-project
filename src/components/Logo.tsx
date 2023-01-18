import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  index?: boolean;
  size: string;
};

const Logo: FC<Props> = ({ index, size }) => {
  return (
    <Flex
      w={size}
      sx={{
        ...(index && {
          marginLeft: '5%',
        }),
      }}
    >
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
