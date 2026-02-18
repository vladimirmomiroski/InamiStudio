import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Logo from '@/app/shared/ui/logo/logo'

const Footer = () => {
    const year: number = new Date().getFullYear()

    return (
        <footer className="bg-black">
            {/* CTA Banner */}
            <section className='relative overflow-hidden bg-white py-24 px-6'>
                {/* Soft Organic Shapes */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-green/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow/10 rounded-full blur-3xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-green/10 px-5 py-2 rounded-full mb-8">
                            <span className="w-2 h-2 bg-green rounded-full animate-pulse"></span>
                            <span className="font-montserrat text-green text-small font-semibold uppercase tracking-wide">
                                Ready to Start?
                            </span>
                        </div>

                        <h2 className='font-anton text-black text-extra-large leading-tight mb-6'>
                            Let's Create Something
                            <br />
                            <span className="text-green">Amazing Together</span>
                        </h2>

                        <p className='font-montserrat text-black/60 text-[1.1rem] max-w-2xl mx-auto leading-relaxed mb-10'>
                            Tell us about your project and let's bring your vision to life
                        </p>

                        <a
                            href="#contact"
                            className="inline-block bg-green text-white font-montserrat font-bold text-default px-10 py-5 rounded-xl hover:shadow-xl hover:shadow-green/30 hover:-translate-y-1 transition-all duration-300"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </section>

            {/* Main Footer Content */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Logo & Info Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-start">
                        {/* Logo */}
                        <div className='flex justify-center md:justify-start'>
                            <Logo width={180} height={180} src='/assets/images/inami.png' />
                        </div>

                        {/* Location */}
                        <div className='text-center md:text-left'>
                            <h3 className=" text-green text-small font-bold uppercase tracking-wider mb-4">
                                Our Location
                            </h3>
                            <p className=" text-white/70 text-default leading-relaxed">
                                Skopje, North Macedonia
                            </p>
                            <p className=" text-white/70 text-default leading-relaxed">
                                Kiro Krstevski 15
                            </p>
                        </div>

                        {/* Contact */}
                        <div className='text-center md:text-left'>
                            <h3 className="text-green text-small font-bold uppercase tracking-wider mb-4">
                                Get In Touch
                            </h3>
                            <span
                                className="text-white/70 text-default transition-colors duration-300 block mb-2"
                            >
                                inamistudio15@gmail.com
                            </span>
                            <span
                                className="text-white/70 text-default transition-colors duration-300 block mb-2"
                            >
                                +389 75 259 925
                            </span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-linear-to-r from-transparent via-yellow to-transparent mb-12"></div>

                    {/* Social Media */}
                    <div className="flex justify-center gap-6 mb-12">
                        <a
                            href="https://www.instagram.com/inami.studio/"
                            className="group"
                            aria-label="Instagram"
                            target='_blank'
                        >
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-orange hover:scale-110">
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-12"
                                />
                            </div>
                        </a>
                        <a

                            href="https://www.facebook.com/profile.php?id=61588553570623"
                            className="group"
                            aria-label="Facebook"
                            target='_blank'
                        >
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-orange hover:scale-110">
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-12"
                                />
                            </div>
                        </a>
                        <a
                            href="https://www.tiktok.com/@inami_studio?_r=1&_t=ZS-941OoA0ylWs"
                            className="group"
                            aria-label="TikTok"
                            target='_blank'
                        >
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-orange hover:scale-110">
                                <FontAwesomeIcon
                                    icon={faTiktok}
                                    className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-12"
                                />
                            </div>
                        </a>
                        <a
                            href="https://www.youtube.com/"
                            className="group"
                            aria-label="YouTube"
                            target='_blank'
                        >
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-orange hover:scale-110">
                                <FontAwesomeIcon
                                    icon={faYoutube}
                                    className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-12"
                                />
                            </div>
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-center">
                        <p className="font-montserrat text-white/70 text-small">
                            Copyright © {year} <strong className="text-white"><i>Inami Studio</i></strong> • All Rights Reserved
                        </p>
                    </div>
                </div>
            </section>

            {/* Bottom Accent */}
            <div className="h-1 bg-linear-to-r from-green via-yellow to-orange"></div>
        </footer>
    )
}

export default Footer;