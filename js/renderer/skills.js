export function createSkillCard(skill) {
    return `
        <div class="group relative h-full">
            <div class="absolute inset-0.5 bg-gradient-to-r from-gray-200 to-gray-100 rounded-3xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div class="flex items-center justify-between mb-8">
                    <div>
                        <span class="text-sm font-semibold text-gray-500 tracking-wider uppercase">Development</span>
                        <h3 class="text-2xl font-bold mt-1">${skill.category}</h3>
                    </div>
                    <span class="p-3 bg-black rounded-2xl">
                        <i data-lucide="${skill.icon}" class="w-6 h-6 text-white"></i>
                    </span>
                </div>
                <div class="space-y-6 flex-grow">
                    ${skill.groups.map(group => `
                        <div class="group/item hover:bg-gray-50 p-4 rounded-xl transition-colors">
                            <div class="flex items-center mb-3">
                                <i data-lucide="${group.icon}" class="w-5 h-5 mr-3 text-gray-700"></i>
                                <h4 class="font-semibold">${group.name}</h4>
                            </div>
                            <div class="ml-8 grid gap-2">
                                ${group.items.map(item => `
                                    <span class="text-gray-600">${item}</span>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}