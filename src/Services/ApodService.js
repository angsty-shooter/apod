import { AppState } from "../AppState";
import { nasaApi } from "./AxiosService";

class ApodService {

    async searchApod(query){
        const res = await nasaApi.get(query)
        AppState.pictures = res.data.results
    }

}

export const apodService = new ApodService()