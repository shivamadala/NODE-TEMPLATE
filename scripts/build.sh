#!/bin/bash
set -e
docker build -t shimadal/my-backend ./backend
docker build -t shimadal/my-frontend ./frontend