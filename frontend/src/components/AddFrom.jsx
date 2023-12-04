import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import Button from "./atoms/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { postSchema, updatePostSchema } from "../validation/postValidator";
import { createPostAction, updatePostAction } from "../redux/actions/postAction";
import LoadingButton from '@mui/lab/LoadingButton'


export function AddFrom({isUpdate, setIsUpdate, postToUpdate, setPostToUpdate}){
    const dispatch = useDispatch();
    const {userInfo} = useSelector(state=> state.login)
    const {loading} = useSelector(state => state.createPost)
    const {updateLoading} = useSelector(state => state.updatePost)
    const googleUser = JSON.parse(localStorage.getItem('googleUser'))


    const formik = useFormik({
      initialValues:{
        title: '',
        message: '',
        tags: [],
        picture: ''
      },
      validationSchema: isUpdate ? updatePostSchema: postSchema ,
      onSubmit: (values, actions)=>{
        if(isUpdate){
          // alert(JSON.stringify(values, null, 4))
          if(postToUpdate){
            const id = postToUpdate._id
            dispatch(updatePostAction(id, values))
            actions.resetForm()
            setIsUpdate(false)
            setPostToUpdate(null)
          }
        }else{
          dispatch(createPostAction(values))
          actions.resetForm()
        }
      }
    })

    const handleTags = (e) => {
      const tagsArray = e.target.value.split(',').map(tag => tag.trim());
      formik.handleChange(e);
      formik.setFieldValue('tags', tagsArray);
    }

    useEffect(() => {
      if (isUpdate && postToUpdate) {
        formik.setValues({
          title: postToUpdate.title || '',
          message: postToUpdate.message || '',
          tags: postToUpdate.tags || [],
          picture: postToUpdate.picture || '',
        });
      }
    }, [isUpdate, postToUpdate]);

    return userInfo || googleUser ? (
    <form onSubmit={formik.handleSubmit}>
      <div className="absolute top-[400px] right-0 -translate-x-24  text-center bg-white shadow-lg w-80 rounded-xl py-5 px-10">
        <p className="text-md font-medium pb-2">{isUpdate ? `Updating "${postToUpdate.title}"` : "Creating A Memory"}</p>
        <div className="gap-y-4 flex flex-col">
          <TextField 
            fullWidth
            label="Title"
            id="title"
            name='title'
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            />
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Message"
            id="message"
            name='message'
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            />     
          <TextField 
            fullWidth
            label="Tags"
            id="tags"
            name='tags'
            value={formik.values.tags}
            onChange={handleTags}
            onBlur={formik.handleBlur}
            error={formik.touched.tags && Boolean(formik.errors.tags)}
            helperText={formik.touched.tags && formik.errors.tags}
            />
          <div className="relative w-full min-w-[200px]">
            <FileBase
                type="file"
                name="picture"
                multiple={false}
                onDone={({ base64 }) => formik.setFieldValue('picture', base64)}
              />
              <div className="text-left pl-4 text-sm text-red-300 mt-1">{ formik.touched.picture && formik.errors.picture }</div>
          </div>
          <div className="flex flex-col gap-y-2">
              { loading ? <LoadingButton loading variant="outlined" className="h-10" />
                : updateLoading ? <LoadingButton loading variant="outlined" className="h-10" /> : <>
                {isUpdate ? <Button label="update" bg="bg-indigo-700" hover="hover:bg-indigo-900" type="submit"/> : <Button label="submit" bg="bg-indigo-700" hover="hover:bg-indigo-900" type="submit"/>}
                <Button label="cancel" bg="bg-red-600" hover="hover:bg-red-800" />
              </>
              }
          </div>
        </div>
      </div>
    </form>
    ) :
    (
      <div className="absolute top-[380px] right-0 -translate-x-24  text-center bg-white shadow-lg w-80 rounded-xl py-5 px-10">
        <p>Please Sign In to create your own posts and like other posts</p>
      </div>
    )
}