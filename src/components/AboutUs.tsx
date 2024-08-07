import { Box, Divider, Grid, Typography } from '@mui/material'

export const AboutUs = () => {
    return (
        
        <Grid id='Nosotros' container spacing={2} sx={{ marginTop: '2rem', marginBottom: '2rem', background: 'linear-gradient(0deg, rgba(29,37,60,1) 0%, rgba(42,58,99,1) 100%)' }}>
            <Grid item xs={12} md={6} >
                <span
                    style={{
                        height: '370px',
                        width: '370px',
                        backgroundColor: '#777980',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        margin: '1rem auto'
                    }}
                >
                    <img src='grupoPersonas.png' width={'500px'} alt='Grupo de personas' />
                </span>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box sx={{ margin: '0 3rem' }}>
                    <Typography fontFamily={'sans-serif'} color={'#7AA9E0'} sx={{ textShadow: '8px 8px 10px #121' }} variant='h2'>Sobre nosotros</Typography>
                    <Divider sx={{ padding: '3px' }} />
                    <Typography color={'white'} variant='body1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium optio explicabo repudiandae deleniti asperiores, mollitia quaerat quas est. Sed est iste tempora ducimus id? Voluptatem hic maxime assumenda repellendus commodi? Officiis fuga ea dolores officia exercitationem. Iusto reprehenderit sit quaerat. Cum temporibus minus, debitis illo ratione consectetur cupiditate ab ipsa eaque itaque dicta tenetur eius recusandae provident, maiores placeat sapiente.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt officia veniam tenetur eius saepe consequatur et quia, iure blanditiis corrupti. Esse consectetur libero dignissimos magnam nam. Sint inventore corporis ratione.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}