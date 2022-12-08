import { Component } from '@angular/core';

@Component({
  selector: '[app-ng-if-directive]',
  // template: `
  //   <h2 *ngIf="displayName; else elseBlock">
  //     learn Angular
  //   </h2>

  //   <ng-template #elseBlock>
  //     <h2>
  //       Name is hidden
  //     </h2>
  //   </ng-template>
  // `,
  template: `
    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
    
    <ng-template #thenBlock>
      <h2>learn Angular</h2>
    </ng-template>
    
    <ng-template #elseBlock>
      <h2>Hidden</h2>
    </ng-template>
  `,
  styles: []
})
export class NgIfDirectiveComponent {
  displayName = true

}
