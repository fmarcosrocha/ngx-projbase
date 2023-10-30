import Swal, {SweetAlertIcon, SweetAlertOptions, SweetAlertPosition} from 'sweetalert2';

export interface ToasterOptions extends SweetAlertOptions {
  title?: string;
}


export class Toaster {
  private static DEFAULT_OPTIONS = {
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    showCloseButton: true,
  };

  private static DEFAULT_TIMER = 6000;
  private static DEFAULT_SUCCESS_TIMER = 4000;

  public static CENTERED_DIALOG = {
    toast: false,
    position: 'center',
    showConfirmButton: true,
    showCloseButton: true
  } as ToasterOptions;

  public static BOTTOM_DIALOG = {
    toast: true,
    position: 'bottom',
    showConfirmButton: true,
    showCloseButton: true,
  } as ToasterOptions;

  static success(msg: string, customOptions?: ToasterOptions, callback?: any) {
    this.defaultMsg('success', msg, customOptions, callback);
  }

  static info(msg: string | string[], customOptions?: ToasterOptions, callback?: any): void {
    this.defaultMsg('info', msg, customOptions, callback);
  }

  static error(msg: string | string[], customOptions?: ToasterOptions, callback?: any): void {
    this.defaultMsg('error', msg, customOptions, callback);
  }

  static warning(msg: string | string[], customOptions?: ToasterOptions, callback?: any): void {
    this.defaultMsg('warning', msg, customOptions, callback);
  }

  static questionModal(msg: string, callback?: any): void {
    const options = {
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      showCancelButton: true, ...Toaster.CENTERED_DIALOG
    };
    this.defaultMsg('question', msg, options, callback);
  }


  static question(msg: string, callback?: any, posision: SweetAlertPosition = 'center', time: number = 60000): void {
    const options = {
      confirmButtonText: 'Sim', cancelButtonText: 'Não', showCloseButton: true,
      showCancelButton: true, ...Toaster.BOTTOM_DIALOG
    };
    options.position = posision;
    options.timer = time;
    this.defaultMsg('question', msg, options, callback);
  }

  private static defaultMsg(type: SweetAlertIcon, msgOrArray: string | string[], customOptions?: ToasterOptions, callback?: any) {
    let _customOpt;
    if (!customOptions) {
      _customOpt = {...this.DEFAULT_OPTIONS} as ToasterOptions;
      _customOpt.timer = (type === 'success') ? Toaster.DEFAULT_SUCCESS_TIMER : Toaster.DEFAULT_TIMER;
    } else {
      _customOpt = {...this.DEFAULT_OPTIONS, ...customOptions} as ToasterOptions;
    }

    let msg;
    if (Array.isArray(msgOrArray)) {
      msg = Toaster.listMsgsInHTML(msgOrArray);
    } else {
      msg = msgOrArray;
    }


    // acaba com texto sem pontuação, a gente coloca o ponto.
    if (msg && msg.trim().charAt(msg.length - 1).match(/\w/)) {
      msg = msg.trim() + '.';
    }

    // coloca msg no title quando é toast
    const definedTitle = (_customOpt.title ? _customOpt.title : '');
    const title = !_customOpt.title && _customOpt.toast ? msg : definedTitle;
    msg = (_customOpt.toast && definedTitle === '') ? '' : msg;

    Swal.mixin(_customOpt).fire(title, msg, type).then(r => callback ? callback(r) : {});
  }

  private static listMsgsInHTML(msgs: string[]): string {
    let errosHTML = '';
    if (msgs.length > 1) {
      for (let i = 0; i < msgs.length; i++) {
        errosHTML += '<li>' + msgs[i] + ((i < msgs.length - 1) ? ';' : '.') + '</li>';
      }
      errosHTML = `<ol style="text-align: left">${errosHTML}</ol>`;
    } else {
      errosHTML = msgs[0];
    }
    return errosHTML;
  }
}
