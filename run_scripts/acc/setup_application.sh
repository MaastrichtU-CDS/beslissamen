#docker pull registry.gitlab.com/medicaldataworks/beslissamen/backend:$1
docker pull registry.gitlab.com/medicaldataworks/beslissamen/frontend:$1

#docker stop beslis_acc_backend
#docker rm beslis_acc_backend
docker stop beslis_acc_frontend
docker rm beslis_acc_frontend

#docker run -d \
#    --name beslis_acc_backend \
#    --network=beslissamen_acc \
#    -v /data/beslissamen/acc/containers/backend/application.yml:/app/application.yml \
#    --link beslis_acc_db:dbhost \
#    -p 20081:8081 \
#    registry.gitlab.com/medicaldataworks/beslissamen/backend:$1

docker run -d \
    --name beslis_acc_frontend \
    --network=beslissamen_acc \
    -p 20080:80 \
    registry.gitlab.com/medicaldataworks/beslissamen/frontend:$1
