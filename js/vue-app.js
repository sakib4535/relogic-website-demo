const { createApp } = Vue;

createApp({
    data() {
        return {
            mobileMenuOpen: false,
            formData: {
                name: '',
                email: '',
                message: ''
            },
            formSubmitted: false
        }
    },
    methods: {
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
            const nav = document.querySelector('.nav');
            if (this.mobileMenuOpen) {
                nav.style.display = 'block';
                setTimeout(() => {
                    nav.style.opacity = '1';
                    nav.style.transform = 'translateY(0)';
                }, 10);
            } else {
                nav.style.opacity = '0';
                nav.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    nav.style.display = 'none';
                }, 300);
            }
        },
        submitForm() {
            // In a real app, you would send this data to a server
            console.log('Form submitted:', this.formData);
            this.formSubmitted = true;
            this.formData = { name: '', email: '', message: '' };
            
            // Show success message
            setTimeout(() => {
                this.formSubmitted = false;
            }, 3000);
        },
        initScrollAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('aos-animate');
                    }
                });
            }, {
                threshold: 0.1
            });

            document.querySelectorAll('[data-aos]').forEach(el => {
                observer.observe(el);
            });
        }
    },
    mounted() {
        // Initialize scroll animations
        this.initScrollAnimations();
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}).mount('#app');