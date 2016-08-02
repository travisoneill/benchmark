import { Store } from 'flux/utils'
// import { AppDispatcher } from '../dispatcher/dispatcher';
const AppDispatcher = require('../dispatcher/dispatcher');

// let _data1 = [{x: 50, y: 50}, {x: 150, y: 150}, {x: 250, y: 250}, {x: 350, y: 350}, {x: 450, y: 450}, {x: 550, y: 550}];
let _data1 = [];
let _data2 = [];
let _data = {};

const DataStore = new Store(AppDispatcher);

DataStore.get = function(n){
  n = parseInt(n);
  if(n === 1){return _data1.slice(0);}
  if(n === 2){return _data2.slice(0);}
}

DataStore.all = function(){
  return _data;
}

DataStore.store = function(payload){
  _data1 = payload.data.data1;
  _data2 = payload.data.data2;
  _data = payload.data;
}

DataStore.__onDispatch = function(payload){
  // debugger;
  switch(payload.actionType){
    case "STORE_RESPONSE":
      DataStore.store(payload);
      this.__emitChange();
      break;
  }
}

// export default DataStore;
module.exports = DataStore;
