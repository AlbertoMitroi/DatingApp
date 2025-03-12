import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';
import { MemberCardComponent } from "../members/member-card/member-card.component";
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { Member } from '../_models/member';

@Component({
    selector: 'app-lists',
    standalone: true,
    templateUrl: './lists.component.html',
    styleUrl: './lists.component.css',
    imports: [ButtonsModule, FormsModule, MemberCardComponent, PaginationModule]
})
export class ListsComponent implements OnInit, OnDestroy {
  predicate = 'liked';
  pageNumber = 1;
  pageSize = 5;
  members: Member[] = [];

  ngOnInit(): void {
    this.loadLikes(); 
  }

  getTitle() {
    switch (this.predicate) {
      case 'liked': return 'Members you like';
      case 'likedBy': return 'Members who like you';
      default: return 'Mutual';
    }
  }

  loadLikes() {
    this.members = [
      {
        id: 1,
        username: 'JohnDoe',
        age: 25,
        photoUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
        knownAs: 'John',
        created: new Date(),
        lastActive: new Date(),
        gender: 'male',
        introduction: 'Hello, I am John.',
        interests: 'Hiking, Reading',
        lookingFor: 'Friendship',
        city: 'New York',
        country: 'USA',
        photos: [
          { id: 1, url: 'https://randomuser.me/api/portraits/men/1.jpg', isMain: true, isApproved: true }
        ]
      },
      {
        id: 2,
        username: 'JaneSmith',
        age: 30,
        photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
        knownAs: 'Jane',
        created: new Date(),
        lastActive: new Date(),
        gender: 'female',
        introduction: 'Hi, I am Jane.',
        interests: 'Cooking, Traveling',
        lookingFor: 'Long-term relationship',
        city: 'Los Angeles',
        country: 'USA',
        photos: [
          { id: 2, url: 'https://randomuser.me/api/portraits/women/2.jpg', isMain: true, isApproved: true }
        ]
      },
      {
        id: 3,
        username: 'AliceJohnson',
        age: 28,
        photoUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
        knownAs: 'Alice',
        created: new Date(),
        lastActive: new Date(),
        gender: 'female',
        introduction: 'Hey there, I am Alice.',
        interests: 'Music, Dancing',
        lookingFor: 'Networking',
        city: 'Chicago',
        country: 'USA',
        photos: [
          { id: 3, url: 'https://randomuser.me/api/portraits/women/3.jpg', isMain: true, isApproved: true }
        ]
      }
    ];
  }

  pageChanged(event: any) {
    if (this.pageNumber !== event.page) {
      this.pageNumber = event.page;
      this.loadLikes();
    }
  }

  ngOnDestroy(): void {

  }
}