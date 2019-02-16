
import AWS from 'aws-sdk'
import React from 'react'

var victimBucketName = 'BUCKET_NAME';
var searcherBucketName = 'BUCKET_NAME';
var bucketRegion = 'REGION';
var IdentityPoolId = 'IDENTITY_POOL_ID';

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

var s3 = new AWS.S3({
  params: {Bucket: victimBool ? victimBucketName : searcherBucketName}
});

function addPhoto(file,victimBool) {
  var keyPrefix = 'raw/'
  var id = 1
  var photoKey = keyPrefix+id;
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
   })
}

export default withStyles(s)(Child);