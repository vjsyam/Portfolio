import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY, FORMSPREE_FORM_ID } from "../constants";
import Footer from "./Footer";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		const username = form.name.trim();
		const user_email = form.email.trim();
		const user_message = form.message.trim();

		if (username === '' || user_email === '' || user_message === '') {
			setLoading(false);
			toast.error("Please fill all the fields.", {
				position: 'bottom-right',
			});
			return;
		}



		const hasEmailJs = EMAIL_JS_SERVICE_ID && EMAIL_JS_TEMPLATE_ID && EMAIL_JS_PUBLIC_KEY;
		const hasFormspree = FORMSPREE_FORM_ID;

		if (!hasEmailJs && !hasFormspree) {
			setLoading(false);
			toast.error("Contact temporarily unavailable. Please ping me on LinkedIn.", { position: 'bottom-right' });
			return;
		}

		if (hasFormspree) {
			fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: username,
					email: user_email,
					message: user_message,
				})
			})
			.then((res) => {
				if (!res.ok) throw new Error('Failed');
				setLoading(false);
				toast.success("Message sent successfully!", { position: 'bottom-right' });
				setForm({ name: "", email: "", message: "" });
			})
			.catch((err) => {
				setLoading(false);
				console.error(err);
				toast.error("Uh, oh! Something went wrong. Please try again later.", { position: 'bottom-right' });
			});
			return;
		}

		emailjs
			.send(
				EMAIL_JS_SERVICE_ID,
				EMAIL_JS_TEMPLATE_ID,
				{
					from_name: username,
					to_name: "Vijay Syam BK",
					reply_to: user_email,
					to_email: "vjsyam17@gmail.com",
					message: user_message,
				},
				EMAIL_JS_PUBLIC_KEY
			)
			.then(
				() => {
					setLoading(false);
					toast.success("Message sent successfully!", {
						position: 'bottom-right',
					});
					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.error(error);
					toast.error("Uh, oh! Something went wrong. Please try again later.", {
						position: 'bottom-right',
					});
				}
			);
	};

	return (
		<div className='relative z-0 bg-black w-screen min-h-screen mt-12'>
			<div className='text-white contact overflow-x-hidden pt-12 mt-8' id='contact'>
				<div className='z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur shadow-xl'>
					<p className='font-light text-center text-white/70'>REACH OUT TO ME</p>
					<h2 className='text-5xl font-extrabold mt-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-rose-300 to-pink-400'>Contact</h2>
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className='mt-12 flex flex-col gap-6'
					>
						<label className='flex flex-col'>
							<span className='font-medium mb-2'>Your Name</span>
							<input
								type='text'
								name='name'
								value={form.name}
								onChange={handleChange}
								placeholder="Enter your name"
								className='py-3 px-5 rounded-lg outline-none border border-white/10 focus:border-white/30 focus:ring-2 focus:ring-white/10 font-medium bg-gray-900 text-gray-100 transition'
								required
							/>
						</label>
						<label className='flex flex-col'>
							<span className='font-medium mb-2'>Your Email</span>
							<input
								type='email'
								name='email'
								value={form.email}
								onChange={handleChange}
								placeholder="Ex: abc@gmail.com"
								className='py-3 px-5 rounded-lg outline-none border border-white/10 focus:border-white/30 focus:ring-2 focus:ring-white/10 font-medium bg-gray-900 text-gray-100 transition'
								required
							/>
						</label>
						<label className='flex flex-col'>
							<span className='font-medium mb-2'>Your Message</span>
							<textarea
								rows={6}
								name='message'
								value={form.message}
								onChange={handleChange}
								placeholder='Do you have anything to say?'
								className='py-3 px-5 rounded-lg outline-none border border-white/10 focus:border-white/30 focus:ring-2 focus:ring-white/10 font-medium bg-gray-900 text-gray-100 transition'
								required
							/>
						</label>

						<button
							type='submit'
							className='group mt-4 py-3 px-6 rounded-xl outline-none w-full font-bold shadow-lg bg-gradient-to-r from-emerald-400/20 to-teal-400/20 border border-emerald-400/30 text-emerald-200 hover:from-emerald-400/30 hover:to-teal-400/30 transition'
						>
							<span className='inline-flex items-center gap-2 justify-center'>
								<svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 16a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Zm9-6a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1ZM6 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm12.364-7.778a1 1 0 0 1 0 1.414l-1.415 1.414a1 1 0 1 1-1.414-1.414l1.415-1.414a1 1 0 0 1 1.414 0ZM8.464 16.95a1 1 0 0 1 0 1.415l-1.415 1.414A1 1 0 0 1 5.636 18.364l1.415-1.415a1 1 0 0 1 1.414 0Zm9.9 1.415a1 1 0 0 1-1.414 0l-1.415-1.415a1 1 0 0 1 1.414-1.414l1.415 1.415a1 1 0 0 1 0 1.414ZM7.05 4.222a1 1 0 0 1 0 1.414L5.636 7.05A1 1 0 0 1 4.222 5.636L5.636 4.222A1 1 0 0 1 7.05 4.222Z"/></svg>
								{loading ? "Sending..." : "Send"}
							</span>
						</button>
					</form>
				</div>
				<ToastContainer />
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
