import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name:'',
        email:'',
        message:'',
    });
//service_3wcobxo
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        try{
           await emailjs.send('service_3wcobxo',
                'template_rftao0e',
                {
                    from_name:form.name,
                    to_name:'Yuvraj Singh',
                    from_email:form.email,
                    to_email:'yuvrajraghuvanshisingh@gmail.com',
                    message:form.message,
                },
               'VoXHcVDP29wnf6OPM'
            )
            setLoading(false)
            alert('Your messag ehas been sent')
            setForm({
                name:'',
                email: '',
                message: '',
            })
        }catch(error){
            setLoading(false)
            console.log(error)
            alert("smething went wrong")

        }
    };

    return (
        <section className="c-space my-20" id="Contact">
            <h3 className="head-text">Contact Me</h3>
            <div className="relative min-h-screen flex items-center justify-center flex-col h-full ">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen w-full object-cover" />
                <div className="contact-container p-8 rounded-lg shadow-lg w-full max-w-lg relative z-10">
                    <h3 className="head-text ">Let's Talk</h3>
                    <p className="text-lg text-white-600 ">
                        Let's start a project to remember. I’ll help turn your ideas into reality.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-6">
                        <label className=" flex flex-col space-y-0 -mt-1">
                            <span className="field-label -mt-6">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                required
                                className="field-input"
                                onChange={handleChange}
                                placeholder="John Doe"
                            />
                        </label>
                        <label className="flex flex-col space-y-2">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                required
                                className="field-input w-full p-3 rounded-md"
                                onChange={handleChange}
                                placeholder="example@email.com"
                            />
                        </label>
                        <label className="flex flex-col space-y-2">
                            <span className="field-label">Your Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                required
                                rows={2}
                                className="field-input w-full mb-3 rounded-md"
                                onChange={handleChange}
                                placeholder="Hi, I am interested in..."
                            />
                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="up-Arrow" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
