import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#F9A825",
  logoDecal: "./Komatsu.png",
  logoDec: "./Komatsu.png",
  fullDecal: "./threejs.png",
  isLogoTexture: true,
  logoPosition: [0.05 ,0.04 , 0.32],
  logoRotation: [6.3 ,132.1, 0],
  logoScale: 0.25,

  isAdditionalLogoTexture: true, 
  additionalLogoDecal: "./Komatsu.png", 
  additionalLogoPosition: [-3.9, 283.91, 308.45],
  additionalLogoRotation: [0, 5 , -1.7],
  additionalLogoScale: 79, 

  isLogoTexture3: true, 
  LogoDecal3: "./Komatsu.png", 
  LogoPosition3: [0.05, -0.03, 0.03], 
  LogoRotation3: [0, 2.3 , 0],
  LogoScale3: 0.08, 

  isLogoTexture4: true, 
  LogoDecal4: "./pc-200.png", 
  LogoPosition4: [-0.27, -0.01, -0.136], 
  LogoRotation4: [0, -1.5 , 0],
  LogoScale4: 0.14, 

  isLogoTexture5: true, 
  LogoDecal5: "./pc-200.png", 
  LogoPosition5: [0.35, -0.01, -0.133], 
  LogoRotation5: [0, 1.5 , 0],
  LogoScale5: 0.14, 

  isLogoTexture6: true, 
  LogoDecal6: "./Komatsu.png", 
  LogoPosition6: [-0.02, 0.16, -0.063], 
  LogoRotation6: [0, -1.2 , 0],
  LogoScale6: 0.07, 

  selectedDecalId: null,
});

export default state;
