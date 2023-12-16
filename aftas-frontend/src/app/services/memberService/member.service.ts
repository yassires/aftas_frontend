import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from 'src/app/models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private membersApi = environment.membersApi;

  constructor(private http: HttpClient) {}

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.membersApi);
  }

  createMember(member: Member): Observable<any> {
    return this.http.post(this.membersApi, member, { responseType: 'text' });
  }
}
