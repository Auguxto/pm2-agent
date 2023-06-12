import list from "./pm2/list";
import restart from "./pm2/restart";
import start from "./pm2/start";
import stop from "./pm2/stop";

async function run() {
  const result = await stop(0);

  console.log(result);
}

run();
