# football-standings
Some of the most popular tournament standings in Europe

Technologies used include:
* ExpressJS
* MongoDB
* Handlebars
* Sportradar Content API
* Free images from unsplash.com

What you need to do?
* ``git clone`` the repository
* Run ``npm install`` to install all dependencies
* To configure MongoDB you might need to do the following: 
    - go to installation folder and run terminal as an administrator
    - type the following command:
    ``<path to mongod.exe> mongod --dbpath <path to store data>``
    - usually mongod.exe can be found in ``C:\Program Files\MongoDB\Server\3.4\bin``
    - more information on how to setup MongoDB: [MongoDB Community Edition](https://docs.mongodb.com/manual/administration/install-community/)
* After everything is installed, run ``node .`` command to start the server
* Open [local host](localhost:8080) in your browser
* To see the records in the database:
    - open the mongo service with ``mongo`` command in separate terminal
    - you can use ``showd dbs`` command to see all present databases
    - ``use teams`` command to switch to teams db
    - ``db.teams.find()`` command to see all records in the database.


