import React, { useRef, useState, useEffect, forwardRef } from "react"
import styled from "styled-components"
import { mediumDevice, webContentMaxWidth } from "config"
import { throttle } from "throttle-debounce"
import { CSSTransition } from "react-transition-group"

const Row = styled.div`
  display: flex;
`

const Column = styled(Row)`
  flex-direction: column;
`

const Container = styled.section`
  display: flex;
  margin: auto calc(-50vw + ${webContentMaxWidth / 2}px);
  min-height: ${({ isShown }) => (!isShown ? "500px" : "0")};
  @media (max-width: ${webContentMaxWidth}px) {
    margin: 0;
  }
`

const Wrapper = styled(Row)`
  flex: 1;
  justify-content: center;
  position: relative;
`

const LeftBackground = styled.div`
  position: absolute;
  background-position: 50%;
  background-color: ${({ leftBackgroundColor }) =>
    leftBackgroundColor ? leftBackgroundColor : "tranparent"};
  inset: 0;
  right: 50%;
  z-index: -1;
  background-size: cover;
`

const RightBackground = styled.div`
  background-size: cover;
  position: absolute;
  background-position: 50%;
  background-color: ${({ rightBackgroundColor }) =>
    rightBackgroundColor ? rightBackgroundColor : "tranparent"};
  inset: 0;
  left: 50%;
  z-index: -1;
`

const ContentContainer = styled(Column)`
  flex: 1;
  max-width: ${webContentMaxWidth}px;
`

const ContentWrapper = styled(Row)`
  flex: 1;
  @media (max-width: ${mediumDevice}px) {
    flex-direction: column;
  }
`

export default function Content({
  id = null,
  transition = "content-transition",
  containerStyle,
  wrapperStyle,
  HeaderComponent,
  Component,
  LeftComponent,
  RightComponent,
  backgroundColor,
  leftBackgroundColor,
  leftBackgroundImg,
  rightBackgroundColor,
  rightBackgroundImg,
}) {
  const contentRef = useRef(null)
  const transitionRef = useRef(null)
  const [isShown, setIsShown] = useState(false)

  const isInViewport = throttle(500, () => {
    if (!contentRef.current && transition) return
    const top = contentRef.current.getBoundingClientRect().top
    const bottom = contentRef.current?.getBoundingClientRect().bottom
    // Only completely visible elements return true:
    // const isVisible = (top >= 0) && (bottom <= window.innerHeight);
    // Partially visible elements return true:
    const isVisible = top < window.innerHeight && bottom >= 0

    if (isVisible) {
      if (!isShown) {
        setIsShown(true)
        // console.log("Element is in view or above the viewport")
      }
    }
    // else {
    //   if (isShown) {
    //     setIsShown(false)
    //     console.log("Element is outside view")
    //   }
    // }
  })

  useEffect(() => {
    document.addEventListener("scroll", isInViewport)
    return () => {
      document.removeEventListener("scroll", isInViewport)
    }
  })

  useEffect(() => {
    isInViewport()
  }, [])

  const Content = forwardRef(({ ...props }, ref) => {
    return (
      <Wrapper ref={ref} style={wrapperStyle}>
        <LeftBackground
          style={
            leftBackgroundImg ? { backgroundImage: leftBackgroundImg } : {}
          }
          leftBackgroundColor={backgroundColor || leftBackgroundColor}
        />
        <RightBackground
          style={
            rightBackgroundImg ? { backgroundImage: rightBackgroundImg } : {}
          }
          rightBackgroundColor={backgroundColor || rightBackgroundColor}
        />
        <ContentContainer>
          {HeaderComponent && <HeaderComponent />}
          <ContentWrapper>
            {Component && <Component />}
            {LeftComponent && <LeftComponent />}
            {RightComponent && <RightComponent />}
          </ContentWrapper>
        </ContentContainer>
      </Wrapper>
    )
  })

  return (
    <Container
      id={id}
      ref={contentRef}
      style={containerStyle}
      isShown={transition && isShown}
    >
      {transition ? (
        <CSSTransition
          nodeRef={transitionRef}
          in={isShown}
          timeout={5000}
          classNames={transition}
          unmountOnExit
        >
          <Content ref={transitionRef} />
        </CSSTransition>
      ) : (
        <Content ref={transitionRef} />
      )}
    </Container>
  )
}
