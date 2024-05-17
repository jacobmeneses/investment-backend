# Example NodeJs API
Example API using express.js

Using node version >= 20

## Example .env file (required)
```txt
DATABASE_URL="postgresql://postgres:postgres@localhost:8886/postgres?schema=public"
PORT=3011
```

## Problem description
We have 3 Entities:
- Users
- Oportunities
- Investments

We have a list of "oportunities" (investment oportunities) that a given user can put money in using his/her balance account.


