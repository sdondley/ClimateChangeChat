# Apache Notes

# On This Page

- [Apache Notes](#apache-notes)
- [Basic Authentication](#basic-authentication)
    - [htpasswd command](#htpasswd-command)
    - [apache config file](#apache-config-file)
    - [prevent brute force attacks](#prevent-brute-force-attacks)

# Basic Authentication
* [official docs](https://httpd.apache.org/docs/2.4/mod/mod_auth_basic.html)
* best choice when used with ssl
## htpasswd command
* used for managing user names and password
    * create password file with new user
        * `htpasswd -c PasswordFilename username`
    * Add or modify username2 in the password file Filename 
        * `htpasswd Filename username2`
## apache config file
* sample config for pw protecting a directory
    ```
    <Directory "/var/www/html/path/to/dir">
            AllowOverride AuthConfig
            AuthType Basic
            AuthName "Restricted Files"
            AuthBasicProvider file
            AuthUserFile "/var/www/html/password_file_name"
            Require user user_name
    </Directory>
    ``` 
## prevent brute force attacks    
* fail2ban
* has an [apache-auth] config
    * how to determine if it's turned on?
        * `fail2ban-client status` 
            * will show up there if it's on
