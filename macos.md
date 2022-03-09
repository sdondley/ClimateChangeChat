# macOS Notes

# Generate Ssh Key
* From [How to generate an SSH key pair in Mac OS?: www.siteground.com](https://www.siteground.com/kb/how_to_generate_an_ssh_key_pair_in_mac_os/)
```
ssh-keygen -t rsa
```

# Set up Ssh Agent
* steps below lifted from this great tutorial
    * [Proper use of SSH client in Mac OS X - GetPageSpeed: www.getpagespeed.com](https://www.getpagespeed.com/work/proper-use-of-ssh-client-in-mac-os-x)
## Summary
* `ssh-keygen -t rsa  -C "s@dondley.com (iMac-2014)"`
* accept defaul dir
* add a passphrase (for real)
* copy to clipboard
    * `cat ~/.ssh/id_rsa.pub | pbcopy` 
        * add to `authorized_keys` on remote machine 
* add ~/.ssh/config file
    UseKeychain yes
    AddKeysToAgent yes 
* `ssh-add -K`
    * type in passphrase (only time you ever need to do it)
 
