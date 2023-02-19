import { Component, Input } from '@angular/core';
import { NovaCompraModel } from '../models/NovaCompraModel';
import { ConfinService } from '../confin.service';
import { Router } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nova-compra',
  templateUrl: './nova-compra.component.html',
  styleUrls: ['./nova-compra.component.less']
})
export class NovaCompraComponent {

  constructor(private service: ConfinService, private router: Router) {}

  @Input() 
  novaCompra: NovaCompraModel = new NovaCompraModel;
  
  @Input() 
  dataCompra!: NgbDate;

  postNovaCompra() {
    this.novaCompra.DataCompra = new Date(this.dataCompra.year, this.dataCompra.month, this.dataCompra.day);
    this.service.novaCompra(this.novaCompra).subscribe(res => {
      // this.router.navigate('/');
      console.log('=> compra postada!');
    });
  }

}
