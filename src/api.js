    export async function fetchSampleUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        return users.filter(user => user.id !== 0).map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
        }));
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    } finally {
        console.log('==---Fetch operation completed.---==');
    }
    }
    async function fetchSampleUsersPromise() {
        return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((users) => {data = users.filter(user => user.id !== 0).map(user => ({
                id: user.id,
                name: user.name,
                email: user.email,
            }));
            console.log ("-----Fetching sample users using Promise-based approach-----");
        })
        .catch(error => {
            console.error('Error fetching users:', error);
            return [];
        });
    }
