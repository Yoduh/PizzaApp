## Install
Using PgAdmin or the psql CLI: create a local PostgreSQL database called `pizza-orders`

psql CLI command: `create database pizza-orders;`

Clone this git project to your local machine

Navigate to project and do 

## `npm run install-all`

This will install both the frontend and backend

From here you can EITHER:

a) Create only the empty tables if you don't want any starter data: 

## `npm run create-tables`

b) Create and seed the tables with some initial data (toppings, sizes, and orders): 

## `npm run migrate`

If later on you want to wipe and reset your data to the initial seed data you can use:

## `npm run reseed`

Finally, to run both the frontend and backend together: 

## `npm start`

The frontend runs on localhost:3000 and the backend on localhost:3001

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
