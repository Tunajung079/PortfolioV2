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
import a12 from './a12.png'

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <ImgWrap>
                <img src={a12} alt=' ' width='385' height='385' />
              </ImgWrap>
            </Column1>
            <Column2>
              <TextWrapper>
                <TopLine>HI ,I AM</TopLine>
                <Heading>NICHAKAN JAISAKSERN</Heading>
                <Subtitle>Computer Engineering</Subtitle>
                <Subtitle>
                  I am a Computer Engineering with holistic knowledge of
                  developing and design Website. I am also experienced in a
                  project about programming.I always loved to learn technology.
                  and I love creative, design, problem analysis.
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
