import { useEffect, useState } from 'react';
import { ActionFunctionArgs, Link, LoaderFunctionArgs, redirect, useActionData, useSubmit } from 'react-router-dom';

import loaderInitiation from '../../routes/loaders/0loaderInitiation';
import { BackendAPI, BannerUrl, PageUrlsList } from '../../ultil/ultilEnums';
import useTwoWayBinding from '../../hooks/useTwoWayBinding';
import useScrollToTopPage from '../../hooks/useScrollToTopPage';
import Container from '../../components/UI/Container';

// validate inputs
import ErrorMsg from '../../components/UI/ErrorMsg';
import useValidate from '../../hooks/useValidate';
import { isMinLength, isNotNull } from '../../ultil/inputValidation/validate';
import User from '../../ultil/DataModels/implementations/User';
import AuthenError from '../../ultil/DataModels/implementations/AuthenError';
import AuthenResponse from '../../ultil/DataModels/implementations/AuthenRespone';
import { addJwt } from '../../ultil/authenTokenUltil';

// css
import classes from './Authen.module.scss'
import NameInput from './formInputs/NameInput';
import EmailInput from './formInputs/EmailInput';
import PasswordInput from './formInputs/PasswordInput';
import PhoneInput from './formInputs/PhoneInput';


function Authenticate() {
    useScrollToTopPage()

    const [name, onChangeName] = useTwoWayBinding<string>()
    const [email, onChangeEmail] = useTwoWayBinding<string>()
    const [password, onChangePassword] = useTwoWayBinding<string>()
    const [phone, onChangePhone] = useTwoWayBinding<number>()

    // useValidate was attached useMemo()
    const nameErrorMsg = useValidate('Name', name, [isNotNull])
    const emailErrorMsg = useValidate('Email', email, [isNotNull])
    const passwordErrorMsg = useValidate('Password', password, [isNotNull, isMinLength.bind(null, 8)])
    const phoneErrorMsg = useValidate('Phone', phone, [isNotNull])

    // Validate that email is unique
    const submit = useSubmit()
    const actionData = useActionData()

    const [uniqueEmailMsg, setUniqueEmailMsg] = useState('')
    useEffect(() => {
        if (actionData) {
            const authenError = new AuthenError(actionData)
            authenError.errors.email && setUniqueEmailMsg(authenError.errors.email)
        }
    }, [actionData])

    useEffect(() => {
        setUniqueEmailMsg('')
    }, [email])
    const [isSubmited, setIsSubmited] = useState(false)
    function submitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsSubmited(true)

        if (nameErrorMsg || emailErrorMsg || passwordErrorMsg || phoneErrorMsg || uniqueEmailMsg)
            return null

        const user = new User(email, password, name, phone)

        submit(Object(user), {
            action: location.pathname,
            method: 'POST'
        })
    }

    return (
        <div style={{ backgroundImage: `url(${BannerUrl.url})`, backgroundRepeat: 'repeat', backgroundPosition: '0% 50%', backgroundSize: 'contain' }}>
            <Container className="text-zinc-500 text-center italic py-10">
                <div className={`${classes['authen-form']} bg-white mx-auto rounded-2xl`}>
                    <h1 className="py-16 capitalize text-2xl font-thin">Sign Up</h1>
                    <form onSubmit={submitHandler} className={`px-3 md:px-6`}>
                        <div className='flex flex-col'>
                            <NameInput value={name} onChangeVal={onChangeName} />
                            <ErrorMsg msg={isSubmited ? nameErrorMsg : ''} />

                            <EmailInput value={email} onChangeVal={onChangeEmail} />
                            <ErrorMsg msg={isSubmited ? emailErrorMsg : ''} />
                            <ErrorMsg msg={isSubmited ? uniqueEmailMsg : ''} />

                            <PasswordInput value={password} onChangeVal={onChangePassword} />
                            <ErrorMsg msg={isSubmited ? passwordErrorMsg : ''} />

                            <PhoneInput value={phone} onChangeVal={onChangePhone} />
                            <ErrorMsg msg={isSubmited ? phoneErrorMsg : ''} />

                        </div>
                        <button className='w-full py-4 mt-8 bg-zinc-900 text-white capitalize'>Sign up</button>
                    </form>
                    <span className='inline-block py-14'>
                        <Link to={PageUrlsList.Login}>
                            Login? <span className='text-blue-500'> Click</span>
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

export async function action(args: ActionFunctionArgs) {
    // args
    const data = Object.fromEntries((await args.request.formData()).entries())

    const response = await fetch(BackendAPI.signup, {
        method: args.request.method,
        headers: {
            // MIME type (media type || content type)
            'content-type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    if (response.status === 422)
        return response

    if (response.status === 201) {
        const authenRes = new AuthenResponse(await response.json())
        addJwt(authenRes.token)
    }
    return redirect('/')
}