import React from 'react'
import {
  EducationContainer,
  EducationCard,
  EducationH1,
  EducationH2,
  EducationIcon,
  EducationIcon2,
  EducationIcon3,
  EducationP,
  EducationWrapper
} from './AchievementElements'
import Game from './Game.jpg'
import student from './student.jpg'
import a1339 from './a1339.png' ;
import a025 from './a025.png' ;

const Education = () => {
  return (
    <EducationContainer>
      <EducationH1>Experiences</EducationH1>
      <EducationWrapper>

        <EducationCard>
          <EducationIcon src={student} />
          <EducationH2>Student council</EducationH2>
          <EducationP>Prince of Songkla University Phuket Campus</EducationP>
          <EducationP>2018</EducationP>
        </EducationCard>
        <EducationCard>
          <EducationIcon src={Game} />
          <EducationH2>Showcase 2020</EducationH2>
          <EducationP>Prince of Songkla University Phuket Campus</EducationP>
          <EducationP>2020</EducationP>
        </EducationCard>
        <EducationCard>
        <EducationIcon3 src={a025} />
          <EducationIcon2 src={a1339} />
          <EducationIcon3 src={a025} />
          <EducationH2>National Software Contest 23</EducationH2>
          <EducationP>Project pass the qualify</EducationP>
          <EducationP>2021</EducationP>
        </EducationCard>
      </EducationWrapper>
    </EducationContainer>
  )
}

export default Education
