import { NearestFilter, TextureLoader, RepeatWrapping } from "three";

import {
  dirtImg,
  glassImg,
  grassImg,
  logImg,
  woodImg,
  roadImg
} from "./images";

const dirtTexture = new TextureLoader().load(dirtImg);
const glassTexture = new TextureLoader().load(glassImg);
const grassTexture = new TextureLoader().load(grassImg);
const logTexture = new TextureLoader().load(logImg);
const woodTexture = new TextureLoader().load(woodImg);
const roadTexture = new TextureLoader().load(roadImg);

const groundTexture = new TextureLoader().load(grassImg);
const driveTexture = new TextureLoader().load(roadImg);

dirtTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
roadTexture.magFilter = NearestFilter;

driveTexture.wrapS = RepeatWrapping;
driveTexture.wrapT = RepeatWrapping;
driveTexture.repeat.set(4, 4);

groundTexture.wrapS = RepeatWrapping; // load texture, set wrap mode to repeat
groundTexture.wrapT = RepeatWrapping; // load texture, set wrap mode to repeat

export {
  dirtTexture,
  glassTexture,
  grassTexture,
  logTexture,
  woodTexture,
  groundTexture
};
