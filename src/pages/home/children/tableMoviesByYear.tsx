import { useFetchCallback } from "@/hooks/useFetchCallback";
import { MovieItemInterface } from "@/interfaces";
import { notifyUtils } from "@/utils/notifyUtils";
import { Button, Card, Grid, Table, TextInput, Title  } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";

function TableMoviesByYear() {
    const { isFetching, executeFetch } = useFetchCallback();
    const [ movies, setMovies ] = useState<MovieItemInterface[]>([]);

    const form = useForm({
        initialValues: {
            year: '',
        },
        validateInputOnChange: true,
        validate: {
            year: (value) => {         
                if (/[a-zA-Z]/.test(value)) return 'Year must be a number';
                if (!value) return 'Year is required';
                if (value.length !== 4) return 'Year must have 4 digits';
            }
        }
    })

    const getMoviesByYear = async () => {
        const query: string = `year=${form.values.year}`;

        if (form.isValid()) {
            await executeFetch({
                url: `movies?winner=true&${query}`,
                method: 'GET',
                onSuccess: ( data: MovieItemInterface[]) => {
                    setMovies(data);
                },
                onError: (error: any) => {
                    console.log(error);
                }
            })

            return
        }
        notifyUtils.show('error', 'Invalid form please check the year field');
    }
    const headsTable = () => {
        return (
            <tr>
                <th>Id</th>
                <th>Year</th>
                <th>Title</th>
            </tr>
        )
    }

    const bodyTable = movies.map((movie: MovieItemInterface) => {
        return (
            <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.year}</td>
                <td>{movie.title}</td>
            </tr>
        )
    })

    return (
        <Card>
            <Card.Section withBorder inheritPadding py='xs'>
                <Title size={18} py='xs'>
                    List movie winners by year
                </Title>
            </Card.Section>
            <Card.Section withBorder inheritPadding py='xs'>
                <Grid>
                    <Grid.Col lg={12} sm={1}>
                        <TextInput
                            placeholder="Search by year"
                            value={form.values.year}
                            onChange={(event) => form.setFieldValue('year', event.currentTarget.value)}
                            /*// @ts-ignore */
                            error={form.errors.year}
                            rightSection={
                                <Button
                                    color='grape'
                                    onClick={() => {
                                         getMoviesByYear();
                                    }}
                                >
                                    <IconSearch />
                                </Button>
                            }
                        />  
                    </Grid.Col>
                    <Grid.Col lg={12} sm={1}>
                        <Table withBorder withColumnBorders>
                            <thead>
                                {headsTable()}
                            </thead>
                            <tbody>
                                {bodyTable}
                            </tbody>
                        </Table>
                    </Grid.Col>
                </Grid>
            </Card.Section>
        </Card>
    )
}

export default TableMoviesByYear