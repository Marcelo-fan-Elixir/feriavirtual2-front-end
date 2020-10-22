import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';

// import { CreateEmployeeComponent } from './create-employee/create-employee.component';
// import { FormsModule} from '@angular/forms';
// import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
// import { EmployeeDetailsComponent } from './employee-details/employee-details.component'

@NgModule({
  declarations: [
    AppComponent,
    UsuarioListComponent,
    CreateUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
