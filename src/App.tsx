import React from 'react';
import './App.css';
import {Choose} from "./Choose/Choose";
import {Provider} from "react-redux";
import {store} from "./state/store";

function App() {
    return (
        <Provider store={store}>
             <Choose/>
        </Provider>
     );
}

export default App;
