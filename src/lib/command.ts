import util from "node:util";

const exec = util.promisify(require("node:child_process").exec);

const command = async (command: string): Promise<string> => {
  try {
    const { stdout, stderr } = (await exec(command)) as {
      stdout: string;
      stderr: string;
    };

    return stdout
      .replaceAll("│", "")
      .replaceAll("─", "")
      .replaceAll("┐", "")
      .replaceAll("┬", "")
      .replaceAll("┼", "")
      .replaceAll("└", "")
      .replaceAll("┘", "")
      .replaceAll("┴", "")
      .replaceAll("┤", "")
      .replaceAll("├", "")
      .replaceAll("┌", "");
  } catch (error) {
    console.log(error);
  }

  return "";
};

export default command;
