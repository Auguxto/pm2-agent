declare global {
  namespace NodeJS {
    interface ProcessEnv {
      api_key: string;
    }
  }
}

export {};
