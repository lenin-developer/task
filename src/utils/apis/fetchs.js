import { generateErrorObject } from './generateErrorObject'

export const get = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) throw { status: res?.status, name: 'Personalized' };
        const data = await res.json();
        return { ok: true, ...data }
    } catch (error) {
        const errorObjeto = generateErrorObject(error, `error al obtener los datos de: ${url}`)
        throw errorObjeto;
    }
}

export const deleteFetch = async(url,id)=> {
    try {
        const res = await fetch(`${url}/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json',
            },
        })

        const data = await res.json()
        if(!res.ok) throw {
            status: res?.status,
            error: data?.error,
            name: 'cachartPersonalized'
        }
        
        return data
    } catch (error) {
        const errorObject = generateErrorObject(error, "error al tratar de elimiar")
        throw errorObject;
    }
}