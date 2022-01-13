import { RecipeStartComponent } from './../recipe/recipe-start/recipe-start.component';
import { HeaderComponent } from './../header/header.component';
import { IngredientTableComponent } from './../ingredients-table/ingredients-table.component';
import { RecipeComponent } from './../recipe/recipe.component';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
   {
     path: 'recipes', component: RecipeComponent, children: [
      { path: '', component: RecipeStartComponent },   
      { path: ':id', component: RecipeDetailComponent },
   ]},
/*   {
    path: 'recipes', component: RecipeComponent,
  }, 
  { path: 'recipes/:id', component: RecipeDetailComponent },
   */
  
  { path: 'shopping-cart', component: IngredientTableComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
