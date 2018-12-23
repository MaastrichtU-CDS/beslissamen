postgresPass=$(</data/beslissamen/acc/containers/mysql/password.txt)

docker network create beslissamen_acc

docker run -d \
    --name beslis_acc_db \
    --network=beslissamen_acc \
    -v /data/beslissamen/acc/database/:/var/lib/postgresql/data/ \
    -e POSTGRES_USER=beslissamen \
    -e POSTGRES_PASSWORD=$postgresPass \
    postgres:10.4
