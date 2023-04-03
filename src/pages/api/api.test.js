import { axiosInstance } from "@/services/apiServices";

describe('should return data', async () => {
    const { data } = await axiosInstance.get('movies', { params: { projection: 'studios-with-win-count' } })
                                        .then(({ data } ) => data.studios.splice(0, 3));
    
    expect(data.length).toEqual(3);
});
