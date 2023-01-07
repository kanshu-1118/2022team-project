import { FC } from 'react';
import { Flex, Box, Center, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import Logo from './Logo';

type Props = {
  dataIndex: number;
  // text: string;
  path: string;
};

const StartBtn: FC<Props> = ({ dataIndex, path }) => {
  const IndexBtnElement = () => {
    return <>はじめよう！</>;
  };
  const StartBtnElement = () => {
    return (
      <>
        <Logo size="360px" />
        <Text as="span">スタート！</Text>
      </>
    );
  };

  const data: {
    text: JSX.Element;
    bgColor: string;
    shadowColor: string;
  }[] = [
    {
      text: <IndexBtnElement />,
      bgColor: '#F25C5C',
      shadowColor: '#EA4242',
    },
    {
      text: <StartBtnElement />,
      bgColor: '#F2798F',
      shadowColor: '#ED4076',
    },
  ];

  return (
    <NextLink href={`/${path}`} passHref>
      <Box as="span" display="block" pos="relative">
        <Center
          as="span"
          w="280px"
          h="80px"
          color="white"
          bg={data[dataIndex].bgColor}
          // m="8px"
          borderRadius="9999px"
          // boxShadow={`4px 4px 0 rgba(255, 255, 255, 0.5) inset, -4px -4px 0 ${data[dataIndex].shadowColor} inset`}
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
            ...(dataIndex === 0
              ? {
                  width: '280px',
                  height: '80px',
                  boxShadow: `4px 4px 0 rgba(255, 255, 255, 0.5) inset, -4px -4px 0 ${data[dataIndex].shadowColor} inset`,
                  // '&::before': {
                  // },
                  fontSize: '3rem',
                }
              : {
                  width: '720px',
                  height: '160px',
                  boxShadow: `8px 8px 0 rgba(255, 255, 255, 0.5) inset, -8px -8px 0 ${data[dataIndex].shadowColor} inset`,
                  fontSize: '4.5rem',
                  span: {
                    display: 'inline-block',
                    marginTop: '24px',
                  },
                }),
          }}
        >
          {data[dataIndex].text}
        </Center>
        <Box
          bg="white"
          borderRadius="9999px"
          pos="absolute"
          sx={{
            ...(dataIndex === 0
              ? {
                  width: 'calc(280px + 10px)',
                  height: 'calc(80px + 10px)',
                  boxShadow: '0 4px 0 #D3D3D3',
                  inset: '-5px auto auto -5px',
                }
              : {
                  width: 'calc(720px + 16px)',
                  height: 'calc(160px + 16px)',
                  boxShadow: '0 8px 0 #D3D3D3',
                  inset: '-8px auto auto -8px',
                }),
          }}
        />
      </Box>
    </NextLink>
  );
};

export default StartBtn;
