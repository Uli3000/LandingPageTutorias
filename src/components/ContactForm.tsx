import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

export const ContactForm = () => {
    const [email, setEmail] = useState("")
    const [nombre, setNombre] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [nombreError, setNombreError] = useState(false)
    const [telefonoError, setTelefonoError] = useState(false)
    const [mensajeError, setMensajeError] = useState(false)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const telefono = formData.get('telefono') as string
        const mensaje = formData.get('telefono') as string

        setEmailError(false)
        setNombreError(false)
        setTelefonoError(false)
        setMensajeError(false)

        if (email == '') {
            setEmailError(true)
        }
        if (nombre == '') {
            setNombreError(true)
        }
        if (telefono && !/^\d*$/.test(telefono)) {
            setTelefonoError(true)
        }
        if(mensaje == ''){
            setMensajeError(true)
        }
    }

    return (
        <form id="Contacto" className='contactForm' style={{ backgroundColor: 'rgba(71, 138, 245, 0.2)', padding: '1rem', borderRadius: '3%'}} autoComplete="off" onSubmit={handleSubmit}>
            <Typography variant="h5" sx={{marginBottom: '1.5rem', marginLeft: '.5rem', fontFamily: 'monospace', fontWeight: 'bold'}}> Contactanos para mas informacion</Typography>
            <TextField
                label="Nombre"
                onChange={e => setNombre(e.target.value)}
                required
                variant="outlined"
                type="nombre"
                value={nombre}
                error={nombreError}
                fullWidth
                sx={{ mb: 3 }}
                color="info"
            />
            <TextField
                label="Email"
                onChange={e => setEmail(e.target.value)}
                required
                variant="outlined"
                type="email"
                sx={{ mb: 3 }}
                fullWidth
                color="info"
                value={email}
                error={emailError}
            />
            <TextField
                label="Telefono"
                variant="outlined"
                type="number"
                sx={{ mb: 3 }}
                fullWidth
                color="info"
                name="telefono"
                error={telefonoError}
            />
            <TextField
                label="Mensaje"
                multiline
                rows={4}
                sx={{ mb: 3 }}
                variant="outlined"
                required
                color="info"
                name="mensaje"
                error={mensajeError}
                fullWidth
                
            />

            <Button variant="outlined" type="submit">Enviar</Button>

        </form>
    );
}