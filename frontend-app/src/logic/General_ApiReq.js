// Getting data from backend, as input: api link
export async function getSimpleData(api_link) {
    try{

        const sourceFile = require('../common');
        const apiData = await fetch(
            sourceFile.hostname +
            api_link
        );

        const  jsonData = await apiData.json();
        return jsonData

    } catch (e) {
        console.log(e);
    }
}


// Send Post request to backend, as input: api link and data to send.
export function sendPOSTRequest(api_link, data) {
    try{
        const sourceFile = require('../common');
        fetch(sourceFile.hostname + api_link, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

    } catch (e) {
        console.log(e)
    }

}
