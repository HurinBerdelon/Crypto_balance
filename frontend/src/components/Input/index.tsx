import { useFormik } from "formik";
import { useState } from "react";
import * as yup from 'yup'
import { useCrypto } from "../../hooks/useCrypto";
import { Container } from "./style";

export function Input(): JSX.Element {

    const { createCrypto, tokensList } = useCrypto()

    const [tokenName, setTokenName] = useState('')

    function findCryptoName(token: string) {
        const crypto = tokensList.find(crypto => crypto.symbol === token.toLowerCase())

        return crypto
    }

    async function handleSubmit(values) {

        setTokenName(findCryptoName(values.token).name)
    }

    const formik = useFormik({
        initialValues: {
            amount: 0,
            token: '',
        },
        validationSchema: yup.object({
            token: yup.string().required('Token is required'),
            amount: yup.number().required('Amount is required').min(0.00001, 'Amount should be greater than 0.00001')
        }),
        onSubmit: async (values) => {

            await handleSubmit(values)

            await createCrypto({
                token: values.token,
                amount: values.amount,
            })
        }
    })

    return (
        <Container
            onSubmit={formik.handleSubmit}
        >
            <div>
                <h3>Token</h3>
                <select
                    name='token'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                    <option selected disabled value=''>Select a Crypto</option>
                    {tokensList.map(token => (
                        <option key={token.id} value={token.symbol.toUpperCase()}>{token.symbol.toUpperCase()}</option>
                    ))}
                </select>
                {formik.touched.token && formik.errors.token ? (
                    <div>{formik.errors.token}</div>
                ) : null}
            </div>

            <div>
                <h3>Amount</h3>
                <input
                    type="number"
                    step='0.00001'
                    name='amount'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.amount && formik.errors.amount ? (
                    <div>{formik.errors.amount}</div>
                ) : null}
            </div>

            <div>
                <button
                    type='submit'
                >
                    Add
                </button>
            </div>
        </Container>
    )
}