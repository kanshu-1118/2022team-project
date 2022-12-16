import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import StartConfirmText from './StartConfirmText';

type Props = {
  data: string;
};

const StartNameConfirm: FC<Props> = ({ data }) => {
  return (
    <Flex>
      {data}
      <StartConfirmText />
    </Flex>
  );
};

export default StartNameConfirm;
