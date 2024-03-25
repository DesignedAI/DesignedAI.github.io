import React from "react";

import { Mobile, PC } from "../MediaQuery";

import { styled } from "styled-components";
import { Div, MainSection } from "../styles/Div";
import { P, FontP } from "../styles/P";

const Video = styled.video`
    position: absolute;
    top: 0px;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const MainDiv = styled(Div)`
    height: 100vh;
    position: relative;
    z-index: 1;
    width: 100vw;
`;

const Main = () => {
    return (
        <>
            <PC>
                <MainSection id="main">
                    <Video autoPlay muted loop>
                        <source src=" /images/background.mp4"></source>
                    </Video>
                    <MainDiv display="flex" $justifyContent="space-evenly" direction="column" $margin="30px 0">
                        <Div display="flex" $padding="20px 25px" $borderRadius="10px">
                            <P fontSize="xl" color="wh" $center fontWeight="500">
                                Artificial Intelligence 
                                <hr></hr>
                                designed by humans for humanity
                            </P>
                        </Div>

                        <Div width="100%">
                            <Div display="flex" width="100%" $margin="0 0 20px 0">
                                <FontP color="blue" fontSize="xxxl" $center fontWeight="800">
                                    DesignedAI
                                </FontP>
                            </Div>
                        </Div>
                        <Div width="100%">
                            <Div display="flex" width="100%" $margin="0 0 20px 0 ">
                                <P color="wh" fontSize="xl" $center fontWeight="400">
                                    Fast and cost-efficient general AI framework
                                </P>
                            </Div>
                            <Div display="flex" width="100%" $margin="0 0 20px 0">
                                <Div $margin="0 10px 0 0 ">
                                    <FontP color="wh" fontSize="xl" $center>
                                        Metep
                                    </FontP>
                                </Div>
                                <Div>
                                    <FontP color="wh" fontSize="xl" $center fontWeight="600">
                                        (Me
                                    </FontP>
                                </Div>
                                <Div>
                                    <FontP color="wh" fontSize="xl" $center>
                                        ta-
                                    </FontP>
                                </Div>
                                <Div>
                                    <FontP color="wh" fontSize="xl" $center fontWeight="600">
                                        Te
                                    </FontP>
                                </Div>
                                <Div $margin="0 10px 0 0">
                                    <FontP color="wh" fontSize="xl" $center>
                                        nsor
                                    </FontP>
                                </Div>
                                <Div>
                                    <FontP color="wh" fontSize="xl" $center fontWeight="600">
                                        P
                                    </FontP>
                                </Div>
                                <Div>
                                    <FontP color="wh" fontSize="xl" $center>
                                        ropagation)
                                    </FontP>
                                </Div>
                            </Div>
                        </Div>
                    </MainDiv>
                </MainSection>
            </PC>
            <Mobile>
                <Div id="main" width="100%" height="100vh">
                    <Video autoPlay muted loop>
                        <source src=" /images/background.mp4"></source>
                    </Video>
                    <MainDiv display="flex" $justifyContent="space-evenly" direction="column" $margin="30px 0">
                        <Div display="flex" $padding="20px 25px" $borderRadius="10px">
                            <P fontSize="sm" color="wh" $center fontWeight="500">
                                Artificial Intelligence 
                                <hr></hr>
                                designed by humans for humanity
                            </P>
                        </Div>
                        <Div width="100%">
                            <Div display="flex" width="100%" $margin="0 0 20px 0">
                                <FontP color="blue" fontSize="sm" $center fontWeight="800">
                                    DesignedAI
                                </FontP>
                            </Div>
                        </Div>
                        <Div width="100%">
                            <Div display="flex" width="100%">
                                <P color="wh" fontSize="xs" $center fontWeight="400" $whitespace="normal">
                                    Fast and cost-efficient general AI framework
                                </P>
                            </Div>
                            <Div display="flex" width="100%" $margin="20px 0">
                                <Div $margin="0 10px 0 0 ">
                                    <FontP color="wh" fontSize="xs" $center>
                                        Metep
                                    </FontP>
                                </Div>
                                <Div>
                                    <FontP color="wh" fontSize="xs" $center fontWeight="600">
                                        (Me
                                    </FontP>
                                </Div>
                                <Div>
                                    <FontP color="wh" fontSize="xs" $center>
                                        ta-
                                    </FontP>
                                </Div>
                                <Div>
                                    <FontP color="wh" fontSize="xs" $center fontWeight="600">
                                        Te
                                    </FontP>
                                </Div>
                                <Div $margin="0 5px 0 0 ">
                                    <FontP color="wh" fontSize="xs" $center>
                                        nsor
                                    </FontP>
                                </Div>
                                <Div>
                                    <FontP color="wh" fontSize="xs" $center fontWeight="600">
                                        P
                                    </FontP>
                                </Div>
                                <Div>
                                    <FontP color="wh" fontSize="xs" $center>
                                        ropagation)
                                    </FontP>
                                </Div>
                            </Div>
                        </Div>
                    </MainDiv>
                </Div>
            </Mobile>
        </>
    );
};

export default Main;
