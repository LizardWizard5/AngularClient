import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ClassComponent } from './app/components/class/class.component';

bootstrapApplication(ClassComponent, appConfig)
  .catch((err) => console.error(err));
