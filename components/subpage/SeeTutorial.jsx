import React, { useEffect, useState } from 'react'
import { Fade, Box } from '@mui/material';
//https://tenor.com/es/view/blinky-blinking-big-eyes-meme-cake-gif-27350408
const SeeTutorial = () => {
    const [step, setStep] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    
    // Efecto para cambiar automáticamente los pasos cada 5 segundos
    useEffect(() => {
        let interval;
        
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setStep(prevStep => (prevStep < 5 ? prevStep + 1 : 0));
            }, 5000);
        }
        
        return () => clearInterval(interval);
    }, [isAutoPlaying]);
    return (
        <div>
            {step === 0 ? (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40, flexDirection: 'column' }}>
                    <Fade in={true} timeout={{ enter: 400 }}>
                        <Box>
                            <h2 style={{ textAlign: 'center' }}>Tutorial de como ver</h2>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src="/gato_pulgar.jpg" alt="" />
                            </div>
                        </Box>
                    </Fade>
                    <Fade in={true} timeout={{ enter: 800 }}>
                        <Box>
                            <h2 style={{ textAlign: 'center' }}>Sin virus 🥵🥵🥵</h2>
                        </Box>
                    </Fade>
                </div>
            ) : step === 1 ? (
                <>
                    <Fade in={true} timeout={{ enter: 400 }}>
                        <Box>
                            <h2 style={{ textAlign: 'center' }}>Atento!!</h2>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src="/gato_atento.jpg" alt="" />
                            </div>
                        </Box>
                    </Fade>
                </>
            ) : step === 2 ? (
                <>
                    <Fade in={true} timeout={{ enter: 400 }}>
                        <Box>
                            <h2 style={{ textAlign: 'center' }}>Paso 1: Abrir los OJOS!</h2>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src="/gato_ojos.jpg" alt="" />
                            </div>
                        </Box>
                    </Fade>
                </>
            ) : step === 3 ? (
                <>
                    <Fade in={true} timeout={{ enter: 400 }}>
                        <Box>
                            <h2 style={{ textAlign: 'center' }}>Asi</h2>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {/* <div class="tenor-gif-embed" data-postid="27350408" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/blinky-blinking-big-eyes-meme-cake-gif-27350408">Blinky Blinking GIF</a>from <a href="https://tenor.com/search/blinky-gifs">Blinky GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script> */}
                                <img src="/gato_gif1.gif" alt="" style={{width:'400px'}}/>
                            </div>
                        </Box>
                    </Fade>
                </>
            ) : step === 4 ? (
                <>
                    <Fade in={true} timeout={{ enter: 400 }}>
                        <Box>
                            <h2 style={{ textAlign: 'center' }}>LISTO, FELICIDADES!!</h2>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src="/gato_baile.gif" alt="" style={{width:'150px'}}/>
                                <img src="/gato_baile.gif" alt="" style={{width:'200px'}}/>
                                <img src="/gato_baile.gif" alt="" style={{width:'150px'}}/>
                            </div>
                        </Box>
                    </Fade>
                </>
            ) : step === 5 ? (
                <>
                    <Fade in={true} timeout={{ enter: 400 }}>
                        <Box>
                            <h2 style={{ textAlign: 'center' }}>LIKE PARA MAS TUTORIALES :D</h2>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src="/gato_okay.gif" alt="" style={{width:'450px'}}/>
                            </div>
                        </Box>
                    </Fade>
                </>
            )

            : null}
            
            
            <Fade in={true} timeout={{ enter: 600 }}>
                <Box>
                    <h2 style={{ textAlign: 'center' }}>Sin Instalar nada 😱😱😱</h2>
                </Box>
            </Fade>
            <Fade in={true} timeout={{ enter: 500 }}>
                <Box>
                    <a 
                        href="https://www.youtube.com/@juampiluna11" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                            textDecoration: 'none',
                            color: 'white',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            display: 'inline-block',
                            marginTop: '20px',
                            padding: '12px 24px',
                            borderRadius: '30px',
                            background: 'linear-gradient(45deg, #FF0000, #FF5E5E)',
                            boxShadow: '0 4px 15px rgba(255, 0, 0, 0.3)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'scale(1.05)';
                            e.target.style.boxShadow = '0 6px 20px rgba(255, 0, 0, 0.4)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.boxShadow = '0 4px 15px rgba(255, 0, 0, 0.3)';
                        }}
                        >
                        Like y Follow para más 🥵😱😱😱
                        </a>
                </Box>
            </Fade>
        </div>
    )
}

export default SeeTutorial