```
docker
k3d
kubectl
```


# k3d
```
curl -s https://raw.githubusercontent.com/rancher/k3d/main/install.sh | bash

k3d --version

k3d cluster delete vwx-cluster

```

# kubectl
```
https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/
```


k3d cluster create vwx-cluster

k3d cluster delete vwx-cluster

k3d cluster list

kubectl cluster-into


```


# docker
```
docker build -t algebraburger/dotnetist-web:v1 .
docker login
docker push algebraburger/dotnetist-web:v1
```

# redeployment
```
k3d cluster delete vwx-cluster
k3d cluster create vwx-cluster
kubectl apply -f deployment.yaml
kubectl get service dotnetist-web-service
```

```
kubectl apply -f deployment.yaml

kubectl get service dotnetist-web-service
```

```
NAME                    TYPE           CLUSTER-IP     EXTERNAL-IP   PORT(S)        AGE
dotnetist-web-service   LoadBalancer   10.43.54.233   172.22.0.2    80:31705/TCP   2m52s

```

http://172.22.0.2:31705

