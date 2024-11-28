
import { Form, Link, LoaderFunctionArgs } from 'react-router-dom';
import loaderInitiation from '../../routes/loaders/0loaderInitiation';
// css
import classes from './Authen.module.scss'
import { BannerUrl, PageUrlsList } from '../../ultil/UltilEnums';
import Container from '../../components/UI/Container';

function SignUp() {
    return (
        <div style={{ background: `url(${BannerUrl.url})` }}>

            <Container className="rounded-2xl bg-white text-zinc-500 text-center italic">
                <h1 className="py-16 capitalize text-4xl font-thin">Sign Up</h1>
                <Form className={`${classes['authen-form']} mx-auto px-3`}>
                    <div className='flex flex-col'>
                        <input type="text" placeholder='Full name' className='capitalize' />
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Password' />
                        <input type="text" placeholder='Phone' />
                    </div>
                    <button className='w-full py-4 mt-8 bg-zinc-900 text-white capitalize'>Sign up</button>
                </Form>
                <span className='inline-block py-14'>
                    <Link to={PageUrlsList.Login}>Login?
                        <span className='text-blue-500'> Click</span>
                    </Link>
                </span>
            </Container>
        </div>
    );
}

export default SignUp;

export function loader(args: LoaderFunctionArgs) {
    loaderInitiation(args, false)
    return null
}