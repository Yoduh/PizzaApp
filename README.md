# Install
Using PgAdmin or the psql CLI create a local PostgreSQL database called `pizza-orders`

Clone this git project to your local machine
Install both the frontend and backend with
```sh
$ npm run install-all
```
#### From here you can EITHER:
- Create only the empty tables if you don't want any starter data: 
    ```sh
    $ npm run create-tables
    ```
- Create and seed the tables with some initial data (toppings, sizes, and orders): 
    ```sh
    $ npm run migrate
    ```

If later on you want to wipe and reset your data to the initial seed data you can use:

```sh
$ npm run reseed
```

Finally, to run both the frontend and backend together: 

```sh
$ npm start
```
The frontend runs on localhost:3000 and the backend on localhost:3001

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
