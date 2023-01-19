import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { NextComponentType, NextPage } from 'next';
import React from 'react'
import otetudai from './api/otetudai'

const OtetudaiArray : NextPage = () => {

    const CateArray = otetudai.ArrayList;
    console.log(CateArray.length);
    console.log(CateArray);
    console.log(CateArray);
    
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
			<Box
				overflowX={"scroll"}
				css={{
					'&::-webkit-scrollbar': {
						display:"none",
					},
				}}
				
				>
				<Box w={(320+60)*CateArray.length} p={"40px"}>
					<Flex as="ul"	gap={"48px"} justifyContent={"center"}>
						{CateArray.map((e,i) => 
							<Flex
								as='li'
								key={i}
								flexFlow={"column"}
								gap={"32px"}
								>
								<Flex
									w={"320px"}
									h={"64px"}
									alignItems={"center"}
									justifyContent={"center"}
									bgColor={"#433c2e"}
									borderRadius={"8px"}
									border={"4px solid #fff"}
									>
									<Text color={"#fff"} fontSize={"32px"}>{e.groupName}</Text>
								</Flex>
								<Flex as='ul' h={80 * e.categoryAbout.length + 96} flexFlow={"column"} gap={"16px"}  overflowY={"scroll"}>
									{e.categoryAbout.map((ex,i) => 
										<Flex 
											as="li"
											w={"320px"}
											h={"80px"}
											key={i}
											bgColor={"#FCFBF7"}
											border={`4px solid #F29A2E`}
											borderRadius={"20px"}
											alignItems={"center"}
											gap={"8px"}
											padding={"0 16px"}
											position={"relative"}
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
												zIndex:"1",
											}}
											>
											<Center w={"50px"} h={"50px"} bgColor={"#F2B950"} borderRadius={"50px"} zIndex={2}>
												<Box objectFit={"cover"} as='img' src={ex.categoryImg} alt="キッチン" />
											</Center>
											<Text whiteSpace={"pre-wrap"} color={"#F29A2E"} fontSize={"24px"} fontWeight={"200"} lineHeight={"28px"} zIndex={2}>{ex.categoryName}</Text>
											<Flex as="img" src={ex.categoryStar} alt="星" marginLeft={"auto"} zIndex={2}></Flex>
										</Flex>
									)}
								</Flex>
							</Flex>
						)}
					</Flex>
				</Box>
			</Box>
    );
}

export default OtetudaiArray