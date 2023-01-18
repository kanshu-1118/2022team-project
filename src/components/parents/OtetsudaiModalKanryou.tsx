import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { NextComponentType } from 'next';
import React from 'react'
import otetudai from '../../../pages/api/otetudai'

const OtetudaiModalKanryou : NextComponentType = () => {

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
                    w={"812px"}
                    h={"515px"}
                    borderRadius={"52px"}
                    bgColor={"#826AD9"}
                    border={"2px solid #6148BE"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    >
                    <Flex
                        w={"774px"}
                        h={"468px"}
                        borderRadius={"34px"}
                        bgColor={"#FFFEF8"}
                        flexFlow={'column'}
                        alignItems={"center"}
                        justifyContent={"center"}
                        boxShadow={"2px 6px 0px rgba(97,72,190,1)"}
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
                            boxShadow:"-2px 6px 0px rgba(97,72,190,1)",
                            zIndex:"-1",
                        }}
                        >
                        <Text fontSize={"60px"} fontWeight={"100"} color={"#6148BE"}>くつならべ</Text>
                        <Flex padding={"8px 0 42px 0"} gap={"5px"} flexFlow={"column"} alignItems={"center"}>
                            <Box as='img' src='./img/1star.svg' alt="スター1個" w={"143px"} />
                            <Text fontSize={"18px"} fontWeight={"light"} color={"#826AD9"}>（おすすめ年齢：3歳〜）</Text>
                        </Flex>
                        {/* ここからボタン */}
                        <Flex 
                            // bgColor={"#826AD9"}
                            w={"495px"}
                            h={"108px"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            >
                                
                                <Text fontSize={"36px"} color={"#826AD9"}>おてつだいに設定しました！</Text>
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

export default OtetudaiModalKanryou