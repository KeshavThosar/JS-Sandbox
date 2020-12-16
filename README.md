# JS Sanbox
Execute javascript in a sandboxed environment, without exposing the global variables.
You could also pass in custom context for use inside the sandbox

### Installation
Simply include the following code in your HTML Document. 
__Important:__ Make sure that you have the __sbx-worker.js__ file in the same directory as __js-sbx.js__  

```html
<script src="js-sbx.js"></script>
```

### Usage
```javascript
sdbxJS = JSSandbox(context, callback);
sdbxJS.execute(code);
```

### Example
```javascript
var context = {
                a: {
                    x: {
                        data: {
                            value: 12
                        }
                    },
                    y: 22
                    },

                b: {
                    x: 22,
                    y: 12
                    },
            };
var code = "return a.x.data.value == b.y";
sdbxJS = JSSandbox(context, function(data){console.log("Callback: "+ data)});
sdbxJS.execute(code);
```
__Output__
```
Callback: true
```
### Limitation/s
- Output for single expressions like ```5 == 5``` would be ```undefined```.To get around this, use ```return 5 == 5```

### Todos
 - Try to fix the current limitation
