var animData = {
    wrapper: document.querySelector('#animationWindow'),
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/strut_data.json'
};
var anim = bodymovin.loadAnimation(animData);
anim.setSpeed(0.98);
bodymovin.setSubframeRendering(true);
