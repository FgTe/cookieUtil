# cookieUtil
This module provides three function, **get** **set** and **unset**, to access cookie comfily on browser.
## Propertys
### get(name)
Retrieve value of **name**.
### set(name, value, options)
This function accepts three arguments:
1. **name** (required String)  name of cookie you set
2. **value**(required String) value of cookie you set
3. **options**(Object) an object describing options of cookie you set
   >Expected propertys of this object is follow:
   ```
   {
     expires, /*Date*/
     path, /*String*/
     domain, /*String*/
     maxAge, /*Number*/
     secure /*Boole*/
   }
   ```
### unset(name)
Remove cookie **name**.
