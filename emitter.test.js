"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const originalEmitter_1 = require("./originalEmitter");
test("add handlers with first Signature", () => {
    const weatherEmitter = new originalEmitter_1.default();
    const lightRainHandler = () => console.log("It is raining");
    weatherEmitter.on({ "rain": lightRainHandler });
    expect(weatherEmitter.handlers["rain"]).toEqual([lightRainHandler]);
});
test("add handlers with second Signature", () => {
    const weatherEmitter = new originalEmitter_1.default();
    const lightRainHandler = () => console.log("It is raining");
    weatherEmitter.on("rain", lightRainHandler);
    expect(weatherEmitter.handlers["rain"]).toEqual([lightRainHandler]);
});
test("handlers work", () => {
    const weatherEmitter = new originalEmitter_1.default();
    const lightRainHandler = () => "It is raining";
    const mockedHandler = jest.fn(lightRainHandler);
    weatherEmitter.on("rain", mockedHandler);
    weatherEmitter.trigger('rain');
    expect(mockedHandler).toHaveBeenCalled();
});
//# sourceMappingURL=emitter.test.js.map