// import React from 'react';

function ProfileNum() {
    // Define an array of data for the buttons
    const buttonsData = [
        { label: 'POSTS', value: 683 },
        { label: 'FRIENDS', value: '5.7k' },
        { label: 'PHOTOS', value: 296 },
        { label: 'LIKES', value: '10.7K' },
    ];

    return (
        <>
            <div className="profile p-3 rounded-bottom bg-white">
                <div className="row">
                    <div className="col">
                        <h4>Angela Lee</h4>
                        <small>@angee</small>
                    </div>
                    <div className="col">
                        <div className="btn-group btn-group-lg " style={{ backgroundColor: 'rgb(244, 244, 244)' }}>
                            
                            {buttonsData.map((button, index) => (
                                <button key={index} type="button" className="btn btn text-muted">
                                    {button.label} <br />
                                    <small className="text-dark">{button.value}</small>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileNum;
