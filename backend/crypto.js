// Synchronous
import { randomBytes, randomUUID } from "node:crypto";
const buf = randomBytes(32);
console.log(`${buf.length} bytes of random data: ${buf.toString("hex")}`);
const uuid = randomUUID();
console.log(`${uuid.length} bytes of random data: ${uuid}`);

const now = Date.now()+10000;
console.log(now, " abhi");
console.log(now.toLocaleString(), " poora");
setTimeout(() => {
  console.log(Date.now() > now);
}, 5000);
