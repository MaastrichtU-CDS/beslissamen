FROM java:8-jre

RUN mkdir /app
COPY run.sh /run.sh
COPY beslis-samen-backend-1.0.4-SNAPSHOT.jar /app/beslis-samen-backend-1.0.0.jar
COPY application.yml /app/application.yml

EXPOSE 8080
EXPOSE 8081

CMD ["sh", "run.sh"]
