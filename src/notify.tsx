import React, { useEffect, useState } from 'react'
import { baseUrl } from './redux/service/api'
import { setCredentials, useAuth } from './redux/slice/authSlice'
import { io } from 'socket.io-client';
import { useDispatch } from 'react-redux';


const notify = () => {
    const {token, auth} = useAuth()
    const dispatch = useDispatch()
    

    // console.log(auth);
    

    useEffect(() => {

        const socket = io(baseUrl, {
            auth: {token}
        })
        
        socket.on('connect', () => {
            console.log(socket.id)
        })
    
        socket.on('notification_data', (data) => {
            // console.log('notification_data', data)

            dispatch(setCredentials({
                ...auth,
                user: data,
            }))
        })
      }, [])


  return null
}

export default notify