import React from 'react'
import { Main } from '../Main/Main'
import { ExperiencesPageContainer } from './Experiences.styles'
import { XpDesktopNav } from '../XpDesktopNav/XpDesktopNav'
import { XpMobileNav } from '../XpMobileNav/XpMobileNav'

export const ExperiencesPage = () => {
  return (
    <Main>
      <ExperiencesPageContainer>
        <h1>Experiências</h1>
        <p>Para mais detalhes, clique na empresa correspondente</p>
        <XpDesktopNav />
        <XpMobileNav />
      </ExperiencesPageContainer>
    </Main>
  )
}
