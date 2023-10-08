// @ts-nocheck
import React from 'react';
import ContactForms from '../../components/ContactForm/ContactForms';


const Contact = () => {
    return (
        <div id='contact' className="lg:w-[1280px] ml-auto  bg-[#0c2a50]  shadow-2xl p-8 rounded-l-3xl gap-10  pt-14 mb-10" >
            <div className='container mx-auto text-center py-8'>
                <h2 className="text-design text-5xl font-black pb-8">Contact Me</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div>
                        <ContactForms />
                    </div>
                    <div>
                        <img src="https://thecapplug.com/img/cms/94599-contact-us.gif" alt="" className='rounded-md h-[450px] w-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;