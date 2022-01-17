import React from "react"
import styled from "styled-components"
import Content from "components/Content"
import { AboutMeLeft, AboutMeRight } from "components/Content/AboutMe"

import { HacktivVidLeft, HacktivVidRight } from "components/Content/HacktivVid"
import { color } from "config"
import { ImageContent, TitleContent } from "components/Content/TitleImage"
import { baseUrl } from "config"

const Row = styled.div`
  display: flex;
`

const Column = styled(Row)`
  flex-direction: column;
`

const Container = styled(Column)``

export default function Home(props) {
  const gradSubTitle = `Hacktiv8 is a coding bootcamp that transforms beginners into full-stack developers in 16 weeks.\n
  I've completed FullStack JavaScript Immersive program from Hacktiv8, and from there i'm starting to create a website or mobile application for a company or for myself.`

  const workSubtitle = `I have experience in developed and maintained user interface in web and mobile application at my previous company. \n 
  I have a background in Sharia Finance and Banking Management, with internship experience in a couple of financial institution before I shifted my career and started to learn code for my current career.
    `

  const juliSubtitle = `PT. Juli App Indonesia is a tech-based startup focusing on second-hand clothing social marketplace, with a website called Merchaner.\n
    My task is to developed and maintained UI for the web and it mobile application.
    `

  const internSubtitle = `I have internship experiences at Bank Indonesia as central bank of indonesia, Otoritas Jasa Keungan as Financial Authority of Indonesia, and Bank Mega Syariah as Financial Institution.
  `

  const projectSubtitle = `Here the projects that I do as a Front End Developer. \n
    I am developed and managed user interface of the website and it mobile application with my previous team.
  `

  const merchanerSubtitle = `A social marketplace to sell second-hand/preloved clothing with creating a big community for thrift enthusiast to interact with one another easily.`

  const kitadonorSubtitle = `A web application for broadcasting donor needs, to ease up the process of finding donors for those who are looking for blood or plasma donors.`

  return (
    <Container>
      <Content
        id="about"
        transition={null}
        leftBackgroundColor="#F4F4F4"
        rightBackgroundColor="#2b2b2b"
        LeftComponent={AboutMeLeft}
        RightComponent={AboutMeRight}
      />

      <Content
        backgroundColor={"#fff"}
        rightBackgroundImg={`url(${baseUrl}/img/hacktiv36.png)`}
        LeftComponent={() => (
          <TitleContent
            title="I am Hacktiv8 Graduate"
            subTitle={gradSubTitle}
          />
        )}
        RightComponent={() => (
          <ImageContent
            img={`${baseUrl}/img/hacktiv36.png`}
            objectFit="contain"
          />
        )}
      />
      <Content
        transition="content-transition-left"
        backgroundColor={color.orange}
        LeftComponent={HacktivVidLeft}
        RightComponent={HacktivVidRight}
      />
      <Content
        id="experience"
        backgroundColor={"#fff"}
        rightBackgroundImg={`url(${baseUrl}/img/work-exp.png)`}
        LeftComponent={() => (
          <TitleContent title="My Work Experience" subTitle={workSubtitle} />
        )}
        RightComponent={() => (
          <ImageContent img={`${baseUrl}/img/work-exp.png`} />
        )}
      />
      <Content
        transition="content-transition-right"
        backgroundColor={"#f4f4f4"}
        rightBackgroundImg={`url(${baseUrl}/img/merchaner.png)`}
        LeftComponent={() => (
          <TitleContent
            title="Front End Developer at PT Juli App Indonesia"
            backgroundColor="#f4f4f4"
            subTitle={juliSubtitle}
            // linkData={{ title: "See Website", href: "https://merchaner.com" }}
          />
        )}
        RightComponent={() => (
          <ImageContent
            backgroundColor="#f4f4f4"
            img={`${baseUrl}/img/merchaner.png`}
            objectFit="contain"
          />
        )}
      />
      <Content
        transition="content-transition-left"
        rightBackgroundImg={`url(${baseUrl}/img/internship.png)`}
        LeftComponent={() => (
          <TitleContent
            title="Internship at financial institutions"
            subTitle={internSubtitle}
          />
        )}
        RightComponent={() => (
          <ImageContent
            img={`${baseUrl}/img/internship.png`}
            objectFit="contain"
          />
        )}
      />
      <Content
        id="project"
        backgroundColor={"#f4f4f4"}
        leftBackgroundImg={`url(${baseUrl}/img/project.png)`}
        LeftComponent={() => (
          <ImageContent
            img={`${baseUrl}/img/project.png`}
            backgroundColor={"#f4f4f4"}
          />
        )}
        RightComponent={() => (
          <TitleContent
            title="My Latest Project"
            subTitle={projectSubtitle}
            backgroundColor={"#f4f4f4"}
          />
        )}
      />

      <Content
        transition="content-transition-right"
        LeftComponent={() => (
          <ImageContent
            showOnWeb
            wrapperStyle={{ padding: "25%" }}
            img={`${baseUrl}/img/merchaner-logo.png`}
            objectFit="contain"
          />
        )}
        RightComponent={() => (
          <TitleContent
            title="Merchaner"
            subTitle={merchanerSubtitle}
            linkData={{ title: "See Website", href: "https://merchaner.com" }}
          />
        )}
      />

      <Content
        transition="content-transition-left"
        backgroundColor={"#f4f4f4"}
        LeftComponent={() => (
          <ImageContent
            showOnWeb
            wrapperStyle={{ padding: "20%" }}
            img={`${baseUrl}/img/kitadonor-logo.png`}
            objectFit="contain"
            backgroundColor={"#f4f4f4"}
          />
        )}
        RightComponent={() => (
          <TitleContent
            title="KitaDonor"
            subTitle={kitadonorSubtitle}
            backgroundColor={"#f4f4f4"}
            linkData={{ title: "See Website", href: "https://kitadonor.com" }}
          />
        )}
      />
    </Container>
  )
}
