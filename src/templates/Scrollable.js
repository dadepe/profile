import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { throttle, debounce } from "throttle-debounce"
import Spinner from "components/Spinner"

const Columm = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
`

const Container = styled(Columm)`
  overflow: auto;
  overscroll-behavior: contain;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #d8d8d8;
  }
`

const Wrapper = styled(Columm)`
  position: relative;
`

const LoadingContainer = styled(Row)`
  position: absolute;
  bottom: 20px;
  width: 100%;
`

const Scrollable = ({
  containerStyle,
  wrapperStyle,
  className,
  cb,
  children,
  hasMore = false,
  threshold = 0,
  isLoading,
  showLoading = true,
  customRef,
}) => {
  const containerRef = useRef(null)

  useEffect(() => {
    let ref = customRef || containerRef

    if (ref.current) {
      const handleScroll = throttle(500, () => {
        let el = ref.current

        let calc =
          (el &&
            Math.floor(el.scrollHeight - el.scrollTop - el.clientHeight)) ||
          0

        if (
          el &&
          calc <= (threshold <= 1 ? el.scrollHeight * threshold : threshold) &&
          hasMore &&
          !isLoading
        ) {
          console.log("CB trigger!")
          cb && cb()
        }
      })

      ref.current.addEventListener("scroll", handleScroll, {
        passive: true,
      })
      return () => {
        if (ref.current) {
          ref.current.removeEventListener("scroll", handleScroll)
        }
      }
    }
  })

  return (
    <Container
      className={className}
      ref={customRef || containerRef}
      style={containerStyle}
    >
      <Wrapper style={wrapperStyle}>
        {children}
        {isLoading && showLoading && (
          <LoadingContainer
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Spinner size={20} color={"#008dfd"} />
          </LoadingContainer>
        )}
      </Wrapper>
    </Container>
  )
}

export default Scrollable
