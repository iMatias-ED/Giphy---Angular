import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { HeaderComponent } from './header/header.component';
import { HomeGifSectionComponent } from './home-gif-section/home-gif-section.component';
import { SearchWidgetComponent } from './search-widget/search-widget.component';
import { SearchResultPaginatorComponent } from './search-result-paginator/search-result-paginator.component';

//Prime ng
import {TabMenuModule} from 'primeng/tabmenu';
import {InputTextModule} from 'primeng/inputtext';
import {PaginatorModule} from 'primeng/paginator';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchPageComponent,
    HeaderComponent,
    HomeGifSectionComponent,
    SearchWidgetComponent,
    SearchResultPaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TabMenuModule,
    InputTextModule,
    PaginatorModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
