import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SmSearchComponent } from './sm-search/sm-search.component';
import { SmInsertComponent } from './sm-insert/sm-insert.component';
import { SmUpdateComponent } from './sm-insert/sm-update.component';
import { LicenseTran } from './pipe/textConvert.pipe';
import { SMService } from './sm/sm.service';

@NgModule({
  declarations: [
    AppComponent,
    SmInsertComponent,
    HomeComponent,
    SmSearchComponent,
    SmUpdateComponent,
    LicenseTran
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SMService],
  bootstrap: [AppComponent]
})
export class AppModule { }
