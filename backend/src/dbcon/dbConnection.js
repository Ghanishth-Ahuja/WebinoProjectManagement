import { connect } from "mongoose";

function dbConnection() {
  connect(`${process.env.MONGO_URI}/${process.env.DBNAME}`)
    .then(() => {
      console.log(`Connected to DB `);
    })
    .catch((err) => {
      console.error(`Error Connecting to the DB ${err.message}`);
    });
}

export default dbConnection;
