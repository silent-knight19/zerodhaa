import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <button 
                onClick={() => navigate('/')} 
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    color: 'white',
                    backgroundColor: '#007bff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Go to Home
            </button>
        </div>
    );
}

export default NotFoundPage; 