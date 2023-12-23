// api.js
const api = {
    getTicketAndUsers: async () => {
        try {
            const response = await fetch('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            localStorage.setItem('isStoredCards', JSON.stringify(data.tickets));
            localStorage.setItem('isStoredUser', JSON.stringify(data.users));
            // return data;
            console.log(data);
        } catch (error) {
            throw error;
        }
    },
};

export default api;
