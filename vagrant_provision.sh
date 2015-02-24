#!/usr/bin/env bash

echo "Self update apt-get"
apt-get update

echo "Installing Git"
apt-get install -y git
