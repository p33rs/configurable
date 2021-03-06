/**
 * Makes an object configurable.
 * @param {object} target The object to make configurable
 * @param {string} methodName Use a name besides 'options' for access
 */
function Configurable(target, methodName) {

    if (!methodName) {
        methodName = 'options';
    } else if (typeof methodName !== 'string') {
        throw new TypeError('expected string name');
    }
    target[methodName] = Configurable.prototype.options;
    return target;

}

Configurable.prototype.options = function(options, option) {
    
    if (!this.hasOwnProperty('__opts')) {
        this.__opts = {};
    }
    
    var newOptions = this.__opts;
    if (typeof option !== 'undefined') {
        if (typeof options === 'string') {
            newOptions[options] = option;
        } else {
            throw new TypeError('Invalid property name');
        }
    } else if (typeof options !== 'undefined') {
        if (typeof options === 'string' && this.__opts.hasOwnProperty(options)) {
            return this.__opts[options];
        } else if (typeof options === 'object') {
            for (var i in options) {
                if (options.hasOwnProperty(i)) {
                    newOptions[i] = options[i];
                }
            }
        } else {
            throw new TypeError('Invalid option');
        }
    } else {
        return this.__opts;
    }
    
    if (typeof this.validateOptions !== 'function' || this.validateOptions(newOptions)) {
        this.__opts = newOptions;
    } else {
        throw Error('invalid option');
    }
    
    return this;
};
