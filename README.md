# NodeSQLServerTedious
CRUD operations from Node to Microsoft SQL Server using Tedious!<br />
The code was tested against MS SQL Server Express edition.<br />

# How to use:
1- CREATE DATABASE SampleDB <br />
2- Run the script file init-script.sql <br />
3- Change the connection data in index.js and crud.js: server, instance name, username, password. <br />
4- Test the connection: node index.js (you should get "Connected") <br />
5- Test CRUD operations: node crud.js and watch the output for first time after running init-script.sql: <br />

Connected<br />
Starting...<br />
Inserting 'Jake' into Table...<br />
1 row(s) inserted<br />
Updating Location to 'United States' for 'Nikita'...<br />
1 row(s) updated<br />
Deleting 'Jared' from Table...<br />
1 row(s) deleted<br />
Reading rows from the Table...<br />
2 Nikita United States<br />
3 Tom Germany<br />
4 Jake United States<br />
3 row(s) returned<br />
Done!<br />
