import { RoutingModule } from './routing/routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { IngredientTableComponent } from './ingredients-table/ingredients-table.component';
import { IngredientAddComponent } from './ingredient-add/ingredient-add.component';
import { RecipeListComponent } from './recipe/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-item.component';
import { RecipeComponent } from './recipe/recipe.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeDetailComponent,
    IngredientTableComponent,
    IngredientAddComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeComponent,
    DropdownDirective,
    RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
