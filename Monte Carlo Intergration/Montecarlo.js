// Example function: a damped sine wave. Replace or edit `f` as you like.
export function f(x) {
	// x is a number (float). Return y = f(x).
	// This example combines sine with a Gaussian envelope.
	return Math.sin(x) * Math.exp(-0.05 * x * x);
}

// Helper: sample the function over a range
export function sampleFunction(fn, xMin, xMax, steps) {
	const xs = new Array(steps);
	const ys = new Array(steps);
	const dx = (xMax - xMin) / (steps - 1);
	for (let i = 0; i < steps; i++) {
		const x = xMin + dx * i;
		xs[i] = x;
		ys[i] = fn(x);
	}
	return { xs, ys };
}

// Exporting more utilities can help for future plotting tasks.
export default { f, sampleFunction };

