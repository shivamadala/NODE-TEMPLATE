#!/bin/bash
set -e
docker build -t YOUR_DOCKER_USERNAME/my-backend ./backend
docker build -t YOUR_DOCKER_USERNAME/my-frontend ./frontend

