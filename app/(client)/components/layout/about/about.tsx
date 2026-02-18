import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="bg-white py-20 px-4 sm:px-6 lg:px-8 scroll-mt-27.5">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className=" text-black text-extra-large mb-4 leading-tight">
                        Meet The Team
                    </h2>
                    <p className="text-black text-large max-w-3xl mx-auto opacity-70">
                        A dynamic duo combining technical excellence with creative brilliance
                    </p>
                </div>

                {/* Vladimir - Left Aligned */}
                <div className="mb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative order-2 lg:order-1">
                            <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-green/10 border-4 border-green">
                                <Image
                                    src="/assets/images/vladimir.png"
                                    alt="Vladimir"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="order-1 lg:order-2">
                            <div className="inline-block bg-green px-6 py-2 rounded-full mb-4">
                                <span className="font-montserrat text-black text-small font-bold uppercase tracking-wider">
                                    Co-Founder
                                </span>
                            </div>

                            <h3 className="font-anton text-black text-extra-large mb-4 leading-none">
                                Vladimir
                            </h3>

                            <p className="font-montserrat text-green text-medium font-semibold mb-6">
                                Web Developer & Technical Strategist
                            </p>

                            <p className="font-montserrat text-black text-medium leading-relaxed mb-8 opacity-80">
                                With a strong foundation in full-stack development, I transform complex ideas
                                into seamless digital experiences. My expertise spans modern web technologies,
                                UI/UX implementation, and digital marketing strategy. I believe in writing clean,
                                efficient code that not only works beautifully but also drives measurable business results.
                            </p>

                            {/* Skills */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green rounded-full"></div>
                                    <span className="font-montserrat text-black text-default">Full-Stack Development</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green rounded-full"></div>
                                    <span className="font-montserrat text-black text-default">UI/UX Implementation</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green rounded-full"></div>
                                    <span className="font-montserrat text-black text-default">Digital Marketing</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green rounded-full"></div>
                                    <span className="font-montserrat text-black text-default">Technical Strategy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Aleksandra - Right Aligned */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div className="order-1">
                            <div className="inline-block bg-orange px-6 py-2 rounded-full mb-4">
                                <span className="font-montserrat text-black text-small font-bold uppercase tracking-wider">
                                    Co-Founder
                                </span>
                            </div>

                            <h3 className="font-anton text-black text-extra-large mb-4 leading-none">
                                Aleksandra
                            </h3>

                            <p className="font-montserrat text-orange text-medium font-semibold mb-6">
                                Creative Director & Brand Strategist
                            </p>

                            <p className="font-montserrat text-black text-medium leading-relaxed mb-8 opacity-80">
                                My passion lies in creating visual narratives that captivate and convert. With
                                expertise in graphic design, illustration, and brand identity, I craft compelling
                                stories that resonate with audiences. I combine artistic vision with strategic
                                marketing insights to build brands that stand out and leave lasting impressions.
                            </p>

                            {/* Skills */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-orange rounded-full"></div>
                                    <span className="font-montserrat text-black text-default">Graphic Design & Illustration</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-orange rounded-full"></div>
                                    <span className="font-montserrat text-black text-default">Brand Identity Development</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-orange rounded-full"></div>
                                    <span className="font-montserrat text-black text-default">Visual Storytelling</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-orange rounded-full"></div>
                                    <span className="font-montserrat text-black text-default">Marketing Strategy</span>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative order-2">
                            <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-orange/10 border-4 border-orange">
                                <Image
                                    src="/assets/images/aleksandra.png"
                                    alt="Aleksandra"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Decorative Element */}
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange rounded-full opacity-20 -z-10"></div>
                        </div>
                    </div>
                </div>

                {/* Our Story Section */}
                <div className="relative mt-32">
                    <div className="bg-linear-to-br from-yellow/20 to-green/10 rounded-3xl p-12 lg:p-16">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-block w-16 h-1 bg-yellow mb-8"></div>

                            <h3 className="font-anton text-black text-[1.7rem] mb-8">
                                Our Story
                            </h3>

                            <p className="font-montserrat text-black text-default leading-relaxed mb-6 opacity-80">
                                As siblings, we've always had complementary skills that naturally work together.
                                Vladimir's technical expertise and Aleksandra's creative vision create a perfect
                                synergy that brings unique value to every project we undertake.
                            </p>

                            <p className="font-montserrat text-black text-default leading-relaxed opacity-80">
                                Together, we've built a marketing agency that doesn't just deliver services—we
                                create experiences. Our combined backgrounds in web development, design, and
                                marketing allow us to approach challenges from multiple angles, ensuring that
                                every solution we provide is both beautiful and effective.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
