"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine, RecursivePartial, IOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

import particleConfig from "@/config/particles.json";

export const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);


    return (
        init && (
            <Particles
                id="tsparticles"
                options={particleConfig as RecursivePartial<IOptions>}/>
        )
    );
};