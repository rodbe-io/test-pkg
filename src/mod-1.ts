interface Cliente {
  db: string;
}

interface Instance {
  client: Cliente | null;
  connect: () => void;
}

const mysingleton = (() => {
  let instance: Instance | null = null;

  const createInstance = () => {
    let client: Cliente | null = null;

    return {
      client,
      connect: () => {
        if (!client) {
          client = {
            db: 'mongito',
          };
        }
      },
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
})();

// eslint-disable-next-line no-restricted-exports
export default mysingleton;
