import { experiences } from '../data/experience.js';

export function createExperienceItem(experience, index) {
    const isEven = index % 2 === 0;
    
    const mainContent = `
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <span class="text-sm font-semibold text-gray-500">${experience.period}</span>
            <h4 class="text-xl font-bold text-gray-800 mt-2">${experience.title}</h4>
            <p class="text-gray-600 mt-2">${experience.company}</p>
            <p class="text-gray-500 mt-2">${experience.description}</p>
            <div class="flex flex-wrap gap-2 mt-3">
                ${experience.skills.map(skill => 
                    `<span class="px-3 py-1 bg-gray-100 rounded-full text-sm">${skill}</span>`
                ).join('')}
            </div>
        </div>
    `;

    const achievementsContent = `
        <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-lg font-semibold text-gray-800 mb-3">Key Achievements</h4>
            <ul class="space-y-2 text-gray-600">
                ${experience.achievements.map(achievement => `
                    <li class="flex items-start">
                        <i data-lucide="check-circle" class="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5"></i>
                        <span>${achievement}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;

    return `
        <div class="relative ${index !== experiences.length - 1 ? 'mb-12' : ''}">
            <div class="flex items-center justify-center">
                <div class="w-1/2 pr-8">
                    ${isEven ? mainContent : achievementsContent}
                </div>
                <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black"></div>
                <div class="w-1/2 pl-8">
                    ${isEven ? achievementsContent : mainContent}
                </div>
            </div>
        </div>
    `;
}