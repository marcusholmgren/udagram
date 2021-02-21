

## Containers and Microservices

![Screenshot of DockerHub shows the images](Docker_Hub_2021-02-20.png "Screenshot of DockerHub shows the images")


## Independent Releases and Deployments

![Screenshot of the Travis CI interface shows a successful build and deploy job](Travis-CI_2021-02-20.png "Screenshot of the Travis CI interface shows a successful build and deploy job")


## Service Orchestration with Kubernetes

deployment.apps/udagram-feed-api scaled from 1/1 to 2/2 

### Kubernetes `kubectl get pods` output
![Some pods in AWS EKS](eks_pods_2021-02-21.png "Screenshot of some pods in AWS EKS")



### Kubernetes `kubectl describe services` output
![Some services in AWS EKS](eks_services_2021-02-21.png "Screenshot of some services in AWS EKS")




### Kubernetes `kubectl describe hpa` output
![Some hpa in AWS EKS](hpa_2021-02-21.png "Screenshot of some hpa in AWS EKS")


### Kubernetes `kubectl logs <your pod name>` output

![Some feed logs in AWS EKS](feed_logs_2021-02-21.png "Screenshot of some feed logs in AWS EKS")


![Some user and proxy logs in AWS EKS](user_and_proxy_logs_2021-02-21.png "Screenshot of some user and proxy logs in AWS EKS")

Screenshot of Kubernetes services shows a reverse proxy


Screenshot of Kubernetes cluster of command `kubectl describe hpa` has autoscaling configured with CPU metrics.


## Debugging, Monitoring, and Logging

Both of the logs screenshots show request being accepted and processed 2021-02-21 around 09:00