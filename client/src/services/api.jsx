import React from 'react'
import axios from 'axios'

const API_URL = 'http://localhost:8000';

export const uploadFile = async(data) => {
    try {
        const reponse = await axios.post(`${API_URL}/upload`,data)

        return reponse.data
    } catch (error) {
        console.log("Error while calling uploadFile function :",error.message);
    }

};

