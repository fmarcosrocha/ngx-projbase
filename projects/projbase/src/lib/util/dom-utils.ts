export class DomUtils {

  // recupera posição do elemento na tela.
  static getOffset( el ) {
    let x = 0;
    let y = 0;
    while ( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
      x += el.offsetLeft - el.scrollLeft;
      y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return { top: y, left: x };
  }
}

export function scrollViewTo(selector) {
	const myBody = document.querySelector('mat-sidenav-content');
	const mainToolbarHeight = document.querySelector('mat-toolbar-row').scrollHeight;
	const padding = 120; // px
	setTimeout(() => {
		const target = document.querySelector(selector);
		myBody.scrollBy({
			left: 0,
			top: DomUtils.getOffset(target).top - mainToolbarHeight - padding,
			behavior: 'smooth'
		});
	}, 400);
}

