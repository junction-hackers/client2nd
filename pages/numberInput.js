import React, { useState } from 'react'

import axios from 'axios'
import AWS from 'aws-sdk'
import Store from '../components/Store'
import { observer } from 'mobx-react'
import {observable, computed, decorate} from 'mobx'

var victimBucketName = 'hacktoncloudapi-tokyojunctionvictimbucket-1dt0qaq4h9akn';
var searcherBucketName = 'hacktoncloudapi-tokyojunctionsearchbucket-e41mee3gvpco';
var bucketRegion = 'ap-northeast-1';
var IdentityPoolId = 'IDENTITY_POOL_ID';

/*
AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

var s3 = new AWS.S3({
  params: {Bucket: Store.victimBool ? victimBucketName : searcherBucketName}
});

console.log("---1----");
console.log(params);
console.log(s3);
*/


function addPhoto(file,victimBool) {
  const json = JSON.stringify(Store);
  const blob = new Blob([json], {
    type: 'application/json'
  });
  const data = new FormData();
  data.append("document", blob);
  axios({
    method: 'post',
    url: `http://192.168.179.6:3005/api/input/${Store.victimBool ? 'victim' : 'searcher'}`,
    data: data,
  })

  //var keyPrefix = 'raw/'
  //var id = 0
  //axios
  //  .get('http://192.168.179.6:3005/api/generate_id')
  //  .then(({ data })=> {
  //    data.victim_id
  //    data.searcher_id
  //    id = Store.victimBool ? data.victim_id : data.searcher_id
  //  });
  //var photoKey = keyPrefix+id;
  //console.log('key' + photoKey)
  //s3.upload({
  //  Key: photoKey,
  //  Body: file,
  //  ACL: 'public-read'
  //}, function(err, data) {
  //  if (err) {
  //    return alert('There was an error uploading your photo: ', err.message);
  //  }
  //  Store.photoKey = photoKey
  //})
}
/**
 * Implements main page
 */

const Number = () => {
let Send = () =>{
  addPhoto(Store.image,Store.victimBool)
}

let handleChange = (event) =>{
  Store.phoneNumber = event.target.value
  setPhoneNumber(event.target.value)
}

  const [selectedFile, setSelectedFile] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [end, setEnd] = useState(false);
  return (
    <div style={{justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    background: '#fafafa',
    width: '100%',}}>
    <h1 style={{color: 'black', margin: 0, position: 'absolute', top: 64, fontSize: 56}}>Trackr</h1>
    <input id="autocomplete" placeholder="Enter phone number" type="text" onChange={handleChange}/>
    <a onClick={ Send  }>SEND</a>


    <style jsx>{`
    input {
      margin: 0;
      height: 64px;
      color: black;
      height: 64px;
      width: 90%;
      padding: 0;
      border: 1px solid black;
      border: 1px solid rgba(0,0,0,.23);
      border-radius: 12px;
      margin-bottom: 30px;
      padding: 14px 20px;
      max-width: 500px;
      font-size: 18px;
      outline: none;
      font-size: 17px;
    }
    input:hover {
      border: 1px solid rgba(0,0,0,.5);
    }
    input:focus {
      border: 1px solid rgba(0,0,0,.5);
    }
    a {
      color: black;
      background-color: white;
      margin: 0;
      box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
      border-radius: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
      padding: 0;
      height: 64px;
      width: 90%;
      margin-bottom: 24px;
      max-width: 500px;
      font-size: 16px;
      cursor: pointer;
    }
    a:hover {
      background: #f5f5f5;
    }
    p {
      margin: 0;
    }
    `}</style>
    </div>
  )
}

export default Number
