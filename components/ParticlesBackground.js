// ParticlesBackground.js
'use client';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const options = {
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#888888"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5,
                random: true
            },
            size: {
                value: 3,
                random: true
            },
            links: {
                enable: true,
                distance: 150,
                color: "#888888",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: false,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 100
                },
                push: {
                    quantity: 4
                }
            }
        },
        retina_detect: true
    };

    return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

export default ParticlesBackground;