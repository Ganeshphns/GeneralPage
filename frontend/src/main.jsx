
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import store from "./store/store.js";
import { Toaster, toast } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
<BrowserRouter>

<Provider store={store}>
      <App />
       <Toaster
       position="bottom-right" richColors theme="light"/>
       
    </Provider>
</BrowserRouter>,



)
