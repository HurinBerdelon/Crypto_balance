import Modal from 'react-modal'
import { CryptoSchema } from '../../schema/CryptoSchema'
import { AiOutlineClose } from 'react-icons/ai'
import { Container } from './style'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useCrypto } from '../../hooks/useCrypto'

interface EditCryptoModalProps {
    isOpen: boolean
    onRequestClose(): void
    currentEditCrypto: CryptoSchema
}

export function EditCryptoModal({ isOpen, onRequestClose, currentEditCrypto }: EditCryptoModalProps): JSX.Element {

    const { updateCryptoAmount } = useCrypto()

    const formik = useFormik({
        initialValues: {
            amount: 0
        },
        validationSchema: yup.object({
            amount: yup.number().required('Amount is required').min(0.00001, 'Amount should be greater than 0.00001')
        }),
        onSubmit: async (values) => {
            await updateCryptoAmount(currentEditCrypto.id, values.amount)
            onRequestClose()
        }
    })

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            appElement={document.getElementById('root') as HTMLElement}
            className='react-modal-content'
        >
            <button
                type='button'
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <AiOutlineClose />
            </button>

            <Container
                onSubmit={formik.handleSubmit}
            >
                <h2>Edit Amount</h2>
                <input
                    disabled
                    type="text"
                    value={currentEditCrypto.token}
                />

                <input
                    type="number"
                    step='0.00001'
                    name='amount'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder={String(currentEditCrypto.amount)}
                />
                {formik.touched.amount && formik.errors.amount ? (
                    <div className='errorMessage'>{formik.errors.amount}</div>
                ) : null}
                <button
                    type='submit'
                >
                    Save
                </button>


            </Container>

        </Modal>
    )

}