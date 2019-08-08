import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.css']
})
export class PaymentDetailListComponent implements OnInit {

  constructor(private paymentDetailService: PaymentDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.paymentDetailService.refreshList();
  }

  populateForm(pd:PaymentDetail){
    this.paymentDetailService.formData = Object.assign({},pd);
  }

  onDelete(PMId: number){
    if(confirm('Are you sure to delete this record ?'))
    {
      this.paymentDetailService.deletePaymentDetail(PMId)
      .subscribe(() => {
        this.paymentDetailService.refreshList();
        this.toastr.warning("Deleted Successfully", 'Payment Detail Register');
      },
      err => console.log(err)
      );
    }
    
  }
}
