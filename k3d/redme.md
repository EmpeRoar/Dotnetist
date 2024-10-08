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



```
https://hackernoon.com/how-to-deploy-apps-to-a-local-k3d-cluster
```


```
docker build -t dotnetist-web-local:latest .
k3d registry create vwx-registry --port 5050
```



```

k3d cluster create vwx-cluster --port "9900:80@loadbalancer" --registry-use k3d-vwx-registry:5050 --registry-config registries.yaml

```

```

docker tag dotnetist-web-local:latest localhost:5050/dotnetist-web-local:v0.0.1

docker push localhost:5050/dotnetist-web-local:v0.0.1


kubectl create deployment dotnetist-web-server --image=k3d-vwx-registry:5050/dotnetist-web-local:v0.0.1


kubectl create service clusterip dotnetist-web-server --tcp=9091:9091
# kubectl create service loadbalancer dotnetist-web-server --tcp=9091:9091

kubectl apply -f .\ingress.yaml
```

## UPDATE
```




```