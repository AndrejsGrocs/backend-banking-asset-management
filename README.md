
![alt text](https://cdn.corporatefinanceinstitute.com/assets/asset-management.jpeg)


# Backend Database Prototype For Banks and Asset Management Companies



``` 
This is a Rest API Database Prototype.
Including User Data and User Assets Data.
User Assets Data have a list of assets, and every asset in the list have a different model with different assets data.
 ```

Author: Andrejs Grocs


You can find, edit and delete user data and assets data separately.
Assets data need to be connected to the user data by Assets ID.

## Instructions

**To use it you need to install node modules and dependencies:**
```
cors
dotenv
express
mongoose

```

**Create .env file with pattern:**
```
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=

```

**Use the MongoDB Compass software or Mongo DB account.**

[MongoDB Online](https://www.mongodb.com/)

**Use the Insomnia or other similar software.**

[Insomnia Online](https://insomnia.rest/)


## Available Operations




```
   Add User
   Add Assets
   Add Currency
   Add Stocks
   Add Bonds
   Add Etf
   Find User by user ID
   Find Assets by assets ID
   Find Currency by currency ID
   Find Stocks by stock ID
   Find Bonds by bond ID
   Find Etfs by etf ID
   Update User by user ID
   Update Assets by assets ID
   Replace users Assets by assets ID
   Delete User by ID
   Delete Assets by ID
   Delete Currency by ID
   Delete Stocks by ID
   Delete Bonds by ID
   Delete Etfs by ID
```


## Models Description

```
   Add User
   
  "firstname": "User First Name",
  "lastname": "User Lastname",
  "id": "ID",
  "currency":"['USD', 'EUR', 'GBP', 'JPY', 'CNY']",
  "accountmoneyamount": "The amount of funds on users account",
  "country": "Country of Residence",
  "portfoliotype": "['Aggressive', 'Defensive', 'Income', 'Speculative', 'Hybrid' ]",
  "listofassets": "Assets ID (_id)" 



```

```
   Add Assets

   (the list of assets included in users portfolio or assets available for investment operations )

   "currencies": "Users Currencies",
   "stocks": "Users Stocks",
   "bonds": "Users Bonds",
   "etf": "The name of ETF user are invested in",
   "commodities": "Users Commodities",
   "futures": "Users Futures",



```





Andrejs Grocs 2021