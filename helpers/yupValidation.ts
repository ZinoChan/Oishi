import * as Yup from 'yup'

export const billingValidation = Yup.object().shape({
    fullname: Yup.string()
    .required("this field is required")
    .min(3, "full name must be more than 3 chars")
    .max(24, "fullname must be less than 24 chars"),
    address: Yup.string()
    .required("this field is required")
    .min(4, "address must be more than 4 chars"),
    postalCode: Yup.string()
    .required("this field is required")
    .matches(/^[0-9]*$/, "please enter valide postal code")
    .min(3, "zip code must be more than 3")
    .max(5, "zip code must be less than 5"),
    phone: Yup.string()
    .required("this field is required")
    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, "please enter valid phone number")
    .max(14, "phone number must be less than 14 digits")
})

export const cardValidation = Yup.object().shape({
    cardNumber: Yup.string()
    .required("this field is required")
    .matches(/^[0-9]*$/, "Please enter a valid card number")
    .min(13, "this field must be more than 12 digits")
    .max(16, "this field must be less than 16 digits"),
    nameOnCard: Yup.string()
    .required("this field is required")
    .min(3, "full name must be more than 3 chars")
    .max(24, "fullname must be less than 24 chars"),
    cvvCode: Yup.string()
    .required("this field is required")
    .matches(/^[0-9]*$/, "Please enter a valid cvv code")
    .min(3, "full name must be more than 3 digits")
    .max(4, "fullname must be less than 4 digits"),
    monthDate: Yup.string()
    .required("this field is required"),
    yearDate: Yup.string()
    .required("this field is required")
})

export const paypalValidation = Yup.object().shape({
    email: Yup.string()
    .required("this field is required")
    .email("please enter a valid email"),
    password: Yup.string()
    .required("this field is required")
})