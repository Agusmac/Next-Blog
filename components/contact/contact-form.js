import React, { useRef, useState, useEffect } from 'react'
import Notification from '../ui/notification'

import s from './contact-form.module.css'

const ContactForm = () => {
    const email = useRef()
    const name = useRef()
    const text = useRef()

    const c = 'current'
    const v = 'value'

    const [noti, setNoti] = useState({ active: false, title: '', message: '', status: '' })
   
    useEffect(() => {
        if (noti.active) {
           let timer = setTimeout(() => {
                setNoti(prev => (
                    // { ...prev, active: false }
                    { active: false, title: '', message: '', status: '' }
                ))
            }, 3000);
            return () => {clearTimeout(timer)}
          
        }
        
    }, [noti.active])

    function Notisetter(activer, titler, messager, stater) {
        setNoti({ active: activer, title: titler, message: messager, status: stater })
    }

    async function poster(e) {
        e.preventDefault()
        Notisetter(true, 'Pending', 'Message Traveling through your wifi', 'pending');
        const newContact = {
            email: email[c][v],
            name: name[c][v],
            message: text[c][v],
        }

        const response = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(newContact),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()

        try {
            if (response.ok) Notisetter(true, 'Success', 'Message Sent Correctly!', 'success');
            if (!response.ok) throw new Error(data.message || 'Something went wrong');
        } catch (error) {
            Notisetter(true, 'Error', 'message sending failed!', 'error')
        }
    }

    return (
        <>
            <section className={s.contact}>
                <h1>How can i Help you?</h1>
                <form className={s.form} onSubmit={poster}>
                    <div className={s.controls}>
                        <div className={s.control}>
                            <label htmlFor="email">Your Email</label>
                            <input ref={email} type="email" id='email' required />
                        </div>
                        <div className={s.control}>
                            <label htmlFor="name">Your Name</label>
                            <input ref={name} type="text" id='name' required />
                        </div>
                    </div>
                    <div className={s.control}>
                        <label htmlFor="message">Your Name</label>
                        <textarea ref={text} name="message" id="message" rows="5"></textarea>
                    </div>
                    <div className={s.actions}>
                        <button>Send Message</button>
                    </div>
                </form>
            </section>
            {noti?.active && <Notification {...noti} setNoti={setNoti} />}
        </>
    )
}

export default ContactForm