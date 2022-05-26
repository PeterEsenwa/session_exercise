"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create an Emitter class
class Emitter {
    constructor() {
        this.handlers = {};
        this.trigger = (type, ...args) => {
            var _a;
            // run all handlers for the event type
            (_a = this.handlers[type]) === null || _a === void 0 ? void 0 : _a.forEach(handler => handler(...args));
        };
        this.off = (type, handler) => {
            var _a;
            // remove only specific handler from the array
            this.handlers[type] = (_a = this.handlers[type]) === null || _a === void 0 ? void 0 : _a.filter(h => h !== handler);
        };
    }
    on(typeOrHandlerGroups, handler) {
        // since we can have multiple handlers for the same type
        // we need to add the handler to the array
        if (typeof typeOrHandlerGroups === 'string') {
            if (!handler) {
                return;
            }
            this.handlers = insertHandler(this.handlers, typeOrHandlerGroups, handler);
        }
        else {
            Object.entries(typeOrHandlerGroups).forEach(([type, handler]) => {
                this.handlers = insertHandler(this.handlers, type, handler);
            });
        }
    }
}
exports.default = Emitter;
const insertHandler = (handlers, type, handler) => {
    handlers[type] = [...(handlers[type] || []), handler];
    return handlers;
};
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