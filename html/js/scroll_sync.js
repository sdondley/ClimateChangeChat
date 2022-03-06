function scrollBy(element, value, duration, easingFunc) {
  var startTime;
  var startPos = element.scrollTop;
  var clientHeight = element.clientHeight;
  var maxScroll = element.scrollHeight - clientHeight;
  var scrollIntendedDestination = startPos + value;
  // low and high bounds for possible scroll destinations
  var scrollEndValue = Math.min(Math.max(scrollIntendedDestination, 0), maxScroll)
  // create recursive function to call every frame
  var scroll = function(timestamp) {
    startTime = startTime || timestamp;
    var elapsed = timestamp - startTime;
    element.scrollTop = startPos + (scrollEndValue - startPos) * easingFunc(elapsed / duration);
    elapsed <= duration && window.requestAnimationFrame(scroll);
  };
  // call recursive function
  if (startPos != scrollEndValue) window.requestAnimationFrame(scroll);
}


//var myInterval = setInterval(scroll_toc, 1000);

function scroll_toc() {

                var height = window.innerHeight;
                var toc_height = document.querySelector('#toc div.scrollsync').offsetHeight;
                if (toc_height > height-160) {
                    var div_scroll = document.querySelector('#toc div.scrollsync');
                    var li = document.querySelector('#toc div.scrollsync li.active');
                    //var toc = document.getElementById('toc');

                    var divPos = div_scroll.getBoundingClientRect();
                    var liPos = li.getBoundingClientRect();


                    var halfway = (toc_height / 2).toFixed();
                    var distance;
                    if (liPos.top < 300 || liPos.top > toc_height - 200) {
                        distance = parseInt(liPos.top) - parseInt(halfway);
                    } else {
                        return;
                    }

                    var easeInOutCubic = function(t) {
                      return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
                    }

                    scrollBy(div_scroll, distance , 1000, easeInOutCubic );

                }
}



let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
window.addEventListener('DOMContentLoaded', () => {

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
                document.querySelector(`#toc div.scrollsync li a[href="#${id}"]`).parentElement.classList.add('active');

/*    setTimeout(
        scroll_toc(),
      1000
);*/
                scroll_toc();

        } else {
                document.querySelector(`#toc div.scrollsync li a[href="#${id}"]`).parentElement.classList.remove('active');

/*    setTimeout(
        scroll_toc(),
      1000
);*/
    //            scroll_toc();
        }
    });
});

// Track all sections that have an `id` applied
document.querySelectorAll('#content a[id]').forEach((a) => {
    observer.observe(a);
});

});
