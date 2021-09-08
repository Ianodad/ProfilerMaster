## Profile MAster

#### Example:

This is a simple profile view app to users

## Project Status
## Key Feautures
- [x] Fetch data from Api 
- [x] View individual users profile
- [ ] Edit User Profile 



## Installation and Setup Instructions

#### Example:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  


### Run with Docker
```console
cd Client
docker build -t profilemaster .

docker run --name profilemaster -d -p 3000:3000 profilemaster:latest
```

Open in browser
http://localhost:3000/

### Run with Docker-compose 
```console
docker-compose up --build
```
Open in browser
http://localhost:3000/
****

## License
MIT (c) 2021 [Ian Adera](https://github.com/ianodad)