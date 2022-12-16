import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import otatudaicategory from './OtetudaiArray';
import OtetudaiArray from './OtetudaiArray';

const Home: NextPage = () => {

  return(
    <Box>
      おてつだいず！
      <OtetudaiArray />
    </Box>
  ) 
  
};

export default Home;
