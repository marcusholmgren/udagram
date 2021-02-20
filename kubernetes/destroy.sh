#!/usr/bin/env bash

echo "Delete Deployments"

kubectl delete -f udagram_feed_deployment.yml
kubectl delete -f udagram_user_deployment.yml
kubectl delete -f udagram_proxy_deployment.yml
kubectl delete -f udagram_client_deployment.yml


echo "Delete Services"

kubectl delete -f udagram_feed_service.yml
kubectl delete -f udagram_user_service.yml
kubectl delete -f udagram_proxy_service.yml
kubectl delete -f udagram_client_service.yml


echo "Kubernetes Services"

kubectl get service
