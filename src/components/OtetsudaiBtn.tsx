import { FC, useState } from 'react';
import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { category } from '../libs/category';
import { otetsudaiType } from '../types/otetsudai';
import { firebaseApp } from '../../src/libs/firebase';
import {
  STATE_COMPLETE,
  STATE_CONFIRM,
  STATE_END,
  STATE_RECOMMEND,
  STATE_START,
} from '../libs/name';
import { otetsudaiLevel } from '../libs/level';
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from 'firebase/firestore';

type Props = {
  data: otetsudaiType[];
  index: number[];
  state: string;
  modal?: boolean;
};

const OtetsudaiBtn: FC<Props> = ({ index, data, state, modal }) => {
  const [modalFlagArray, setModalFlagArray] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const [modalNumberArray, setModalNumberArray] = useState<any>([]);

  const sendFirebaseModal = async (data: number[]) => {
    const db = getFirestore(firebaseApp);
    const colCheck = collection(db, 'check');
    const querySnapshotCheck = await getDocs(colCheck);
    let retId = '';
    querySnapshotCheck.forEach((doc) => {
      retId = doc.id;
    });
    const washingtonRef = doc(db, 'check', retId);
    await updateDoc(washingtonRef, { start: data });
  };

  const modalFunc = (item: number, i: number) => {
    if (modal) {
      let modalFlagKeep = [];
      let modalNumberKeep: any = [];

      for (let i2 = 0; i2 < modalFlagArray.length; i2++) {
        if (i === i2) {
          modalFlagKeep.push(!modalFlagArray[i2]);
        } else {
          modalFlagKeep.push(modalFlagArray[i2]);
        }
      }
      for (let i2 = 0; i2 < modalNumberArray.length; i2++) {
        if (modalNumberArray[i2] !== item) {
          modalNumberKeep.push(modalNumberArray[i2]);
        }
      }
      if (modalNumberKeep.length === modalNumberArray.length) {
        modalNumberKeep.push(item);
      }
      console.log(modalNumberKeep);

      setModalFlagArray(modalFlagKeep);
      setModalNumberArray(modalNumberKeep);
      sendFirebaseModal(modalNumberKeep);
    }
  };

  return (
    <Flex
      justifyContent="center"
      flexWrap="wrap"
      gap="16px 8px"
      w="100%"
      maxW="600px"
    >
      {index.map((item: number, i: number) => (
        <Flex
          as="button"
          key={item + 'otetsudai' + i}
          onClick={() => modalFunc(item, i)}
          alignItems="center"
          justifyContent="space-between"
          gap="8px"
          w="280px"
          h="80px"
          bg="#F5F3E4"
          p="0 8px 0 64px"
          borderStyle="solid"
          borderWidth="4px"
          borderColor={category[data[item].category].color.light}
          borderRadius="20px"
          lineHeight="2.8rem"
          boxShadow={`4px 4px 0 #FCFBF7 inset, -4px -4px 0 #DDDBCD inset, 0 3px 0 ${
            category[data[item].category].color.dark
          }`}
          pos="relative"
          textAlign="left"
          overflow="hidden"
        >
          {modal && modalFlagArray[i] && (
            <Center
              w="100%"
              h="100%"
              bg="rgba(0, 0, 0, 0.6)"
              pos="absolute"
              inset="0 0 0 0"
              zIndex={3}
              sx={{
                '&::before': {
                  content: "''",
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '40px',
                  height: '40px',
                  background: "url('./img/icon_check.svg') no-repeat",
                  backgroundSize: 'contain',
                  position: 'absolute',
                  inset: 'auto auto auto auto',
                },
              }}
            />
          )}
          <Center
            as="span"
            w="144px"
            color={category[data[item].category].color.dark}
            fontSize="2.1rem"
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
                backgroundSize: '32px',
                width: '44px',
                height: '44px',
                borderRadius: '9999px',
                position: 'absolute',
                inset: 'auto auto auto 12px',
              },
            }}
          >
            {data[item].kanji.name}
          </Center>
          {state === STATE_START && (
            <Center
              w="40px"
              h="56px"
              color="black400"
              bg="black200"
              fontSize="1.2rem"
              borderRadius="9999px"
            >
              未完了
            </Center>
          )}
          {state === STATE_END && (
            <Center
              w="40px"
              h="56px"
              color="white"
              bg="pink300"
              fontSize="1.2rem"
              borderRadius="9999px"
            >
              完了
            </Center>
          )}
          {state === STATE_CONFIRM && (
            <Center
              w="40px"
              h="56px"
              color="pink300"
              bg="white"
              borderStyle="solid"
              borderWidth="2px"
              borderColor="pink300"
              fontSize="1.2rem"
              borderRadius="9999px"
            >
              確認
            </Center>
          )}
          {state === STATE_COMPLETE && (
            <Center
              w="40px"
              h="56px"
              color="white"
              bg="pink300"
              fontSize="1.2rem"
              borderRadius="9999px"
            >
              確認済
            </Center>
          )}
          {state === STATE_RECOMMEND && (
            <Flex gap="3px">
              {otetsudaiLevel.map((level, i) => (
                <Box key={'level' + i} w="20px" h="20px">
                  {data[item].level > i ? (
                    <Box
                      as="img"
                      src="./img/icon_star_01.svg"
                      w="100%"
                      h="100%"
                      objectFit="contain"
                    />
                  ) : (
                    <Box
                      as="img"
                      src="./img/icon_star_02.svg"
                      w="100%"
                      h="100%"
                      objectFit="contain"
                    />
                  )}
                </Box>
              ))}
            </Flex>
          )}
        </Flex>
      ))}
      {index.length === 0 && <Box w="280px" h="80px" />}
    </Flex>
  );
};

export default OtetsudaiBtn;
