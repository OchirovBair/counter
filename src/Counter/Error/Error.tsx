import React from 'react';

type ErrorPropsType = {}

export const Error = ({}: ErrorPropsType) => {
    return (
        <span style={{fontSize: '40px', fontWeight: 'bold'}}>Invalid Address</span>
    );
};