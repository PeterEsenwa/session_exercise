type Handler = () => void

const handlers: Record<string, Handler> = {}

const trigger = (type: string) => {
	handlers[type]()
}

const on = (type: string, handler: Handler) => {
	handlers[type] = handler
}

// Usage

on('foo', () => {
	console.log('Do foo');
});

trigger('foo');

// log: Do foo
