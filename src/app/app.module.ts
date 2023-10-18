import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { dataReducer } from './reducers/data.reducer';
import { DataEffects } from './effects/data.effects';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    CoreModule,
    StoreModule.forRoot({ data: dataReducer }),
    EffectsModule.forRoot([DataEffects]),
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
