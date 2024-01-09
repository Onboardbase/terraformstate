import { existsSync } from "node:fs";

export const doesFileExist = (filePath: string): boolean => {
  return existsSync(filePath);
};

export const isValidJSONString = (data: string) => {
  let isJson = false;
  try {
    JSON.parse(data);
    isJson = true;
  } catch (error) {
    isJson = false;
  }

  return isJson;
};
