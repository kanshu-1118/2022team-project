import type { NextPage } from 'next';
import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { startingQuestionType } from '../src/types/startingQuestion';
import StartNameInput from '../src/components/StartNameInput';
import StartNameConfirm from '../src/components/StartNameConfirm';
import StartNickNameInput from '../src/components/StartNickNameInput';
import StartNickNameConfirm from '../src/components/StartNickNameConfirm';
import StartAgeInput from '../src/components/StartAgeInput';
import StartAgeConfirm from '../src/components/StartAgeConfirm';
import StartUseInput from '../src/components/StartUseInput';
import StartUseConfirm from '../src/components/StartUseConfirm';
import StartHeading from '../src/components/StartHeading';
import StartBtn from '../src/components/StartBtn';

const Start: NextPage = () => {
  const [name, setName] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [use, setUse] = useState<number>(0);

  const startingQuestion: startingQuestionType[] = [
    {
      question: {
        heading: 'まずは、おなまえをおしえてね！',
        component: <StartNameInput />,
      },
      confirm: {
        heading: 'まずは、おなまえをおしえてね！',
        component: <StartNameConfirm data={name} />,
      },
    },
    {
      question: {
        heading: 'なんてよんだらいいかな？',
        component: <StartNickNameInput data={name} />,
      },
      confirm: {
        heading: 'よんでほしいのは',
        component: <StartNickNameConfirm data={nickname} />,
      },
    },
    {
      question: {
        heading: 'つぎに、なんさいかをおしえてね！',
        component: <StartAgeInput />,
      },
      confirm: {
        heading: `${nickname}のねんれいは`,
        component: <StartAgeConfirm data={age} />,
      },
    },
    {
      question: {
        heading: 'さいごに、だれがつかうかおしえてね！',
        component: <StartUseInput data={nickname} />,
      },
      confirm: {
        heading: '使うのは',
        component: <StartUseConfirm data={use} />,
      },
    },
  ];

  return (
    <Box
      minWidth="100vw"
      minHeight="100vh"
      bg="url('./img/start_bg.svg')"
      bgRepeat="repeat"
    >
      {startingQuestion.map((item, i) => (
        <Flex
          key={item.question.heading + i}
          flexDirection="column"
          alignItems="center"
          fontSize="3.3rem"
          sx={{
            '>div': {
              flexDirection: 'column',
              alignItems: 'center',
            },
          }}
        >
          <Center>
            <StartHeading data={item.question.heading} />
            {item.question.component}
            <StartBtn index={0} />
          </Center>
          <Center>
            <StartHeading data={item.confirm.heading} />
            {item.confirm.component}
            <StartBtn index={1} />
          </Center>
        </Flex>
      ))}
    </Box>
  );
};

export default Start;
