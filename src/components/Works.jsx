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
		fullDescription: `Technologies: HTML, CSS, JavaScript, jQuery, PHP, Laravel, MySQL.\nA professional testing platform for doctors with automatic grading and test creation.`,
	},
	{
		id: 2,
		title: 'Internal Company CRM',
		description:
			'A CRM system developed for internal use to automate company operations and improve organizational efficiency. Built with Laravel and jQuery, it provides a secure, reliable, and effective management workflow.',
		tech: ['Laravel', 'jQuery'],
		image: '🏢',
		color: '#764ba2',
		isPrivate: true,
		fullDescription: `Technologies: Laravel, jQuery.\nAutomates company operations and improves efficiency with a secure workflow.`,
	},
	{
		id: 3,
		title: 'GIP Platform',
		description:
			'A platform designed to integrate various state services and banks via API endpoints. GIP allows unifying multiple services into one single system, enabling easier and faster interaction between users and government/banking services.',
		tech: ['API', 'Integration'],
		image: '🔗',
		color: '#f093fb',
		isPrivate: true,
		fullDescription: `Integrates state services and banks via APIs for unified access.`,
	},
	{
		id: 4,
		title: 'CSO (Tax Employees and Ministry of Finance Platform)',
		description:
			'Platform for tax employees and the Ministry of Finance for registration, financial record management, payroll, and inspection organization. Backend in Laravel, frontend in jQuery.',
		tech: ['Laravel', 'jQuery'],
		image: '💼',
		color: '#4facfe',
		isPrivate: true,
		fullDescription: `Supports tax employees and Ministry of Finance with registration, payroll, and inspections. Backend: Laravel, Frontend: jQuery.`,
	},
	{
		id: 5,
		title: 'BetProduction Casino Platform',
		description:
			'Casino platform with three codebases: back office, back office frontend, and player site. Developed RESTful API with Yii2 and MySQL. Integrated casinos, payment systems, OTP, and more.',
		tech: ['Yii2', 'MySQL', 'REST API', 'Integration'],
		image: '🎰',
		color: '#43e97b',
		isPrivate: true,
		fullDescription: `Casino platform with RESTful API, payment, OTP, and bonus logic.`,
	},
	{
		id: 6,
		title: 'Telegram Crypto Bots',
		description:
			'Automated Telegram bots for crypto games like "Hamster Kombat." Bots automate gameplay and coin collection for users.',
		tech: ['Telegram API', 'Crypto', 'Automation'],
		image: '🤖',
		color: '#fa709a',
		isPrivate: true,
		fullDescription: `Automates crypto gaming actions and coin collection in Telegram games.`,
	},
	{
		id: 7,
		title: 'Students Testing Platform',
		description:
			'Platform for universities and students. Instructors create/assign tests, students take tests with automatic grading. Role-based access for rector, managers, instructors.',
		tech: ['Role-based Access', 'Testing', 'Automation'],
		image: '📚',
		color: '#43e97b',
		isPrivate: true,
		fullDescription: `Role-based test management for universities with automatic grading.`,
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
		fullDescription: `React + Firebase portfolio with galleries, skills, and contact. Back office for photo upload and management.`,
	},
	{
		id: 9,
		title: 'CloudSpace',
		description:
			'Platform for storing and managing text-based information. Users can register, log in, create/edit collections, and manage content.',
		tech: ['User Auth', 'Collections', 'CRUD'],
		image: '☁️',
		color: '#667eea',
		isPrivate: false,
		fullDescription: `Text-based info management with user registration and collections.`,
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
		fullDescription: `Lightweight JS framework with ORM, models, and DB queries.`,
	},
];

const Works = () => {
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
				project={selectedProject}
				isOpen={isModalOpen}
				onClose={closeModal}
			/>
		</div>
	);
};

export default Works;