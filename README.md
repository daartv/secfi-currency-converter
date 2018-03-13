## Install all dependencies
```
npm install
```

## Run development server
```
npm start
```

## Dependencies used

- create-react-app (For speedy setup and file structuring)
- ReactJS (As a front end framework, seemed appropiate given that it is part of the stack used in the company)
- Ant Design (As a component library for React, it's a clean interface and speeds up the styling)
- Axios (HTTP requests with promises support, I find it to be one of the cleanest and most readable ones)

## Comments and scalability

- At first I wanted to populate the Select components with the data from the Fixer.io API but given that I had a request limit I didn't want to make a request everytime I refreshed the project.
- Some cryptocurrencies are already supported on the Fixer.io API
-I delegated doing the fluctuation chart by looking for a website that made them and making an iframe that encased it because manually requesting each exchange rate for the past 30 days would have exhausted my request limit pretty fast, if that wasn't the case I would have used D3.js to create on my own and getting the information from the Fixer API