import React from 'react';

const contextoDefault = {
    user: null,
    changeProfile: () => {},
}

export const ProfieContext = React.createContext(contextoDefault)
