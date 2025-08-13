import { Component, OnInit } from '@angular/core';
import { LpujournalbookService } from '../../service/lpujournalbook.service';
import { StorageService } from '../../service/storage.service';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginSessionService } from '../../service/login-session.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-Journalmenubar',
  imports: [CommonModule],
  templateUrl: './Journalmenubar.component.html',
  styleUrls: ['./Journalmenubar.component.css']
})
export class JournalmenubarComponent implements OnInit {

  isDisabled: any = true;
  BookId: any; name: any;
  UserRole: any;
  user_Email: any;
  supervisorName: any;
  departmentName: any;
  candidateName: any;
  LoginStatus: boolean = false;
  constructor(
    private journalWebApiService: LpujournalbookService,
    private AuthSession: LoginSessionService,
    private router: Router, private route: ActivatedRoute,
   ) { }

  showSearchForm: boolean = false; show: boolean = true; isSearchOpen: boolean = false;

  VisitUrl(Id: any, name: any, Sufix: any) {
    this.router.navigateByUrl(Id + '/' + name + '/' + Sufix).then(() => {
      window.location.reload();
    });
  }

  ngOnInit(): void {
    var BookId = this.route.snapshot.params['Id'];
    var name = this.route.snapshot.params['name'];
    if (BookId != undefined && BookId != null) {
      this.BookId = BookId;
      this.name = name;
    }
  }

  
  toggleSearchForm() {
    this.showSearchForm = !this.showSearchForm;
    this.show = !this.show;
  }

}
