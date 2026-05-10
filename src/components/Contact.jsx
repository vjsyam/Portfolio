import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
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
		<div className='relative z-0 bg-transparent w-full min-h-screen flex flex-col justify-between overflow-x-hidden pt-20'>
			<div className='flex-1 flex flex-col items-center justify-center sm:px-10 px-6' id='contact'>
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className='w-full max-w-[800px] bg-black-100 p-8 rounded-2xl border border-white/10 shadow-card'
				>
					<p className='font-light text-center text-secondary uppercase tracking-wider text-[18px]'>Reach Out To Me</p>
					<h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-8'>Contact.</h2>

					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className='flex flex-col gap-6'
					>
						<label className='flex flex-col'>
							<span className='text-white font-medium mb-4'>Your Name</span>
							<input
								type='text'
								name='name'
								value={form.name}
								onChange={handleChange}
								placeholder="Enter your name"
								className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
								required
							/>
						</label>
						<label className='flex flex-col'>
							<span className='text-white font-medium mb-4'>Your Email</span>
							<input
								type='email'
								name='email'
								value={form.email}
								onChange={handleChange}
								placeholder="Ex: abc@gmail.com"
								className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
								required
							/>
						</label>
						<label className='flex flex-col'>
							<span className='text-white font-medium mb-4'>Your Message</span>
							<textarea
								rows={7}
								name='message'
								value={form.message}
								onChange={handleChange}
								placeholder='Do you have anything to say?'
								className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none'
								required
							/>
						</label>

						<button
							type='submit'
							className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-black-100 transition-colors mx-auto'
						>
							{loading ? "Sending..." : "Send"}
						</button>
					</form>
				</motion.div>
				<ToastContainer theme="dark" />
			</div>
			<div className="w-full mt-10">
				<Footer />
			</div>
		</div>
	);
};

export default Contact;
