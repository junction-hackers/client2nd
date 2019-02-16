import AWS from 'aws-sdk'
import React from 'react'

var victimBucketName = 'hacktoncloudapi-tokyojunctionvictimbucket-1dt0qaq4h9akn';
var searcherBucketName = 'hacktoncloudapi-tokyojunctionsearchbucket-e41mee3gvpco';
var bucketRegion = 'ap-northeast-1';
var IdentityPoolId = 'IDENTITY_POOL_ID';

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

class User extends React.Component {

  componentWillUnmount(){
    this.props.photoKey=0
    this.props.phoneNumber=0
    this.props.address=''
  }

  componentDidMount() {
    var s3 = new AWS.S3({
      params: {Bucket: this.props.victimBool ? victimBucketName : searcherBucketName}
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
  }

  componentWillUpdate(){
    if(this.props.end){
      this.sendInfo()
    }
  }

  sendInfo() {
    addPhoto(this.props.image)
    body = {
      photoKey : this.state.photoKey,
      phoneNumber : this.props.phoneNumber,
      address: this.props.address,
    }
  }

  render() {
    return (
      <div style={{display:'none'}}/>
   )}
}

export default User