import React, { Component } from 'react'
import {Section, Title, SectionButton} from '../../utils'

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
          <Title title='our mission' message='let us tell you'></Title>
          <SectionButton style={{margin: '2rem auto'}}>
            about
          </SectionButton>
      </Section>
    )
  }
}
