import { PresentationControls } from '@react-three/drei';
import { useRef } from 'react'
import DevbookModel16 from '../Devbook-16'
import DevbookModel14 from '../Devbook-14'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


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

  useGSAP(() => {
    if(showLargeDevbook) {
      moveGroup(smallDevbookRef.current, -OFFSET_DISTANCE);
      moveGroup(largeDevbookRef.current, 0);

      fadeMeshes(smallDevbookRef.current, 0);
      fadeMeshes(largeDevbookRef.current, 1);
    } else {
      moveGroup(smallDevbookRef.current, 0);
      moveGroup(largeDevbookRef.current, OFFSET_DISTANCE);

      fadeMeshes(smallDevbookRef.current, 1);
      fadeMeshes(largeDevbookRef.current, 0);
    }
  },[scale])

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
        <group ref={largeDevbookRef}>
          <DevbookModel16 scale={isMobile ? 0.05 : 0.08}/>
        </group>
      </PresentationControls>
      <PresentationControls {...controlsConfig}>
        <group ref={smallDevbookRef}>
          <DevbookModel14 scale={isMobile ? 0.03 : 0.06}/>
        </group>
      </PresentationControls>
    </>
  )
}

export default ModelSwitcher