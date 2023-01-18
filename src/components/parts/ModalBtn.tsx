import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { NextComponentType } from 'next';
import React from 'react'

interface ModalProps {
    abg: string;
    bbg: string;
    text: string;
    borderw: string;
    w: string;
    borderh: string;
    h: string;
    fs: string;
    click: any;
};

const logon = () => {
    console.log("クリックした");
}

const Modalbtn = (props :  ModalProps ) => {

    return (
        <Flex 
            w={props.borderw}
            h={props.borderh}
            border={"4px solid #fff"}
            borderRadius={"100px"}
            boxShadow={"0px 6px 0px rgba(211,211,211,1)"}
            alignItems={"center"}
            justifyContent={"center"}
            
            >
            <Box
                w={props.w}
                h={props.h}
                borderRadius={"100px"}
                // bgColor={'blackAlpha.500'}
                position={"relative"}
                overflow={"hidden"}
                zIndex={"0"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                onClick={props.click}
                _after={{
                    content:`""`,
                    position:"absolute",
                    borderRadius:"100px",
                    top:"-1",
                    left:"-1",
                    w:"100%",
                    h:"100%",
                    bgColor:props.abg,
                    display:"block",
                    opacity:"0.5",
                    zIndex:"-1",
                }}
                _before={{
                    content:`""`,
                    position:"absolute",
                    borderRadius:"100px",
                    top:"1",
                    left:"1",
                    w:"100%",
                    h:"100%",
                    bgColor:props.bbg,
                    display:"block",
                    opacity:"1",
                    zIndex:"-1",
                }}
                >
                <Box as={"img"} src="./img/btn_ilust.svg" zIndex={"100"} position={"absolute"} top={"13px"} left={"13px"}></Box>
                <Text fontSize={props.fs} color={"#fffffb"}>{props.text}</Text>
            </Box>
        </Flex>
    );
}

Modalbtn.defaultProps ={
    borderh:"108px",
    h:"100px",
    fs:"40px",
    click:logon,
}

export default Modalbtn