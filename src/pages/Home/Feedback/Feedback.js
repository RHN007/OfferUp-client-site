import React from 'react';
import FeedBack from 'react-feedback-popup';
const Feedback = () => {
  
    return (
        <FeedBack
        style={{zIndex:'2', marginLeft:'20px', position:'fixed' }}
        
        position="left"
        numberOfStars={5}
        headerText="Feedback"
        bodyText="Write Your Thought"
        buttonText="Please give us feedback Here"
        handleClose={() => console.log("handleClose")}
        handleSubmit={(data) => 
            fetch('http://localhost:9000/feedback', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data),
            }).then((response) => { 
                if (!response.ok) {
                    return Promise.reject('Our servers are having issues! We couldn\'t send your feedback!');
                }
                response.json()
            }).then(() => {
                alert('Success!');
            }).catch((error) => {
                alert('Our servers are having issues! We couldn\'t send your feedback!', error);
            })
        }
        handleButtonClick={() => console.log("handleButtonClick")}
    />
    );
};

export default Feedback;