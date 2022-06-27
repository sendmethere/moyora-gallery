import React from 'react';

function Home(props) {
    return (
        <div className="container">
            <div className='row bg-white p-3 m-3 border fs-4'>
                <div className='col'>
                    📢 NOTICE: 
                </div>
            </div>
            <div className='bg-white p-3 m-3 border fs-4'>
                <div className=''>
                    모여라 갤러리는요 
                </div>
                <div className='d-flex flex-column'>
                    <div className="p-3 border" style={{display: "inline-block",}}>
                        모여라 갤러리는요 
                    </div>
                    <div>
                        모여라 갤러리는요 
                    </div>
                    <div>
                        모여라 갤러리는요 
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col text-center fs-3'>
                    구경하기
                </div>
            </div>
        </div>
    );
}

export default Home;