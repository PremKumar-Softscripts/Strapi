import path from 'path';

export default () => {
  const client = 'postgres'; // Set PostgreSQL as the database client

  const connections = {
    postgres: {
      connection: {
        connectionString: '', // Leave empty to manually define host, port, etc.
        host: 'dpg-cukq2otds78s739qu76g-a',  // Replace with your actual PostgreSQL host
        port: 5432,  // Default PostgreSQL port
        database: 'strapi_db_9qih',  // Replace with your database name
        user: 'strapi_db_9qih_user',  // Replace with your PostgreSQL username
        password: 'z6qWBmh04Vc5nH5ghVJkOCKdKBcCtsJq',  // Replace with your PostgreSQL password
        ssl: {
          rejectUnauthorized: false, // Set to false for Render
        },
        schema: 'public', // Default schema
      },
      pool: { min: 2, max: 10 },
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: 60000,
    },
  };
};
