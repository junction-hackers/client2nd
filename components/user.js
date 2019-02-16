
import {s3} from 'aws-sdk'
import React from 'react'
function addPhoto(file,victimBool) {
  var prefix = victimBool ? 'vicitm-' : 'searcher-'
  var id = 1
  var photoKey = prefix+id;
  s3.upload({
    Key: photoKey,
    Body: file,
    ACL: 'public-read'
  }, function(err, data) {
    if (err) {
      return alert('There was an error uploading your photo: ', err.message);
    }
    this.setState({photoKey:photoKey})
  });
}

class User extends React.Component {
  componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }
  sendInfo() {
    addPhoto(this.props.image)
    body = {
      photoKey : this.props.photoKey
      phoneNumber : this.props.phoneNumber
      address: this.props.address
    }

  }
  render() {
    return (
      <div style={{display:'none'}}/>
    )
  }
}

export default withStyles(s)(Child);