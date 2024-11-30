export enum BackendAPI {
    // base = 'http://localhost:8080/',
    base = 'https://rjs301ams3backend-production.up.railway.app/',
    products = base + 'products/',
    signup = base + 'signup/',
    login = base + 'login/'
}

export enum PageUrlsList {
    Home = '/',
    Shop = '/shop',
    Detail = '/detail',
    Cart = '/cart',
    Checkout = '/checkout',
    Login = '/login',
    Signup = '/signup',
    Logout = '/logout',
}

export enum BannerUrl {
    url = '/banner1.png'
}

export enum StorageEnum {
    authenToken = 'boutique-authen-token'
}