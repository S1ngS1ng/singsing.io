import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// import { Http } from '@angular/http';

// import { MdButtonModule } from '@angular2-material/button';

// import { OVERLAY_PROVIDERS } from '@angular2-material/core';

// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
    enableProdMode();
}

export function main() {
    return platformBrowserDynamic().bootstrapModule(AppModule);
}

if (document.readyState === 'complete') {
    main();
} else {
    document.addEventListener('DOMContentLoaded', main);
}
