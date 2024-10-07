```
k3d cluster delete vwx-cluster
k3d cluster create vwx-cluster
k3d cluster create vwx-cluster --port "31000-31005:31000-31005@loadbalancer"


kubectl apply -f deployment.yaml
kubectl get service dotnetist-web-service
localhost:31001

k3d cluster edit vwx-cluster --port-add "31000:31005-31000:31005@loadbalancer"
```

### deployment.yaml
```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: dotnetist-web
spec:
  replicas: 1
  selector:
    matchLabels:
      app: dotnetist-web
  template:
    metadata:
      labels:
        app: dotnetist-web
    spec:
      containers:
      - name: dotnetist-web
        image: algebraburger/dotnetist-web:v1
        ports:
        - containerPort: 80 # Change this if your app runs on a different port
---
apiVersion: v1
kind: Service
metadata:
  name: dotnetist-web-service
spec:
  # type: LoadBalancer # Changed from NodePort to LoadBalancer
  type: NodePort
  ports:
    - port: 80
      targetPort: 80
      nodePort: 31001
  selector:
    app: dotnetist-web
```
