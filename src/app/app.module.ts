import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { TopNavigationComponent } from './Components/top-navigation/top-navigation.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import {
  UsersComponent,
  UsersDialogComponent
} from './Components/users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  GridModule,
  SearchService,
  ToolbarService,
  PageService,
  SortService,
  FilterService,
  GroupService,
  EditService,
  PdfExportService,
  ExcelExportService,
  ReorderService,
  ResizeService,
  ColumnChooserService
} from '@syncfusion/ej2-angular-grids';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavigationComponent,
    SideBarComponent,
    UsersComponent,
    UsersDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    GridModule,
    DialogModule,
    MatDialogModule,
    ButtonModule,
    TextBoxModule
  ],
  providers: [
    PageService,
    SortService,
    FilterService,
    GroupService,
    SearchService,
    EditService,
    ToolbarService,
    PdfExportService,
    ExcelExportService,
    ReorderService,
    ResizeService,
    ColumnChooserService
  ],
  bootstrap: [AppComponent],
  entryComponents: [UsersDialogComponent]
})
export class AppModule {}
