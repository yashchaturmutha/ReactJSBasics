import React from 'react';

import {add,sub,mul,div} from './calc'

function App()
{
return <div>
    <h1>{add(2,3)}</h1>
    <h1>{sub(4,3)}</h1>
    <h1>{mul(2,3)}</h1>
    <h1>{div(7,3)}</h1>
</div>
}

export default App;