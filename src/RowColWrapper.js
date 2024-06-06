import React from 'react';

function RowColWrapper({content}){

    return(
        <div className="row justify-content-center borde firs">
            <div className="col-md-12 centered-column">
                {content}
            </div>
        </div>
    );
}
export default RowColWrapper;