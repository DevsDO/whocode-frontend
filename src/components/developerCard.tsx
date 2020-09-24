import React from "react"
import styled from "styled-components"
import "@fortawesome/fontawesome-free/js/all.js"

type Props = {
  DeveloperName: string
  Initials: string
  Image: string
  SummaryDeveloper: string
  SkillsList: string[]
  WebPage?: string
  Twitter?: string
  Github?: string
  linkedin?: string
}

const CardDiv = styled.div`
  border-radius: 1.5rem;
  box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.03);
  -webkit-transition: transform 375ms ease-in-out, box-shadow 375ms ease-out;
  transition: transform 375ms ease-in-out, box-shadow 375ms ease-out;
  width: 25%;

  &:hover {
    transform: scale(1.05);
    z-index: 1000;
    background-color: #fff;
    box-shadow: 0 0 20px -2px rgba(0, 0, 0, 0.3);
  }
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
  justify-content: center;
  margin: 0.3rem 0;
  height: 25px;
  margin-bottom: 3px;
`

const InfoSpace = styled(InfoSkill)`
  display: flex;
  overflow: hidden;
  justify-content: center;
  scrollbar-width: thin;
  padding: 0.2rem;
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

const Summary = styled.div`
  height: 100px;
  display: flex;
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

const SocialNetworks = styled.div`
  font-size: large;
`

const Media = styled.a`
  color: #343a40;
  margin-right: 3px;
`

const DeveloperCard: React.FC<Props> = ({
  DeveloperName,
  Initials,
  Image,
  SkillsList,
  SummaryDeveloper,
  WebPage,
  Github,
  Twitter,
  linkedin,
}) => {
  return (
    <CardDiv>
      <Photo src={Image} />
      <CardContent>
        <NameRow>
          <CicleContainer>
            <InitialName>{Initials}</InitialName>
          </CicleContainer>
          <Name>{DeveloperName}</Name>
        </NameRow>

        <InfoSkill>
          <InfoSpace>
            {SkillsList.map(skill => (
              <BadgeSkill key={skill}>
                <Skill>{skill}</Skill>
              </BadgeSkill>
            ))}
          </InfoSpace>
        </InfoSkill>

        <Summary>
          <p>
            <small>{SummaryDeveloper}</small>
          </p>
        </Summary>
        <SocialNetworks>
          {WebPage != null && (
            <Media href={WebPage} target="_blank">
              <i className="fas fa-globe-americas"></i>
            </Media>
          )}

          {linkedin != null && (
            <Media href={linkedin} target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </Media>
          )}

          {Twitter != null && (
            <Media href={Twitter} target="_blank">
              <i className="fab fa-twitter"></i>
            </Media>
          )}

          {Github != null && (
            <Media href={Github} target="_blank">
              <i className="fab fa-github"></i>
            </Media>
          )}
        </SocialNetworks>
      </CardContent>
    </CardDiv>
  )
}

export default DeveloperCard
