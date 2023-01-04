import { FC } from 'react';
import { Flex, Text, Box, Center } from '@chakra-ui/react';

const hoge: {
  title: string;
  svg: string;
}[] = [
  {
    title: 'アカウント\n切替',
    svg: 'account',
  },
  {
    title: '文字の\n大きさ変更',
    svg: 'text',
  },
  {
    title: '漢字・かな\n変更',
    svg: 'kana',
  },
];

const Setting: FC = () => {
  return (
    <Box w="28vw" pos="relative">
      <Center
        flexDirection="column"
        p="20px 0"
        boxShadow="0 4px #808080"
        textStyle="boxInsideTemplate"
      >
        <Text color="black400" textStyle="boxHeadingTemplate">
          設定
        </Text>
        <Flex alignItems="center" gap="12px" w="fit-content">
          {hoge.map((item, i) => (
            <Flex gap="4px" flexDirection="column" key={i}>
              <Flex
                justifyContent="center"
                alignItems="center"
                w="80px"
                h="80px"
                bg="url('../img/parts_highlight.svg'), linear-gradient(#B3B3B3, #B3B3B3)"
                bgRepeat="no-repeat, no-repeat"
                bgPosition="top 12px left 12px, center"
                borderRadius="9999px"
                boxShadow="-3px -3px 0 #808080 inset"
                sx={{
                  '&::before': {
                    content: "''",
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    background: `url('../img/setting_${item.svg}.svg')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center, center',
                    borderRadius: '3px',
                  },
                }}
              />
              <Text
                as="pre"
                color="black400"
                lineHeight="1.6rem"
                textAlign="center"
              >
                {item.title}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Center>
      <Box bg="black300" borderColor="black400" textStyle="boxBgTemplate" />
    </Box>
  );
};

export default Setting;
