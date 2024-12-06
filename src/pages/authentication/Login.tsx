import { useEffect, useState } from 'react';
import { ActionFunctionArgs, Link, LoaderFunctionArgs, redirect, useActionData, useNavigation, useSubmit } from 'react-router-dom';

import loaderInitiation from '../../routes/loaders/0loaderInitiation';
import { BackendAPI, BannerUrl, PageUrlsList } from '../../ultil/ultilEnums';
import useTwoWayBinding from '../../hooks/useTwoWayBinding';
import useScrollToTopPage from '../../hooks/useScrollToTopPage';
import Container from '../../components/UI/Container';

// validate inputs
import ErrorMsg from '../../components/UI/ErrorMsg';
import useValidate from '../../hooks/useValidate';
import { isNotNull } from '../../ultil/inputValidationUltil/validate';
import User from '../../ultil/DataModels/implementations/User';
import AuthenResponse from '../../ultil/DataModels/implementations/AuthenRespone';
import { addJwt } from '../../ultil/storageUltil/authenTokenUltil';

// css
import classes from './Authen.module.scss'
import EmailInput from './formInputs/EmailInput';
import PasswordInput from './formInputs/PasswordInput';
import ErrorResponse from '../../ultil/DataModels/implementations/ErrorResponse';


function Login() {
    useScrollToTopPage()

    const [email, onChangeEmail] = useTwoWayBinding<string>()
    const [password, onChangePassword] = useTwoWayBinding<string>()

    // useValidate was attached useMemo()
    const emailErrorMsg = useValidate('Email', email, [isNotNull])
    const passwordErrorMsg = useValidate('Password', password, [isNotNull])

    // Validate input before submit
    const submit = useSubmit()
    const actionData = useActionData()
    const [loginErrorMsg, setLoginErrorMsg] = useState('')

    useEffect(() => {
        if (actionData) {
            const ErrorRes = ErrorResponse.fromObj(actionData)
            setLoginErrorMsg(ErrorRes.errors?.credentials!)
        }
    }, [actionData])

    useEffect(() => {
        setLoginErrorMsg('')
    }, [email, password])


    const [isSubmited, setIsSubmited] = useState(false)
    function submitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsSubmited(true)

        if (emailErrorMsg || passwordErrorMsg || loginErrorMsg)
            return null

        const user = new User(email, password)
        submit(Object(user), {
            action: location.pathname,
            method: 'POST'
        })
    }

    // unable submit button while submitting
    const isSubmitting = useNavigation().state === 'submitting'

    return (
        <div style={{ backgroundImage: `url(${BannerUrl.url})`, backgroundRepeat: 'repeat', backgroundPosition: '0% 50%', backgroundSize: 'contain' }}>
            <Container className="text-zinc-500 text-center italic py-10">
                <div className={`${classes['authen-form']} bg-white mx-auto rounded-2xl`}>
                    <h1 className="py-16 capitalize text-2xl font-thin">Log In</h1>
                    <form onSubmit={submitHandler} className={`px-3 md:px-6`}>
                        <div className='flex flex-col'>
                            <EmailInput value={email} onChangeVal={onChangeEmail} />
                            <ErrorMsg msg={isSubmited ? emailErrorMsg : ''} />

                            <PasswordInput value={password} onChangeVal={onChangePassword} />
                            <ErrorMsg msg={isSubmited ? passwordErrorMsg || loginErrorMsg : ''} />
                        </div>
                        <button disabled={isSubmitting} className={`w-full py-4 mt-8 bg-zinc-900 capitalize ${isSubmitting ? 'text-zinc-700' : 'text-white'}`}>Sign in</button>
                    </form>
                    <span className='inline-block py-14'>
                        <Link to={PageUrlsList.Signup}>
                            Create an account? <span className='text-blue-500'> Click</span>
                        </Link>
                    </span>
                </div>
            </Container>
        </div>
    );
}

export default Login;


export function loader(args: LoaderFunctionArgs) {
    loaderInitiation(args, false)
    return null
}

export async function action(args: ActionFunctionArgs) {
    // args
    const data = Object.fromEntries((await args.request.formData()).entries())

    const response = await fetch(BackendAPI.login, {
        method: args.request.method,
        headers: {
            // MIME type (media type || content type)
            'content-type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    if (response.status === 422 || response.status === 401)
        return response
    if (response.status === 200) {
        const authenRes = new AuthenResponse(await response.json())
        addJwt(authenRes)
    }

    return redirect('/')
}