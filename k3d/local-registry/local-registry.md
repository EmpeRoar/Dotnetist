```
k3d cluster delete vwx-cluster
k3d registry create vwx-registry --port 5050

docker build -t dotnetist-web:v7 .
docker tag dotnetist-web:v7 localhost:5050/dotnetist-web:v0.7.0
docker push localhost:5050/dotnetist-web:v0.7.0


k3d cluster create vwx-cluster --port "4200:80@loadbalancer" --registry-use k3d-vwx-registry:5050 --registry-config registries.yaml


kubectl delete deployment dotnetist-web
kubectl delete service dotnetist-web-service


kubectl apply -f deployment.yaml

kubectl get deployments
kubectl get services

kubectl port-forward service/dotnetist-web-service 4200:80
```