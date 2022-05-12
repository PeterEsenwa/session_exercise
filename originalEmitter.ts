type Handler = (...args: unknown[]) => void

// Create an Emitter class
class Emitter {
	handlers: Record<string, Handler[]> = {}
	trigger = (type: string, ...args: unknown[]) => {
		// run all handlers for the event type
		this.handlers[type]?.forEach(handler => handler(...args))
	}
	on = (type: string, handler: Handler) => {
		// since we can have multiple handlers for the same type
		// we need to add the handler to the array
		this.handlers[type] = [...(this.handlers[type] || []), handler]
	}
	off = (type: string, handler: Handler) => {
		// remove only specific handler from the array
		this.handlers[type] = this.handlers[type]?.filter(h => h !== handler)
	}
}

// Usage

const weatherEmitter = new Emitter()
const movieEmitter = new Emitter()

const lightRainHandler = () => console.log('It is raining');
weatherEmitter.on('rain', lightRainHandler)

const heavyRainHandler = () => console.log('It is raining very hard');
weatherEmitter.on('rain', heavyRainHandler)

movieEmitter.on('rain', () => console.log('Have you seen Doctor Strange?'));

// test the emitter works with multiple handlers for the same event
weatherEmitter.trigger('rain')

weatherEmitter.off('rain', lightRainHandler)

// test that the handlers are removed
weatherEmitter.trigger('rain')

// test that handlers don't clash
movieEmitter.trigger('rain')
