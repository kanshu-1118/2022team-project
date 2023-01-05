import type { NextPage } from 'next';
import { Grid, GridItem } from '@chakra-ui/react';
import Setting from '../../src/components/Setting';
import OtetsudaiList from '../../src/components/OtetsudaiList';
import OtetsudaiRecommend from '../../src/components/OtetsudaiRecommend';

const ParentsStart: NextPage = () => {
  return (
    <Grid
      templateAreas={`"otetsudai recommend"
                      "otetsudai setting"`}
      gridTemplateRows="fit-content fit-content"
      gridTemplateColumns="fit-content fit-content"
      minWidth="100vw"
      minHeight="100vh"
      bg="url('../img/bg.png')"
      bgSize="cover"
      bgPosition="center bottom"
      sx={{
        '>div': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <GridItem area="otetsudai">
        <OtetsudaiList />
      </GridItem>
      <GridItem area="recommend">
        <OtetsudaiRecommend />
      </GridItem>
      <GridItem area="setting">
        <Setting />
      </GridItem>
    </Grid>
  );
};

export default ParentsStart;
