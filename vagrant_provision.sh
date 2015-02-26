#!/usr/bin/env bash

echo "*********************"
echo "Self update apt-get"
echo "*********************"
apt-get update

echo "*********************"
echo "Installing Git"
echo "*********************"
apt-get install -y git

echo "*********************"
echo "Installing Curl"
echo "*********************"
apt-get install -y curl

echo "*********************"
echo "Installing Node"
echo "*********************"
curl -sL https://deb.nodesource.com/setup | sudo bash -
apt-get install -y nodejs
apt-get install -y npm
npm install -g npm
apt-get install -y build-essential

echo "*********************"
echo "Updating yo bower grunt-cli"
echo "*********************"
npm install --global yo 
npm install --global bower 
npm install --global grunt-cli
npm install --global generator-angular@0.9.2
