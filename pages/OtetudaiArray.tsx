import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { NextComponentType, NextPage } from 'next';
import React, { useState } from 'react'
import NextLink from 'next/link';
import otetudai from './api/otetudai'
import Modal from "../src/components/parents/otetudaimodal"

const OtetudaiArray : NextPage = () => {

    const CateArray = otetudai.ArrayList;
    
		// const colorTheme = () => {
		// 	CateArray.map((e) => {
		// 		if (e.groupName == "キッチン") {
		// 			console.log("キッチン")
		// 		}else if (e.groupName == "リビング") {
		// 			console.log("リビング")
		// 		}else if (e.groupName == "お風呂・トイレ") {
		// 			console.log("お風呂・トイレ")
		// 		}else if (e.groupName == "お洗濯") {
		// 			console.log("お洗濯")
		// 		}else if (e.groupName == "その他") {
		// 			console.log("その他")
		// 		}
		// 	})
		// }
		// colorTheme()

		const [zin,setZin] = useState("-10")
		const [opa,setOpa] = useState("0")
		const [categoryIndex,setCategoryIndex] = useState(0)
		const [otetsudaiIndex,setOtetsudaiIndex] = useState(0)

		const btnClick = (ev : any,categoryIndex:number,otetsudaiIndex:number) => {
			setZin("10")
			setOpa("1")
			console.log(categoryIndex);
			console.log(otetsudaiIndex);
			setCategoryIndex(categoryIndex);
			setOtetsudaiIndex(otetsudaiIndex);
			// setTimeout(() =>{
			// 	setZin("-10")
			// 	setOpa("0")
			// },1000)
		}

    return (
		<Box
			minWidth="100vw"
			minHeight="100vh"
			bg="url('img/bg.png')"
			bgSize="cover"
			bgPosition="center bottom"
			overflow={"hidden"}
			>
			<Flex w="100vw"  justifyContent={"space-between"} padding=" 32px 32px 24px 32px">
				<NextLink href={`./parents`} passHref>
					<Box as="img" src="./img/backImg.svg" w="111px" />
				</NextLink>
				<Box as="img" src="./img/pageTitle.svg" w="258px" />
				<Box as="img" src="./img/helpImg.svg" w="36px" />
			</Flex>
			<Box
				overflow={"hidden"}
				overflowX={"scroll"}
				css={{
					'&::-webkit-scrollbar': {
						display:"none",
					},
				}}
				
				>
				<Box w={(343+60)*CateArray.length} >
					<Flex as="ul" gap={"48px"} justifyContent={"center"}>
						{CateArray.map((e,index) => 
							<Flex
								as='li'
								key={index}
								flexFlow={"column"}
								gap={"26px"}
								// padding="0 32px"
								>
								<Flex
									w={"343px"}
									h={"111px"}
									alignItems={"center"}
									justifyContent={"center"}
									// bgColor={"#433c2e"}
									borderRadius={"8px"}
									// border={"4px solid #fff"}
									bgImage={e.img}
									bgPosition="center"
									bgRepeat={"no-repeat"}
									>
									{/* <Text color={"#fff"} fontSize={"32px"}>{e.groupName}</Text> */}
								</Flex>
								<Flex as='ul' h={"560px"} flexFlow={"column"} alignItems="center" gap={"16px"}  overflowY={"scroll"}
									css={{
									'&::-webkit-scrollbar': {
										display:"none",
									},
									}}>
									{e.categoryAbout.map((ex,childindex) =>									
										<Flex
											as="li"
											w={"320px"}
											minH={"80px"}
											key={childindex}
											bgColor={"#FCFBF7"}
											border={`4px solid ${e.color.map((en) => en.main)}`}
											borderRadius={"20px"}
											alignItems={"center"}
											gap={"8px"}
											padding={"0 16px"}
											position={"relative"}
											onClick={(ev)=>btnClick(ev,index,childindex)}
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
											<Center w={"50px"} h={"50px"} bgColor={`${e.color.map((en) => en.main)}`} borderRadius={"50px"} zIndex={0}>
												<Box objectFit={"cover"} as='img' src={ex.categoryImg} alt="キッチン" />
											</Center>
											<Text whiteSpace={"pre-wrap"} color={`${e.color.map((en) => en.sub)}`} fontSize={"24px"} fontWeight={"200"} lineHeight={"28px"} zIndex={0}>{ex.categoryName}</Text>
											<Flex as="img" src={ex.categoryStar} alt="星" marginLeft={"auto"} zIndex={0}></Flex>
										</Flex>
									)}
								</Flex>
							</Flex>
						)}
					</Flex>
				</Box>
			</Box>
			<Modal zindex={zin} opacity={opa} setZin={setZin} setOpa={setOpa} setCategoryIndex={categoryIndex} setOtetsudaiIndex={otetsudaiIndex} />
		</Box>
    );
}

export default OtetudaiArray