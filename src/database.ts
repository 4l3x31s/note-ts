import { createPool } from "mysql2/promise";

export function connect() {
    const connection = createPool({
        host: `localhost`,
        port: 3306,
        user: `tuto`,
        password: `123456`,
        database: `node_mysql_ts`,
        connectionLimit: 10
    });
    return connection;
}