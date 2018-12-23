docker pull registry.gitlab.com/medicaldataworks/beslissamen/backend:$1
docker pull registry.gitlab.com/medicaldataworks/beslissamen/frontend:$1

docker stop beslis_prd_backend
docker rm beslis_prd_backend
docker stop beslis_prd_frontend
docker rm beslis_prd_frontend

docker run -d \
    --name beslis_prd_backend \
    --network=beslissamen_prd \
    -v $(pwd)/containers/backend/application.yml:/app/application.yml \
    --link beslis_prd_db:dbhost \
    -p 10081:8081 \
    registry.gitlab.com/medicaldataworks/beslissamen/backend:$1

docker run -d \
    --name beslis_prd_frontend \
    --network=beslissamen_prd \
    -p 10080:80 \
    registry.gitlab.com/medicaldataworks/beslissamen/frontend:$1
