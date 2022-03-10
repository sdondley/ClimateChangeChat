# On This Page

- [Apache Notes](#apache-notes)
- [Basic Authentication](#basic-authentication)
    - [htpasswd command](#htpasswd-command)
    - [add to apache config file to password protect a directory](#add-to-apache-config-file-to-password-protect-a-directory)
    - [prevent brute force attacks](#prevent-brute-force-attacks)

# Apache Notes

# Basic Authentication
* best choice when used with ssl
## htpasswd command
* used for managing user names and password
    * create password file with new user
        * `htpasswd -c PasswordFilename username`
    * Add or modify username2 in the password file Filename 
        * `htpasswd Filename username2`
## add to apache config file to password protect a directory
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
