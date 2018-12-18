docker network create beslissamen_acc

docker run -d \
    --name beslis_acc_db \
    --network=beslissamen_acc \
    -v $(pwd)/database/:/var/lib/postgresql/data/ \
    -e POSTGRES_USER=beslissamen \
    -e POSTGRES_PASSWORD=AblexaVerEsT \
    postgres:10.4