#!/bin/bash
set -e
minikube start --driver=docker
helm upgrade --install fullstack-app ./helm-charts --namespace dev --create-namespace

