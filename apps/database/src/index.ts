import {
  AuthTypes,
  Connector,
  IpAddressTypes,
} from "@google-cloud/cloud-sql-connector";
import { createPool } from "mysql2/promise";
import { readFileSync } from "node:fs";

(async () => {
  const connector = new Connector();
  const clientOptions = await connector.getOptions({
    instanceConnectionName: "sandbox-274e6:us-east4:sandbox",
    ipType: IpAddressTypes.PUBLIC,
    authType: AuthTypes.IAM,
  });

  const filepath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (filepath) {
    console.log(readFileSync(filepath, "utf-8"));
  }

  const pool = createPool({
    ...clientOptions,
    user: "cloud-sql-access",
    database: "testing",
  });

  const connection = await pool.getConnection();

  try {
    // console.log(
    //   await connection.execute(`
    //     DESCRIBE users
    // `)
    // );

    const now = new Date().toISOString().slice(0, 19).replace("T", " ");
    const later = new Date();
    later.setFullYear(2020);
    const laterString = later.toISOString().slice(0, 19).replace("T", " ");

    const [rows] = await connection.execute(`
      SELECT * from users
    `);
    console.log(rows);
  } finally {
    connector.close();
    pool.end();
  }
})();
