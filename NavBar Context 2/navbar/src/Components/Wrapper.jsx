    import React from 'react';
    import Navbar from './Navbar';
    import FormWrapper from './FormWrapper';
    import { NameProvider } from './NameContext';

    function Wrapper() {
    return (
        <NameProvider>
        <Navbar />
        <FormWrapper />
        </NameProvider>
    );
    }

    export default Wrapper;
