import { Component, OnInit } from '@angular/core';
import { VolumeService } from '../result-page/services/volume.service';
import { ActivatedRoute } from '@angular/router';
import { Volume } from '../result-page/models/volume.model';

@Component({
  selector: 'app-volume-details',
  templateUrl: './volume-details.component.html',
  styleUrls: ['./volume-details.component.scss'],
})
export class VolumeDetailsComponent implements OnInit {
  id: string = this.activeRoute.snapshot.params['id'];
  volume: Volume;

  constructor(
    private volumeService: VolumeService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(): void {
    this.volumeService.getById(this.id).subscribe((result) => {
      this.volume = result;
    });
  }

  forSale(): string {
    let saleability: string = this.volume.saleInfo.saleability;

    if (saleability.toLowerCase() === 'free') {
      return 'Free';
    } else if (saleability.toLowerCase() === 'for_sale') {
      let price: number = this.volume.saleInfo.listPrice.amount;
      let currency: string = this.volume.saleInfo.listPrice.currencyCode;

      return `Price: ${price} ${currency}`;
    }
    return 'Not For Sale';
  }

  download(): void {
    let link: string;
    if (this.volume.saleInfo.saleability === 'FREE') {
      link = this.volume.accessInfo.pdf.downloadLink;
      window.open(link, '_blank');
    } else {
      link = this.volume.saleInfo.buyLink;
      window.open(link, '_blank');
    }
  }
}
