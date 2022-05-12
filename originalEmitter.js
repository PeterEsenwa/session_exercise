var handlers = {};
var trigger = function (type) {
    handlers[type]();
};
var on = function (type, handler) {
    handlers[type] = handler;
};
// Usage
on('foo', function () {
    console.log('Do foo');
});
trigger('foo');
// log: Do foo
//# sourceMappingURL=originalEmitter.js.map