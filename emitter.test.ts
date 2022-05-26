import Emitter from "./originalEmitter";

test("add handlers with first Signature", () => {
	const weatherEmitter = new Emitter();
	const lightRainHandler = () => console.log("It is raining");
	weatherEmitter.on({"rain": lightRainHandler});

	expect(weatherEmitter.handlers["rain"]).toEqual([lightRainHandler]);
})

test("add handlers with second Signature", () => {
	const weatherEmitter = new Emitter();
	const lightRainHandler = () => console.log("It is raining");
	weatherEmitter.on("rain", lightRainHandler);

	expect(weatherEmitter.handlers["rain"]).toEqual([lightRainHandler]);
})

test("handlers work", () => {
	const weatherEmitter = new Emitter();
	const lightRainHandler = () => "It is raining";

	const mockedHandler = jest.fn(lightRainHandler)

	weatherEmitter.on("rain", mockedHandler);
	weatherEmitter.trigger('rain')

	expect(mockedHandler).toHaveBeenCalled()
})
