import React from "react"

import styled from "styled-components"
import Text from "components/Text"
import { color, mediumDevice, smallDevice, webContentMaxWidth } from "config"
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Row = styled.div`
  display: flex;
`

const Column = styled(Row)`
  flex-direction: column;
`

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  border-top: thin solid #c7c7c7;
  padding-top: 100px;
  margin-bottom: 140px;
  @media (max-width: ${mediumDevice}px) {
    padding-top: 50px;
  }
`

const ContainerWrapper = styled(Row)`
  width: 100%;
  max-width: ${webContentMaxWidth}px;
  margin: auto;
  padding: 0 20px;
  @media (max-width: ${mediumDevice}px) {
    flex-direction: column;
  }
`

const LeftContent = styled(Row)`
  flex: 7;
  @media (max-width: ${mediumDevice}px) {
    width: 100%;
  }
`

const LeftWrapper = styled(Row)`
  width: 100%;
  @media (max-width: ${mediumDevice}px) {
    flex-direction: column;
    &:last-child {
      margin-top: 50px;
    }
    &:first-child {
      margin-top: 0;
    }
  }
`

const LeftRow = styled(Row)`
  width: inherit;
  @media (max-width: ${mediumDevice}px) {
    &:last-child {
      margin-top: 50px;
    }
    &:first-child {
      margin-top: 0;
    }
  }
`

const RightContent = styled(Column)`
  flex: 3;
  margin: 0 30px;
  @media (max-width: ${mediumDevice}px) {
    margin-top: 50px;
    margin-left: 0;
    margin-right: 0;
  }
`

const NormalText = styled(Text)`
  line-height: 2;
  font-size: 20px;
  @media (max-width: ${mediumDevice}px) {
    line-height: 1.5;
  }
`

const SmallText = styled(NormalText)`
  font-size: 16px;
  line-height: 1.5;
`

const ListContainer = styled(Column)`
  flex: 1;
  margin-right: 50px;
  @media (max-width: ${mediumDevice}px) {
    margin: 0;
  }
`

const Contact = styled(Column)`
  margin-bottom: 10px;
  line-height: 2;
  & > div {
    margin-bottom: 5px;
  }

  span {
    &:first-child {
      margin-bottom: 8px;
      font-weight: 500;
    }
  }
`

const ListContent = ({ containerStyle, title, options }) => {
  return (
    <ListContainer style={containerStyle}>
      {title && (
        <NormalText style={{ fontWeight: 500, marginBottom: 25 }}>
          {title}
        </NormalText>
      )}
      {options.map((option, i) => (
        <a
          style={{ marginBottom: 15, cursor: "pointer" }}
          key={i}
          href={option.href}
        >
          <SmallText style={{ fontWeight: 500 }}>{option.title}</SmallText>
        </a>
      ))}
    </ListContainer>
  )
}

export default function Footer({ containerStyle }) {
  const d = new Date()
  const year = d.getFullYear()

  const options = [
    { title: "About", href: "#about" },
    { title: "Experience", href: "#experience" },
    { title: "Project", href: "#project" },
  ]

  return (
    <Container id="contact" style={containerStyle}>
      <ContainerWrapper>
        <LeftContent>
          <LeftWrapper>
            <LeftRow>
              <ListContent options={options} />
            </LeftRow>
          </LeftWrapper>
        </LeftContent>
        <RightContent>
          <Contact>
            <SmallText>CONTACT</SmallText>

            <Row style={{ alignItems: "center" }}>
              <FaPhoneAlt size={16} />
              <SmallText style={{ marginLeft: 5 }}> +6282122758425</SmallText>
            </Row>
            <Row style={{ alignItems: "center" }}>
              <MdEmail size={20} />
              <SmallText style={{ marginLeft: 5 }}>
                rizky_dwifutra@yahoo.com
              </SmallText>
            </Row>
          </Contact>

          <Row style={{ alignItems: "center" }}>
            <FaLinkedin size={20} />
            <a
              href="https://id.linkedin.com/in/rizky-dwiputra-a94a10172"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SmallText style={{ marginLeft: 5, fontWeight: 500 }}>
                Rizky Dwiputra
              </SmallText>
            </a>
          </Row>
          <SmallText style={{ lineHeight: 2, marginTop: 20 }}>
            © {year} Rizky Dwiputra
          </SmallText>
        </RightContent>
      </ContainerWrapper>
    </Container>
  )
}
