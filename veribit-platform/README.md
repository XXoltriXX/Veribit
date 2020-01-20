**To Run Locally

1 - Install a PostgreSQL or MySQL locally

2 - Open 'frontend/src/config/localhost.js'

2.1 - Set your custom configs

3 - Open 'backend/config/localhost.js'

3.1 - Set your custom configs

4 - Go to the 'frontend' folder

4.1 - Run npm run install

4.2 - Run npm run start

5 - Go to the 'backend' folder

5.1 - Run npm run install

5.2 - Run npm run start

6 - Create the database tables

npm run db:reset:localhost

This command will DROP ALL THE DATABASE TABLES. Make sure you are running it pointing to the correct database.

7 - The app will be available at https://localhost:3000.


**To Run Set Up via Docker

1 - Install Docker locally (https://www.docker.com/)

2 - Open 'frontend/src/config/production.js'

2.1 - Set your custom configs

3 - Open 'backend/config/production.js'

3.1 - Set your custom configs

4 - Go to the project root folder

4.1 - Run docker-compose build

4.2 - Run docker-compose up

5 - Run docker ps to find the Container ID. Select the one that's related to the app (not the database).

5.1 - Run docker exec -w=/app/backend -ti [CONTAINER ID] npm run db:reset:production

This command will DROP ALL THE DATABASE TABLES. Make sure you are running it pointing to the correct database.

6 - The app will be available at https://localhost:8080.

**Credits

React - https://reactjs.org/
Redux - https://redux.js.org/
Ant Design - https://ant.design/
Reselect - https://github.com/reduxjs/reselect
React Router - https://reacttraining.com/react-router/web
Formik - https://github.com/jaredpalmer/formik
GraphQL - https://graphql.org
Apollo GraphQL - https://www.apollographql.com/
Chart.js - https://www.chartjs.org/
Firebase (For the Google Cloud/Firebase version) - https://firebase.google.com
Docker (For the No Platform version) - https://www.docker.com/
MomentJS - https://momentjs.com/
Yup - https://github.com/jquense/yup
Xlsx - http://sheetjs.com/opensource
NProgress - https://ricostacruz.com/nprogress/
Lodash - https://lodash.com
Axios - https://github.com/axios/axios
Filesize.js - https://filesizejs.com/
FileSaver.js - https://github.com/eligrey/FileSaver.js
NodeJS - https://nodejs.org/en/
Express - https://expressjs.com/
Nodemailer - https://nodemailer.com/
MySQL - https://www.mysql.com/
PostgreSQL - https://www.postgresql.org/
Sequelize - http://docs.sequelizejs.com/