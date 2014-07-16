## tofu ![npm](https://badge.fury.io/js/tofu.png)

a all in one command line music player

### Installation
````
$ [sudo] npm install tofu -g
````

### Useage

start the command line inferface:
```
$ tofu
```
change configs:
```
$ tofu config
```
start a api service:
```
$ tofu serve
```

### API endpoints
tofu provides a set of HTTP API endpoints for develop, the default host is `http://localhost:9090`

- GET `/playlist` : get the infomation of current playing list
- GET `/playing`: get the infomation of current playing song
- POST `/play`: start playing
- POST `/stop`: stop playing
- POST `/next`: switch to next song, and return the next song's infomation

### Example
this is a simple example which using `tofu` as a module to play:
````javascript
var tofu = require('tofu');

tofu
  .set('douban.fm', { email: 'i@mymail.com', password: '******'})
  .set('163music', { email: 'my163mail@163.com', password: '****'})
  .set('default', 'douban.fm');

tofu
  .play()
  .switchTo('163music')
  .stop();

tofu
  .getPlaylist(function(err, list){
    // do sth. with the list
  });
````

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2014 turing &lt;o.u.turing@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
![docor](https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/doctor.png)
built upon love by [docor](https://github.com/turingou/docor.git) v0.1.3