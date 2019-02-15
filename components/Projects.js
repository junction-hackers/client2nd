
import {Component} from 'react'
import Cards from './Cards'

import {Row, Col, Container} from 'react-bootstrap'

var data = [
  {
    title: 'title', 
    content: 'content',
  },
  {
    title: 'title2', 
    content: 'content2',
  },
  {
    title: 'title2', 
    content: 'content2',
  },
  {
    title: 'title2', 
    content: 'content2',
  },
  {
    title: 'title2', 
    content: 'content2',
  },
  {
    title: 'title2', 
    content: 'content2',
  },
]

export default class Projects extends Component {
  render() {
    return (
      <div>

        <center>
        <Container>
          <Row>
            {
              data.map((d,key) => {
                return (
                  <Col style={{marginTop:6,marginBottom:6}}>
                    <Cards
                     title = {d.title}
                     content = {d.content}
                     key = {key} 
                    />
                  </Col>
                )
              })
            }
          </Row>
        </Container>
        </center>

      </div>
    )
  }
}
