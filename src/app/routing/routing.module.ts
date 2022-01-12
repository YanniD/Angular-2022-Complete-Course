import { HeaderComponent } from './../header/header.component';
import { IngredientTableComponent } from './../ingredients-table/ingredients-table.component';
import { RecipeComponent } from './../recipe/recipe.component';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeComponent },
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
