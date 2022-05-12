// Create an Emitter class
class Emitter {
    constructor() {
        this.handlers = {};
        this.trigger = (type, ...args) => {
            var _a;
            // run all handlers for the event type
            (_a = this.handlers[type]) === null || _a === void 0 ? void 0 : _a.forEach(handler => handler(...args));
        };
        this.on = (type, handler) => {
            // since we can have multiple handlers for the same type
            // we need to add the handler to the array
            this.handlers[type] = [...(this.handlers[type] || []), handler];
        };
        this.off = (type, handler) => {
            var _a;
            // remove only specific handler from the array
            this.handlers[type] = (_a = this.handlers[type]) === null || _a === void 0 ? void 0 : _a.filter(h => h !== handler);
        };
    }
}
// Usage
const weatherEmitter = new Emitter();
const movieEmitter = new Emitter();
const lightRainHandler = () => console.log('It is raining');
weatherEmitter.on('rain', lightRainHandler);
const heavyRainHandler = () => console.log('It is raining very hard');
weatherEmitter.on('rain', heavyRainHandler);
movieEmitter.on('rain', () => console.log('Have you seen Doctor Strange?'));
// test the emitter works with multiple handlers for the same event
weatherEmitter.trigger('rain');
weatherEmitter.off('rain', lightRainHandler);
// test that the handlers are removed
weatherEmitter.trigger('rain');
// test that handlers don't clash
movieEmitter.trigger('rain');
//# sourceMappingURL=originalEmitter.js.map