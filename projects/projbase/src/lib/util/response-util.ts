import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export class ResponseUtil {

    static reponseToJson(response: Observable<any>) {
        return response.pipe(map((resp) => resp));
    }

	static subscribe(val: any) {
		return new Observable<any>(subscriber => {
			subscriber.next(val);
			subscriber.complete();
		});
	}

	static toPromise(val: any) {
		return ResponseUtil.subscribe(val).toPromise();
	}

}
