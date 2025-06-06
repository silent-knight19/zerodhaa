import React from 'react';
function NotFound() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <div className='col-md-12'>
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>The page you are looking for does not exist.</p>
                    <a href='/' className='btn btn-primary'>Go to Home</a>
                </div>
            </div>
        </div>
     );
}

export default NotFound;