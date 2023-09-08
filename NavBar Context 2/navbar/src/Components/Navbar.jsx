    import React from 'react';
    import { useNameContext } from './NameContext';

    function Navbar() {
    const { name } = useNameContext();

    return <div>Hi, {name}!</div>;
    }

    export default Navbar;
