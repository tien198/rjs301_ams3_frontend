
import { LoaderFunctionArgs } from 'react-router-dom';
import classes from './Authen.module.scss'
import loaderInitiation from '../../routes/loaders/0loaderInitiation';

function SignUp() {
    return (
        <div className={classes['authen-form']}>
            <h1 className="text-center capitalize italic text-4xl text-zinc-500 font-thin">Sign Up</h1>
            <p>paragraph</p>
            <div className='h-screen'></div>
        </div>
    );
}

export default SignUp;

export function loader(args: LoaderFunctionArgs) {
    loaderInitiation(args, false)
    return null
}