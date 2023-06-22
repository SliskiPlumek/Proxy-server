# Proxy-server
This is s proxy server written in express. It has default setting for fetch data from openweather api but it can be replaced with other api.

## How to run
To install needed dependencies type this in command prompt:
```bash
npm install
```
Then to start a server type:
```bash
npm start
```

## Setting diffrent api
To fetch data from other api you have to add .env file to root folder and write this:
```bash
API_LINK="Your api link"
API_KEY_NAME="Api key name if key needed"
API_KEY="Key to api also if needed"
```
These are enviroment variables that are used in the server.
