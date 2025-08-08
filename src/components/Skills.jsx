import { motion } from 'framer-motion';
import {
  SiHtml5, SiCss3, SiSass, SiJavascript, SiReact, SiRedux, SiEmberdotjs,
  SiNodedotjs, SiPhp, SiLaravel, SiMysql, SiFirebase,
  SiGit, SiAmazonwebservices, SiDocker, SiLinux, SiGithub, SiGithubactions, SiApache
} from 'react-icons/si';
import { Icon } from '@iconify/react';

import './Skills.css';

const getSkillsData = (theme) => ({
  frontend: [
    { 
      name: "HTML",
      icon: (color) => <SiHtml5 color={color} />,
      lightColor: "#E34F26",
      darkColor: "#FF6B4A",
      level: 90 
    },
    { 
      name: "CSS",
      icon: (color) => <SiCss3 color={color} />,
      lightColor: "#1187dcff",
      darkColor: "#39A9FF",
      level: 90 
    },
    { 
      name: "SCSS",
      icon: (color) => <SiSass color={color} />,
      lightColor: "#CC6699",
      darkColor: "#FF8BC1",
      level: 80 
    },
    { 
      name: "JavaScript",
      icon: (color) => <SiJavascript color={color} />,
      lightColor: "#F7DF1E",
      darkColor: "#FFE44D",
      level: 85 
    },
    { 
      name: "React",
      icon: (color) => <SiReact color={color} />,
      lightColor: "#61DAFB",
      darkColor: "#9B6FE3",
      level: 90 
    },
    { 
      name: "Redux",
      icon: (color) => <SiRedux color={color} />,
      lightColor: "#61DAFB",
      darkColor: "#9B6FE3",
      level: 70 
    },
    { 
      name: "Ember.js",
      icon: (color) => <SiEmberdotjs color={color} />,
      lightColor: "#E04E39",
      darkColor: "#FF6B54",
      level: 75 
    }
  ],
  backend: [
    { 
      name: "PHP",
      icon: (color) => <SiPhp color={color} />,
      lightColor: "#1187dcff",
      darkColor: "#9B9FD8",
      level: 80 
    },
    { 
      name: "Laravel",
      icon: (color) => <SiLaravel color={color} />,
      lightColor: "#FF2D20",
      darkColor: "#FF5242",
      level: 85 
    },
    { 
      name: "Node.js",
      icon: (color) => <SiNodedotjs color={color} />,
      lightColor: "#339933",
      darkColor: "#4CD44C",
      level: 85 
    },
    { 
      name: "MySQL",
      icon: (color) => <SiMysql color={color} />,
      lightColor: "#61DAFB",
      darkColor: "#5B9BCF",
      level: 80 
    },
    { 
      name: "Firebase",
      icon: (color) => <SiFirebase color={color} />,
      lightColor: "#FFCA28",
      darkColor: "#FFD95C",
      level: 60 
    },
    { 
      name: "Yii2",
      icon: (color) => <Icon icon="simple-icons:yii" color={color} />,
      lightColor: "#0077B5",
      darkColor: "#0095E3",
      level: 70 
    },
    { 
      name: "Express.js",
      icon: (color) => <Icon icon="simple-icons:express" color={color} />,
      lightColor: "#FFFFFF",
      darkColor: "#000000",
      level: 75 
    }
  ],
  tools: [
    { 
      name: "Git",
      icon: (color) => <SiGit color={color} />,
      lightColor: "#F05032",
      darkColor: "#FF7354",
      level: 85 
    },
    { 
      name: "AWS",
      icon: (color) => <SiAmazonwebservices color={color} />,
      lightColor: "#FF9900",
      darkColor: "#FFB133",
      level: 50 
    },
    { 
      name: "Docker",
      icon: (color) => <SiDocker color={color} />,
      lightColor: "#2496ED",
      darkColor: "#42B4FF",
      level: 40 
    },
    { 
      name: "Linux",
      icon: (color) => <SiLinux color={color} />,
      lightColor: "#FCC624",
      darkColor: "#000000ff",
      level: 75 
    },
    { 
      name: "CI/CD",
      icon: (color) => <SiGithubactions color={color} />,
      lightColor: "#2088FF",
      darkColor: "#42A5FF",
      level: 40 
    },
    { 
      name: "GitHub",
      icon: (color) => <SiGithub color={color} />,
      lightColor: "#FFFFFF",
      darkColor: "#181717",
      level: 85 
    },
    { 
      name: "Apache",
      icon: (color) => <SiApache color={color} />,
      lightColor: "#D22128",
      darkColor: "#FF424A",
      level: 40 
    }
  ]
});

const Skills = ({ theme }) => {
  return (
    <div className="skills-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills & Technologies
      </motion.h2>

      <div className="skills-grid">
        {Object.entries(getSkillsData(theme)).map(([category, categorySkills], categoryIndex) => (
          <motion.div
            key={category}
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="category-title">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <div className="skills-list">
              {categorySkills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="skill-icon">
                    {skill.icon(theme === 'dark' ? skill.darkColor : skill.lightColor)}
                  </div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
