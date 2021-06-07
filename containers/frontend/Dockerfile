FROM nginx:alpine

ADD ./html /usr/share/nginx/html
ADD ./default.conf /etc/nginx/conf.d/default.conf
ADD ./prostate.htpasswd /etc/nginx/prostate.htpasswd

EXPOSE 80
