#!/bin/bash

# Define variables
REMOTE_USER="ubuntu"    # Replace with your remote user
REMOTE_HOST="130.61.128.218"    # Replace with your remote host
REMOTE_DIR="~/app"                # Remote directory where you want to deploy the app
REPO_URL="WKLEJ_TU_KLUCZ_GITHUB@github.com/Snowyy4K/uminekostrona.git"  # Replace with your repo URL

# SSH into the remote instance, update or clone the repo, and perform deployment
ssh -i ~/.ssh/umineko.key $REMOTE_USER@$REMOTE_HOST << EOF
    cd $REMOTE_DIR
    if [ -d "app" ]; then
        cd app
        git pull origin main  # Assuming the default branch is 'main', change if necessary
        npm install
        npm run build
        npm start
    else
        git clone $REPO_URL app
        cd app
        npm install
        npm run build
        npm start
    fi
EOF