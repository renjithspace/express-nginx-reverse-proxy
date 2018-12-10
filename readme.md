# ExpressJS Nginx reverse proxy
Serve ExpressJS app on Nginx web server with reverse proxy

#### Serve
1. Serve express app
```
$ npm start
```
2. Add Nginx server block
```
$ mv express-app /etc/nginx/sites-available/
$ ln -s /etc/nginx/sites-available/express-app /etc/nginx/sites-enabled/
```
3. Enable port and restart Nginx
```
$ iptables -I INPUT 1 -i eth0 -p tcp --dport $port -j ACCEPT
$ systemctl restart nginx
```
Now the port 8000 running Express app will available on port 80 via Nginx reverse proxy