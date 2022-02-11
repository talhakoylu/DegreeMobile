import CustomContainer from '@components/CustomContainer';
import Header from '@components/partials/Header';
import React from 'react';

const StandardLayout: React.FC = ({ children }) => {
    return (
        <>
            <Header marginY={6} />
            {children}
        </>
    );
}

export default StandardLayout;