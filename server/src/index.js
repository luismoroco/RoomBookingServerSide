import app from "./app.js";
import { throwerror } from './utils/error.js';

const PORT = process.env.PORT || 5000;

async function main() {
  try {
    app.listen(PORT, () => {
      console.log(`Running in PORT: ${PORT}`);
    });
  } catch (err) {
    throwerror(err);
  }
}

main();
