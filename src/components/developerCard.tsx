import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons"

type Props = {
  developerName: string
  initials: string
  image: string
  summaryDeveloper: string
  skillsList: string[]
  webPage?: string
  twitter?: string
  github?: string
  linkedin?: string
}

const CardDiv = styled.div`
  margin-bottom: 1rem !important;
  border: 0 !important;
  border-radius: 0.5rem;
  box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.03);
  -webkit-transition: transform 375ms ease-in-out, box-shadow 375ms ease-out;
  transition: transform 375ms ease-in-out, box-shadow 375ms ease-out;
  width: 26%;

  &:hover {
    transform: scale(1.05);
    z-index: 1000;
    background-color: #fff;
    box-shadow: 0 0 20px -2px rgba(0, 0, 0, 0.3);
  }
`

const PhotoDiv = styled.div`
  height: 100% !important;
`

const Photo = styled.img`
  border-top-left-radius: calc(0.5rem - 1px);
  border-top-right-radius: calc(0.5rem - 1px);
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  transition: all 375ms ease-in-out;
  width: 100%;
  height: 15vw;
  object-fit: cover;
  object-position: 0 -10px;
  &:hover {
    -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
    filter: grayscale(0%);
  }
`
const CardContent = styled.div`
  padding: 4%;
`

const NameRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3px;
  margin-top: -1.5rem;
`

const InitialName = styled.h6`
  position: relative;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  font-size: 1rem;
  font-weight: bold;
  height: 3.125rem;
  width: 3.125rem;
  border-radius: 0.375rem;
`
const CicleContainer = styled.div`
  border-radius: 50%;
  height: 3.125rem;
  width: 3.145rem;
  background-color: #343a40;
  margin-right: 1em;
`

const Name = styled.h6`
  font-size: 1rem;
`

const InfoSkill = styled.section`
  margin: 0.3rem 0;
  height: 35px;
  overflow: hidden;

  &:hover {
    overflow: auto;
  }
  &::-webkit-scrollbar {
    height: 4px;
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  %::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`

const InfoSpace = styled.div`
  display: flex;
  overflow: hidden;
  scrollbar-width: thin;
  padding: 0.2rem;

  &:hover {
    overflow: auto;
  }
  &::-webkit-scrollbar {
    height: 4px;
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  %::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`
const BadgeSkill = styled.div`
  height: 20px;
  background-color: #343a40;
  display: inline-block;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 10rem;
  color: #fff;
  padding: 6px;
  margin-right: 2px;
`
const Skill = styled.span``

const SummaryDiv = styled.div`
  height: 100px;
  display: flex;
  font-size: 75%
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  scrollbar-width: thin;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace !important;
  &:hover {
    overflow: auto;
  }
  &::-webkit-scrollbar {
    height: 4px;
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  %::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`
const Summary = styled.p`
font-size: 80%
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace !important;
`

const SocialNetworks = styled.div`
  font-size: x-large;
`

const Media = styled.a`
  color: #343a40;
  margin-right: 3px;
`

const DeveloperCard: React.FC<Props> = ({
  developerName,
  initials,
  image,
  skillsList,
  summaryDeveloper,
  webPage,
  github,
  twitter,
  linkedin,
}) => {
  return (
    <CardDiv>
      <PhotoDiv>
        <Photo src={image} />
      </PhotoDiv>
      <CardContent>
        <NameRow>
          <CicleContainer>
            <InitialName>{initials}</InitialName>
          </CicleContainer>
          <Name>{developerName}</Name>
        </NameRow>

        <InfoSkill>
          <InfoSpace>
            {skillsList.map(skill => (
              <BadgeSkill key={skill}>
                <Skill>{skill}</Skill>
              </BadgeSkill>
            ))}
          </InfoSpace>
        </InfoSkill>

        <SummaryDiv>
          <Summary>
            <small>{summaryDeveloper}</small>
          </Summary>
        </SummaryDiv>
        <SocialNetworks>
          {webPage != null && (
            <Media href={webPage} target="_blank">
              <FontAwesomeIcon icon={faGlobeAmericas} />
            </Media>
          )}

          {linkedin != null && (
            <Media href={linkedin} target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </Media>
          )}

          {twitter != null && (
            <Media href={twitter} target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </Media>
          )}

          {github != null && (
            <Media href={github} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </Media>
          )}
        </SocialNetworks>
      </CardContent>
    </CardDiv>
  )
}

export default DeveloperCard
