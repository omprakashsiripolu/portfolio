export function initializeResumeDownload() {
    const resumeButton = document.querySelector('#download-resume');
    
        if (resumeButton) { // Ensure the button exists
            resumeButton.addEventListener('click', async () => {
                try {     
                    // Fetch the PDF file
                    const response = await fetch('./resume.pdf');
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
    
                    const blob = await response.blob();
    
                    // Create a temporary download link
                    const downloadUrl = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = downloadUrl;
                    link.download = 'OmprakashSiripolu_Resume.pdf'; // Name the file to be saved as
    
                    // Trigger download
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
    
                    // Clean up
                    window.URL.revokeObjectURL(downloadUrl);
                } catch (error) {
                    console.error('Error downloading resume:', error);
                }
            });
        } else {
            console.error('Resume button not found.');
        }
}