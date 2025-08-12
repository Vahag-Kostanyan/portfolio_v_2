import { useState } from 'react';
import ProjectModal from './ProjectModal';
import './Works.css';

const projects = [
	{
		id: 1,
		title: 'Doctors Testing Platform',
		description:
			'A platform I developed for the medical field to facilitate professional testing for doctors. Allows creating various types of tests and automatically grading the results, making the learning and certification process easier and more efficient.',
		tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'Laravel', 'MySQL'],
		image: '🏥',
		color: '#667eea',
		isPrivate: true,
		fullDescription: `A specialized web platform developed for the medical field to streamline professional testing and certification for doctors. It allows the creation of different test formats, including multiple-choice and scenario-based assessments, with built-in automated grading to ensure fast and accurate results. The system also provides progress tracking and analytics, helping both doctors and administrators monitor performance. By digitizing the process, it reduces manual work, ensures consistent evaluation, and makes certification more accessible and efficient.`,
	},
	{
		id: 2,
		title: 'Internal Company CRM',
		description:
			'A CRM system developed for internal use to automate company operations and improve organizational efficiency. Built with Laravel, jQuery, HTML, and CSS, it provides a secure, reliable, and effective management workflow.',
		tech: ['Laravel', 'jQuery', 'HTML', 'CSS'],
		image: '🏢',
		color: '#764ba2',
		isPrivate: true,
		fullDescription: `I worked on making a government CRM system easier and faster to use. This system helps different state departments manage citizen requests, keep records, and communicate with each other. My work included making the interface clearer, improving the speed of the system, and making daily tasks simpler for users. These changes helped employees work more efficiently and reduced mistakes.`,
	},
	{
		id: 3,
		title: 'GIP Platform',
		description:
			'A platform designed to integrate various state services and banks via API endpoints. GIP allows unifying multiple services into one single system, enabling easier and faster interaction between users and government/banking services.',
		tech: ['API', 'Integration', 'Python'],
		image: '🔗',
		color: '#f093fb',
		isPrivate: true,
		fullDescription: `A centralized web platform designed for state departments to share information, manage workflows, and collaborate more efficiently. It connects multiple organizations, enabling secure data exchange, task tracking, and progress monitoring in one place. By digitizing communication and reducing paperwork, it improves accuracy, speeds up processes, and makes interdepartmental cooperation easier and more effective.`,
	},
	{
		id: 4,
		title: 'CSO (Civil Service Office)',
		description:
			'Platform for tax employees and the Ministry of Finance for registration, financial record management, payroll, and inspection organization. Backend in Laravel, frontend in jQuery.',
		tech: ['Laravel', 'jQuery'],
		image: '💼',
		color: '#4facfe',
		isPrivate: true,
		fullDescription: `A secure registry system built to manage and store detailed information about civil servants across state departments. It allows authorized staff to add, update, and search records quickly while maintaining strict data protection standards. The platform helps ensure accurate record-keeping, supports efficient HR processes, and provides reliable access to essential information for government operations.`,
	},
	{
		id: 5,
		title: 'BetProduction Casino Platform',
		description:
			'Casino platform with three codebases: back office, back office frontend, and player site. Developed RESTful API with Yii2 and MySQL. Integrated casinos, payment systems, OTP, and more.',
		tech: ['Yii2', 'MySQL', 'Redis', 'REST API', 'Integration', 'Scss'],
		image: '🎰',
		color: '#43e97b',
		isPrivate: false,
		demoLinks: [
			{
				url: 'https://bigstarbet.com',
				label: 'Live Demo'
			}
		],
		fullDescription: `An online casino system designed to provide a secure, engaging, and customizable gaming experience. It includes game integration, jackpot logic, secure payment systems, and configurations managed from an admin panel. The platform supports email and SMS notifications, player account management, and real-time game data updates. Built with a focus on security, performance, and scalability, it ensures smooth operation for both players and administrators.`,
	},
	{
		id: 6,
		title: 'Telegram Crypto Bots',
		description:
			'Automated Telegram bots for crypto games like "Hamster Kombat." Bots automate gameplay and coin collection for users.',
		tech: ['Node js', 'Express js', 'Telegram API', 'Crypto', 'Automation'],
		image: '🤖',
		color: '#fa709a',
		isPrivate: false,
		githubLinks: [
			{
				url: 'https://github.com/Vahag-Kostanyan/super_player_api',
				label: 'Apis'
			},
		],
		fullDescription: `A collection of automated bots for Telegram that allow users to automatically receive, send, and manage their crypto wallets. These bots connect with popular crypto games like Hamster Kombat, PSP, Pocket Fi, Major, and Blum, enabling quick and convenient transactions without leaving Telegram. The system simplifies monitoring balances, transaction history, and notifications, providing a secure and user-friendly experience.`,
	},
	{
		id: 7,
		title: 'Students Testing Platform',
		description:
			'Platform for universities and students. Instructors create/assign tests, students take tests with automatic grading. Role-based access for rector, managers, instructors.',
		tech: ['Role-based Access', 'Testing', 'Automation'],
		image: '📚',
		color: '#43e97b',
		isPrivate: false,
		githubLinks: [
			{
				url: 'https://github.com/HovhannesGhukasyanWeb/testing-student-admin',
				label: 'Admin Panel'
			},
			{
				url: 'https://github.com/Vahag-Kostanyan/testing-student-api',
				label: 'Backend API'
			},
			{
				url: 'https://github.com/HovhannesGhukasyanWeb/testing-student',
				label: 'Frontend'
			}
		],
		fullDescription: `A web-based platform designed to create, manage, and grade tests for students across various subjects. It supports multiple test formats and provides automatic grading to deliver quick results. The system helps teachers track student progress and performance, making the learning and evaluation process easier and more efficient.`,
	},
	{
		id: 8,
		title: "Photographer’s Portfolio Website",
		description:
			'Portfolio website using React and Firebase. Features galleries, skills, contact page, and back office for photo management.',
		tech: ['React', 'Firebase', 'Pagination', 'Filtering'],
		image: '📸',
		color: '#f093fb',
		isPrivate: false,
		demoLinks: [
			{
				url: 'https://gasparyan.netlify.app/',
				label: 'Portfolio'
			},
			{
				url: 'https://gasparyan-backoffice.netlify.app/',
				label: 'Back Office'
			}

		],
		githubLinks: [
			{
				url: 'https://github.com/Vahag-Kostanyan/photographer-portfolio',
				label: 'Frontend'
			},
			{
				url: 'https://github.com/Vahag-Kostanyan/photographer-portfoli-backoffice',
				label: 'Back Office'
			},
			{
				url: 'https://github.com/Vahag-Kostanyan/photographer-portfolio-server',
				label: 'Backend API'
			}
		],
		fullDescription: `A visually appealing and user-friendly website built to showcase a photographer’s collections and works. It allows easy navigation through different photo albums, supports lazy loading for faster performance, and includes a secure back office where the photographer can add new collections and upload images. The site is designed to highlight the photographer’s work beautifully while providing a smooth experience for visitors.`,
	},
	{
		id: 9,
		title: 'PasteSpace',
		description:
			'Platform for storing and managing text-based information. Users can register, log in, create/edit collections, and manage content.',
		tech: ['React', 'Fierbase', 'CRUD'],
		image: '☁️',
		color: '#667eea',
		isPrivate: false,
		demoLinks: [
			{
				url: 'https://pastespace.netlify.app/',
				label: 'Site'
			}

		],
		githubLinks: [
			{
				url: 'https://github.com/Vahag-Kostanyan/passtSpace',
				label: 'Frontend'
			}
		],
		fullDescription: `PasteSpace is a comprehensive web platform for storing, organizing, and managing text-based information. It provides users with secure authentication, allowing them to register, log in, and maintain private accounts. Within their accounts, users can create multiple collections to categorize and structure their text content effectively.`,
	},
	{
		id: 10,
		title: 'MagicJS Framework (Work in Progress)',
		description:
			'Unfinished lightweight JavaScript framework in TypeScript/Node.js. Features a functional ORM for models, DB connection, and queries.',
		tech: ['TypeScript', 'Node.js', 'ORM'],
		image: '✨',
		color: '#764ba2',
		isPrivate: false,
		githubLinks: [
			{
				url: 'https://github.com/Vahag-Kostanyan/magic-js',
				label: 'Code'
			},
		],
		fullDescription: `MagicJS is a custom Node.js ORM project designed to simplify database operations. Currently, it supports the find query method, allowing developers to retrieve data efficiently using the model’s built-in methods. While still a work in progress, the goal is to implement a full set of ORM features, including CRUD operations for easy data management.

							Future updates will introduce workflow support such as built-in validation methods, a routing system, base CRUD operation controllers, and more to streamline development. MagicJS aims to provide a lightweight yet powerful framework that enhances developer productivity by simplifying common backend tasks.
							`,
	},
	{
		"id": 11,
		"title": "Laravel CRUD Abstraction",
		"description": "A powerful Laravel package that provides an abstract layer for CRUD operations, simplifying API development with standardized controllers, services, and requests.",
		"tech": ["PHP", "Laravel", "RESTful API"],
		"image": " 🔧",
		"color": "#007BFF",
		"isPrivate": false,
		"githubLinks": [
			{
				"url": "https://github.com/Vahag-Kostanyan/crudAbstraction",
				"label": "Code"
			}
		],
		"fullDescription": "Laravel CRUD Abstraction A Laravel package that simplifies RESTful API development by providing an abstract layer for CRUD operations. It offers a modular architecture with clear separation between controllers, services, and request validation. The package includes a base CrudController to quickly create standardized CRUD endpoints while allowing customization. Key features are built-in request validation, service layer pattern, and consistent JSON responses. This reduces boilerplate code and enforces best practices, making API development faster and more maintainable."
	},
];

