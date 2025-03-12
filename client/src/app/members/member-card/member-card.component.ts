import { Component, computed, input } from '@angular/core';
import { Member } from '../../_models/member';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css'
})
export class MemberCardComponent {
  member = input.required<Member>();
  hasLiked = computed(() => this.likedMembers.includes(this.member().id));
  isOnline = computed(() => this.onlineUsers.includes(this.member().username));

  likedMembers: number[] = [1, 3, 5];
  onlineUsers: string[] = ['JohnDoe', 'AliceJohnson'];

  toggleLike() {
    if (this.hasLiked()) {
      this.likedMembers = this.likedMembers.filter(x => x !== this.member().id);
    } else {
      this.likedMembers = [...this.likedMembers, this.member().id];
    }
  }
}
