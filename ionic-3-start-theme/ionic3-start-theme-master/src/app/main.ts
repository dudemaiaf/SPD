import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {Component, enableProdMode} from '@angular/core';
import {AppModule} from "./app.module";
import {IonicPage, NavController, NavParams} from "ionic-angular";

// this is the magic wand
enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);

