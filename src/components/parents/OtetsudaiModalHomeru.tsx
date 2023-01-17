import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { NextComponentType } from 'next';
import React from 'react'
import otetudai from '../../../pages/api/otetudai'

const OtetudaiModalHomeru : NextComponentType = () => {

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
                        <Flex flexFlow={"column"} alignItems={"center"} gap="16px">
                            <Text color={"#F25C5C"} fontSize ={"40px"}>ののかちゃんの</Text>
                            <Text fontSize={"81px"} fontWeight={"100"} color={"#F25C5C"} textAlign="center" lineHeight={"100px"}>
                                くつならべ<Box as='span' fontSize={"56px"} paddingLeft="18px">の</Box><br />お手伝い完了！
                            </Text>
                            <Text color={"#F25C5C"} fontSize ={"40px"}>たくさん褒めてあげてください！</Text>
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
                        {/* あしらい等 */}
                        <Box as="img" src="./img/curtainImg.svg" w={"186px"} position="absolute" top={"-1px"} left="26px" ></Box>
                        <Box as="img" src="./img/balloonImg_pink.svg" w={"60px"} position="absolute" top={"200px"} left="32px" ></Box>
                        <Box as="img" src="./img/balloonImg_yellow.svg" w={"72px"} position="absolute"  top={"266px"} left="90px" ></Box>
                        <Box as="img" src="./img/balloonImg_yellow.svg" w={"72px"} position="absolute"  top={"126px"} right="90px" ></Box>
                        <Box as="img" src="./img/balloonImg_green.svg" w={"57px"} position="absolute"  top={"196px"} right="42px" ></Box>
                        <Box as="img" src="./img/crackerImg.svg" w={"110px"} position="absolute" right="40px" bottom="32px" transform={"rotateY(180deg)"} ></Box>
                        <Box as="img" src="./img/crackerImg.svg" w={"110px"} position="absolute" left="40px" bottom="32px" ></Box>
                    </Flex>
                </Flex>
            </Flex>
    );
}

export default OtetudaiModalHomeru