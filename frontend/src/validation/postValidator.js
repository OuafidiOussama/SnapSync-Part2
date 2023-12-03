import * as yup from 'yup'

export const postSchema = yup.object({
    title: yup
        .string('Enter Your TItle')
        .required('Title Is Required'),
    message: yup
        .string('Enter Your Message')
        .required('Message Is Required'),
    tags: yup
        .array()
        .of(yup.string('Enter Your Tags'))
        .min(1, 'Enter At Least One Tag')
        .required('Enter At Least One Tag'),
    picture: yup
        .mixed()
        .required('Picture is Required')
})

export const updatePostSchema = yup.object({
    title: yup
        .string('Enter Your TItle')
        .required('Title Is Required'),
    message: yup
        .string('Enter Your Message')
        .required('Message Is Required'),
    tags: yup
        .array()
        .of(yup.string('Enter Your Tags'))
        .min(1, 'Enter At Least One Tag')
        .required('Enter At Least One Tag'),
})