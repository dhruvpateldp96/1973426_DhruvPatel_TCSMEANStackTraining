import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsPanelComponent } from './questions-panel/questions-panel.component';
import { TestPanelComponent } from './test-panel/test-panel.component';

const routes: Routes = [  
  { path: 'testpanel', component: TestPanelComponent },
  { path: 'questionpanel', component: QuestionsPanelComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
