# Configurable

A simple way of setting up options for some arbitrary JS object. Makes settings (and handling defaults) a breeze.

## Usage:
```
Configurable(myObject);
myObject.options('foo', 'bar');
myObject.options({baz: 'bat'});
myObject.options(); // returns {foo: 'bar', baz: 'bat'}
myObject.options('foo'); // returns 'bar'

// customizeable "options" method name
Configurable(otherObject, 'params');
otherObject.params('foo', 'bar');
otherObject.params('foo'): // returns 'bar'

// how to implement default settings in a constructor
function myObject(options) {
    Configurable(this);
    this.options(this.defaultOptions);
    if (options) {
        this.options(options);
    }
}
myObject.prototype.defaultOptions = { foo: 'bar', baz: 'bat' };
var x = new myObject({ foo: 'override' });
x.options(); // returns { foo: 'override', baz: 'bat' });
```
## Caveats:
This will add two properties to your object:

  * `.option`: Method for accessing the options
  * `.__opts`: the options themselves

You may optionally add the `.validateOptions(options)` method, which inspects a prospective options array and returns true/false based on whether it is valid or not. If this method exists, `.option` will automatically call it when setting, and throw an Error if the newly-selected options would be invalid.
