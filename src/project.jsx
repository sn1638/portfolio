import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Project() {
	const projects = [
			{
				id: 1,
				title: 'Password Vault- full stack project',
				description: 'Password Vault is a secure web application that enables users to generate, store, and manage strong passwords in a private encrypted vault. Users can register, log in securely, and perform operations like adding, viewing, editing, and deleting saved credentials. The frontend is developed using React and Tailwind CSS for a clean, responsive, and fast user interface, while the backend uses Node.js, Express, and MongoDB for efficient data handling and scalability.',
				repo: 'https://github.com/sn1638/pass_vault_client',
				live: 'https://pass-vault1638.vercel.app/',
			},
			{
				id: 2,
				title: 'Tech and Cultural Event Website',
				description: 'Event Schedule — Displays detailed timelines of performances, talks, or activities.Artist/Speaker Info — Profiles with images, bios, and session details.Registration Section — Secure registration form with validation for attendees.',
				repo: 'https://github.com/sn1638/Design-warlocks',
				live: 'https://design-warlocks.vercel.app/',
			},
			{
				id: 3,
				title: 'Todo App',
				description: 'Tech Stack- React,Tailwind , Javascript ,vercel Implemented full CRUD functionality (Create, Read, Update, Delete). Rendered tasks dynamically using map() for a real-time task list. Designed a responsive UI with Tailwind CSS for better usability. Deployed on Vercel for fast, serverless hosting.',
				repo: 'https://github.com/sn1638/to-do-app',
				live: 'https://todoapp1638.vercel.app/',
			},
			{
				id: 4,
				title: 'React Quiz App',
				description: 'Tech Stack – React ,Tailwindcss , vite, vercel .Built an interactive Quiz Web App using React.js, deployed on Vercel with a responsive UI. Implemented Previous, Next, and Submit buttons along with dynamic score tracking.  Managed quiz state efficiently using React Hooks and a component-based architecture.',
				repo: 'https://github.com/sn1638/react-quiz',
				live: 'https://reactquiz1638.vercel.app/',
			},
	];

	return (
		<div className="border border-gray-600 overflow-x-hidden bg-black w-full pb-30 pt-20">
			<div className="text-center text-4xl py-10 pb-30 text-white">Projects</div>

			<div className="max-w-6xl mx-auto px-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
				{projects.map((p, i) => (
					<motion.div
						key={p.id}
						className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 p-4"
						initial={{x:i%2===0?'-100vw':'100vw',opacity: 0, y: 30 }}
						animate={{x:0, opacity: 1, y: 0 }}
						transition={{ duration: 3.0, ease: 'easeInOut' }}
					>
						<div className="mt-2">
							<div className="text-xl text-white font-semibold">{p.title}</div>
							<p className="text-gray-300 py-2">{p.description}</p>
							<div className="flex gap-4 pt-3">
								<a href={p.repo} target="_blank" rel="noreferrer" className="text-white hover:text-violet-400 flex items-center gap-2">
									<FaGithub /> <span className="text-sm">Repo</span>
								</a>
								<a href={p.live} target="_blank" rel="noreferrer" className="text-white hover:text-violet-400 flex items-center gap-2">
									<FaExternalLinkAlt /> <span className="text-sm">Live</span>
								</a>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}