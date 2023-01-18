import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { NextComponentType } from 'next';
import React from 'react'
import otetudai from '../../pages/api/otetudai'

const OtetudaiCateBtn : NextComponentType = (e) => {

    // const CateArray = otetudai.ArrayList;

    return (
        <Flex 
            as="li"
            w={"320px"}
            h={"80px"}
            key={"e.i"}
            bgColor={"#FCFBF7"}
            border={`4px solid #F29A2E`}
            borderRadius={"20px"}
            alignItems={"center"}
            gap={"8px"}
            padding={"0 16px"}
            position={"relative"}
            zIndex="0"
            _after={{
                content:`""`,
                position:"absolute",
                borderRadius:"20px",
                top:"0",
                left:"0",
                w:"100%",
                h:"100%",
                // bgColor:"#DDDBCD",
                display:"block",
                opacity:"0.5",
                zIndex:"-1",
            }}
            >
            <Center w={"50px"} h={"50px"} bgColor={"#F2B950"} borderRadius={"50px"} zIndex={2}>
                <Box objectFit={"cover"} as='img' src={"e.categoryImg"} alt="キッチン" />
            </Center>
            <Text whiteSpace={"pre-wrap"} color={"#F29A2E"} fontSize={"24px"} fontWeight={"200"} lineHeight={"28px"} zIndex={2}>{""}</Text>
            <Flex as="img" src={"e.categoryStar"} alt="星" marginLeft={"auto"} zIndex={2}></Flex>
        </Flex>
    );
}

export default OtetudaiCateBtn