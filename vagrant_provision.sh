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
echo "Installing Vim"
echo "*********************"
apt-get install -y vim

echo "*********************"
echo "Installing Curl"
echo "*********************"
apt-get install -y curl

echo "*********************"
echo "Installing Node"
echo "*********************"
curl https://raw.githubusercontent.com/creationix/nvm/v0.23.3/install.sh | bash
cat ~/.nvm/nvm.sh >> ~/.bashrc
source ~/.nvm/nvm.sh

nvm install stable
nvm use stable

echo "nvm use stable" >> ~/.bashrc

apt-get install -y build-essential

echo "*********************"
echo "Updating yo bower grunt-cli"
echo "*********************"
npm install --global yo bower grunt-cli generator-cg-angular generator-karma
