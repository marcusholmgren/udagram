# Kubernetes


Kubernetes [cheatsheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)

## Connect to AWS EKS

Ensure that you have AWS CLI installed and configured to use the [create-kubeconfig](https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html) command.

```
aws eks --region us-east-1 update-kubeconfig Demo
```


## Deploy

```
kubectl apply -f udagram_deployment.yml
```

Should respond with `deployment.apps/udagram-app created` is successful.

```
kubectl apply -f udagram_service.yml
```

Should respond with `service/udagram-app created` if successful.


```
kubectl rollout status deployment.apps/udagram-app
```

## Delete

```
kubectl delete -f udagram_service.yml 
```
Should respond with `service "udagram-service" deleted` if successful

```
kubectl delete -f udagram_deployment.yml 
```
Should response with `deployment.apps "udagram-app" deleted` if successful

## Basic commands

Show running pods
```
kubectl get pods
```

Show service information
```
kubectl describe services
```

Show cluster information
```
kubectl cluster-info
```


```
kubectl -n default get svc 
```

Get ExternalIPs of all nodes
````
kubectl get nodes -o jsonpath='{.items[*].status.addresses[?(@.type=="ExternalIP")].address}
````



```
kubectl get svc udagram-app -o yaml
```


Scale 

```
kubectl scale --replicas=0 -f udagram_deployment.yml
```



### Rolling upgrade

Update container version, without modifying the Deployment YAML

```
kubectl set image deployment/myapp-deployment nginx=nginx=1.9.1
```


## Connect to running pod

kubectl get pod udagram-app-77946fb74b-5kx9m 

kubectl exec --stdin --tty udagram-app-77946fb74b-5kx9m  -- /bin/bash



###

kubectl create configmap mountains --from-literal=aKey=aValue --from-literal=14ers=www.14ers.com

kubectl get configmap mountains

Data in YAML format
kubectl get configmap mountains -o yaml

Data in description form
kubectl describe configmap mountains


Create from file
```
kubectl create configmap game-config-2 --from-file=configure-pod-container/configmap/game.properties
```

Read from .env file

```
kubectl create configmap udagram-config --from-env-file ../.env

kubectl create configmap db-configmap --from-env-file db.properties
```

#### Secrets

kubectl create secret generic db-password --from-literal=password=MyDbPassw0rd

kubectl get secret db-password

kubectl get secret db-password -o yaml



Dry run 

kubectl create secret generic db-password --from-literal=password=MyDbPassw0rd --dry-run 

cat my-secret.yaml


Read secrets

kubectl get secrets



## Horizontal Pod Autoscaler

```
kubectl autoscale deployment udagram-feed-api --cpu-percent=50 --min=1 --max=10
```