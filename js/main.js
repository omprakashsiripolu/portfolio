import { experiences } from './data/experience.js';
import { skills } from './data/skills.js';
import { projects } from './data/projects.js';
import { createExperienceItem } from './renderer/experience.js';
import { createSkillCard } from './renderer/skills.js';
import { initializeNavbar } from './navbar.js';
import { initializeResumeDownload } from './resumeDownload.js';
import { createProjectCard } from './renderer/projects.js';

export async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;

        // Initialize navbar if loading navbar component
        if (elementId === 'navbar-content') {
            initializeNavbar();
        }

        // If this is the header component, initialize resume download
        if (elementId === 'header') {
            initializeResumeDownload();
        }

        // If this is the experience component, render the experiences
        if (elementId === 'experience') {
            const experienceItems = document.getElementById('experience-items');
            if (experienceItems) {
                experienceItems.innerHTML = experiences.map((exp, index) => 
                    createExperienceItem(exp, index)
                ).join('');
            }
        }
        
        // If this is the skills component, render the skills
        if (elementId === 'skills') {
            const skillsGrid = document.getElementById('skills-grid');
            if (skillsGrid) {
                skillsGrid.innerHTML = skills.map(skill => 
                    createSkillCard(skill)
                ).join('');
            }
        }

        // If this is the projects component, render the projects
        if (elementId === 'projects') {
            const projectsGrid = document.getElementById('data-projects-grid');
            if (projectsGrid) {
                projectsGrid.innerHTML = projects.map(project => 
                    createProjectCard(project)
                ).join('');
            }
        }
        
        // Reinitialize Lucide icons after loading component
        lucide.createIcons();
    } catch (error) {
        console.error('Error loading component:', error);
    }
}