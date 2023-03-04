const timeline = gsap.timeline();

timeline.fromTo('.section2', { x: 0 }, { x: '-100%' });
timeline.fromTo('.section3', { x: 0 }, { x: '-200%' });
timeline.fromTo('.section4', { x: 0 }, { x: '-300%' });

const container = document.querySelector('.content');

ScrollTrigger.create({
	animation: timeline,
	trigger: container,
	start: 'top top',
	end: () => container.offsetWidth / 2,
	scrub: true,
	pin: true,
});
