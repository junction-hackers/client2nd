export const fragShader = `
  uniform sampler2D texture1;
  uniform float time;

  varying vec2 vUv;
  varying float noise;
  void main() {
      vec3 color = vec3( vUv * ( 1. - 2. * noise ), 0.0 );
      vec4 noise = mod(vec4(color.x,color.y,color.z,1.0)*(sin(time*20.)+1.)/2.*0.5,1.0);
      gl_FragColor = texture2D(texture1, vUv)+noise; // Displays Nothing
  }
`
