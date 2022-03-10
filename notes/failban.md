# On This Page

- [fail2ban Notes](#fail2ban-notes)

# fail2ban Notes

* check all blocked ip addresses
    * sudo iptables -n -L --line-number | grep <ip>
* fail2ban-client set YOURJAILNAMEHERE unbanip IPADDRESSHERE
