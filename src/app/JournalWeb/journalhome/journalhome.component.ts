import { Component, OnInit } from '@angular/core';
import { LpujournalbookService } from '../../service/lpujournalbook.service';
import { StorageService } from '../../service/storage.service';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JournalmenubarComponent } from "../Journalmenubar/Journalmenubar.component";

@Component({
  selector: 'app-journalhome',
  templateUrl: './journalhome.component.html',
  styleUrls: ['./journalhome.component.css'],
  imports: [JournalmenubarComponent]
})
export class JournalhomeComponent implements OnInit {

  booksData: any; ServerConnection: any;

  constructor(
    private journalWebApiService: LpujournalbookService,
    private storageService: StorageService,
    private authService: AuthService,
     private route: ActivatedRoute, private router: Router,) { }


  ngOnInit(): void {
    this.getBooksDetail();
    // let loginName = this.route.snapshot.params['loginName'];
    // if (loginName != '' && loginName != undefined) {
    //   this.getToken(loginName);
    // }
  }

  getToken(id: any) {
    this.authService.loginTemp(id).subscribe({
      next: (data: any) => {
        this.storageService.saveUser(data);
      },
      error: (err: any) => {
      }
    });
  }

  getBooksDetail(): void {
    this.journalWebApiService.GetAllBooksDetails().subscribe((response: { item1: string | any[]; }) => {
    // this.journalWebApiService.getData().subscribe((response) => {
      if (response.item1 && response.item1.length > 0) {
        this.booksData = response.item1;
        this.ServerConnection = 1;
      }
      else {
        this.booksData = [];
        this.ServerConnection = 0;
      }
      // console.log("Books Data" + JSON.stringify(this.booksData))
    });
    

  }


}
