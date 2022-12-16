import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import StartConfirmText from './StartConfirmText';

type Props = {
  data: number;
};

const StartUseConfirm: FC<Props> = ({ data }) => {
  return (
    <Flex>
      {data}
      <StartConfirmText />
    </Flex>
  );
};

export default StartUseConfirm;
