import React from "react"
import styled from "styled-components"
import Text from "components/Text"
import { mediumDevice, smallDevice, webContentMaxWidth } from "config"
import Button from "components/Button"

const Row = styled.div`
  display: flex;
`

const Column = styled(Row)`
  flex-direction: column;
`

const Container = styled.section`
  position: relative;
  /* background-color: #a1f3a1; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto calc(-50vw + ${webContentMaxWidth / 2}px);
  padding: 25px 0 50px 0;
  min-height: calc(100vh - 60px);

  &::before {
    filter: brightness(0.5);
    content: " ";
    display: block;
    position: absolute;
    inset: 0;
    opacity: 0.5;
    background-image: ${({ backgroundImg }) =>
      backgroundImg ? backgroundImg : "none"};
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
  }
  @media (max-width: ${webContentMaxWidth}px) {
    margin: 0;
  }
  @media (max-width: ${mediumDevice}px) {
    padding: 25px 20px 50px 20px;
  }
`

const Wrapper = styled(Column)`
  position: relative;
  align-items: center;
  flex: 1;
  justify-content: center;
`

const TitleContainer = styled(Column)`
  align-items: center;
  margin-bottom: 45px;
`

const TitleWrapper = styled(Row)`
  h1 {
    margin-left: 10px;
  }
  svg {
    width: 100px;
  }
  @media (max-width: ${mediumDevice}px) {
    flex-direction: column;
    align-items: center;
    h1 {
      margin: 0;
      margin-top: 10px;
    }
  }

  @media (max-width: ${smallDevice}px) {
    svg {
      width: 60px;
    }
  }
`

const Title = styled.h1`
  text-align: center;
  max-width: 1000px;
  font-size: 96px;
  line-height: 1.1;
  margin: 0;

  @media (max-width: ${mediumDevice}px) {
    font-size: 72px;
  }

  @media (max-width: ${smallDevice}px) {
    font-size: 44px;
  }
`

const SubTitle = styled.h2`
  text-align: center;
  font-size: 30px;
  margin: 0;
  font-weight: normal;
  max-width: 650px;
  margin-top: 45px;
`

const ButtonWrapper = styled(Column)`
  /* margin-top: auto; */
  align-items: center;
`

export default function Hero({ containerStyle, backgroundImg }) {
  return (
    <Container backgroundImg={backgroundImg} style={containerStyle}>
      <Wrapper>
        <TitleContainer>
          <TitleWrapper>
            <Title>LAGUNA</Title>
          </TitleWrapper>

          <SubTitle>
            Green house farming by CV. Santoso Agro and PT Tani Makmur Bareng
          </SubTitle>
        </TitleContainer>

        <ButtonWrapper>
          <a href={"#content-1"}>
            <Button
              text={"Our Products"}
              containerStyle={{
                maxWidth: 210,
                padding: 20,
                borderRadius: 30,
                height: 60,
                backgroundColor: "#219f0a",
              }}
              textStyle={{ fontSize: 24, fontWeight: "normal" }}
            />
          </a>
          <Text style={{ marginTop: 20, fontWeight: 500 }}>
            See our melon crop made from greenhouse
          </Text>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  )
}
