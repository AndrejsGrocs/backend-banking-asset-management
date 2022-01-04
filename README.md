
![alt text](https://cdn.corporatefinanceinstitute.com/assets/asset-management.jpeg)


# Backend Database Prototype For Banks and Asset Management Companies



``` 
This is a Rest API Database Prototype.
Including User Data and User Assets Data.
 ```

Author: Andrejs Grocs


You can find, edit and delete user data and assets data separately.
Assets Data need to be connected to the User Data by Assets ID.

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
B_HOST=
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
   Find User by user ID
   Find Assets by assets ID
   Update User by user ID
   Update Assets by assets ID
   Replace users Assets by assets ID
   Delete User by ID
   Delete Asset by ID
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