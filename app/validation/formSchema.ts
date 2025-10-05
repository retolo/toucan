
import * as yup from 'yup'


const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const emailRules = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



const formSchema = yup.object({
    email: yup.string().email('Будь ласка введіть коректну пошту').required("Обово'язково"),
    password: yup.string().matches(passwordRules, 'Пароль повинен містити: одну велику букву, одну цифру').min(5, 'Мінімальна довжина 5 символів').max(10, 'Максимальна довжина 10 символів').required("Обово'язково")
})



export function validateEmail(email: string){
    let error;
    if(!email){
        error = "Обово'язково"
    }else if(!emailRules.test(email)){
        error = 'Не коректна пошта'
    }

    return error;
}


export function validatePassword(password: string){
    let error;
    if(!password){
        error = "Обово'язково"
    }else if(!passwordRules.test(password)){
        error = 'Пароль повинен містити: одну велику букву, одну цифру'
    }

    return error;
}



export default formSchema