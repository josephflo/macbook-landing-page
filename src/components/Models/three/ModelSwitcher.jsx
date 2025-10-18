import { PresentationControls } from '@react-three/drei';
import { useRef } from 'react'
import DevbookModel16 from '../Devbook-16'
import DevbookModel14 from '../Devbook-14'


const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity) => {
  if(!group) return;

  group.traverse((child) => {
    if(child.isMesh) {
      child.material.transparent = true;
      gsap.to(child.material, {opacity, duration: ANIMATION_DURATION});
    }
  })
}

const moveGroup = (group, x) => {
  if(!group) return;
  gsap.to(group.position, {x,duration: ANIMATION_DURATION});
}

const ModelSwitcher = ({scale, isMobile}) => {

  const smallDevbookRef = useRef();
  const largeDevbookRef = useRef();

  const showLargeDevbook = scale === 0.08 || scale === 0.05

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    azimuth: [-Infinity, Infinity],
    config: { mass: 1, tension: 0, friction: 26 },
  }


  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group>
          <DevbookModel16 scale={isMobile ? scale - 0.05 : 0.08}/>
        </group>
      </PresentationControls>
      <PresentationControls {...controlsConfig}>
        <group>
          <DevbookModel14 scale={isMobile ? scale - 0.03 : 0.06}/>
        </group>
      </PresentationControls>
    </>
  )
}

export default ModelSwitcher