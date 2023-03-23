import React from 'react'
import ReactDOM from 'react-dom/client'
import { OrderSummary } from './components/OrderSummary'
import './css/styles-ordersumary.scss';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <OrderSummary />
    </React.StrictMode>,
)
