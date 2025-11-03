function createObject(name, surname, params) {
    return {
        name: name,
        surname: surname,
        ...params
    }
}

function getPromise(status, timeout) {
  return new Promise((res, rej) => {
    if(status === 'reject') {
      setTimeout(() => {
        rej(status)
      }, timeout)
    }
    setTimeout(() => {
      res(status)
    }, timeout)
  })
}
module.exports = {createObject, getPromise}