const queryString ={
    app_id: import.meta.env.VITE_APP_APP_ID,
    app_key: import.meta.env.VITE_APP_APP_KEY
}

// https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=5ac9c2d7&app_key=8a4db25750cb559f22c499080835c044
export const fetchData = async (defaultQuery) => {
    const {app_id, app_key} = queryString
    // console.log(app_id, app_key)
    try {
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`);
        const response = await data.json();
        return response
        
    } catch (error) {
        console.log(error, "something went wrong")
        return error
    }
}
export const fetchTabData = async (defaultQuery) => {
    const {app_id, app_key} = queryString
    try {
        const data = await fetch(`https://api.edamam.com/api/recipes/v2/${defaultQuery}?type=public&app_id=${app_id}&app_key=${app_key}`);
        const response = await data.json();
        return response
        
    } catch (error) {
        console.log(error, "something went wrong")
        return error
    }
}