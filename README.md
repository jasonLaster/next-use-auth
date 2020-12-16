### Steps 

1. `npx create-next-app`
2. `yarn add react-use-auth auth0-js`
3. update `pages/_app.js` from `https://useauth.dev/docs/auth0/` 
4. `yarn build`
5. `yarn dev`



## Build Error

```bash
➜  next-auth git:(main) yarn dev
yarn run v1.22.4
$ next dev
ready - started server on http://localhost:3000
error - ./node_modules/react-use-auth/dist/react-use-auth.esm.js:1:4504
Module not found: Can't resolve 'react-use-auth/auth0'
```