
![alt text](https://cdn.corporatefinanceinstitute.com/assets/asset-management.jpeg)


# Backend Database Prototype For Banks and Asset Management Companies



``` 
This is a Rest API Database Prototype.
Including User Data and User Assets Data.
User Assets Data have a list of assets, and every asset 
in the list has different model with different 
detailed data especially about this asset.
You can find, edit and delete user data and assets data separately.
Assets data need to be connected to the user data by Assets ID.
 ```

Author: Andrejs Grocs




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
   Add Commodities
   Add Futures
   Find User by user ID
   Find Assets by assets ID
   Find Currency by currency ID
   Find Stocks by stock ID
   Find Bonds by bond ID
   Find Etfs by etf ID
   Find Commodities by etf ID
   Find Futures by etf ID
   Update User by user ID
   Update Assets by assets ID
   Replace users Assets with another assets ID
   Delete User by ID
   Delete Assets by ID
   Delete Currency by ID
   Delete Stocks by ID
   Delete Bonds by ID
   Delete Etfs by ID
   Delete Commodtities by ID
   Delete Futures by ID
```

## Example of the result you can receive

```
Here is the example of data you can receive on the screen 
after all asset data is filled.


{
  "_id": "61de9ec92a048d0f66baaa85",
  "firstname": "Andrejs",
  "lastname": "Grocs",
  "id": "0000001ag",
  "currency": "EUR",
  "accountmoneyamount": 500000,
  "country": "Germany",
  "portfoliotype": "Income",
  "listofassets": [
    {
      "_id": "61f3ae9ac7ec752d3d95866c",
      "currencies": [
        {
          "_id": "61de96eb616035725de49238",
          "quantityoflots": 4,
          "title": "Euro",
          "ticker": "EUR",
          "countryofissuer": "EU",
          "isreservecurrency": "Yes",
          "__v": 0
        }
      ],
      "stocks": [
        {
          "_id": "61dee1df627024ec515f36d8",
          "quantityoflots": 4,
          "title": "Test Incfdsdbgdf",
          "ticker": "TEST",
          "issuer": "Test Inc",
          "stockstype": "Growth",
          "__v": 0
        }
      ],
      "bonds": [
        {
          "_id": "61deaeb2bec710ac0f7ab67b",
          "quantityoflots": 3,
          "title": "Test Bond",
          "ticker": "Test",
          "issuer": "Test Government",
          "bondstype": "Government",
          "__v": 0
        }
      ],
      "etf": [
        {
          "_id": "61dea640600b067f92302a7a",
          "quantityoflots": 3,
          "title": "SPDR S&P 500 ETF Trust",
          "ticker": "Spy",
          "countryorregion": "USA",
          "etftype": "Stock",
          "__v": 0
        }
      ],
      "commodities": [
        {
          "_id": "61f2a999d10a05bc01ed32e6",
          "quantityoflots": 12,
          "title": "Oil",
          "ticker": "Brant",
          "__v": 0
        }
      ],
      "futures": [
        {
          "_id": "61f3ab89ecc73ebb23da2a5a",
          "quantityoflots": 12345,
          "title": "S&P 500 Futures ",
          "ticker": "E-Mini S&P 500",
          "__v": 0
        }
      ],
      "__v": 0
    }
  ],
  "__v": 2
}
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

```

  Add data to any of asset
  Example
  Stocks Data


    quantityoflots: "Amount of lots client have",
    title: "Name of the stock",
    ticker: "Stock Ticker",
    issuer: "The name of issuer of this stocks",
    stockstype: "Type of stock , options: ['Growth', 'Dividend', 'New issues', 'Defensive']},
```





Andrejs Grocs 2021