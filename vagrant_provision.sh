#!/usr/bin/env bash

echo "Self update apt-get"
apt-get update

echo "Installing Git"
apt-get install -y git

echo "Updating to npm 2.6.0"
npm install -g npm@2.6.0

echo "Updating yo bower grunt-cli"
npm install --global yo bower grunt-cli
