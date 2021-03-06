import axios from 'axios'
import fi from "element-ui/src/locale/lang/fi";

const qs = require('qs');
const root = process.env.API_ROOT;
const api = {
  async get(url) {
    try {
      let res = await axios.get(root+url);
      res = res.data;
      return new Promise((resolve) => {
        resolve(res)
      })
    } catch (err) {
      alert('无法连接至服务器');
      console.log('无法连接至服务器');
    }
  },
  async post(url, data) {
    try {
      let res = await axios.post(root+url, qs.stringify(data));
      res = res.data;
      return new Promise((resolve, reject) => {
        resolve(res)
      })
    } catch (err) {
      alert('无法连接至服务器');
      console.log('无法连接至服务器');
    }
  },
  async post_JSON(url, data) {
    try {
      let headers = {
        'Content-Type': 'application/json'
      };
      let res = await axios.post(root+url, data,headers);
      res = res.data;
      return new Promise((resolve, reject) => {
        resolve(res)
      })
    } catch (err) {
      alert('无法连接至服务器');
      console.log('无法连接至服务器');
    }
  },
  async upload(url, data) {

    try {
      let res = await axios.post(root+url, data,{
        'Content-Type': 'multipart/form-data',
      });
      res = res.data;
      return new Promise((resolve, reject) => {
        resolve(res)
      })
    } catch (err) {
      console.log('无法连接至服务器');
    }
  },

};

export { api }

