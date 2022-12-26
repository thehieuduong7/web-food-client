const { Pool, Client } = require("pg");
const connectionString = process.env.PG_STRING || "";
const pool = new Pool({
	connectionString,
});

function pgConnect() {
	return pool;
}

module.exports = { pgConnect };
