import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';

function EmailForm() {

    const form = useRef();
    const [name, setName] = useState("");
    const [furigana, setFurigana] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        if(!name.trim()) {
            alert('お名前必須です！');
        } else if(!phone.trim()) {
            alert('電話番号必須です！');
        } else if(!mail.trim()) {
            alert('メールアドレス必須です！dayo');
        } else if(!message.trim()) {
            alert('お問い合わせ内容必須です！');
        } else {
            emailjs.sendForm('service_cih9z5r', 'template_7fw1jhl', form.current, 'MiElwnYhbXYDEzjll')
            .then((result) => {
                console.log(result.text);
                setName("");
                setFurigana("");
                setMail("");
                setPhone("");
                setMessage("");
                alert('Email Sended!');
            }, (error) => {
                console.log(error.text);
            });
        }
        // (name.trim().length === 0) ? setErr(current => [...current,'false']) : setErr(current => [...current,'true'])
        // (phone.trim().length === 0) ? setErr(current => [...current,'false']) : setErr(current => [...current,'true'])
        // (email.trim().length === 0) ? setErr(current => [...current,'false']) : setErr(current => [...current,'true'])
        // (message.trim().length === 0) ? setErr(current => [...current,'false']) : setErr(current => [...current,'true'])
        }

  return (
    <React.Fragment>
        <div className='p-10 mt-5 text-gray-800 max-w-3xl ml-auto mr-auto justify-center'>
            <p className='text-5xl text-gray-800 text-center mb-8 font-extrabold'>お問合せ</p>
            <form ref={form} onSubmit={sendEmail}>
                <div className="mb-6">
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-800">お名前(必須)</label>
                    <input type="text" name='name' 
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5" required="" />
                    
                </div>
                <div className="mb-6">
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-800">フリガナ</label>
                    <input type="text" name='furigana'
                    value={furigana}
                    onChange={(e) => {setFurigana(e.target.value)}}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5" required="" />
                    
                </div>
                <div className="mb-6">
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-800">電話番号(必須)([-]ハイフンなしで入力してください)</label>
                    <input type="text" name='phone' 
                    value={phone}
                    onChange={(e) => {setPhone(e.target.value)}}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5" required="" />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800">メールアドレス(必須)</label>
                    <input type="email" name='email' 
                    id='email'
                    value={mail}
                    onChange={(e) => {setMail(e.target.value)}}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5" />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-800">お問い合わせ内容(必須)</label>
                    <textarea rows={4} name='message' 
                    value={message}
                    onChange={(e) => {setMessage(e.target.value)}}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5" required=""></textarea>
                </div>
                <div className='flex w-full mr-auto ml-auto justify-center'>
                    <button type="submit" className="text-white w-36 bg-gray-800 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">送信</button>
                </div>
            </form>
        </div>
    </React.Fragment>
  )
}

export default EmailForm