import React from 'react';
import loading from '../../../assets/Progress indicator.gif'

const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            {/* <div className="spinner-border animate-spin inline-block w-24 h-24 border-4 rounded-full bg-primary" role="status">
                <span className="visually-hidden bg-white">...</span>
            </div> */}
      <div >
      <img src={loading} width={400} alt="" />
      </div>

        </div>
    );
};

export default Loading;