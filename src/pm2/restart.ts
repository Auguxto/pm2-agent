import command from "../lib/command";
import list from "./list";

const restart = async (id: number): Promise<string> => {
  const proccess_list = await list();

  const proccess_target = proccess_list.filter((process) => process.id === id);

  if (proccess_target.length === 0) return "Process id not found.";

  try {
    const result = await command(`pm2 restart ${id}`);

    if (
      result.includes(
        `[PM2] Applying action restartProcessId on app [${id}](ids: [ '${id}' ])`
      )
    ) {
      return "Process restarted.";
    }
  } catch (error) {
    console.log(error);

    return "Process restart failed.";
  }

  return "";
};

export default restart;