const Works = ({ theme }) => {
	const [selectedProject, setSelectedProject] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (project) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedProject(null);
	};

	return (
		<div className="works-container">
			<h2 className="section-title">My Projects</h2>

			<div className="projects-grid">
				{projects.map((project) => (
					<div key={project.id} className="project-card">
						<div className="project-header">
							<div
								className="project-image"
								style={{
									background: `linear-gradient(135deg, ${project.color} 0%, ${project.color}dd 100%)`,
								}}
							>
								<span>{project.image}</span>
							</div>
							<div className="project-overlay">
								<div className="project-actions">
									{!project.isPrivate && (
										<>
											{project.preview && (
												<a
													href={project.preview}
													className="project-link"
													target="_blank"
													rel="noopener noreferrer"
												>
													<span>🚀</span> Preview
												</a>
											)}
											{project.github && (
												<a
													href={project.github}
													className="project-link"
													target="_blank"
													rel="noopener noreferrer"
												>
													<span>💻</span> GitHub
												</a>
											)}
										</>
									)}
									<button
										className="project-link details-link"
										onClick={() => openModal(project)}
									>
										<span>ℹ️</span> Details
									</button>
								</div>
							</div>
						</div>

						<div className="project-content">
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<div className="project-tech">
								{project.tech.map((tech, techIndex) => (
									<span
										key={techIndex}
										className="tech-tag"
										style={{ opacity: 1 }}
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>

			<ProjectModal
				theme={theme}
				project={selectedProject}
				isOpen={isModalOpen}
				onClose={closeModal}
			/>
		</div>
	);
};

export default Works;