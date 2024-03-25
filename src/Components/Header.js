import React from "react"
import styled from "styled-components"

import { useNavigate } from "react-router-dom"
import { Mobile, PC } from "../MediaQuery"
import { Div } from "../styles/Div"
import Img from "../styles/Img"
import { P, FontP } from "../styles/P"
import Button from "../styles/Button"

const StyledHeader = styled(Div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100%;
    height: 60px;
    padding: 0 0 0 30px;
`

const StyledHeaderMobile = styled(Div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100%;
    height: 50px;
    padding: 10px;
`

const ContactHeader = () => {
    const navigate = useNavigate()
    const movePage = () => {
        navigate("/")
    }
    const moveContact = () => {
        navigate("/contact")
    }

    return (
        <>
            <PC>
                <StyledHeader $backgroundColor="bk">
                    <Div display="flex" $pointer onClick={movePage}>
                        <Div width="40px" height="40px">
                            <Img src="/images/logo.jpg" $objectFit="fill" />
                        </Div>
                        <Div $padding="0 0 0 30px ">
                            <FontP color="wh" fontSize="lg" fontWeight="800">
                                DesignedAI
                            </FontP>
                        </Div>
                    </Div>
                    <Div
                        display="flex"
                        $pointer
                        $justifyContent="end"
                        width="200px"
                        $padding="0 30px 0 0"
                        onClick={moveContact}
                    >
                        <Button style={{
                            backgroundColor: '#f4f4f4',
                            color: 'bk',
                            padding: '3px 16px',
                            borderRadius: '25px'
                        }}>
                            <P color="black" fontSize="md" fontWeight="600">
                                Contact
                            </P>
                        </Button>
                    </Div>
                </StyledHeader>
            </PC>
            <Mobile>
                <StyledHeaderMobile $backgroundColor="bk">
                    <Div display="flex" $pointer onClick={movePage}>
                        <Div width="20px" height="20px">
                            <Img src="/images/logo.jpg" $objectFit="fill" />
                        </Div>
                        <Div $padding="0 0 0 30px ">
                            <FontP color="wh" fontSize="xs" fontWeight="800">
                                DesignedAI
                            </FontP>
                        </Div>
                    </Div>
                    <Div display="flex" $pointer $justifyContent="end" $padding="0 30px 0 0" onClick={moveContact}>
                        <Button style={{
                            backgroundColor: '#f4f4f4',
                            color: 'bk',
                            padding: '3px 16px',
                            borderRadius: '25px'
                        }}>
                            <P color="bk" fontSize="xs" fontWeight="600">
                                Contact
                            </P>
                        </Button>
                    </Div>
                </StyledHeaderMobile>
            </Mobile>
        </>
    )
}

export default ContactHeader
