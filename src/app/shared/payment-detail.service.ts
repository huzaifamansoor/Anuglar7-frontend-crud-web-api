import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  readonly BaseURL = 'http://localhost:64933/api/'; 
  formData: PaymentDetail;
  list: PaymentDetail [];
  constructor(private httpClient : HttpClient) { }

  postPaymentDetail(){
   return this.httpClient.post(this.BaseURL+'PaymentDetail',this.formData);   
  }

  putPaymentDetail(){
    return this.httpClient.put(this.BaseURL+'PaymentDetail/'+this.formData.PMId,this.formData);   
  }

  deletePaymentDetail(PMId: number){
    return this.httpClient.delete(this.BaseURL+'PaymentDetail/'+PMId);   
  }

  refreshList(){
    return this.httpClient.get(this.BaseURL+'PaymentDetail')
    .toPromise()
    .then(res => this.list = res as PaymentDetail [] )
  }
}
