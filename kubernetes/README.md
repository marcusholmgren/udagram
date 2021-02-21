# Kubernetes

Collection of useful Kubernetes commands. 

Kubernetes [cheatsheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)

## Connect to AWS EKS

Ensure that you have AWS CLI installed and configured to use the [create-kubeconfig](https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html) command.

```
aws eks --region us-east-1 update-kubeconfig --name Demo
```


## Deploy

The containers require environments variables to be set. One way to create the is to deploy the config map.

```
kubectl create -f udagram_configmap.yml
```
Should respond with `configmap/udagram-config created` if successful.


```
kubectl apply -f udagram_deployment.yml
```

Should respond with `deployment.apps/udagram-app created` if successful.

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

```
kubectl get pod udagram-app-77946fb74b-5kx9m 
```

```
kubectl exec --stdin --tty udagram-app-77946fb74b-5kx9m  -- /bin/bash
```


### Environment variables

Read from .env file

```
kubectl create configmap udagram-config --from-env-file ../.env
```

## Horizontal Pod Autoscaler

```
kubectl autoscale deployment udagram-feed-api --cpu-percent=50 --min=1 --max=10
```