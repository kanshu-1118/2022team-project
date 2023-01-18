import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { NextComponentType } from 'next';
import React from 'react'
import otetudai from '../../../pages/api/otetudai'
import Stanparray from '../../../pages/api/otetudaiStanp';
import Modalbtn from '../parts/ModalBtn';

const OtetudaiModalStanpChild : NextComponentType = () => {

    return (
			<Flex
                w={"100vw"}
                h={"100vh"}
                bgColor={"blackAlpha.700"}
                alignItems={"center"}
                justifyContent={"center"}
                >
                <Flex
                    w={"1010px"}
                    h={"656px"}
                    borderRadius={"52px"}
                    bgColor={"#F25C5C"}
                    border={"2px solid #EA4242"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    >
                    <Flex
                        w={"972px"}
                        h={"609px"}
                        borderRadius={"34px"}
                        bgColor={"#FFFEF8"}
                        flexFlow={'column'}
                        alignItems={"center"}
                        justifyContent={"center"}
                        // gap="52px"
                        boxShadow={"2px 6px 0px rgba(234,66,66,1)"}
                        position={"relative"}
                        zIndex="0"
                        _after={{
                            content:`""`,
                            position:"absolute",
                            borderRadius:"34px",
                            top:"0",
                            left:"0",
                            w:"100%",
                            h:"100%",
                            display:"block",
                            boxShadow:"-2px 6px 0px rgba(234,66,66,1)",
                            zIndex:"-1",
                        }}
                        >
                        <Flex flexFlow={"column"} alignItems={"center"}>
                            <Text fontSize={"60px"} fontWeight={"100"} color={"#F25C5C"} textAlign="center" lineHeight={"60px"}>
                                くつならべ<Box as='span' fontSize={"42px"} paddingLeft="18px">の</Box><br />お手伝い完了！
                            </Text>
                        </Flex>
                        <Flex padding={"16px 0 32px 0"} gap={"40px"} flexFlow={"column"} alignItems={"center"}>
                            <Text fontSize={"22px"} fontWeight={"light"} color={"#F25C5C"}>確認スタンプを押してください</Text>
                            <Flex gap={"24px"}>
                                {Stanparray.map((e,i) => 
                                    <Flex w={"162px"} h={"162px"} bgColor={"#FFF5DB"}  alignItems={"center"} justifyContent={"center"}>
                                        <Box w={"130px"} as='img' src={`./img/stanp${i+1}.svg`}></Box>
                                    </Flex>
                                )}
                            </Flex>
                        </Flex>
                        {/* ここからボタン */}
                        <Modalbtn borderw={"625px"} w={"615px"} abg={"#36C8D9"} bbg={"#049DD9"} text={"スタンプをおす"} />
                    </Flex>
                </Flex>
            </Flex>
    );
}

export default OtetudaiModalStanpChild