import { Grid } from '@mantine/core';
import TableYearsWithMultipleWinners from './children/tableYearsWithMultiWinners';
import TableStudios from './children/tableStudios';
import TableProducers from './children/tableProducers';
import TableMoviesByYear from './children/tableMoviesByYear';

function Home({ data }: any) {        
    return (
        <>
            <Grid mt={10}>
                <Grid.Col lg={6} sm={1}>
                    <TableYearsWithMultipleWinners data={data.yearsWithMultipleWinners} />
                </Grid.Col>

                <Grid.Col lg={6} sm={1}>
                    <TableStudios data={data.studiosWithWinCount} />
                </Grid.Col> 

                <Grid.Col lg={6} sm={1}>
                    <TableProducers data={data.producersMinMaxInterval} />
                </Grid.Col>

                <Grid.Col lg={6} sm={1}>
                    <TableMoviesByYear />
                </Grid.Col>
            </Grid>
        </>
    )
}
export default Home;