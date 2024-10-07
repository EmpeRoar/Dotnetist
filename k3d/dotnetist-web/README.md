# DotnetistWeb

```
k3d cluster delete vwx-cluster
k3d cluster create vwx-cluster
k3d cluster create vwx-cluster --port "31000-31005:31000-31005@loadbalancer"

kubectl apply -f deployment.yaml
kubectl get service dotnetist-api-service
localhost:31001
```