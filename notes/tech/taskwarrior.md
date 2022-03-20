# TaskWarrior Notes

# On This Page

- [TaskWarrior Notes](#taskwarrior-notes)
- [Server](#server)
    - [Troubleshooting](#troubleshooting)
        - [Can't connect to server](#cant-connect-to-server)
        - [expired certificate notes](#expired-certificate-notes)
- [show context in prompt](#show-context-in-prompt)
- [syncing tasks](#syncing-tasks)
    - [options to automate syncing](#options-to-automate-syncing)
- [Configuration](#configuration)
    - [a better way to organize the TW config](#a-better-way-to-organize-the-tw-config)
        - [my recipe](#my-recipe)

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

# show context in prompt
* [bash - How do I change my $PS1 on a Macbook for oh-my-zsh? - Stack Overflow: stackoverflow.com](https://stackoverflow.com/questions/35281630/how-do-i-change-my-ps1-on-a-macbook-for-oh-my-zsh)
* [Customization · ohmyzsh/ohmyzsh Wiki: github.com](https://github.com/ohmyzsh/ohmyzsh/wiki/Customization)

# syncing tasks
* out of the box, you have to sync tasks manually with the `task sync` command
* this is a bit of a pain, if you forget to sync, other clients won't have the latest updates
## options to automate syncing
* simplest option is to trigger a sync with every task command that is run with a bash function
```
function task() {
    command task "$@"
    command task sync
}
```
    * the disadvantage is that you you lose the ability to undo your changes before they get committed to the server
* one alternative is to this is to set up a cron job to run every X minutes
```
*/5 * * * * env TASKRC=~/.taskrc /usr/local/bin/task sync > /dev/null 2>&1;
```
    * however, you still kind of have the same problem as before
        * if you make a change a few seconds before the cron job runs, you will not be able to undo it 
        * if this happens, do the following 
            * modify the task 
            * do undo twice
                * h/t to me: 
                    *  [Workaround for undoing after a sync? · Discussion #2754 · GothenburgBitFactory/taskwarrior: github.com](https://github.com/GothenburgBitFactory/taskwarrior/discussions/2754)

# Configuration
* out of the box, TW has:
    * a taskrc file, which defaults to getting stored your home directory
    * a task directory, for storing your local task data, ssl pem files and hooks
## a better way to organize the TW config 
* default is fine for a simple setup
* for more complex setups (e.g. using multiple task databases), consider re-organizing your conf file and data directory
    * I find it less confusing, easier to maintain and keeps the home directory less cluttered
### my recipe
* create `./config/taskwarrior` directory
* create 4 directories within in this one:
    * `data`
        * within this directory add one directory for each tw database you use:
            * `personal`
            * `work`
        * in each directory, put your `*.data` files
        * also put your `hooks` directory in here
    * `pem_files`
        * within this directory add one directory for each tw database you use:
            * `personal`
            * `work`
        * put the appropriate `.pem` files in these directories
    * `rc`
        * add one appropriately named rc config file here for each database
    * `themes`
        * add in your theme files to this directory
* don't forget to edit your task rc config files so they can find the new locations of your data, certs, and themes
* since I maintain a dot files repo and the config files and theme are symlinked to files located elsewhere on my machine
* I've also added a `~/.taskrc` symlink to my default database (work)
* I share aliases between rc config by creating a separate file for aliases
    * place it in my `rc` directory (see above) 
    * include it with the `include` directive inside each rc config file
