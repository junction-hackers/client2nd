import {Component} from 'react'
import {Card, Button} from 'react-bootstrap'
import SpringCards from './SpringCards'

export default class Projects extends Component {

  render() {
    return (
      <div ref={'card'+this.props.key}  style={{ width: '15rem' }}>
        <SpringCards/> 
      {/*<Card style={{ width: '15rem' }}>
          {/*<Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title> {this.props.title}</Card.Title>
              <Card.Text style={{backgroundColor: 'orange'}}>
              {this.props.content}
            </Card.Text>
            <Button variant="primary">Visit</Button>
      
          </Card.Body>
        </Card> */}
      </div>
    )
  }
}
