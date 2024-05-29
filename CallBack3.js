function checkUsername(username, callback) {
    setTimeout(
        () => { // Simulate checking username availability 
            const usernameExists = username === 'user123'; // Dummy condition
        if (usernameExists) { 
            callback('Username already taken');} 
        else { 
            callback('Username available');}}, 
    1000);
}

checkUsername('user123', (message) => {console.log(message); }); // Output after delay: Username already taken

checkUsername('newuser', (message) => {console.log(message);}); // Output after delay: Username available
