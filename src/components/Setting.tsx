import { FC, Key } from 'react';
import { Flex, Text, Box, color } from '@chakra-ui/react';
import OriginalSpacer from './OriginalSpacer';
import { categoryType } from '../types/category';
import { category } from '../libs/category';
import highlight from '../assets/parts_highlight';

import Icon from '../assets/vercel';

const hoge: {
  title: string;
  svg: string;
}[] = [
  {
    title: `アカウント
切替`,
    svg: 'account',
  },
  {
    title: `文字の
大きさ変更`,
    svg: 'text',
  },
  {
    title: `漢字・かな
変更`,
    svg: 'kana',
  },
];

const Setting: FC = () => {
  return (
    <Flex alignItems="center" w="fit-content" pos="relative">
      {hoge.map((item, i) => (
        <Flex gap="4px" flexDirection="column" key={i}>
          <Flex
            justifyContent="center"
            alignItems="center"
            w="88px"
            h="88px"
            bg="url('./img/parts_highlight.svg'), linear-gradient(#B3B3B3, #B3B3B3)"
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
                background: `url('./img/setting_${item.svg}.svg')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center, center',
                borderRadius: '3px',
              },
            }}
          />
          <Text as="pre" color="black400" lineHeight="1.6rem">
            {item.title}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default Setting;
