# Redux-Saga demo cart

a project simulates a real shopping cart with a lot of its functionality connect with a demo [server](https://github.com/danielstern/redux-saga-shopping-cart-server).

## how to use

first clone or download this repo and the [server](https://github.com/danielstern/redux-saga-shopping-cart-server) .

on the server repo folder

```
yarn && yarn start
```

on this repo

- create a `.env.local` file.
- type the following on this file

```
REACT_APP_DOMAIN = "http://localhost:8081/"
```

if you are hosting the [server](https://github.com/danielstern/redux-saga-shopping-cart-server) on another port edit this file with the right port.

then

```
yarn && yarn start
```
