# TaskWarrior Notes

# On This Page

- [TaskWarrior Notes](#taskwarrior-notes)
- [Server](#server)
    - [Troubleshooting](#troubleshooting)
        - [Can't connect to server](#cant-connect-to-server)
        - [expired certificate notes](#expired-certificate-notes)

# Server
## Troubleshooting
### Can't connect to server
    Could not connect to host port
    Sync failed.  Could not connect to the Taskserver.
* log into server
* `cd /var/taskd`
* `sudo su`
* `./stop.sh`
* `./start.sh`
* should now be able to connect
    * if not, check the firewall settings 
        * make sure port tw is set to is open
### expired certificate notes
* check main server certificate has renewed
    * if not, renew with certbot
        * `certbot certonly`
        * select option 1 to spin up webserver
        * check certs are renewed by checking timestamps of files /etc/letsencrypt/live/example.com
        * should reflect today's date
* `certtool --verify --infile blah.pem`
* `certtool -i --infile server.key.pem`
* `cp /etc/letsencrypt/live/example.com/fullchain.pem server.cert.pem`
* An error occurred while fetching Certbot snap plugins: make sure the snapd service is running.
* must be running debian 10+ for snapd to use certbot
    * lsb_release -a
* service snapd start
* renew cert
* make sure snapd is started
* copy over pem files in /etc/ to taskwarrior `pki` directory
* privkey.pem -> server.key.pem
* fullchain.pem -> server.cert.pem
* make sure cert files in pki directory are owned by taskd
* restart taskd with start/stop scripts
* taskwarrior should now sync


