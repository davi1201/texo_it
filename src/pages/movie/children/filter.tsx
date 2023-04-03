import { notifyUtils } from "@/utils/notifyUtils";
import { Box, Button, Card,  Divider,  Flex,  Grid, Select, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconFilterOff } from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { IconFilter } from "@tabler/icons-react";

interface FilterProps {
    filter: ({ year, winner }: any) => void;
    clearFilter: () => void;
}

export default function FilterMovies({ filter, clearFilter }: FilterProps) {
    const form = useForm({
        initialValues: {
            year: null,
            winner: null
        },
        validateInputOnChange: true,
        validate: {
            year: (value: string) => {
                if (/[a-zA-Z]/.test(value)) return 'Year must be a number';
                if (!value) return 'Year is required';
                if (value.length !== 4) return 'Year must have 4 digits';
            },
            winner: (value: string) => {
                if (value === null) return 'Winner is required';
            }   
        }
    })

    return(
        <Box 
            mb="xl"
            sx={(theme) => ({
                display: 'block',
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : 'white',
                borderRadius: theme.radius.md,
            })}
        >           
            <Flex align='center' p="xs">
                <IconFilter color="#efbf2d" />
                <Title size={18}>
                   Filter Movies
                </Title>
            </Flex>

            <Divider mb="xs" />
        
            <Grid p='xs'>
                <Grid.Col span={4}>
                    <TextInput
                        // @ts-ignore
                        withAsterisk
                        // @ts-ignore
                        label='Year'
                        placeholder='Search by Year'
                        {...form.getInputProps('year')}
                        styles={{
                            error: {
                                position: 'absolute',
                            }
                        }}
                    />
                </Grid.Col>

                <Grid.Col span={4}>
                    <Select 
                        withAsterisk                           
                        label='Winner'
                        {...form.getInputProps('winner')}
                        data={[
                            {
                                // @ts-ignore
                                value: null,
                                label: 'All'
                            },
                            {
                                value: 'true',
                                label: 'Yes'
                            },
                            {
                                value: 'false',
                                label: 'No'
                            }
                        ]}
                    />
                </Grid.Col>

                <Grid.Col span={4}>
                    <Flex>
                        <Button
                            onClick={() => {
                                if (!form.isValid()) {
                                    notifyUtils.show('error', 'Invalid form please check the year field') 
                                    return
                                };
                                filter({ year: form.values.year, winner: form.values.winner})
                            }}
                            color="blue"
                            variant="outline"
                            mt={25}
                            leftIcon={<IconSearch size={18} />}
                        >
                        Search
                        </Button>
                        <Button
                            color='red'
                            variant='outline'
                            mt={25}
                            ml={10}
                            leftIcon={<IconFilterOff size={18} />}
                            onClick={() => { clearFilter() }}
                        >Reset Filter</Button>
                    </Flex>
                </Grid.Col>
            </Grid>            
        </Box>
    )
}