import React from 'react'
import OrderStatus from './OrderStatus'
import DeliveryAddress from './DeliveryAddress'
import PaymentDetails from './PaymentDetails'
import ContactHelp from './ContactHelp'
import Product from './Product'

const Mobile = () => {
  return (
      <div className='w-screen h-screen bg-white px-5 pt-12'>
          <div className="flex justify-normal flex-col gap-y-4">
              <div className=" mb-7">
                  <h4 className='text-2xl text-black font-medium'>Order Details</h4>
              </div>
              <Product/>
              <OrderStatus />
              <DeliveryAddress />
              <PaymentDetails />
              <ContactHelp/>
          </div>
    </div>
  )
}

export default Mobile