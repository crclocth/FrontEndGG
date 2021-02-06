import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sector } from '../../models/sector-model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class SectorProviderService {

  constructor(private httpService: HttpService) { }

  public getAllUserSectors(): Observable<Sector[]> {
    return this.httpService.get<Sector[]>('/sector/all');
  };

  public getAllSectorGreenhouse(greenhouseId): Observable<Sector[]> {
    return this.httpService.get<Sector[]>('/sector/all' + greenhouseId);
  };
  
}
