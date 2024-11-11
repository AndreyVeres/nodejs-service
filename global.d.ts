declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;

      PORT_POSTGRES: number;
      POSTGRES_PASSWORD: string;
      POSTGRES_USERNAME: string;
      POSTGRES_DATABASE: string;
      POSTGRES_HOST: string;

      PGADMIN_DEFAULT_EMAIL: string;
      PGADMIN_DEFAULT_PASSWORD: string;
    }
  }
}

export {};
