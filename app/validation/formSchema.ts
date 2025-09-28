import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


const formSchema = yup.object({
    email: yup.string().email('Будь ласка введіть коректну пошту').required("Обово'язково"),
    password: yup.string().matches(passwordRules, 'Будь ласка введіть надійніший пароль').min(5).max(10).required("Обово'язково")
})


export default formSchema