export function removeAccents(word: string): string {
	const accentsMap = {
		a: /[áàãâä]/gi,
		e: /[éèêë]/gi,
		i: /[íìîï]/gi,
		o: /[óòõôö]/gi,
		u: /[úùûü]/gi,
		c: /ç/gi,
		n: /ñ/gi
	} as any;

	// tslint:disable-next-line:forin
	for (const letra in accentsMap) {
		const regex = accentsMap[letra];
		word = word.replace(regex, letra);
	}
	return word;
}
