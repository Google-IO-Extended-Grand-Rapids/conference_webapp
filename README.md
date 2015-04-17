# conference_webapp

# Here is the url http://104.236.204.59/

# Instructions on how to build this docker image.
vagrant up
vagrant ssh
cd /vagrant
docker build -t mccrackend/conference_website .
docker run --name website -p 9000:80 -d mccrackend/conference_website:latest
(then in your local machine's browser, visit: http://localhost:9000/)
