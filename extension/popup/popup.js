document.addEventListener('DOMContentLoaded', function () {
    const userData = document.querySelector('#userData');
    const responseData = document.querySelector('#responseData');
    const rephraseSentenceButton = document.querySelector('#rephraseSentenceButton');

    rephraseSentenceButton.addEventListener('click', async function () {
        // console.log('rephraseSentenceButton clicked!');
        // console.log(userData.value);

        const extensionOrigin = chrome.runtime.getURL('');
        // console.log(extensionOrigin);

        if (userData.value !== "") {
            try {
                const healthResponse = await fetch('http://localhost:3000/health');
                if (healthResponse.status !== 200) {
                    throw new Error('Server is not available');
                }
    
                const response = await fetch('http://localhost:3000/rephrase', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        sentence: userData.value,
                        origin: extensionOrigin,
                    }),
                });
    
                if (!response.ok) {
                    throw new Error('Failed to rephrase the sentence');
                }
    
                const data = await response.json();
                responseData.value = data.rephrasedSentence;
            } catch (error) {
                console.error('Error:', error.message);
                responseData.value = 'Error: ' + error.message;
            }
        } else {
            responseData.value = "No available input";
        }
    });
});