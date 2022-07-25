async function asyncTimeout (timeout) {
	return new Promise(( resolve ) => setTimeout(() => { resolve() }, timeout))
}

async function promiseStack (callbacksArray) {
	for (const callback of callbacksArray) {
		await callback()
	}
}

promiseStack([
	() => asyncTimeout(4000).then(() => console.log(1)),
	() => asyncTimeout(2000).then(() => console.log(2)),
	() => asyncTimeout(1000).then(() => console.log(3)),
	() => asyncTimeout(3000).then(() => console.log(4)),
]);
