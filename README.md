# NodeSQLServerTedious
CRUD operations from Node to Microsoft SQL Server using Tedious!
The code was tested against MS SQL Server Express edition.
Instructions:
1- CREATE DATABASE SampleDB
2- Run the script file init-script.sql
3- Change the connection data in index.js and crud.js: server, instance name, username, password. 
4- Test the connection: node index.js (you should get "Connected")
5- Test CRUD operations: node crud.js and watch the output for first time after running init-script.sql:

Connected
Starting...
Inserting 'Jake' into Table...
1 row(s) inserted
Updating Location to 'United States' for 'Nikita'...
1 row(s) updated
Deleting 'Jared' from Table...
1 row(s) deleted
Reading rows from the Table...
2 Nikita United States
3 Tom Germany
4 Jake United States
3 row(s) returned
Done!
