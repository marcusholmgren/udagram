#!/usr/bin/env bash

echo "Create Deployments"

kubectl apply -f udagram_feed_deployment.yml
kubectl apply -f udagram_user_deployment.yml
kubectl apply -f udagram_proxy_deployment.yml
kubectl apply -f udagram_client_deployment.yml


echo "Create Services"

kubectl apply -f udagram_feed_service.yml
kubectl apply -f udagram_user_service.yml
kubectl apply -f udagram_proxy_service.yml
kubectl apply -f udagram_client_service.yml


echo "Kubernetes Services"

kubectl get deployment,service

