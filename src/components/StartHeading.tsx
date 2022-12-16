import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  data: string;
};

const StartHeading: FC<Props> = ({ data }) => {
  return (
    <Text as="h2" textStyle="start">
      {data}
    </Text>
  );
};

export default StartHeading;
