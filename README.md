# jQuery Route

<a href="https://raw.githubusercontent.com/victorlss/jquery-route/master/jquery.route.js" target="_blank">Download</a>

##### Example:
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
      }
    ]
  });
</script>
```

Authors: <a href="https://github.com/victorlss" target="_blank">Victor Silva</a>
All Rights Reserved.<br />
Use, reproduction, distribution, and modification of this code is subject to the terms and conditions of the MIT license, available at <a href="http://www.opensource.org/licenses/mit-license.php" target="_blank">http://www.opensource.org/licenses/mit-license.php</a>.
