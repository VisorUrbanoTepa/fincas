"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'postgres',
    host: '187.216.152.105',
    password: 'G30m4t1c4_G30',
    database: 'postgres',
    port: 5432
});
