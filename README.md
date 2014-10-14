## Usage:
```
Configurable(myObject);
myObject.options('foo', 'bar');
myObject.options({baz: 'bat'});
myObject.options(); // returns {foo: 'bar', baz: 'bat'}
myObject.options('foo'); // returns 'bar'
```
## Caveats:
This will add two properties to your object:
  * `.option`: Method for accessing the options
  * `.__opts`: the options themselves
You may optionally add the .validateOptions(options) method, which inspects a prospective options array and returns true/false based on whether it is valid or not. If this method exists, `.option` will automatically call it when setting, and throw an Error if the newly-selected options would be invalid.
