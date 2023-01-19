import type { NextPage } from 'next';
import { Box, Center, Flex, Text } from '@chakra-ui/react';
import LevelBtn from '../../src/components/LevelBtn';
import {
  STATE_COMPLETE,
  STATE_CONFIRM,
  STATE_END,
  STATE_RECOMMEND,
  STATE_START,
} from '../../src/libs/name';
import OtetsudaiBtn from '../../src/components/OtetsudaiBtn';
import { firebaseApp } from '../../src/libs/firebase';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { otetsudaiCheckType } from '../../src/types/otetsudaiCheck';
import { otetsudaiApi } from '../../src/libs/otetsudaiApi';
import { otetsudaiType } from '../../src/types/otetsudai';
import ModalRemoveBtn from '../../src/components/ModalRemoveBtn';
import EnterBtn from '../../src/components/EnterBtn';

// type Props = {
//   api: otetsudaiType[];
// };

// const ParentsStart: NextPage<Props> = ({ api }) => {
const ParentsStart: NextPage = () => {
  //   export const getStaticProps: any = async () => {
  //   const response = await fetch(`${otetsudaiApi}`);
  //   const otetsudaiApiData = await response.json();

  //   return {
  //     props: {
  //       api: otetsudaiApiData,
  //     },
  //   };
  // };

  const [fireBaseUserData, setFireBaseUserData] = useState<any>('');
  const [firebaseCheckData, setFirebaseCheckData] =
    useState<otetsudaiCheckType>({
      start: [],
      end: [],
      confirm: [],
      complete: [],
    });
  const [recommendData, setRecommendData] = useState<number[]>([]);
  const [recommendModalData, setRecommendModalData] = useState<number[]>([]);
  const [modalFlag, setModalFlag] = useState<boolean>(false);
  const [api, setApi] = useState();
  const db = getFirestore(firebaseApp);

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
  const firebaseCheck = async () => {
    const colCheck = collection(db, 'check');
    const querySnapshotCheck = await getDocs(colCheck);
    const retCheck: any = [];
    querySnapshotCheck.forEach((doc) => {
      retCheck.push(doc.data());
    });
    setFirebaseCheckData(retCheck[0]);
  };
  const firebaseUser = async (api: any) => {
    if (api) {
      const colUser = collection(db, 'user');
      const querySnapshotUser = await getDocs(colUser);
      const retUser: any = [];
      querySnapshotUser.forEach((doc) => {
        retUser.push(doc.data());
      });
      setFireBaseUserData(retUser[0]);

      let rcmDataArray = [];
      let newRcmDataArray = [];
      let newRcmDataModalArray = [];
      for (let i = 0; i < api.length; i++) {
        if (retUser[0].age <= 4 && api[i].level === 1) {
          rcmDataArray.push(i);
        } else if (retUser[0].age === 5 && api[i].level === 2) {
          rcmDataArray.push(i);
        } else if (retUser[0].age === 6 && api[i].level === 2) {
          rcmDataArray.push(i);
        } else if (retUser[0].age >= 7 && api[i].level === 3) {
          rcmDataArray.push(i);
        }
      }
      for (let i = 0; i < 3; i++) {
        newRcmDataArray.push(
          rcmDataArray[Math.floor(Math.random() * rcmDataArray.length) + 1]
        );
      }
      for (let i = 0; i < 4; i++) {
        newRcmDataModalArray.push(
          rcmDataArray[Math.floor(Math.random() * rcmDataArray.length) + 1]
        );
      }
      setRecommendModalData(newRcmDataModalArray);
      setRecommendData(newRcmDataArray);
    }
  };

  useEffect(() => {
    const getApi = async () => {
      const response = await fetch(`${otetsudaiApi}`);
      const otetsudaiApiData = await response.json();
      setApi(otetsudaiApiData);
    };
    getApi();
    firebaseCheck();
    firebaseUser(api);
  }, []);

  useEffect(() => {
    firebaseCheck();
  }, [modalFlag]);

  const Owattayo = () => (
    <Flex w="240px" h="56px" m="20px 0 0">
      <Box
        as="img"
        src="../img/text_owattayo.png"
        alt="終わったよ！"
        w="100%"
        h="100%"
        objectFit="contain"
      />
    </Flex>
  );
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
      <>
        {api && (
          <Box w="62vw" maxW="664px" h="90vh" maxH="720px" pos="relative">
            <Flex
              justifyContent="center"
              gap="28px"
              h="100%"
              p="104px 14px 0 0"
              boxShadow="0 4px #04AFAA"
              textStyle="boxInsideTemplate"
            >
              {/* へっだー */}
              <Center
                w="110%"
                h="110px"
                pos="absolute"
                inset="-24px auto auto -5%"
              >
                <Center
                  gap="8px"
                  w="100%"
                  color="white"
                  pr="16px"
                  fontSize="2.7rem"
                  pos="absolute"
                  zIndex="3"
                >
                  <Text>{fireBaseUserData.nickname}のおてつだいリスト</Text>
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
              {/* りすと */}
              <Flex flexDirection="column" gap="16px 0" w="fit-content">
                <OtetsudaiBtn
                  index={firebaseCheckData.start}
                  data={api}
                  state={STATE_START}
                />
                <OtetsudaiBtn
                  index={firebaseCheckData.end}
                  data={api}
                  state={STATE_END}
                />
              </Flex>
              {/* おわったよ */}
              <Box
                w="29vw"
                maxWidth="304px"
                h="92%"
                pos="relative"
                transform="translateY(14px)"
              >
                <Flex
                  alignItems="center"
                  flexDirection="column"
                  gap="15px"
                  h="100%"
                  boxShadow="0 4px #049DD9"
                  textStyle="boxInsideTemplate"
                >
                  <Owattayo />
                  <Flex flexDirection="column" gap="16px 0">
                    <OtetsudaiBtn
                      index={firebaseCheckData.confirm}
                      data={api}
                      state={STATE_CONFIRM}
                    />
                    <OtetsudaiBtn
                      index={firebaseCheckData.complete}
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
            <Box
              bg="green300"
              borderColor="green500"
              textStyle="boxBgTemplate"
            />
          </Box>
        )}
      </>
    );
  };
  const OtetsudaiRecommend = () => {
    return (
      <>
        {api && (
          <Box w="100%" h="100%" pos="relative">
            <LevelBtn />
            <Center
              flexDirection="column"
              w="100%"
              h="100%"
              p="20px 0"
              boxShadow="0 4px #ED4076"
              textStyle="boxInsideTemplate"
            >
              <Text color="pink500" textStyle="boxHeadingTemplate">
                {fireBaseUserData.nickname}に
                <br />
                おすすめのお手伝い
              </Text>
              <OtetsudaiBtn
                index={recommendData}
                data={api}
                state={STATE_RECOMMEND}
              />
            </Center>
            <Box bg="pink300" borderColor="pink500" textStyle="boxBgTemplate" />
          </Box>
        )}
        ;
      </>
    );
  };
  const OtetsudaiSetting = () => {
    return (
      <Box w="100%" pos="relative">
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
              <Flex gap="4px" flexDirection="column" key={i + 'setting'}>
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
  const OtetsudaiFirstModal = () => {
    return (
      <>
        {api && (
          <Center
            w="100vw"
            h="100vh"
            pos="fixed"
            inset="0 0 auto auto"
            zIndex="20"
          >
            <Box
              w="85vw"
              maxW="880px"
              h="85vh"
              maxH="614px"
              color="red500"
              pos="relative"
              zIndex="30"
            >
              <Center
                flexDirection="column"
                gap="32px"
                h="100%"
                boxShadow="0 4px #EA4242"
                textStyle="boxInsideTemplate"
              >
                <Center flexDirection="column" gap="8px">
                  <Text fontSize="2rem">こんにちは！</Text>
                  <Text fontSize="4.2rem" textAlign="center">
                    今日も{fireBaseUserData.nickname}に<br />
                    お手伝いをしてもらいましょう！
                  </Text>
                </Center>
                <Center flexDirection="column" gap="24px">
                  <Text fontSize="2rem" textAlign="center">
                    {fireBaseUserData.nickname}におすすめのお手伝い
                  </Text>
                  <Flex>
                    <OtetsudaiBtn
                      index={recommendModalData}
                      data={api}
                      state={STATE_RECOMMEND}
                      modal
                    />
                  </Flex>
                  <EnterBtn data={2} setModalFlag={setModalFlag} />
                </Center>
              </Center>
              <Box bg="red300" borderColor="red500" textStyle="boxBgTemplate" />
              <ModalRemoveBtn setModalFlag={setModalFlag} />
            </Box>
            <Flex
              w="100%"
              h="100%"
              bg="rgba(0, 0, 0, 0.6)"
              pos="absolute"
              inset="0 0 auto auto"
            />
          </Center>
        )}
      </>
    );
  };

  return (
    <>
      {api && (
        <>
          <Center
            gap="3vw"
            minWidth="100vw"
            minHeight="100vh"
            bg="url('../img/bg.png')"
            bgSize="cover"
            bgPosition="center bottom"
            p="2vw"
          >
            <OtetsudaiList />
            <Flex
              flexDirection="column"
              gap="5.5vh"
              w="29vw"
              maxWidth="304px"
              h="90vh"
              maxH="720px"
            >
              <OtetsudaiRecommend />
              <OtetsudaiSetting />
            </Flex>
          </Center>
          {modalFlag && <OtetsudaiFirstModal />}
        </>
      )}
    </>
  );
};

export default ParentsStart;

// export const getStaticProps: any = async () => {
//   const response = await fetch(`${otetsudaiApi}`);
//   const otetsudaiApiData = await response.json();

//   return {
//     props: {
//       api: otetsudaiApiData,
//     },
//   };
// };
