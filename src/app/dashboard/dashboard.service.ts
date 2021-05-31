
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Stock from '../shared/models/stock-models';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseUrl = 'https://bootcampdio-santander.herokuapp.com/bootcampsantander';

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }

}
