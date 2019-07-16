To setup next.js with now

1. create next.config.js file
module.exports = { target: 'serverless' }

for with=Sass:

const withSass = require('@zeit/next-sass')
module.exports = withSass({
  /* config options here */
  target: 'serverless'
})

2. create .nowignore file with content
yarn.lock

3. make sure pakage.json file has start and build scripts:

  "scripts": {
    "dev": "next",
    "start": "next start",
    "build": "next build"
  }

4. run command 'now' to deploy


  More information from https://zeit.co/guides/deploying-nextjs-with-now