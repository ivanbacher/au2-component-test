import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { DialogDefaultConfiguration } from '@aurelia/dialog'

Aurelia
  .register(DialogDefaultConfiguration)
  .app(MyApp)
  .start();
