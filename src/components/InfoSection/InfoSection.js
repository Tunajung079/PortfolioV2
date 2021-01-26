import React from 'react'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap
} from './InfoSectionElements'
import me2 from './me2.png'

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <ImgWrap>
                <img src={me2} alt=" " width='385' height='585' />
              </ImgWrap>
            </Column1>
            <Column2>
              <TextWrapper>
                <TopLine>HI , I AM</TopLine>
                <Heading>NICHAKAN JAISAKSERN</Heading>
                <Subtitle>Computer Engineering</Subtitle>
                <Subtitle>
                  When I was young, I bought my first computer when I was 10
                  years old, and it was a starting point for me to become
                  fascinated by the technology that's evolving, so I always
                  loved to learn technology. and I love creative, design,
                  problem analysis.
                </Subtitle>
              </TextWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
