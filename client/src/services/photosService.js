// const baseUrl = "http://localhost:5000/photos";
const baseUrl = "https://photography-blog-noit-server.herokuapp.com/photos";

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/all`);
    let photos = await response.json();
    let result = Object.values(photos);
    return result;
};

export const getLatest = async () => {
    let response = await fetch(`${baseUrl}/latest`);
    let latestPhotos = await response.json();
    let result = Object.values(latestPhotos);
    return result;
};

export const getOne = async (photoId) => {
    let response = await fetch(`${baseUrl}/${photoId}/details`);
    let details = await response.json();
    return details;
};

export const getMy = async (userId) => {
    let response = await fetch(`${baseUrl}/my/${userId}`);
    let myPosts = await response.json();
    let result = Object.values(myPosts);
    return result;
};

export const create = async (photoData, token, userId) => {
    let response = await fetch(`${baseUrl}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({...photoData, userId})
    });

    let result = await response.json();
    return result;
};

export const edit = async (photoData, photoId, token) => {
    let response = await fetch(`${baseUrl}/${photoId}/edit`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(photoData)
    });

    let result = await response.json();
    return result;
};

export const del = async (photoId, token) => {
    let response = await fetch(`${baseUrl}/${photoId}/delete`, {
        method: 'DELETE', 
        headers: {
            'X-Authorization': token
        }
    });
    
    let result = await response.json();
    return result;
};

export const likePhoto = async (photoId, userId, token) => {
    let response = await fetch(`${baseUrl}/${photoId}/like`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ userId })
    });

    let result = await response.json();
    return result;
};

export const getLikes = async (photoId, userId) => {
    let response = await fetch(`${baseUrl}/${photoId}/details/likes/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let result = await response.json();
    return result;
};