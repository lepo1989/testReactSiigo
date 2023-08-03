
const UrlUserCatalogSv = `apiurl`;

export const validateInvitation = async (id: string) => {
    try {
        console.log(id)
        //const urlEndpoint = `${UrlUserCatalogSv}/VALIDATE`;
        //const response = await fetch(urlEndpoint, { headers: { 'Authorization': `Bearer ${id}` } });
        //const json = await response.json();
        //return json.data;
        return true;
    } catch (e) {
        throw new Error('Validate error')
    }
}

export const createUser = async (data: any, id: string) => {
    try {
        const response = await fetch(`${UrlUserCatalogSv}/Create`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${id}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    } catch (e) {
        throw new Error('Error saving user')
    }
}
