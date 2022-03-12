# Apache Notes

# On This Page

- [Apache Notes](#apache-notes)
- [Basic Authentication](#basic-authentication)
    - [htpasswd command](#htpasswd-command)
    - [apache config file](#apache-config-file)
    - [prevent brute force attacks](#prevent-brute-force-attacks)
    - [Reset password?](#reset-password)

# Basic Authentication
* [official docs](https://httpd.apache.org/docs/2.4/mod/mod_auth_basic.html)
* best choice when used with ssl
## htpasswd command
* [official docs](https://httpd.apache.org/docs/2.4/programs/htpasswd.html)
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
* With groups (`authz_groupfile` module)
    ```
            <Directory "/var/www/html/path/to/dir/subdir">
                AllowOverride AuthConfig
                AuthType Basic
                AuthName "Restricted Files"
                # (Following line optional)
                AuthBasicProvider file
                AuthUserFile "/var/www/html/password_file_name"
                Require user user_name
                AuthGroupFile "/var/www/html/groups"
                Require group group1 group2
                ErrorDocument 401 "<html><meta http-equiv=\"refresh\" content=\"0;url=/path/to/file.html\"></html>"
        </Directory>
    ```
* ErrorDocument setting
## prevent brute force attacks    
* fail2ban
* has an [apache-auth] config
    * how to determine if it's turned on?
        * `fail2ban-client status` 
            * will show up there if it's on

## Reset password?
* is there any way for a user to reset their password if they don't have access to the command line?     
* [PHP Apache2 Basic Auth Manager: github.com](https://github.com/rafaelgou/php-apache2-basic-auth-manager)
    * looks promising
    * but not password reset interface
    * 
