import restart from "./pm2/restart";

async function start() {
  const result = await restart(0);

  console.log(result);
}

start();
