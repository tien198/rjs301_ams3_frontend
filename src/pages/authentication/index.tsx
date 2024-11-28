
import { Form, Link, LoaderFunctionArgs, useLocation } from 'react-router-dom';
import loaderInitiation from '../../routes/loaders/0loaderInitiation';
import { BannerUrl, PageUrlsList } from '../../ultil/UltilEnums';
import Container from '../../components/UI/Container';
import useTwoWayBinding from '../../hooks/useTwoWayBinding';

// css
import classes from './Authen.module.scss'
import useScrollToTopPage from '../../hooks/useScrollToTopPage';

function Authenticate() {
    useScrollToTopPage()
    const location = useLocation()
    let isLogin: boolean

    if (location.pathname === PageUrlsList.Login) isLogin = true
    else isLogin = false

    const [name, onChangeName] = useTwoWayBinding()
    const [email, onChangeEmail] = useTwoWayBinding()
    const [password, onChangePassword] = useTwoWayBinding()
    const [phone, onChangePhone] = useTwoWayBinding()

    return (
        <div style={{ backgroundImage: `url(${BannerUrl.url})`, backgroundRepeat: 'repeat', backgroundPosition: '0% 50%', backgroundSize: 'contain' }}>
            <Container className="text-zinc-500 text-center italic py-10">
                <div className={`${classes['authen-form']} bg-white mx-auto rounded-2xl`}>
                    <h1 className="py-16 capitalize text-2xl font-thin">
                        {isLogin ? 'Log In' : 'Sign Up'}
                    </h1>
                    <Form className={`px-3 md:px-6`}>
                        <div className='flex flex-col'>
                            {!isLogin && <input type="text" placeholder='Full Name' value={name} onChange={onChangeName} />}
                            <input type="text" placeholder='Email' value={email} onChange={onChangeEmail} />
                            <input type="password" placeholder='Password' value={password} onChange={onChangePassword} />
                            {!isLogin && <input type="number" placeholder='Phone' value={phone} onChange={onChangePhone} />}
                        </div>
                        <button className='w-full py-4 mt-8 bg-zinc-900 text-white capitalize'>
                            {
                                isLogin ? 'Sign in' : 'Sign up'
                            }
                        </button>
                    </Form>
                    <span className='inline-block py-14'>
                        <Link to={isLogin ? PageUrlsList.Signup : PageUrlsList.Login}>
                            {isLogin ? 'Create an account?' : 'Login?'}
                            <span className='text-blue-500'> Click</span>
                        </Link>
                    </span>
                </div>
            </Container>
        </div>
    );
}

export default Authenticate;

export function loader(args: LoaderFunctionArgs) {
    loaderInitiation(args, false)
    return null
}