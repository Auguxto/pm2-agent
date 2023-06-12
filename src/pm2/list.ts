import command from "../lib/command";

type Process = {
  id: number;
  name: string;
  namespace: string;
  version: string;
  mode: string;
  pid: number;
  uptime: string;
  restarts: number;
  status: string;
  cpu: string;
  mem: string;
  user: string;
  watching: string;
};

const list = async (): Promise<Process[]> => {
  const result = await command("pm2 list");

  try {
    let proccess_data = result
      .split("\n")
      .filter((data: any) => Boolean(data))
      .map((data) => data.trim())
      .slice(1);

    // id name namespace version mode pid uptime restarts status cpu mem user watching
    const proccess_list: Process[] = proccess_data
      .map((proccess) => {
        return proccess.split(" ").filter((data) => Boolean(data));
      })
      .map((proccess) => {
        return {
          id: Number(proccess[0]),
          name: proccess[1],
          namespace: proccess[2],
          version: proccess[3],
          mode: proccess[4],
          pid: Number(proccess[5]),
          uptime: proccess[6],
          restarts: Number(proccess[7]),
          status: proccess[8],
          cpu: proccess[9],
          mem: proccess[10],
          user: proccess[11],
          watching: proccess[12],
        };
      });

    return proccess_list;
  } catch {}

  return [];
};

export default list;
