import { axiosInstance } from "@/services/apiServices";

export default async function getServerSideProps() {    

    const studiosWithWinCount = await axiosInstance
                                .get('movies', { params: { projection: 'studios-with-win-count' } })
                                .then(({ data } ) => data.studios.splice(0, 3));

    const yearsWithMultipleWinners = await axiosInstance
                                .get('movies', { params: { projection: 'years-with-multiple-winners' } })
                                .then(({ data } ) => data.years);    

    const producersMinMaxInterval = await axiosInstance
                                .get('movies', { params: { projection: 'max-min-win-interval-for-producers' } })
                                .then(({ data } ) => data);


    return { 
        props: {
            data: {
                studiosWithWinCount,
                yearsWithMultipleWinners,
                producersMinMaxInterval
            }
        }
    }
}