    export async function fetchSampleUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        const data = users.filter(user => user.id !== 0).map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
        }));
        console.log ("-----Fetching sample users using async/await approach-----");
        console.log(data);
    } catch (error) {
        console.error('Error fetching users:', error);
    } finally {
        console.log('==---Fetch operation completed.---==');
    }
    }
    async function fetchSampleUsersPromise() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((users) => {
            const data = users.filter(user => user.id !== 0).map(user => ({
                id: user.id,
                name: user.name,
                email: user.email,
            }));
            console.log ("-----Fetching sample users using Promise-based approach-----");
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
    }
