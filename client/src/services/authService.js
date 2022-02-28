const baseUrl = "http://localhost:5000/users";

export const login = async (email, password) => {
    let response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    let result = await response.json();

    if (response.ok) {
        return result;
    } else {
        throw "Invalid email or password";
    }
};

export const register = async (email, username, password) => {
    let response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, username, password})
    });

    let result = await response.json();

    if (response.ok) {
        return result;
    } else {
        throw "Invalid email, username or password";
    }
};

export const logout = async (token) => {
    let response = await fetch(`${baseUrl}/logout`, {
        headers: {
            'X-Authorization': token
        }
    });

    return response;
}