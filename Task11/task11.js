async function asyncTimeout (timeout) {
	return new Promise(( resolve ) => setTimeout(() => { resolve() }, timeout))
}

function promiseStack (callbacksArray, streamsCount) {
	for (let stream = 0; stream < streamsCount; stream++ ) {
		let initialValue = callbacksArray.shift()();

		callbacksArray.reduce((prev) => prev.then(() => {
			if (callbacksArray.length) return callbacksArray.shift()();
		}), initialValue );
	}
}

promiseStack([
	() => asyncTimeout(4000).then(() => console.log(1)),
	() => asyncTimeout(4000).then(() => console.log(1)),
	() => asyncTimeout(2000).then(() => console.log(2)),
	() => asyncTimeout(2000).then(() => console.log(2)),
	() => asyncTimeout(1000).then(() => console.log(3)),
	() => asyncTimeout(1000).then(() => console.log(3)),
	() => asyncTimeout(3000).then(() => console.log(4)),
], 2);
