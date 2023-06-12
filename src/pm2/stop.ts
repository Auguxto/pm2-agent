import command from "../lib/command";
import list from "./list";

const stop = async (id: number): Promise<string> => {
  const proccess_list = await list();

  const proccess_target = proccess_list.filter((process) => process.id === id);

  if (proccess_target.length === 0) return "Process id not found.";

  try {
    const status = proccess_target[0].status;

    if (status === "online") {
      const result = await command(`pm2 stop ${id}`);

      if (
        result.includes(
          `[PM2] Applying action stopProcessId on app [${id}](ids: [ '${id}' ])`
        )
      ) {
        return "Process stopped.";
      }
    } else if (status === "stopped") {
      return "Process already stopped.";
    }
  } catch {
    return "Proccess stop failed.";
  }

  return "";
};

export default stop;
