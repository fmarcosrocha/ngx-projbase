export class StringUtil {

    private static letters = /([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+)/g;

    static capitalize(text: string): string {
        return text[0].toUpperCase() + text.substring(1,).toLowerCase();
    }

    static capitalizeEachWord(text: string): string {
        return text.replace(this.letters, (word) => this.capitalize(word));
    }

    static replaceSeparatorsForBreakLine(text: string): string {
        return text.replace(/\//g, '/ ').replace(/\s/g, '\n');
    }

    static normalize(text: string): string {
        return text ? text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase() : '';
    }

    static toBoolean(text: string): boolean {
        const truthy: string[] = ['true', 'True', '1'];
        return truthy.includes(text);
    }
}
