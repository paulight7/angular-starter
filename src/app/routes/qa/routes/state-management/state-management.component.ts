import { DomainService } from '$domain';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-state-management',
  templateUrl: './state-management.component.html',
  styleUrls: ['./state-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StateManagementComponent implements OnInit {
  public users$ = this.domain.users.select$;
  constructor(private domain: DomainService) { }

  ngOnInit(): void {}

}