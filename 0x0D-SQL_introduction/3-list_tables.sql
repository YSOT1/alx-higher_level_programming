-- List all tables in the specified database
USE INFORMATION_SCHEMA;
SELECT table_name
FROM tables
WHERE table_schema = DATABASE();

