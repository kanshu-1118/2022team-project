import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { NextComponentType } from 'next';
import {useState} from 'react'



interface ModalProps {
    display:string;
    zindex:string;
    opacity:string;
};

const OtetudaiModalPoint = ( props : ModalProps) => {

    const [close,setClose] = useState("Flex")

    const close1 = () => {
        console.log("wowo");
        setClose("none")
    }

    return (
			<Flex
                w={"100vw"}
                h={"100vh"}
                bgColor={"blackAlpha.700"}
                alignItems={"center"}
                justifyContent={"center"}
                opacity={props.opacity}
                zIndex={props.zindex}
                display={close}
                position={"absolute"}
                top="0"
                // transform={"translate(-25%,25%)"}
                // transformOrigin="center"
                >
                <Flex
                    w={"1010px"}
                    h={"656px"}
                    borderRadius={"52px"}
                    bgColor={"#27CFBE"}
                    border={"2px solid #04AFAA"}
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
                        }}
                        >
                        <Flex flexFlow={"column"} alignItems={"center"} gap="8px">
                            <Text fontSize={"46px"} fontWeight={"100"} color={"#04AFAA"} textAlign="center">
                                くつならべ<Box as='span' fontSize={"32px"} paddingLeft="18px">の</Box><br />おてつだいかんりょう！
                            </Text>
                        </Flex>

                        <Box  color="#FFFEF8" position={"relative"} >
                            <Flex position={"absolute"} top="-35px" left={"55px"} w={"405px"} h="64px" bgColor={"#F2B950"} border={"5px solid #fffef8"} borderRadius="16px" alignItems={"center"} justifyContent="center" >
                                <Text fontSize={"32px"} >ポイントゲットだぜ！</Text>
                            </Flex>
                            <Flex w={"520px"} h="196px" bgColor={"#F2B950"} borderRadius={"20px"} alignItems="center" justifyContent={"center"}>
                                <Text fontSize={"132px"} color="#FFFEF8">4<Box as='span' fontSize={"32px"}>ポイント</Box></Text>
                            </Flex>
                        </Box>

                        {/* 閉じるボタン */}
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
                        {/* あしらい等 */}
                        <Box as="img" src="./img/curtainImg.svg" w={"186px"} position="absolute" top={"-1px"} left="26px" ></Box>
                        <Box as="img" src="./img/balloonImg_pink.svg" w={"60px"} position="absolute" top={"145px"} left="32px" ></Box>
                        <Box as="img" src="./img/balloonImg_yellow.svg" w={"72px"} position="absolute"  top={"200px"} left="90px" ></Box>
                        <Box as="img" src="./img/balloonImg_yellow.svg" w={"72px"} position="absolute"  top={"126px"} right="90px" ></Box>
                        <Box as="img" src="./img/balloonImg_green.svg" w={"57px"} position="absolute"  top={"196px"} right="42px" ></Box>
                        <Box as="img" src="./img/crackerImg.svg" w={"110px"} position="absolute" right="40px" bottom="32px" transform={"rotateY(180deg)"} ></Box>
                        <Box as="img" src="./img/crackerImg.svg" w={"110px"} position="absolute" left="40px" bottom="32px" ></Box>
                    </Flex>
                </Flex>
            </Flex>
    );
}

OtetudaiModalPoint.defaultProps ={
    display:"none",
    zindex:"-100",
    opacity:"0"
}

export default OtetudaiModalPoint