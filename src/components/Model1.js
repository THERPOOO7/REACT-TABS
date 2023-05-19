import React from 'react'


const Model1 = ({ onClose, url }) => {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <iframe style={{height:'1000px'}} src='https://www.toasttab.com/homekitchen/v3'/>
          <button className='btn btn-danger'  onClick={onClose} style={{margin:'5px 0px'}}>Close</button>
        </div>
      </div>
    );
  };
  

export default Model1