#!/bin/bash

#dbRunning=$(docker inspect -f '{{.State.Running}}' beslis_prd_db)
dbRunning=$(docker ps -aq -f name=beslis_prd_db)
#if [[ $dbRunning == "true" ]]
if [[ ! -z "$dbRunning" ]]
then
    echo "Skipping base setup"
    exit 0
fi

postgresPass=$(</data/beslissamen/prd/containers/mysql/password.txt)

docker network create beslissamen_prd

docker run -d \
    --name beslis_prd_db \
    --network=beslissamen_prd \
    -v /data/beslissamen/prd/database/:/var/lib/postgresql/data/ \
    -e POSTGRES_USER=beslissamen \
    -e POSTGRES_PASSWORD=$postgresPass \
    postgres:10.4
