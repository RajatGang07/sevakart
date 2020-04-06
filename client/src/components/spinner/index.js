import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './index.styles';

const Spinner = ({ isLoading, ...otherProps }) => (
    <SpinnerOverlay>
        <SpinnerContainer />
    </SpinnerOverlay>
);



export default Spinner;