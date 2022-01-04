
![alt text](https://cdn.corporatefinanceinstitute.com/assets/asset-management.jpeg)


# Backend Asset Management Prototype For Banks or Asset Management Companies



``` 
This is a Rest API Prototype.
Including User Data and User Assets Data.
 ```

Author: Andrejs Grocs


You can find, edit and delete userdata and assets data separately.
Assets Data need to be connected to the User Data by ID.

## Instructions

To use it you need to install node modules and dependencies:
```
cors
dotenv
express
mongoose

```

Create .env file with
```
B_HOST=
DB_USER=
DB_PASS=
DB_NAME=

```
```
Use the MongoDB Compass software or Mongo DB account.
```

### Available Operations

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


```
   Find User by user ID
   Find Assets by assets ID
   Update User by user ID
   Update Assets by assets ID
   Replace users Assets by assets ID
   Delete User by ID
   Delete Asset by ID
```