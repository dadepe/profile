import React from "react"
import styled from "styled-components"

const Txt = styled.span`
  white-space: pre-line;
  line-height: 1.5;
`

export default function Text({ children, ...props }) {
  return <Txt {...props}>{children}</Txt>
}
