import {observable, computed, decorate, observer, autorun}from 'mobx'
class Store {
  constructor() {
    this.image = {}
    this.photokey = 0
    this.phoneNumber = 0
    this.address = ''
    this.victimBool = false
  }
}

decorate(Store, {image:observable,phoneNumber:observable,photokey:observable,address:observable,victimBool:observable})
export default (new Store);