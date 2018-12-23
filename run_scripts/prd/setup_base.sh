docker network create beslissamen_prd

docker run -d \
    --name beslis_prd_db \
    --network=beslissamen_acc \
    -v $(pwd)/database_prd/:/var/lib/postgresql/data/ \
    -e POSTGRES_USER=beslissamen \
    -e POSTGRES_PASSWORD=AblexaVerEsT \
    postgres:10.4
