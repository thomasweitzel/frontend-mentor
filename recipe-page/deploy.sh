#!/bin/bash

# change working directory
cd "$(dirname "$0")"

# delete distribution folder
rm -rf dist/

# build website
npm run build

# synchronize to server
rsync                  \
  --archive            \
  --recursive          \
  --update             \
  --stats              \
  --compress           \
  --chown=web2:client1 \
  dist/                \
  root@netcup:/var/www/pureandroid.com/web/frontendmentor/recipe-page
