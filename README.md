
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

To use it you need to instal node modules and dependencies:
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

### Available Options

```
   Add User
  "firstname": "User First Name",
  "lastname": "User Lastname",
  "id": "ID",
  "currency":"['USD', 'EUR', 'GBP', 'JPY', 'CNY']",
  "accountmoneyamount": "The amount of funds on users acciunt",
  "country": "Country of Residence",
  "portfoliotype": "['Aggressive', 'Defensive', 'Income', 'Speculative', 'Hybrid' ]",
  "listofassets": "Assets ID (_id)" 



```