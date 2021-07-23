# My learning Nginx on windows

```
Setup

cd docker-nodejs-builder

docker build -t khem/node-web-app .

docker run -p 9901:8080 -e APPID=9901 -d khem/node-web-app

```

---
> _Author: Nitinun Mana