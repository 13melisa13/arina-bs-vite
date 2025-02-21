import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../services/store';
import { router } from '../router';
import Modal from '../components/modal/Modal';

function App() {

    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}
export default App;