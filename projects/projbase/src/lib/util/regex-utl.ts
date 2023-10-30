const multiWhiteSpacesRegex = /\s+/g;
const specialsRegex = /[\u0300-\u036f]/g;

export function nosenseTxt(txt: string, sensitive = false): string {
	if(!txt) {
		return '';
	}else{
		if(sensitive){
			return txt;
		}else{
			return txt.replace(multiWhiteSpacesRegex, ' ').normalize('NFD').replace(specialsRegex, '').toLowerCase().trim();
		}
	}
}
