import { YearsWithMultipleWinnersInterface } from "@/interfaces"
import { Card, Title, Table } from "@mantine/core"


interface PropsYears {
    data: YearsWithMultipleWinnersInterface[]
}

function TableYearsWithMultipleWinners({ data }: PropsYears) {
    const headsTableYearsWithMultipleWinners = () => {
        return(
            <tr>
                <th>Year</th>
                <th>Winner Count</th>
            </tr>
        )
    }

    const bodyTableYearsWithMultipleWinners = data?.map((item:YearsWithMultipleWinnersInterface , index: number) => {
        return(
            <tr key={index}>
                <td>{item.year}</td>
                <td>{item.winnerCount}</td>
            </tr>
        )
    })

    return (
        <Card>
            <Card.Section withBorder inheritPadding py="xs">
                <Title size={18}>
                    List years with multiple winners
                </Title>
            </Card.Section>
            <Card.Section withBorder inheritPadding py="xs">
                <Table withBorder withColumnBorders>
                    <thead>
                        {headsTableYearsWithMultipleWinners()}
                    </thead>
                    <tbody>
                        {bodyTableYearsWithMultipleWinners}
                    </tbody>
                </Table>
            </Card.Section>
        </Card>
    )
}

export default TableYearsWithMultipleWinners