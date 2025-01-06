export function createProjectCard(project) {
    return `
        <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="relative group h-48 overflow-hidden">
                <img
                    src="${project?.image}"
                    alt="${project?.title}"
                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    onerror="this.src='./images/untitled.jpg'"
                />
                <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    ${project?.githubUrl ? `
                        <a
                            href="${project?.githubUrl}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <i data-lucide="github" class="w-6 h-6"></i>
                        </a>
                    ` : ''}
                    ${project?.liveUrl ? `
                        <a
                            href="${project?.liveUrl}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <i data-lucide="external-link" class="w-6 h-6"></i>
                        </a>
                    ` : ''}
                </div>
            </div>
            <div class="p-6">
                <h3 class="font-bold text-xl mb-2">${project?.title}</h3>
                <p class="text-gray-600 mb-4">
                    ${project?.description}
                </p>
                <div class="flex flex-wrap gap-2">
                    ${project?.technologies.map(tech => `
                        <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">${tech}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}