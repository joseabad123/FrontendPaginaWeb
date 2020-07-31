import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

//Para login
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../services/auth.service';

@NgModule({
    declarations: [ 
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AuthRoutingModule,
        HttpClientModule
    ],
    providers: [AuthService]

})
export class AuthModule { }