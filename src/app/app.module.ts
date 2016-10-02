import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ApiService } from './shared';
import { routing } from './app.routing';

// Angular2-Material
// import { MdButtonModule } from '@angular2-material/button';
// import { MdMenuModule } from '@angular2-material/menu';
// import { MdIconModule, MdIconRegistry } from '@angular2-material/icon';
// import { OVERLAY_PROVIDERS } from '@angular2-material/core';
// import { MdToolbarModule } from '@angular2-material/toolbar';
// import { MATERIAL_PROVIDERS, MATERIAL_DIRECTIVES } from 'ng2-material';

import 'materialize-css';
import { MaterializeDirective } from 'angular2-materialize';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        MaterializeDirective
    ],
    providers: [
        ApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(public appRef: ApplicationRef) {
    }

    hmrOnInit(store) {
        console.log('HMR store', store);
    }

    hmrOnDestroy(store) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
