# jQuery Route

<a href="http://dev.victorleonardo.com/jquery-route/" target="_blank">Demo</a><br />
<a href="https://raw.githubusercontent.com/victorlss/jquery-route/master/src/jquery.route.js" target="_blank">Latest Version Download (1.1.0)</a>

#### Example
```html
<div id="content"></div>

<script type="text/javascript" src="jquery.route.js"></script>
<script type="text/javascript">
  $("#content").route({
    default: "home",
    routes: [
      {
        url: "home", // http://your-server.com/#home
        view: "views/home.html"
      },
      {
        url: "users", // http://your-server.com/#users
        view: "views/users/index.html"
      },
      {
        url: "users/add", // http://your-server.com/#users/add
        view: "views/users/add.html"
      },
      {
        url: "users/{id}", // http://your-server.com/#users/1
        view: "views/users/detail.html?id={id}"
      }
    ]
  });
</script>
```
#### Release notes

- 1.1
	- Route with params
- 1.0
	- First Release

Authors: <a href="https://github.com/victorlss" target="_blank">Victor Silva</a>
All Rights Reserved.<br />
Use, reproduction, distribution, and modification of this code is subject to the terms and conditions of the MIT license, available at <a href="http://www.opensource.org/licenses/mit-license.php" target="_blank">http://www.opensource.org/licenses/mit-license.php</a>.
