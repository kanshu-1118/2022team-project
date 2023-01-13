import { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { category } from '../libs/category';
import { otetsudaiType } from '../types/otetsudai';
import {
  STATE_COMPLETE,
  STATE_CONFIRM,
  STATE_END,
  STATE_RECOMMEND,
  STATE_START,
} from '../libs/name';

type Props = {
  data: otetsudaiType[];
  index: number[];
  state: string;
};

const OtetsudaiBtn: FC<Props> = ({ index, data, state }) => {
  return (
    <Flex
      justifyContent="center"
      flexWrap="wrap"
      as="ul"
      gap="24px 0"
      w="280px"
    >
      {index.map((item: number, i: number) => (
        <Flex
          key={item + i + ''}
          alignItems="center"
          as="li"
          w="280px"
          h="80px"
          bg="#F5F3E4"
          p="0 4px 0 64px"
          borderStyle="solid"
          borderWidth="4px"
          borderColor={category[data[item].category].color.light}
          borderRadius="20px"
          lineHeight="2.8rem"
          boxShadow={`4px 4px 0 #FCFBF7 inset, -4px -4px 0 #DDDBCD inset, 0 3px 0 ${
            category[data[item].category].color.dark
          }`}
          pos="relative"
          sx={{
            '&::before': {
              content: "''",
              display: 'block',
              background: category[data[item].category].color.light,
              width: '44px',
              height: '44px',
              borderRadius: '9999px',
              position: 'absolute',
              inset: 'auto auto auto 12px',
            },
            '&::after': {
              content: "''",
              display: 'block',
              background: `url("../img/icon_${
                category[data[item].category].categoryEn
              }.svg")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: '36px',
              width: '44px',
              height: '44px',
              borderRadius: '9999px',
              position: 'absolute',
              inset: 'auto auto auto 12px',
            },
          }}
        >
          <Text
            as="span"
            color={category[data[item].category].color.dark}
            fontSize="2.3rem"
          >
            {data[item].kanji.name}
          </Text>
          {state === STATE_START && <>未完了</>}
          {state === STATE_END && <>完了</>}
          {state === STATE_CONFIRM && <>確認する</>}
          {state === STATE_COMPLETE && <>確認済み</>}
          {state === STATE_RECOMMEND && <>星の評価</>}
        </Flex>
      ))}
    </Flex>
  );
};

export default OtetsudaiBtn;
