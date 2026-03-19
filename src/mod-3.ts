interface Cliente {
  db: string;
}

export interface Instance {
  client: Cliente | null;
  connect: () => void;
  dbName: string;
  getTable: (name: string) => { tableName: string };
}

interface Props {
  dbName: string;
}

let instance: Instance | null = null;

export const mysingleton3 = (props: Props) => {
  const createInstance = (): Instance => {
    let client: Cliente | null = null;

    return {
      client,
      connect: () => {
        if (!client) {
          client = {
            db: 'mongito: ' + props.dbName,
          };
        }
      },
      dbName: props.dbName,
      getTable: (tableName: string) => {
        return {
          tableName,
        };
      },
    };
  };

  if (!instance) {
    instance = createInstance();
  }

  return instance;
};
