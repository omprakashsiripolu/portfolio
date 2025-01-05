import { experiences } from './data/experience.js';
import { createExperienceItem } from './renderer/experience.js';

export async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;

        // If this is the experience component, render the experiences
        if (elementId === 'experience') {
            const experienceItems = document.getElementById('experience-items');
            if (experienceItems) {
                experienceItems.innerHTML = experiences.map((exp, index) => 
                    createExperienceItem(exp, index)
                ).join('');
            }
        }
        
        // Reinitialize Lucide icons after loading component
        lucide.createIcons();
    } catch (error) {
        console.error('Error loading component:', error);
    }
}