import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { otetsudaiType } from '../src/types/otetsudai';
import { categoryType } from '../src/types/category';

const otetsudaiApi = 'http://localhost:3000/api/otetsudai';

const List: NextPage = () => {
  return <Box>おてつだいず！</Box>;
};

export default List;

export const getStaticProps = async () => {
  const response = await fetch(`${otetsudaiApi}`);
  const data = await response.json();
  const filtering = (category: categoryType) => {
    const filteringData = data.filter(
      (item: otetsudaiType) => item.category === category
    );
    return filteringData;
  };
  const kitchen = filtering('kitchen');
  const living = filtering('living');
  const bathroom = filtering('bathroom');
  const washing = filtering('washing');
  const other = filtering('other');
  console.log(kitchen);

  return {
    props: {
      // data: categoryOfData,
    },
  };
};
