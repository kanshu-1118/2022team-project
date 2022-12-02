import { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

type Props = {
  data: string;
};

const Test: FC<Props> = ({ data }) => {
  return <Box>{data}</Box>;
};

export default Test;
