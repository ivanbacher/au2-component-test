import { IDialogDom, IDialogController } from '@aurelia/dialog'
import { inject } from 'aurelia'

@inject(Element, IDialogController, IDialogDom)

export class MyDialog {
  list = ['item1', 'item2', 'item3'];


  constructor(host, dialog, dialogDom) {
    this.host = host
    this.dialog = dialog
    this.dialogDom = dialogDom
    
    // Wrapper
    dialogDom.wrapper.style.zIndex = 990
    dialogDom.wrapper.style.position = 'fixed'
    dialogDom.wrapper.style.top = '0'
    dialogDom.wrapper.style.bottom = '0'
    dialogDom.wrapper.style.left = '0'
    dialogDom.wrapper.style.right = '0'
    // dialogDom.wrapper.style.overflow = 'auto'

    // // Overlay
    dialogDom.overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'

    // // Content Host
    // dialogDom.contentHost.style.height = 'unset'
  }
}