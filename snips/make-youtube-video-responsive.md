# On This Page

- [Make Youtube videos responsive](#make-youtube-videos-responsive)

# Make Youtube videos responsive

* throw the embed code from youtube in a div tag with class of `iframe-container`
* Add this css to the styles:
```
.iframe-container{
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; 
  height: 0;
}
.iframe-container iframe{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

