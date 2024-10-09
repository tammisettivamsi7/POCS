import React, { useState } from 'react';
import QRCode from "react-qr-code";
import '../assests/style/QrCode.css';
import { Link } from 'react-router-dom';

export default function QrCode() {
    const [details, setDetails] = useState({
        name: '',
        age: '',
        email: '',
        phone: ''
    });

    const [qrCode, setQrCode] = useState('');

    const { name, age, email, phone } = details;

    const handleChange = (e) => {
        const { id, value } = e.target;
        setDetails({
            ...details,
            [id]: value
        });
    };

    const generateQrCode = () => {
        if (name.trim() && age.trim() && email.trim() && phone.trim()) {
            const qrCodeString = `
            Name: ${name}
            Age: ${age}
            Email: ${email}
            Phone: ${phone}
        `;
            setQrCode(qrCodeString);
        } else {
            setQrCode('');
            alert('Please fill in all fields.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        generateQrCode();
    };

    return (
        <div>
            <div className="backButton">
        <Link to="/">
          <button className="backLink">Back</button>
        </Link>
      </div>
            <h1>QR CODE GENERATOR</h1>
            <form className='mainContainer' onSubmit={handleSubmit}>
                <div className='subContainer'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' placeholder='Enter a name' value={name} id='name' onChange={handleChange} /><br />
                </div>
                <div className='subContainer'>
                    <label htmlFor='age'>Age:</label>
                    <input type='number' placeholder='Enter age' value={age} id='age' onChange={handleChange} /><br />
                </div>
                <div className='subContainer'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' placeholder='Enter email' value={email} id='email' onChange={handleChange} /><br />
                </div>
                <div className='subContainer'>
                    <label htmlFor='phone'>Phone:</label>
                    <input type='phone' placeholder='Enter phone' value={phone} id='phone' onChange={handleChange} /><br />
                </div>

                <button type='submit' className='primary'>Generate QR Code</button>
            </form>
            {qrCode && (
                <div>
                    <h3>QR Code:</h3>
                    <QRCode value={qrCode} />
                </div>
            )}
        </div>
    );
}