import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastMemberComponent } from './components/cast-member/cast-member.component';
import { CastService } from './services/cast.service';
import { SharedModule } from '../shared/shared.module';
import { FullCastComponent } from './full-cast.component';



@NgModule({
  declarations: [ 
    FullCastComponent,
    CastMemberComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    CastMemberComponent
  ],
  providers:[CastService]
})
export class FullCastModule { }
