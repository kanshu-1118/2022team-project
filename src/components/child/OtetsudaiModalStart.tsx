import { Box, Center, Flex, ModalOverlay, Text } from '@chakra-ui/react';
import { NextComponentType } from 'next';
import React, { use, useState } from 'react'
import otetudai from '../../../pages/api/otetudai'
import Modalbtn from '../parts/ModalBtn';
import OtetudaiModalPoint from './OtetsudaiModalPoint';

const OtetudaiModalStartChild : NextComponentType = () => {

    const CateArray = otetudai.ArrayList;    
    const [abgcolor1,setAbgcolor1] = useState("#FDADB6")
    const [abgcolor2,setAbgcolor2] = useState("#e8e8e8")
    const [bbgcolor1,setBbgcolor1] = useState("#ED4076")
    const [bbgcolor2,setBbgcolor2] = useState("blackAlpha.700")
    const [switchsymbol,setSwitchsymbol] = useState("notstart")
    const [opalevel,setOpalevel] = useState("1")
    const [dis,setDis] = useState("-100")
    const [zindex,setZindex] = useState("0")
    const [opa,setOpa] = useState("0")
    const [btnText,setBtnText] = useState("はじめる！")

    const otetudaiseries = () => {
        setAbgcolor1("#e8e8e8")
        setBbgcolor1("blackAlpha.700")
        setAbgcolor2("#FDB9B9")
        setBbgcolor2("#EA4242")
        setSwitchsymbol("start")
        setBtnText("おてつだいちゅう")
        console.log(switchsymbol);
    }
    const otetudaikanryou = () => {
        if (switchsymbol == "start") {
            console.log("閉じる");
            setDis("10")
            setZindex("-100")
            setOpa("1")
            setClose("none")
        }
    }

    const [close,setClose] = useState("Flex")

    const close1 = () => {
        console.log("wowo");
        setClose("none")
    }

    return (
            <Box>
                <Flex
                    w={"100vw"}
                    h={"100vh"}
                    bgColor={"blackAlpha.700"}
                    alignItems={"center"}
                    zIndex={zindex}
                    justifyContent={"center"}
                    display={close}
                    >
                    <Flex
                        w={"1010px"}
                        h={"671px"}
                        borderRadius={"52px"}
                        bgColor={"#27CFBE"}
                        border={"2px solid #04AFAA"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        >
                        <Flex
                            w={"972px"}
                            h={"624px"}
                            borderRadius={"34px"}
                            bgColor={"#FFFEF8"}
                            flexFlow={'column'}
                            alignItems={"center"}
                            justifyContent={"center"}
                            gap="16px"
                            boxShadow={"2px 6px 0px rgba(4,175,170,1)"}
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
                                boxShadow:"-2px 6px 0px rgba(4,175,170,1)",
                                zIndex:"-1",
                            }}>
                            <Flex flexFlow={"column"} alignItems="center" justifyContent={"center"} gap="24px" >
                                <Flex alignItems={"center"} gap="24px">
                                    <Flex w="101px" h="101px" borderRadius={"100px"} bg="#27CFBE" alignItems={"center"} justifyContent="center" ><Box as="img" src='./img/icon_living.svg' w={"70px"}></Box></Flex>
                                    <Text fontSize={"46px"} fontWeight={"100"} color={"#04AFAA"}>おもちゃをかたずける</Text>
                                </Flex>
                                <Text fontSize={"34px"} fontWeight={"100"} color={"#04AFAA"} textAlign="center">おもちゃをかたづけておへやをきれいにしよう！</Text>
                                <Flex bgColor={"#27CFBE"} w="714px" h="152px" borderRadius={"20px"}  alignItems="center" justifyContent={"center"}>
                                    <Text fontSize={"26px"} color="#FFFFFF" textAlign={"center"} lineHeight="40px">
                                        ヒント<br/>
                                        ①おもちゃをもとのばしょにかたづけよう！<br/>
                                        ②おもちゃがこわれないようにやさしくかたづけよう！
                                    </Text>
                                </Flex>
                            </Flex>
                            {/* ここからボタン */}
                            <Flex flexFlow={"column"} gap={"16px"}>
                                <Modalbtn fs={"38px"} borderw={"384px"} w={"374px"} borderh={"95px"} h={"85px"} abg={abgcolor1} bbg={bbgcolor1} text={btnText} click={otetudaiseries}/>
                                <Modalbtn fs={"38px"} borderw={"384px"} w={"374px"} borderh={"95px"} h={"85px"} abg={abgcolor2} bbg={bbgcolor2} text={"おわったよ!"} click={otetudaikanryou}/>
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
                                onClick={close1}
                                >
                                <Box as='img' src='./img/backBtn_batu.svg' w={"28px"}></Box>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <OtetudaiModalPoint display={"Flex"} zindex={dis} opacity={opa} />
            </Box>
    );
}


export default OtetudaiModalStartChild