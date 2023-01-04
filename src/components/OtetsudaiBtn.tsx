import { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { category } from '../libs/category';

const hoge: {
  title: string;
  category: number;
}[] = [
  { title: 'くつならべ', category: 2 },
  // { title: 'くつならべ', category: 0 },
];

const OtetsudaiBtn: FC = () => {
  return (
    <Flex justifyContent="center" flexWrap="wrap" as="ul" gap="24px 16px">
      {hoge.map(
        (
          item: {
            title: string;
            category: number;
          },
          i: number
        ) => (
          <Flex
            key={item.category + i}
            alignItems="center"
            as="li"
            w="272px"
            h="80px"
            color={category[item.category].color.dark}
            bg="#F5F3E4"
            fontSize="2.3rem"
            pl="72px"
            borderStyle="solid"
            borderWidth="4px"
            borderColor={category[item.category].color.light}
            borderRadius="20px"
            boxShadow={`4px 4px 0 #FCFBF7 inset, -4px -4px 0 #DDDBCD inset, 0 3px 0 ${
              category[item.category].color.dark
            }`}
            pos="relative"
            sx={{
              '&::before': {
                content: "''",
                display: 'block',
                background: category[item.category].color.light,
                width: '48px',
                height: '48px',
                borderRadius: '9999px',
                position: 'absolute',
                inset: 'auto auto auto 16px',
              },
              '&::after': {
                content: "''",
                display: 'block',
                background: `url("../img/icon_${
                  category[item.category].categoryEn
                }.svg")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                width: '48px',
                height: '48px',
                borderRadius: '9999px',
                position: 'absolute',
                inset: 'auto auto auto 16px',
              },
            }}
          >
            {/* <Box as="img" src="img/test.jpg" /> */}
            {/* <Box as={Icon} sx={{ '>path': { fill: 'skyblue' } }} /> */}
            {item.title}
          </Flex>
        )
      )}
    </Flex>
  );
};

export default OtetsudaiBtn;
