#!/bin/bash



# clone the repo into temp folder and cd into /frontend and run `npm install` and `npm run build`
DIR=$(mktemp -d)
cd $DIR
git clone https://github.com/zqxyz/zquintxyz.git
cd zquintxyz/frontend
npm install
npm run build
sudo rm -rf /var/www/html
sudo mkdir /var/www/html
sudo mv frontend/dist/* /var/www/html/
sudo mv frontend/dist/.htaccess /var/www/html/
// update api files
cd ../
