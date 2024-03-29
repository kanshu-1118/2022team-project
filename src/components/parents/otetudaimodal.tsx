import { Box, Center, color, Flex, position, Text } from '@chakra-ui/react';
import { NextComponentType, NextPage } from 'next';
import React, { useState } from 'react'
import otetudai from '../../../pages/api/otetudai'
import Modalbtn from '../parts/ModalBtn2';

interface propsType {
    zindex:string
    opacity:string
    setZin:any
    setOpa:any
    setCategoryIndex:any
    setOtetsudaiIndex:any
}

const Otetudaimodal  = (props : propsType ) => {

    const colorarray = otetudai.ArrayList

    const [dis,setDis] = useState("Flex")
    const [after,setAfter] = useState("Flex")
    const [textdis,setTextdis] = useState("none")
    
    if(after == textdis){
        setTextdis("flex")
    }

    const backClick = () => {
        props.setZin("-10")
        props.setOpa("0")
    }

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
                position="absolute"
                top={"0"}
                zIndex={props.zindex}
                opacity={props.opacity}
                transition=" 0.2s ease"
                display={dis}
                >
                <Flex
                    w={"812px"}
                    h={"515px"}
                    borderRadius={"52px"}
                    bgColor={`${colorarray[props.setCategoryIndex].color.map((en) => en.main)}`}
                    border={`2px solid ${colorarray[props.setCategoryIndex].color.map((en) => en.sub)}`}
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
                        boxShadow={`2px 6px 0px ${colorarray[props.setCategoryIndex].color.map((en) => en.sub)}`}
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
                            boxShadow:"-2px 6px 0px ${colorarray[props.setCategoryIndex].color.map((en) => en.sub)}",
                            zIndex:"-1",
                        }}
                        >
                        <Text fontSize={"60px"} fontWeight={"100"} color={`${colorarray[props.setCategoryIndex].color.map((en) => en.sub)}`}>{colorarray[props.setCategoryIndex].categoryAbout[props.setOtetsudaiIndex].categoryName}</Text>
                        <Flex padding={"8px 0 42px 0"} gap={"5px"} flexFlow={"column"} alignItems={"center"}>
                            <Box as='img' src={colorarray[props.setCategoryIndex].categoryAbout[props.setOtetsudaiIndex].categoryStar} alt="スター1個" w={"143px"} />
                            <Text fontSize={"18px"} fontWeight={"light"} color={`${colorarray[props.setCategoryIndex].color.map((en) => en.main)}`}>（おすすめ年齢：3歳〜）</Text>
                        </Flex>
                        {/* ここからボタン */}
                        <Flex 
                            // bgColor={"#826AD9"}
                            w={"495px"}
                            h={"108px"}
                            border={"4px solid #fff"}
                            borderRadius={"100px"}
                            // boxShadow={"0px 6px 0px rgba(211,211,211,1)"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            >
                                {/* <Box
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
                                        bgColor:`${colorarray[props.setCategoryIndex].color.map((en) => en.main)}`,
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
                                        bgColor:`${colorarray[props.setCategoryIndex].color.map((en) => en.sub)}`,
                                        display:"block",
                                        opacity:"1",
                                        zIndex:"-1",
                                    }}
                                    >
                                    <Box as={"img"} src="./img/btn_ilust.svg" zIndex={"100"} position={"absolute"} top={"13px"} left={"13px"}></Box>
                                    <Text fontSize={"36px"} color={"#fffffb"}>おてつだいに設定する</Text>
                                </Box> */}
                            <Modalbtn borderw={"625px"} w={"495px"} abg={`${colorarray[props.setCategoryIndex].color.map((en) => en.main)}`} bbg={`${colorarray[props.setCategoryIndex].color.map((en) => en.sub)}`} text="お手伝いに設定する" setAfter={setAfter} display={after} />
                            <Text display={textdis} fontSize={"40px"} color={`${colorarray[props.setCategoryIndex].color.map((en) => en.sub)}`  }>お手伝いに設定しました！</Text>
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
                            onClick={backClick}
                            >
                            <Box as='img' src='./img/backBtn_batu.svg' w={"28px"}></Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
    );
}

Otetudaimodal.defaultProps ={
    zindex:"-100",
    opacity:"0"
}

export default Otetudaimodal