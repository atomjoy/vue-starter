function animateObserver(amination_name = 'animate__fadeIn', trigger = '.services_list', name = '.animate__inview') {
    const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
            // Check elements with cass name
			const el = entry.target.querySelectorAll(name);
            el.forEach((i) => {
                if (entry.isIntersecting) {
                    i.classList.add(amination_name);
                    return; // if we added the class, exit the function
                }
                // We're not intersecting, so remove the class!
                i.classList.remove(amination_name);
            })
		});
	});

	observer.observe(document.querySelector(trigger));
}

export default animateObserver

/* 

<div class="services_list">
    <div class="services_item animate__inview animate__animated"></div>
    <div class="services_item animate__inview animate__animated"></div>
    <div class="services_item animate__inview animate__animated"></div>
</div>

import animateObserver from '@/utils/animate_observer'
onMounted(() => {
	animateObserver('animate__fadeIn')
})

*/