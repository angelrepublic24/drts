'use client'
import { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        setLoading(true);

        emailjs
            .sendForm(
                'service_5lhqlxl',
                'template_1d1keqt',
                event.currentTarget,
                'Wz-mC1ECS67RORpRr'
            )
            .then(
              () => {
                setMessage('Your message has been submitted');
                form.reset();
                setLoading(false);
            },
            (error) => {
                console.error('Error sending message:', error);
                setMessage(`Error sending message: ${error.text || 'try again.'}`);
                setLoading(false);
            }
            );
    };

    return (
        <section id="contact" className="py-20 w-11/12 bg-teal-100 mx-auto rounded-3xl mb-10 px-4">
            <p className="text-center text-black font-light mb-3 bg-gray-50 w-40 mx-auto rounded-xl py-1">
                Contact Us
            </p>
            <h2 className="text-3xl font-bold text-center text-black mb-12">
                Reach out to us for any questions or support!
            </h2>
            <div className="max-w-4xl mx-auto px-6 py-8 bg-white rounded-3xl">
                <form className="gap-8" onSubmit={handleSubmit}>
                    <div className="flex flex-row w-full justify-between mb-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name*"
                            className="border rounded-lg px-4 py-3 w-1/2 mr-3 text-black"
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            className="border rounded-lg px-4 py-3 w-1/2 text-black"
                        />
                    </div>
                    <div className="flex flex-col mb-6">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email*"
                            className="border rounded-lg px-4 py-3 mb-4 text-black"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            className="border rounded-lg px-4 py-3 text-black" 
                        />
                    </div>
                    <textarea
                        name="comments"
                        placeholder="Comments..."
                        className="col-span-2 border rounded-lg w-full text-black px-4 py-2"
                    ></textarea>
                    <div className="flex justify-center mt-3">
                        <button
                            type="submit"
                            className="col-span-2 bg-teal-600 text-white py-3 w-1/2 rounded-lg"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Submit'}
                        </button>
                    </div>
                </form>
                {message && <p className="text-center mt-4 text-black">{message}</p>}
            </div>
        </section>
    );
};
