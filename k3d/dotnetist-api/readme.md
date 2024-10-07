```
docker build -t algebraburger/dotnetist-api:v0.0.1 .
docker run -d -p 5001:8080 --name dotnetist-api algebraburger/dotnetist:v0.0.1
```

```
k3d cluster delete vwx-cluster
k3d cluster create vwx-cluster
k3d cluster create vwx-cluster --port "31000-31005:31000-31005@loadbalancer"

kubectl apply -f deployment.yaml
kubectl get service dotnetist-api-service
localhost:31001

k3d cluster edit vwx-cluster --port-add "31000:31005-31000:31005@loadbalancer"
```
