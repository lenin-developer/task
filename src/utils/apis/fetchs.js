import { generateErrorObject } from './generateErrorObject'

export const get = async (url) => {

    try {
        const res = await fetch(url);
        if (!res.ok) throw { status: res?.status, name: 'Personalized' };
        const data = await res.json();
        return {ok: true, ...data}
    } catch (error) {
        const errorObjeto = generateErrorObject(error, `error al obtener los datos de: ${url}`)
        throw errorObjeto;
    }
}