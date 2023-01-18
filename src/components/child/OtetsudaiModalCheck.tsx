import { Box, Center, Flex, ModalOverlay, Text } from '@chakra-ui/react';
import { NextComponentType } from 'next';
import React from 'react'
import otetudai from '../../../pages/api/otetudai'
import Modalbtn from '../parts/ModalBtn';

const OtetudaiModalCheckChild : NextComponentType = () => {

    const CateArray = otetudai.ArrayList;    
		const colorTheme = () => {
			CateArray.map((e) => {
				if (e.groupName == "キッチン") {
					console.log("キッチン")
				}else if (e.groupName == "リビング") {
					console.log("リビング")
				}else if (e.groupName == "お風呂・トイレ") {
					console.log("お風呂・トイレ")
				}else if (e.groupName == "お洗濯") {
					console.log("お洗濯")
				}else if (e.groupName == "その他") {
					console.log("その他")
				}
			})
		}
		colorTheme()
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
                        gap="52px"
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
                        <Text fontSize={"42px"} fontWeight={"100"} color={"#F25C5C"} textAlign="center"><Box as='span' fontSize={"62px"}>くつならべ</Box>の<br />おてつだいがおわりました</Text>
                        {/* ここからボタン */}
                        <Flex flexFlow={"column"} gap={"16px"}>
                            <Modalbtn borderw={"625px"} w={"615px"} abg={"#27CFBE"} bbg={"#04AFAA"} text={"チェックする"}/>
                            <Modalbtn borderw={"625px"} w={"615px"} abg={"#27CFBE"} bbg={"#04AFAA"} text={"パパ・ママにつたえにいこう！"}/>
                        </Flex>
                        <Flex
                            w={"64px"}
                            h={"64px"}
                            backgroundImage={"./img/backBtn.svg"}
                            position={"absolute"}
                            top={"24px"}
                            right={"24px"}
                            alignItems="center"
                            justifyContent="center"
                            >
                            <Box as='img' src='./img/backBtn_batu.svg' w={"28px"}></Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
    );
}

export default OtetudaiModalCheckChild