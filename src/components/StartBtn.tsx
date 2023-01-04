import { FC } from 'react';
import { Flex, Box, Center } from '@chakra-ui/react';

type Props = {
  index: number;
};

const text: {
  text: string;
  bgColor: string;
  shadowColor: string;
}[][] = [
  [{ text: 'けってい！', bgColor: '#F2798F', shadowColor: '#ED4076' }],
  [
    { text: 'ちがうよ', bgColor: '#36C8D9', shadowColor: '#049DD9' },
    { text: 'あってる！', bgColor: '#F2798F', shadowColor: '#ED4076' },
  ],
  [{ text: 'はじめよう！', bgColor: '#F25C5C', shadowColor: '#EA4242' }],
];

const StartBtn: FC<Props> = ({ index }) => {
  return (
    <Flex as="ul" flexWrap="wrap" gap="24px 16px" fontSize="3.3rem">
      {text[index].map((item, i: number) => (
        <Flex as="li" key={item.text + i} pos="relative">
          <Center
            as="button"
            w="280px"
            h="80px"
            color="white"
            bg={item.bgColor}
            m="5px"
            borderRadius="9999px"
            boxShadow={`4px 4px 0 rgba(255, 255, 255, 0.5) inset, -4px -4px 0 ${item.shadowColor} inset`}
            pos="relative"
            zIndex="3"
            sx={{
              '&::before': {
                content: "''",
                display: 'block',
                background: "url('./img/startBtn_highlight.svg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                width: '28px',
                height: '40px',
                position: 'absolute',
                inset: '10px auto auto 12px',
              },
            }}
          >
            {item.text}
          </Center>
          <Box
            w="calc(280px + 10px)"
            h="calc(80px + 10px)"
            bg="white"
            borderRadius="9999px"
            pos="absolute"
            inset="auto"
            boxShadow="0 4px 0 #D3D3D3"
          />
        </Flex>
      ))}
    </Flex>
  );
};

export default StartBtn;
