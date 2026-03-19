interface Cliente {
  db: string;
}

interface Instance {
  client: Cliente | null;
  connect: () => void;
}

interface Props {
  dbName: string;
}

let instance: Instance | null = null;

export const mysingleton2 = (props: Props) => {
  const createInstance = () => {
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
    };
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    },
  };
};
