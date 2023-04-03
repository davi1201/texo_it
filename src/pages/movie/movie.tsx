import { useFetchCallback } from "@/hooks/useFetchCallback";
import { DataInterface, MovieItemInterface } from "@/interfaces";
import { Card, Flex, Pagination, Table, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import FilterMovies from "./children/filter";
import { IconDeviceTvOld } from "@tabler/icons-react";
import SkeletonMovies from "./skeletonMovies";

export default function Movie() {
    const { isFetching, executeFetch } = useFetchCallback();
    const [ movies, setMovies ] = useState<MovieItemInterface[]>([]);
    const [ size, setSize ] = useState<number>(20);
    const router = useRouter();
    const [ page, setPage ] = useState<number>(
        // @ts-ignore
        router.query.page !== undefined ? parseInt(router.query.page) : 1
    );
    
    interface MovieFilterInterface {
        year?: number | null;
        winner?: boolean | null;
    }
    const getMovies = async ({ year = null, winner = null }: MovieFilterInterface) => {
        let query: string = `page=${page}&size=20`;        

        if (year !== null && winner !== null) {
            query = `winner=${winner}&year=${year}`;
        }

        await executeFetch({
            url: `movies?${query}`,
            method: 'GET',
            onSuccess: ( data: DataInterface | any) => {
                if (data.content !== undefined) {
                    setMovies(data.content);
                    setSize(data.totalPages);
                    return
                }

                setMovies(data);
            },
            onError: (error: any) => {
                console.log(error);
            }
        }) 
    }

    // useEffect(() => {
    //     getMovies({});
    // }, [page])

    useEffect(() => {
        getMovies({});
    }, [router.query.page])

    const tableHeads = () => {
        return (
            <tr>
                <th>Id</th>
                <th>Year</th>
                <th>Title</th>
                <th>Winner</th>
            </tr>
        )
    }

    const tableBody = movies?.map((movie: MovieItemInterface, index: number) => {
        return (
            <tr key={index}>
                <td>{movie.id}</td>
                <td>{movie.year}</td>
                <td>{movie.title}</td>
                <td>{movie.winner ? 'Yes' : 'No'}</td>
            </tr>
        )
    })


    return (
        <>
            { isFetching 
                ? <SkeletonMovies /> 
            : <>
                <FilterMovies
                    filter={ (data: MovieFilterInterface) => getMovies({...data}) } 
                    clearFilter={ () => getMovies({}) }
                />
                <Card>
                    <Card.Section withBorder inheritPadding py="xs">
                        <Flex align='end'>
                            <IconDeviceTvOld color="#e74141" />
                            <Title size={18} ml={5}>
                                List Movies
                            </Title>
                        </Flex>
                    </Card.Section>

                    <Card.Section withBorder inheritPadding py="xs">
                        <Table withBorder withColumnBorders striped>
                            <thead>
                                {tableHeads()}
                            </thead>
                            <tbody>
                                {tableBody}
                            </tbody>
                        </Table>
                        <Pagination
                            // @ts-ignore
                            total={size}
                            value={page}
                            py="xs"
                            defaultValue={1}
                            position="center"
                            withEdges
                            getItemProps={(page: any) => ({
                                component: 'a',
                                onClick: () => {
                                    setPage(page);                                                        
                                    router.replace(`?page=${page}`);
                                },
                            })}
                            getControlProps={(control) => {
                                if (control === 'first') {
                                    return { 
                                        component: 'a', 
                                        onClick: () => {
                                            setPage(1);
                                            router.push(`?page=1`);
                                        }
                                    };
                                }

                                if (control === 'next') {
                                    return { 
                                        component: 'a', 
                                        onClick: () => {
                                            setPage(page + 1);
                                            router.push(`?page=${page + 1}`);
                                        }
                                    };
                                }
                        
                                if (control === 'previous') {
                                    return { 
                                        component: 'a', 
                                        onClick: () => {
                                            setPage(page - 1);
                                            router.push(`?page=${page - 1}`);
                                        }
                                    };
                                }
                    
                                if (control === 'last') {
                                    return { 
                                        component: 'a', 
                                        onClick: () => {
                                            setPage(size);
                                            router.push(`?page=${size}`);
                                        }
                                    };
                                }              
                                return {};
                            }}
                        />
                    </Card.Section>
                </Card>
            </>
            }
        </>
    )
}