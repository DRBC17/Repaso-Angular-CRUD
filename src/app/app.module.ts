import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';

// Modulos
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeesService } from './services/employees.service';

@NgModule({
  declarations: [AppComponent, EmployeesListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Modulos
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
