import React from 'react'
import axios from 'axios';
import { apiKey, apiUrl, formTypes } from './constants';


export function generateUrl(path) {

  return apiUrl + path;
}

export function apiReq(endPoint, data, method, headers) {
  return new Promise((res, rej) => {

    headers = {
      ...headers
    }

    if (method == 'get' || method == 'delete') {
      data = {
        params: data,
        headers
      }
    }

    // axios[method](endPoint, data, {
    // 	headers: {
    // 		'Auth': 'f981f6c3402d5abaaef6d9811fc13586'
    // 	 }
    // }).then((result) => {
    axios[method](endPoint, data, { headers }).then((result) => {
      let { data } = result;

      if (data.status === false) {

        return rej(data);
      }

      return res(data);
    }).catch((err) => {
      return rej(err);
    });
  })
}

export function apiPost(endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, 'post', headers);
}

export function apiPostExtended(endPoint, data, headers = {}) {
  return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, 'get', headers);
}

export function apiPut(endPoint, data, headers = {}) {
  return apiReq(generateUrl(endPoint), data, 'put', headers);
}

export function multiPartData(data) {

  let multiPart = new FormData();

  for (let prop in data) {
    multiPart.append(prop, data[prop]);
  }

  return multiPart;
}
