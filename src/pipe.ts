import { Observable } from 'rxjs';

export type ObservablePipe<T = any, R = any> = (observable: Observable<R>) => Observable<T>;
