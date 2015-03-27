# conference_webapp

# Here is the url http://104.236.204.59:8080/api/conference

# Instructions on how to build this docker image.
docker build -t some-content-nginx .
docker run -d -P --name some-nginx some-content-nginx
docker ps
docker stop some-nginx
docker rm some-nginx
