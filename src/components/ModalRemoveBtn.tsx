import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  setModalFlag: any;
};

const ModalRemoveBtn: FC<Props> = ({ setModalFlag }) => {
  const modalDisplay = () => {
    setModalFlag(false);
  };

  return (
    <Flex
      as="button"
      onClick={() => modalDisplay()}
      justifyContent="center"
      alignItems="center"
      w="64px"
      h="64px"
      bg="url('../img/parts_highlight.svg'), linear-gradient(#F25C5C, #F25C5C)"
      bgRepeat="no-repeat, no-repeat"
      bgPosition="top 8px left 8px, center"
      borderRadius="9999px"
      boxShadow="-3px -3px 0 #EA4242 inset"
      pos="absolute"
      inset="16px 16px auto auto"
      zIndex="20"
      sx={{
        '&::before': {
          content: "''",
          display: 'block',
          width: '6px',
          height: '32px',
          background: 'white',
          borderRadius: '3px',
          pos: 'absolute',
          transform: 'rotateZ(45deg)',
        },
        '&::after': {
          content: "''",
          display: 'block',
          width: '32px',
          height: '6px',
          background: 'white',
          borderRadius: '3px',
          pos: 'absolute',
          transform: 'rotateZ(45deg)',
        },
      }}
    />
  );
};

export default ModalRemoveBtn;
