import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { otetsudaiLevel } from '../libs/level';
import { otetsudaiLevelType } from '../types/otetsudai';
import ModalRemoveBtn from './ModalRemoveBtn';

const LevelBtn: FC = () => {
  const [modalFlag, setModalFlag] = useState<boolean>(false);

  const modalDisplay = () => {
    setModalFlag(!modalFlag);
  };

  const LevelBtnHoge = () => {
    return (
      <Flex
        onClick={() => modalDisplay()}
        justifyContent="center"
        alignItems="center"
        w="40px"
        h="40px"
        bg="url('../img/parts_highlight.svg'), linear-gradient(#36C8D9, #36C8D9)"
        bgRepeat="no-repeat, no-repeat"
        bgPosition="top 6px left 6px, center"
        bgSize="8px auto, auto"
        borderRadius="9999px"
        boxShadow="-3px -3px 0 #049DD9 inset"
        pos="absolute"
        inset="8px 8px auto auto"
        zIndex="10"
        sx={{
          '&::before': {
            content: "'？'",
            display: 'block',
            color: 'white',
            fontSize: '2.2rem',
            pos: 'absolute',
          },
        }}
      />
    );
  };
  const LevelModal = () => {
    return (
      <Center w="100vw" h="100vh" pos="fixed" inset="0 0 auto auto" zIndex="20">
        <Box
          w="70vw"
          maxW="720px"
          h="62vh"
          maxH="480px"
          color="skyblue500"
          pos="relative"
          zIndex="30"
        >
          <Center
            flexDirection="column"
            gap="32px"
            h="100%"
            boxShadow="0 4px #049DD9"
            textStyle="boxInsideTemplate"
          >
            <Center flexDirection="column" gap="8px">
              <Text fontSize="4.2rem">お手伝いレベルについて</Text>
              <Text fontSize="2rem">是非参考にしてください！</Text>
            </Center>
            <Flex justifyContent="center" flexDirection="column" gap="24px">
              {otetsudaiLevel.map((item: otetsudaiLevelType, i: number) => (
                <Flex key={'level' + i} h="56px" gap="16px">
                  <Flex gap="8px">
                    {otetsudaiLevel.map(
                      (star: otetsudaiLevelType, i2: number) => (
                        <Box key={'star' + i2}>
                          {i + 1 > i2 ? (
                            <Box as="img" src="./img/icon_star_01.svg" />
                          ) : (
                            <Box as="img" src="./img/icon_star_02.svg" />
                          )}
                        </Box>
                      )
                    )}
                  </Flex>
                  <Flex
                    as="p"
                    alignItems="center"
                    fontSize="3.2rem"
                    lineHeight="3.2rem"
                  >
                    {item.over === undefined ? (
                      <>
                        {item.min}才から{item.max}才向け
                      </>
                    ) : (
                      <>{item.over}才以上向け</>
                    )}
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Center>
          <Box
            bg="skyblue300"
            borderColor="skyblue500"
            textStyle="boxBgTemplate"
          />
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
    );
  };

  return (
    <>
      <LevelBtnHoge />
      {modalFlag && <LevelModal />}
    </>
  );
};

export default LevelBtn;
