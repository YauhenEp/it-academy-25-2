import { Base } from "../base";

class Header extends Base {
    get locationLink () {
        return '#nav-global-location-popover-link'
    }

    get cart() {
        return '#nav-cart';
    }

    get orders() {
        return '//*[@id="nav-orders"]'
    }

    get acountList() {
        return '#nav-link-accountList-nav-line-1'
    }

    get logo() {
        return '#nav-logo-sprites'
    }

    get toiNavLinks() {
        return '.nav-ul .nav-a';
    }

    get navHamburgerMenu() {
        return '#nav-hamburger-menu';
    }
}