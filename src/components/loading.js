import React from 'react';
import { Spinner } from 'reactstrap';


/*export const Loading = () => {
    return(
        <div className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p>Loading . . .</p>
        </div>
    );
};*/

export const Loading = () => {
    return(
        <div className="col-12">
      		<Spinner color="primary" />
        </div>
    );
};