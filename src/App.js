import {
  FitnessCenter,
  LocalHospital,
  Movie,
  Nature,
  NavigateBefore,
  NavigateNext,
  School,
  SportsEsports,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

// Datos del periódico basados en context.md
const periodicoData = {
  // CABECERA (Masthead) del periódico
  masthead: {
    titulo: "🎬 NotiAventuras de Diana",
    subtitulo: "Cine del pasado y del presente",
    fecha: "29 de mayo de 2025",
    autora: "Diana Márquez",
    editorial: "Ideas Brillantes del 5to Grado",
  },

  // SECCIONES del periódico
  secciones: [
    {
      id: 1,
      titulo: "Historia del Cine",
      kicker: "CINE CLÁSICO",
      subtitulo: "Del blanco y negro al 3D",
      emoji: "🎥",
      color: "#1976D2",
      icon: <Movie />,
      contenido: [
        "El cine comenzó en 1895.",
        "Las películas eran mudas.",
        "Luego vino el color y el sonido.",
        "Hoy vemos cine ¡hasta en el teléfono!",
      ],
      pullQuote: '"El cine es la poesía de la modernidad"',
      byline: "Por Diana Márquez",
      imagenDesc: "Evolución del cine: de cámaras vintage a tecnología digital",
    },
    {
      id: 2,
      titulo: "Información del Colegio",
      kicker: "VIDA ESCOLAR",
      subtitulo: "Noticias de nuestra comunidad educativa",
      emoji: "🏫",
      color: "#388E3C",
      icon: <School />,
      contenido: [
        "Celebramos el Día de la Familia.",
        "Hicimos una actividad muy especial.",
        "Estamos terminando el 3er momento.",
        "¡Recuerda pagar el colegio a tiempo!",
        "Cuidemos el salón y el bebedero.",
      ],
      pullQuote: '"La educación es el arma más poderosa para cambiar el mundo"',
      byline: "Por Diana Márquez",
      imagenDesc: "Estudiantes y familias celebrando juntos en el colegio",
    },
    {
      id: 3,
      titulo: "Ambiente",
      kicker: "ECOLOGÍA",
      subtitulo: "Cuidemos nuestro planeta",
      emoji: "🌱",
      color: "#F57C00",
      icon: <Nature />,
      contenido: [
        "No ensucies la calle.",
        "Cuida las plantas.",
        "Apaga la luz si no la usas.",
        "Usa menos papel.",
      ],
      pullQuote:
        '"La Tierra no es herencia de nuestros padres, sino préstamo de nuestros hijos"',
      byline: "Por Diana Márquez",
      imagenDesc: "Niños cuidando el medio ambiente y reciclando",
    },
    {
      id: 4,
      titulo: "Entretenimiento",
      kicker: "DIVERSIÓN",
      subtitulo: "Cómics y videojuegos para todos",
      emoji: "🕹️",
      color: "#D32F2F",
      icon: <SportsEsports />,
      contenido: [
        "La película de Minecraft se estrenará en 2025.",
        "Roblox es uno de los juegos más jugados del mundo.",
        "Los cómics siguen siendo populares entre niños y jóvenes.",
        "Los videojuegos pueden ser educativos y divertidos.",
      ],
      pullQuote: '"Los juegos son la forma más elevada de investigación"',
      byline: "Por Diana Márquez",
      imagenDesc: "Niños disfrutando videojuegos y leyendo cómics",
    },
    {
      id: 5,
      titulo: "Salud",
      kicker: "BIENESTAR",
      subtitulo: "Consejos para mantenernos sanos",
      emoji: "🍓",
      color: "#C2185B",
      icon: <LocalHospital />,
      contenido: [
        "Lava tus manos.",
        "Come frutas.",
        "Duerme bien.",
        "Haz ejercicio.",
      ],
      pullQuote: '"La salud es la verdadera riqueza"',
      byline: "Por Diana Márquez",
      imagenDesc: "Niños comiendo frutas y practicando hábitos saludables",
    },
    {
      id: 6,
      titulo: "Deporte",
      kicker: "ACTIVIDAD FÍSICA",
      subtitulo: "¡Jugar es divertido!",
      emoji: "🏊‍♀️",
      color: "#303F9F",
      icon: <FitnessCenter />,
      contenido: [
        "La natación es un deporte muy completo.",
        "Ayuda a fortalecer los músculos.",
        "Es buena para el corazón y los pulmones.",
        "¡Y es muy divertida!",
      ],
      pullQuote: '"Un cuerpo sano es una mente sana"',
      byline: "Por Diana Márquez",
      imagenDesc: "Niños nadando y practicando deportes en la escuela",
    },
  ],
};

function App() {
  const [seccionActiva, setSeccionActiva] = useState(0);

  const seccionSeleccionada = periodicoData.secciones[seccionActiva];

  return (
    <div className="App">
      {/* MASTHEAD - Cabecera del Periódico */}
      <AppBar position="static" sx={{ bgcolor: "#1565C0", mb: 0 }}>
        <Toolbar sx={{ flexDirection: "column", py: 2 }}>
          {/* Información superior del masthead */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              mb: 1,
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.8)" }}
            >
              {periodicoData.masthead.editorial}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.8)" }}
            >
              {periodicoData.masthead.fecha}
            </Typography>
          </Box>

          {/* NAMEPLATE - Título principal centrado */}
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontFamily: "Georgia, serif",
              fontWeight: "bold",
              textAlign: "center",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              mb: 1,
            }}
          >
            {periodicoData.masthead.titulo}
          </Typography>

          {/* Subtítulo */}
          <Typography
            variant="h6"
            sx={{
              fontStyle: "italic",
              textAlign: "center",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            {periodicoData.masthead.subtitulo}
          </Typography>

          {/* Autor */}
          <Typography
            variant="body2"
            sx={{ color: "rgba(255,255,255,0.8)", mt: 1 }}
          >
            ✍️ Por {periodicoData.masthead.autora}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* CONTENIDO PRINCIPAL CON LAYOUT DE DOS COLUMNAS */}
      <Container maxWidth="xl" sx={{ mt: 3, mb: 4 }}>
        <Grid container spacing={3}>
          {/* MENÚ LATERAL IZQUIERDO - Solo visible en página 1 */}
          {seccionActiva === 0 && (
            <Grid item xs={12} md={3}>
              <Paper
                elevation={2}
                sx={{
                  p: 2,
                  position: "sticky",
                  top: 20,
                  bgcolor: "background.paper",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    color: "#1565C0",
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  📰 Secciones del Periódico
                </Typography>

                <List dense>
                  {periodicoData.secciones.map((seccion, index) => (
                    <ListItem key={seccion.id} disablePadding>
                      <ListItemButton
                        selected={seccionActiva === index}
                        onClick={() => setSeccionActiva(index)}
                        sx={{
                          borderRadius: 1,
                          mb: 1,
                          "&.Mui-selected": {
                            bgcolor: `${seccion.color}20`,
                            "&:hover": {
                              bgcolor: `${seccion.color}30`,
                            },
                          },
                        }}
                      >
                        <ListItemIcon
                          sx={{ color: seccion.color, minWidth: 40 }}
                        >
                          {seccion.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={seccion.titulo}
                          secondary={`${seccion.emoji} ${seccion.kicker}`}
                          primaryTypographyProps={{
                            fontWeight:
                              seccionActiva === index ? "bold" : "normal",
                            fontSize: "0.9rem",
                          }}
                          secondaryTypographyProps={{
                            fontSize: "0.75rem",
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>

                {/* Información del periódico */}
                <Divider sx={{ my: 2 }} />
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  sx={{ color: "#1565C0", fontWeight: "bold" }}
                >
                  📄 Información Editorial
                </Typography>
                <Box sx={{ "& > *": { mb: 1 } }}>
                  <Typography variant="caption" display="block">
                    <strong>Editorial:</strong>{" "}
                    {periodicoData.masthead.editorial}
                  </Typography>
                  <Typography variant="caption" display="block">
                    <strong>Editora:</strong> {periodicoData.masthead.autora}
                  </Typography>
                  <Typography variant="caption" display="block">
                    <strong>Fecha:</strong> {periodicoData.masthead.fecha}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          )}

          {/* CONTENIDO PRINCIPAL - Ancho dinámico según si el menú está visible */}
          <Grid item xs={12} md={seccionActiva === 0 ? 9 : 12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  backgroundColor: "white",
                  borderRadius: 2,
                  maxWidth: seccionActiva === 0 ? "100%" : "800px",
                  width: "100%",
                }}
              >
                {/* ARTÍCULO PRINCIPAL */}
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: seccionSeleccionada.color,
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                    }}
                  >
                    {seccionSeleccionada.kicker}
                  </Typography>

                  {/* HEADLINE principal */}
                  <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                      fontFamily: "Georgia, serif",
                      fontWeight: "bold",
                      color: seccionSeleccionada.color,
                      lineHeight: 1.1,
                      mb: 1,
                    }}
                  >
                    {seccionSeleccionada.emoji} {seccionSeleccionada.titulo}
                  </Typography>

                  {/* DECK - Subtítulo explanatorio */}
                  <Typography
                    variant="h6"
                    sx={{
                      color: "text.secondary",
                      fontStyle: "italic",
                      borderLeft: `4px solid ${seccionSeleccionada.color}`,
                      pl: 2,
                      mb: 1,
                    }}
                  >
                    {seccionSeleccionada.subtitulo}
                  </Typography>

                  {/* BYLINE */}
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    {seccionSeleccionada.byline}
                  </Typography>
                </Box>

                <Divider sx={{ mb: 3 }} />

                {/* CONTENIDO DEL ARTÍCULO */}
                <Box sx={{ mb: 4 }}>
                  {/* LEAD - Primer párrafo destacado con drop cap arreglado */}
                  <Typography
                    variant="body1"
                    className="drop-cap"
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      mb: 3,
                      lineHeight: 1.6,
                      textAlign: "justify",
                    }}
                  >
                    {seccionSeleccionada.contenido[0]}
                  </Typography>

                  {/* CUERPO del artículo */}
                  <Box sx={{ mb: 3 }}>
                    {seccionSeleccionada.contenido
                      .slice(1)
                      .map((item, index) => (
                        <Typography
                          key={index}
                          variant="body1"
                          sx={{
                            mb: 2,
                            textAlign: "justify",
                            lineHeight: 1.7,
                            fontSize: "1.1rem",
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                  </Box>
                </Box>

                {/* IMAGEN DEBAJO DEL TEXTO */}
                <Card elevation={2} sx={{ mb: 3 }}>
                  <CardMedia
                    sx={{
                      height: 200,
                      bgcolor: seccionSeleccionada.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      position: "relative",
                    }}
                  >
                    <Box sx={{ textAlign: "center", p: 2 }}>
                      <Box sx={{ fontSize: "4rem", mb: 1 }}>
                        {seccionSeleccionada.emoji}
                      </Box>
                      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                        [ESPACIO PARA IMAGEN]
                      </Typography>
                    </Box>
                  </CardMedia>

                  {/* CAPTION - Descripción de la imagen */}
                  <CardContent sx={{ pt: 1, pb: 1 }}>
                    <Typography variant="caption" sx={{ fontStyle: "italic" }}>
                      📸 {seccionSeleccionada.imagenDesc}
                    </Typography>
                  </CardContent>
                </Card>

                {/* PULL QUOTE - Cita destacada */}
                <Paper
                  elevation={1}
                  sx={{
                    p: 2,
                    bgcolor: "grey.50",
                    borderLeft: `4px solid ${seccionSeleccionada.color}`,
                    mb: 3,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontStyle: "italic",
                      color: seccionSeleccionada.color,
                      textAlign: "center",
                      lineHeight: 1.3,
                    }}
                  >
                    {seccionSeleccionada.pullQuote}
                  </Typography>
                </Paper>

                {/* NAVEGACIÓN entre artículos */}
                <Divider sx={{ my: 3 }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="outlined"
                    disabled={seccionActiva === 0}
                    onClick={() => setSeccionActiva(seccionActiva - 1)}
                    startIcon={<NavigateBefore />}
                    sx={{
                      borderColor: seccionSeleccionada.color,
                      color: seccionSeleccionada.color,
                    }}
                  >
                    Artículo Anterior
                  </Button>

                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Página {seccionActiva + 1} de{" "}
                    {periodicoData.secciones.length}
                  </Typography>

                  <Button
                    variant="outlined"
                    disabled={
                      seccionActiva === periodicoData.secciones.length - 1
                    }
                    onClick={() => setSeccionActiva(seccionActiva + 1)}
                    endIcon={<NavigateNext />}
                    sx={{
                      borderColor: seccionSeleccionada.color,
                      color: seccionSeleccionada.color,
                    }}
                  >
                    Siguiente Artículo
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
