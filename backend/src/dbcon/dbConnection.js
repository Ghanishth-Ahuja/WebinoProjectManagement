import { connect } from "mongoose";
import { DBNAME } from "../constants.js";
async function dbConnection() {
  try {
    let connectionInstance = await connect(
      `${process.env.MONGO_URI}/${DBNAME}`,
    );
    console.log(
      `Connected to DB instance - ${connectionInstance.connection.host}`,
    );
    // console.log(connectionInstance);
    console.log(`Connected to DB `);
  } catch (error) {
    console.error(`Error Connecting to the DB ${error}`);
    process.exit(1);
  }
}

export default dbConnection;
