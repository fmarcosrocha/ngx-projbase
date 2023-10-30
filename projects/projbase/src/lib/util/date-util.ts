import {DatePipe} from '@angular/common';

export class DateUtil {

	// 'yyyy-MM-dd' para Date.
	static fromJsonDate(date: string) {
		try{
			if(date?.length >= 10){
				const dateStr = date.replace(/-/g, '/').slice(0, 10);
				return new Date(dateStr);
			}
		}catch (e){}
		return null;
	}

	// converte DD/MM/YYYY em Date.
	static parseDate(inputDate: string){
		if(inputDate.indexOf('_')>=0 || inputDate.length < 10){
			return null;
		}
		if(inputDate && inputDate.length === 10){
			const dtParts = inputDate.split('/');
			try{
				return new Date(dtParts[2]+'/'+dtParts[1]+'/'+dtParts[0]);
			}catch (e) {
				return null;
			}
		}
		return null;
	}

	static buildDate(year: any, month: any, day: any){
		return new Date(year+'/'+month+'/'+day);
	}

	// Date|Moment para string no formato 'yyyy-MM-dd'
	static toJsonDate(date: any) {
		if(!date){
			return null;
		}
		const datepipe: DatePipe = new DatePipe('pt-BR');
		return date ? datepipe.transform(date, 'yyyy-MM-dd')?.toString() : null;
	}

  static cloneDate(date: any): Date | null {
    if (!date) {
      return null;
    }
    const jsonDate = this.toJsonDate(date);
    return jsonDate ? this.fromJsonDate(jsonDate) : null;
  }

	// se < 0, é pq d2 é menor que d1.
	static diffInDays(d1: Date, d2: Date) {
		const dT = d2.getTime() - d1.getTime();
		return Math.ceil(dT / (1000 * 3600 * 24));
	}

	// Date para 'dd/MM/yyyy'
	static formatDate(date: any): any {
		if(!date){
			return null;
		}
		if(date instanceof Date){
			const datepipe: DatePipe = new DatePipe('pt-BR');
			return datepipe.transform(date, 'dd/MM/yyyy')?.toString();
		} else {
			return DateUtil.formatDate(DateUtil.fromJsonDate(date));
		}
	}

	// janeiro é 1
	static lastDayOf(year: number, month: number){
		month = month-1;
		return new Date(year, month + 1, 0).getDate();
	}

	// janeiro é 1
	static nextMonthOf(year: number, month: number){
		month = month-1;
		return new Date(year, month + 1, 1).getMonth()+1;
	}
}
