import command from "../lib/command";
import list from "./list";

const start = async (id: number): Promise<string> => {
  const proccess_list = await list();

  const proccess_target = proccess_list.filter((process) => process.id === id);

  if (proccess_target.length === 0) return "Process id not found.";

  try {
    const status = proccess_target[0].status;

    if (status === "stopped") {
      const result = await command(`pm2 start ${id}`);

      if (
        result.includes(
          `[PM2] Applying action restartProcessId on app [${id}](ids: [ '${id}' ])`
        )
      ) {
        return "Process started.";
      }
    } else if (status === "online") {
      return "Process already running.";
    }
  } catch {
    return "Process start failed.";
  }

  return "";
};

export default start;
