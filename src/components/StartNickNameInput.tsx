import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';

const nicknameArray = ['ちゃん', 'くん', 'さん'];

type Props = {
  data: string;
};

const StartNickNameInput: FC<Props> = ({ data }) => {
  return (
    <Flex>
      {nicknameArray.map((item, i) => (
        <Box>
          {data}
          {item}
        </Box>
      ))}
    </Flex>
  );
};

export default StartNickNameInput;