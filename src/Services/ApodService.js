import { AppState } from "../AppState";
import { nasaApi } from "./AxiosService";

class ApodService {

    async searchApod(query){
        const res = await nasaApi.get("apod?api_key=k6QgJmhHGVHXVpfXSXbbPZ3FrBzHwBbYjU6L4HG2&date=" + query)
        console.log(res.data)
        AppState.pictures = res.data
    }

}

export const apodService = new ApodService()