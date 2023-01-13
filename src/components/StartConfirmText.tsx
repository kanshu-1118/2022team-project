import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

const StartConfirmText: FC = () => {
  return (
    <Flex as="p" alignItems="flex-end" gap="8px" textStyle="start">
      <Text as="span" display="inline-block" pb="4px" fontSize="2.4rem">
        で
      </Text>
      <Text as="span">あってる？</Text>
    </Flex>
  );
};

export default StartConfirmText;
