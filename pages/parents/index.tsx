import type { NextPage } from 'next';
import { Box, Center, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import Setting from '../../src/components/Setting';
import LevelBtn from '../../src/components/LevelBtn';
import {
  defaultName,
  STATE_COMPLETE,
  STATE_CONFIRM,
  STATE_END,
  STATE_RECOMMEND,
  STATE_START,
} from '../../src/libs/name';
import OtetsudaiBtn from '../../src/components/OtetsudaiBtn';
import Owattayo from '../../src/components/Owattayo';
import { firebaseApp } from '../../src/libs/firebase';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { otetsudaiCheckType } from '../../src/types/otetsudaiCheck';
import { otetsudaiApi } from '../../src/libs/otetsudaiApi';
import { otetsudaiType } from '../../src/types/otetsudai';

type Props = {
  api: otetsudaiType[];
};

const ParentsStart: NextPage<Props> = ({ api }) => {
  const [firebaseData, setFirebaseData] = useState<otetsudaiCheckType>({
    start: [0, 1],
    end: [2, 3],
    confirm: [4, 5],
    complete: [6, 7],
  });

  const OtetsudaiAdd = () => {
    return (
      <Flex alignItems="center" w="fit-content" pos="relative">
        <Text
          display="flex"
          alignItems="center"
          h="64px"
          color="pink300"
          bg="white"
          p="0 48px 0 20px"
          fontSize="2rem"
          borderWidth="4px"
          borderStyle="solid"
          borderColor="pink300"
          borderRadius="9999px"
        >
          おてつだいを追加
        </Text>
        <Flex
          justifyContent="center"
          alignItems="center"
          w="80px"
          h="80px"
          bg="url('../img/parts_highlight.svg'), linear-gradient(#F2798F, #F2798F)"
          bgRepeat="no-repeat, no-repeat"
          bgPosition="top 12px left 12px, center"
          border="4px solid #ffffff"
          borderRadius="9999px"
          boxShadow="-3px -3px 0 #ED4076 inset"
          pos="absolute"
          inset="auto -40px auto auto"
          sx={{
            '&::before': {
              content: "''",
              display: 'block',
              width: '8px',
              height: '32px',
              background: 'white',
              borderRadius: '3px',
              pos: 'absolute',
            },
            '&::after': {
              content: "''",
              display: 'block',
              width: '32px',
              height: '8px',
              background: 'white',
              borderRadius: '3px',
              pos: 'absolute',
            },
          }}
        />
      </Flex>
    );
  };
  const OtetsudaiList = () => {
    return (
      <Box w="62vw" h="90%" pos="relative">
        <Flex
          justifyContent="center"
          gap="28px"
          h="100%"
          boxShadow="0 4px #04AFAA"
          p="104px 14px 0 0"
          textStyle="boxInsideTemplate"
        >
          <Center w="110%" h="110px" pos="absolute" inset="-24px auto auto -5%">
            <Center
              gap="8px"
              w="100%"
              color="white"
              pr="16px"
              fontSize="2.7rem"
              pos="absolute"
              zIndex="3"
            >
              <Text>{defaultName}のおてつだいリスト</Text>
              <OtetsudaiAdd />
            </Center>
            <Box
              w="100%"
              borderBottomStyle="solid"
              borderBottomWidth="100px"
              borderBottomColor="orange300"
              borderLeft="28px solid transparent"
              borderRight="28px solid transparent"
              pos="absolute"
              zIndex="2"
            />
            <Box
              w="calc(100% + 10px)"
              borderBottomStyle="solid"
              borderBottomWidth="110px"
              borderBottomColor="orange500"
              borderLeft="28px solid transparent"
              borderRight="28px solid transparent"
              pos="absolute"
              zIndex="1"
            />
          </Center>
          <Flex flexDirection="column" gap="24px 0" w="fit-content">
            <OtetsudaiBtn
              index={firebaseData.start}
              data={api}
              state={STATE_START}
            />
            <OtetsudaiBtn
              index={firebaseData.end}
              data={api}
              state={STATE_END}
            />
          </Flex>
          <Box w="47%" h="92%" pos="relative" transform="translateY(14px)">
            <Flex
              alignItems="center"
              flexDirection="column"
              gap="15px"
              h="100%"
              boxShadow="0 4px #049DD9"
              textStyle="boxInsideTemplate"
            >
              <Owattayo />
              <Flex flexDirection="column" gap="24px 0">
                <OtetsudaiBtn
                  index={firebaseData.confirm}
                  data={api}
                  state={STATE_CONFIRM}
                />
                <OtetsudaiBtn
                  index={firebaseData.complete}
                  data={api}
                  state={STATE_COMPLETE}
                />
              </Flex>
            </Flex>
            <Box
              bg="skyblue300"
              borderColor="skyblue500"
              textStyle="boxBgTemplate"
            />
          </Box>
        </Flex>
        <Box bg="green300" borderColor="green500" textStyle="boxBgTemplate" />
      </Box>
    );
  };
  const OtetsudaiRecommend = () => {
    return (
      <Box w="28vw" h="60vh" pos="relative">
        <LevelBtn />
        <Flex
          flexDirection="column"
          alignItems="center"
          w="100%"
          h="100%"
          p="20px 0"
          boxShadow="0 4px #ED4076"
          textStyle="boxInsideTemplate"
        >
          <Text color="pink500" textStyle="boxHeadingTemplate">
            {defaultName}に
            <br />
            おすすめのお手伝い
          </Text>
          <OtetsudaiBtn
            index={firebaseData.start}
            data={api}
            state={STATE_RECOMMEND}
          />
        </Flex>
        <Box bg="pink300" borderColor="pink500" textStyle="boxBgTemplate" />
      </Box>
    );
  };

  useEffect(() => {
    const firebase = async () => {
      const db = getFirestore(firebaseApp);
      const col = collection(db, 'check');
      const querySnapshot = await getDocs(col);
      const ret: any = [];
      querySnapshot.forEach((doc) => {
        ret.push(doc.data());
      });
      if (ret.length === 0) {
        await addDoc(col, firebaseData);
        console.log('Firestoreに送信完了');
      } else {
        setFirebaseData(ret[0]);
        console.log(ret[0]);
      }
    };
    firebase();
  }, []);

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

export const getStaticProps = async () => {
  const response = await fetch(`${otetsudaiApi}`);
  const otetsudaiApiData = await response.json();

  return {
    props: {
      api: otetsudaiApiData,
    },
  };
};
