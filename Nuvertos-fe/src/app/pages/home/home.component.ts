import { Component, OnInit } from '@angular/core';
import { Compound, CompoundResponse } from 'src/app/constant/type';
import { CompoundService } from 'src/app/services/compound.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  openCreateModal:boolean = false;
  compounds: Compound[] = [];
  currPage: number = 1;
  totalCompounds: number = 0;
  totalPages: number = 0;

  constructor(private compoundService: CompoundService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if ((Object.keys(params).length === 1 && !params['page']) || Object.keys(params).length > 1 ) {
        this.router.navigate(['/404'])
        return;
      }
      this.currPage = Number(params['page']) || 1;
      this.compoundService.getCompounds(this.currPage).subscribe((res: CompoundResponse) => {
        console.log(res.rows);
        this.compounds = res.rows;
        this.totalCompounds = res.count;
        this.totalPages = Math.ceil(this.totalCompounds / 3);
        console.log(this.totalPages);
        console.log(this.totalCompounds);
      }, err => {
        this.router.navigate(['/404']);
      })
    });
  }

  openCreateModalFunc(){
    this.openCreateModal = true;
  }

  closeCreateModalFunc(){
    this.openCreateModal = false;
  }

  getEndItem(): number {
    return Math.min(this.currPage * 3, this.totalCompounds);
  }
  
}
