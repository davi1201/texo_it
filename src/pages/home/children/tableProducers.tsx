import { ProducersInterface } from "@/interfaces"
import { Card, Grid, Table, Title } from "@mantine/core"

interface Props {
    data: ProducersInterface
}

function TableProducers({ data }: Props) {
    const headsMax = () => {
        return(
            <tr>
                <th>Producer</th>
                <th>Interval</th>
                <th>Previous Year</th>
                <th>Following Year</th>
            </tr>
        ) 
    }

    const bodyMax = data?.max?.map((item, index) => {
        return(
            <tr key={index}>
                <td>{item.producer}</td>
                <td>{item.interval}</td>
                <td>{item.previousWin}</td>
                <td>{item.followingWin}</td>
            </tr>
        )
    })

    const headsMin = () => {
        return(
            <tr>
                <th>Producer</th>
                <th>Interval</th>
                <th>Previous Year</th>
                <th>Following Year</th>
            </tr>
        ) 
    }

    const bodyMin = data?.min?.map((item, index) => {
        return(
            <tr key={index}>
                <td>{item.producer}</td>
                <td>{item.interval}</td>
                <td>{item.previousWin}</td>
                <td>{item.followingWin}</td>
            </tr>
        )
    })

    return (
        <Card>
            <Card.Section withBorder inheritPadding py="xs">
                <Title size={18}>
                    Producers with longest and shortest intervals between wins
                </Title>
            </Card.Section>
            <Card.Section withBorder inheritPadding py="xs">
                <Grid>
                    <Grid.Col lg={12}>
                        <Card> 
                            <Card.Section>
                                <Title size={18}>
                                    Maximum
                                </Title>                                                            
                            </Card.Section>
                            <Card.Section py="xs">       
                                <Table withBorder withColumnBorders>
                                    <thead>
                                        {headsMax()}
                                    </thead>
                                    <tbody>
                                        {bodyMax}
                                    </tbody>
                                </Table>
                            </Card.Section>
                        </Card>
                    </Grid.Col>

                    <Grid.Col lg={12}>
                        <Card> 
                            <Card.Section>
                                <Title size={18}>
                                    Minimum
                                </Title>                                                            
                            </Card.Section>                          
                            <Card.Section py="xs">
                                <Table withBorder withColumnBorders>
                                    <thead>
                                        {headsMin()}
                                    </thead>
                                    <tbody>
                                        {bodyMin}
                                    </tbody>
                                </Table>
                            </Card.Section>
                        </Card>
                    </Grid.Col>
                </Grid>
            </Card.Section>
        </Card>
    )       
}

export default TableProducers