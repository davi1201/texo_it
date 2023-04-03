import { Box, Divider, Flex, Grid, Skeleton } from "@mantine/core";

function SkeletonMovies() {
    return(
        <>
            <Box 
                mb="xl"
                sx={(theme) => ({
                    display: 'block',
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : 'white',
                    borderRadius: theme.radius.md,
                })}
            >           
                <Flex align='center' p="xs">
                    <Skeleton width={20} circle height={40} />
                    <Skeleton width={200} ml={5} height={40} />
                </Flex>

                <Divider mb="xs" />
            
                <Grid p='xs' align='end'>
                    <Grid.Col span={4}>
                        <Skeleton height={20} width={50} mb="xs" /> 
                        <Skeleton height={30} /> 
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <Skeleton height={20} width={50} mb="xs" /> 
                        <Skeleton height={30} /> 
                    </Grid.Col>

                    <Grid.Col span={4}>
                        <Skeleton width={100} height={30} /> 
                    </Grid.Col>
                </Grid>            
            </Box>

            <Box 
                mb="xl"
                sx={(theme) => ({
                    display: 'block',
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : 'white',
                    borderRadius: theme.radius.md,
                })}
            >    
                <Flex align='center' p="xs">
                    <Skeleton width={20} circle height={40} />
                    <Skeleton width={600} ml={5} height={40} />
                </Flex>

                <Divider mb="xs" />
                
               {Array.apply(0, Array(20)).map((item, index) => {
                    return(
                        <Grid px="xs" key={index}>
                            <Grid.Col span={1}>
                                <Skeleton height={40} />
                            </Grid.Col>
                            <Grid.Col span={1}>
                                <Skeleton height={40} />
                            </Grid.Col>
                            <Grid.Col span={5}>
                                <Skeleton height={40} />
                            </Grid.Col>
                            <Grid.Col span={5}>
                                <Skeleton height={40} />
                            </Grid.Col>
                        </Grid>
                    )
               })}
            </Box>
        </>
    )
}

export default SkeletonMovies;