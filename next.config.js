/** @type {import('next').NextConfig} */


const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')


module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        username: 'agus',
        mongoKey: 'GgEVJ1gaCuPPI8Xs',
        clustername: 'cluster0',
        database:'my-site-dev',
      }
    }
  }

  return {
    env: {
      username: 'agus',
      mongoKey: 'GgEVJ1gaCuPPI8Xs',
      clustername: 'cluster0',
      database:'my-site',
    }
  }
}



