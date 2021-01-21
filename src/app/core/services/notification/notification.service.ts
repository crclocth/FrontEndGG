import { Injectable } from '@angular/core';
import { ActiveToast, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastrService: ToastrService) { }

  public success(message: string): ActiveToast<any>{
    return this.toastrService.success(message);
  }
  
  public error(message: string): ActiveToast<any>{
    return this.toastrService.error(message);
  }
}
