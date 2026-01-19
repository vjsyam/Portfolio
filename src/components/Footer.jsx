import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className='bg-black-100 p-2 border-t border-white/5' style={{ cursor: 'default' }}>
			<div className='flex justify-between items-center sm:px-10 px-4'>
				<p className='text-secondary text-[12px]'>© {year} VijaySyam BK.</p>
				<div className='text-secondary flex gap-4'>
					<a href="mailto:vjsyam17@gmail.com" className='hover:text-white transition-colors'>
						<FiMail className='text-lg' />
					</a>
					<a href="https://www.linkedin.com/in/vijaysyam-bk/" target='_blank' rel='noreferrer' className='hover:text-white transition-colors'>
						<AiFillLinkedin className='text-lg' />
					</a>
					<a href="https://github.com/vjsyam" target='_blank' rel='noreferrer' className='hover:text-white transition-colors'>
						<FaGithub className='text-lg' />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;