import { inject } from 'aurelia'
import { IDialogService } from '@aurelia/dialog'
import { MyDialog } from './my-dialog';

@inject(IDialogService)

export class MyApp {
  message = 'Hello World!';

  constructor(dialogService) {
    this.dialogService = dialogService;
  }

  async click() {
    const { dialog } = await this.dialogService.open({ 
      component: () => MyDialog,
      lock: false
    })
  }
}
