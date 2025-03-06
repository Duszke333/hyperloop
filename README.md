# Hyperloop

Hyperloop is a team project for the course "Databases II" at the Warsaw University of Technology.

It is a general purpose dashboard for hypothetical Hyperloop staff, in which they can:
- track moving pods on a map,
- create, update and delete parts of the infrastructure:
    - stations,
    - depots,
    - pods,
    - routes,
- schedule repairs for the pods,
- generate reports for selected parts of the infrastructure in given time period.

![App screenshot](https://github.com/maksnowak/hyperloop/assets/59841779/6d75c83f-ed32-4912-9dac-cce3d84b131e)

## Pre-requisites

- Node.js
- Python
- Yarn (or npm)
- PostgreSQL (or Docker)
- Kafka (or Docker)
- Docker w/ Docker Compose (optional)

## Getting started locally

1. Clone the repository
2. Run `docker compose up` to start the PostgreSQL database and Kafka containers
3. Go to the `src/simulation` directory and run `pip install -r requirements.txt`
4. Go to the `src/web` directory and run `yarn` (or `npm install`)
5. Go to the `src/sql` directory and execute all the files listed below in the database in this order:
    1. `schema.sql`
    2. `procedures.sql`
    3. `data.sql`
    4. `indices.sql`
    5. `procedure_tests.sql` (optional, you can run it to verify that your database is set up correctly)
6. Run `npx prisma pull` to pull the database schema into Prisma
6. Run `npx prisma generate` to generate the Prisma client
7. Run `yarn run dev` (or `npm run dev`) to start the development server
8. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

## Working with In-Docker PostgreSQL

1. Run `docker compose up` to start the PostgreSQL database
2. Connect to the database using the following credentials:
   - Host: `localhost`
   - Port: `5432`
    - User: `johndoe`
    - Password: `randompassword`
    - Database: `hyperloop`

    For more information, check the `docker-compose.yml` file.

## Contributors

<a href="https://github.com/maksnowak/hyperloop/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=maksnowak/hyperloop" />
</a>

Made with [contrib.rocks](https://contrib.rocks).
