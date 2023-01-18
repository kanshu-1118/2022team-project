import { Box, Center, Flex } from '@chakra-ui/react';
import { FC } from 'react';

type Props = { data: number; index?: number; setModalFlag: any };

const btnObj: {
  text: string;
  bgColor: string;
  shadowColor: string;
}[][] = [
  [{ text: 'けってい！', bgColor: '#F2798F', shadowColor: '#ED4076' }],
  [
    { text: 'ちがうよ', bgColor: '#36C8D9', shadowColor: '#049DD9' },
    { text: 'あってる！', bgColor: '#F2798F', shadowColor: '#ED4076' },
  ],
  [{ text: 'お願いする！', bgColor: '#F2798F', shadowColor: '#ED4076' }],
];

const EnterBtn: FC<Props> = ({ data, index, setModalFlag }) => {
  const modalDisplay = () => {
    setModalFlag(false);
  };

  return (
    <Flex
      as="ul"
      flexWrap="wrap"
      gap="24px 16px"
      w="fit-content"
      fontSize="3.3rem"
    >
      {btnObj[data].map((item, i: number) => (
        <Flex
          as="li"
          onClick={() => modalDisplay()}
          // onClick={() => slideFunc(i, data, index)}
          key={item.text + i}
          pos="relative"
        >
          <Center
            as="button"
            w="280px"
            h="80px"
            color="white"
            m="5px"
            borderRadius="9999px"
            pos="relative"
            zIndex="3"
            background={item.bgColor}
            boxShadow={`4px 4px 0 rgba(255, 255, 255, 0.5) inset, -4px -4px 0 ${item.shadowColor} inset`}
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
            お願いする！
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

export default EnterBtn;
