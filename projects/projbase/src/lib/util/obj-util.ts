export function byPath(o: any, s: string): string | void {
	s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
	s = s.replace(/^\./, '');           // strip a leading dot
	const a = s.split('.');
	for (let i = 0, n = a.length; i < n; ++i) {
		const k = a[i];
		if (k in o) {
			o = o[k];
		} else {
			return;
		}
	}
	return o;
}
