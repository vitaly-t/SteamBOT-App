### **Marketing Bot App**

This repository contains the source code of the Ninjaskins Platform. This README contains a brief description of each of the components and instructions on how to a developer workspace up and running.

### API

The API is served by NodeJS. Data persistence is provided by the PostgreSQL database engine, using 'pg-promise' library.

### UI



### Getting Started

These instructions will guide you through setting up a developer workspace. If at any point you encounter an error message or other weirdness, please don't hesitate to ask for help on Slack!


1) Ensure that you are using at least version 6 of NodeJS:
> bash $ node --version v6.2.0


2) Clone the repository to your local system:
> bash $ git clone git@bitbucket.org:gamestarsltd/marketing-bot-app.git


3) Install dependencies using npm:
> bash $ cd marketing-bot-app/server $ npm install $ cd ../client $ npm install


4) Install and configure PostgreSQL


5) Install version 9.x of PostgreSQL.

- Create a PostgreSQL user and database

- Initialize database schema: > bash $ cd server $(npm bin)/knex migrate:latest
    
- Create .env file with database credentials > bash $ cd server $ nano .env 
    
    MARKETING_BOT_DB_HOST=XXX
    MARKETING_BOT_DB_PORT=XXX
    MARKETING_BOT_DB_DATABASE=XXX
    MARKETING_BOT_DB_USER=XXX
    MARKETING_BOT_DB_PASSWORD=XXX


6) Start the API Server: > bash $ cd server $ npm run dev


7) Start the UI development server: > bash $ cd ui $ npm run dev


Once the compilation process has completed, you should be able to visit http://localhost:8080
