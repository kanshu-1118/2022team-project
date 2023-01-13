import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { NextComponentType } from 'next';
import React from 'react'
import otetudai from '../types/otetudai'

const OtetudaiModalStanp : NextComponentType = () => {

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
                        // gap="52px"
                        boxShadow={"2px 6px 0px rgba(234,66,66,1)"}
                        position={"relative"}
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
                            zIndex:"1",
                        }}
                        >
                        <Text fontSize={"60px"} fontWeight={"100"} color={"#F25C5C"}>くつならべ</Text>
                        <Flex padding={"8px 0 42px 0"} gap={"5px"} flexFlow={"column"} alignItems={"center"}>
                            <Text fontSize={"18px"} fontWeight={"light"} color={"#F25C5C"}>確認スタンプを押してください</Text>
                            <Flex>
                                <Box bgColor={"#FFF5DB"} ></Box>
                            </Flex>
                        </Flex>
                        {/* ここからボタン */}
                        <Flex 
                            // bgColor={"#826AD9"}
                            w={"495px"}
                            h={"108px"}
                            border={"4px solid #fff"}
                            borderRadius={"100px"}
                            boxShadow={"0px 6px 0px rgba(211,211,211,1)"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            >
                            <Box
                                w={"495px"}
                                h={"100px"}
                                borderRadius={"100px"}
                                // bgColor={'blackAlpha.500'}
                                position={"relative"}
                                overflow={"hidden"}
                                zIndex={"0"}
                                display={"flex"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                _after={{
                                    content:`""`,
                                    position:"absolute",
                                    borderRadius:"100px",
                                    top:"-1",
                                    left:"-1",
                                    w:"100%",
                                    h:"100%",
                                    bgColor:"#36C8D9",
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
                                    bgColor:"#049DD9",
                                    display:"block",
                                    opacity:"1",
                                    zIndex:"-1",
                                }}
                                >
                                <Box as={"img"} src="./img/btn_ilust.svg" zIndex={"100"} position={"absolute"} top={"13px"} left={"13px"}></Box>
                                <Text fontSize={"36px"} color={"#fffffb"}>確認スタンプを押す</Text>
                            </Box>
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

export default OtetudaiModalStanp