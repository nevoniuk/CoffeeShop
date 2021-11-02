const { MongoClient } = require('mongodb');

async function main() {
  
  const uri = "mongodb+srv://testuser:B2usPpjfRDfvcEWx@coffeeshop.tkunn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  
  const client = new MongoClient(uri);
  
  try { 
    
    await client.connect();
    await newUser(client, {
        username: "other",
        password: "passw0rd",
        email: "other@gmail.com",
        name: "other User",
        type: "Customer"
    });

    await findUser(client, "oldUser");
    
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function newUser(client, newCustomer) {
    const result = await client.db("CoffeeShop").collection("Customer").insertOne(newCustomer);

    console.log(`New customer with the following id: ${result.insertedId}`);
}

async function findUser(client, usernameToFind) {
    const result = await client.db("CoffeeShop").collection("Customer").findOne({username:
    usernameToFind});

    if (result) {
        console.log(`Found the user: ${usernameToFind}`);
        console.log(result);
    } else {
        console.log(`no user found with username: ${usernameToFind}`);
    }
  }