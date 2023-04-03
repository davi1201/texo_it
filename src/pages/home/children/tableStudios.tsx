import { StudiosWithWinCountInterface } from "@/interfaces"
import { Card, Table, Title } from "@mantine/core"

interface StudiosProps {
    data: StudiosWithWinCountInterface[]
}

function TableStudios({ data }: StudiosProps) {
    const headsTableStudios = () => {
        return(
            <tr>
                <th>Studio</th>
                <th>Winner Count</th>
            </tr>
        ) 
    }

    const bodyTableStudios = data?.map((item: StudiosWithWinCountInterface , index: number) => {
        return(
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.winCount}</td>
            </tr>
        )
    })

    return (
        <Card>
            <Card.Section withBorder inheritPadding py="xs">
                <Title size={18}>
                Top 3 studios with winners
                </Title>
            </Card.Section>
            <Card.Section withBorder inheritPadding py="xs">       
                <Table withBorder withColumnBorders>
                    <thead>
                        {headsTableStudios()}
                    </thead>
                    <tbody>
                        {bodyTableStudios}
                    </tbody>
                </Table>
            </Card.Section>
        </Card>
    )

}

export default TableStudios