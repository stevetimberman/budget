import fetch from "isomorphic-fetch"

export function request(url, options, success, error400, error, failure) {
  let headers = new Headers()
  headers.append("Content-Type", "application/json")
  headers.append("Accept", "application/json")
  headers.append("Authorization", "JWT " + localStorage.token)
  options["headers"] = headers
  return fetch(url, options)
    .then(res => {
      if (res.status >= 200 && res.status < 300) {
        res.json().then(json => { return success(json) })
      } else if (res.status === 400) {
        res.json().then(json => { return error400(json) })
      } else {
        return error(res)
      }
    }).catch((ex) => { return failure(ex) })
}

export function request_mult(url, url_2, options, success, error400, error, failure) {
  let headers = new Headers()
  headers.append("Content-Type", "application/json")
  headers.append("Accept", "application/json")
  headers.append("Authorization", "JWT " + localStorage.token)
  options["headers"] = headers
  return fetch(url, options)
    .then(res => {
      if (res.status >= 200 && res.status < 300) {
        res.json().then(json => { return success(json) })
      } else if (res.status === 400) {
        res.json().then(json => { return error400(json) })
      } else {
        return error(res)
      }
    }).catch((ex) => { return failure(ex) })
    .then(fetch(url_2, options)
      .then(res => {
      if (res.status >= 200 && res.status < 300) {
        res.json().then(json => { return success(json) })
      } else if (res.status === 400) {
        res.json().then(json => { return error400(json) })
      } else {
        return error(res)
      }
    }).catch((ex) => { return failure(ex) })
      )
}



export function post(url, options, data, success, error400, error, failure) {
  let headers = new Headers()
  headers.append("Content-Type", "application/json")
  headers.append("Accept", "application/json")
  headers.append("Authorization", "JWT " + localStorage.token)
  options["headers"] = headers
  options["method"] = 'POST'
  options["body"] = data
  return fetch(url, {method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "JWT " + localStorage.token,
    },
    body: JSON.stringify(data),
    }).then(res => {
      if (res.status >= 200 && res.status < 300) {
        res.json().then(json => { return success(json) })
      } else if (res.status === 400) {
        res.json().then(json => { return error400(json) })
      } else {
        return error(res)
      }
    }).catch((ex) => { return failure(ex) })
}

export function postLogin(url, options, data, success, error400, error, failure) {
    return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(data),

  }).then(res => {
      if (res.status >= 200 && res.status < 300) {
        res.json().then(json => { return success(json) })
      } else if (res.status === 400) {
        res.json().then(json => { return error400(json) })
      } else {
        return error(res)
      }
    }).catch((ex) => { return failure(ex) })
}


