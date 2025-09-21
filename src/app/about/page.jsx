"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Playfair_Display, Montserrat, Cormorant_Garamond } from "next/font/google";

// Fonts
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: '--font-playfair'
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600"],
  variable: '--font-montserrat'
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600"],
  variable: '--font-cormorant'
});

export default function AboutPage() {
  return (
    <main className={`${montserrat.variable} ${playfair.variable} ${cormorant.variable} bg-white text-gray-800 pt-[150px]`}>
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-playfair text-3xl md:text-4xl font-medium mb-6 text-gray-900 tracking-wide"
        >
          About Anuisha Resin Arts
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="w-20 h-0.5 bg-amber-400 mx-auto mb-6"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Based in Bangalore, we create elegant, minimalist resin art that transforms spaces with organic beauty and modern sophistication.
        </motion.p>
      </section>

      {/* Our Story */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-6 text-gray-900 tracking-wide">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 font-light">
            Founded with a passion for blending art with functionality, Anuisha Resin Arts began as a small studio in Bangalore. Our journey started with experimenting with resin to create unique pieces that capture the fluid beauty of this versatile medium.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4 font-light">
            Each creation is meticulously handcrafted, emphasizing <span className="text-amber-600 font-normal">clean lines, organic forms, and subtle elegance</span>. We believe in the power of minimalism to highlight the natural beauty within each piece.
          </p>
          <p className="text-gray-600 leading-relaxed font-light">
            Our art is not just decorative—it's a conversation between material, form, and space, designed to bring calm and inspiration to modern living.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-full h-80 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-gray-50 rounded-lg"></div>
            <div className="absolute right-0 bottom-0 w-5/6 h-5/6 border border-amber-200 rounded-lg flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-cormorant text-amber-700 italic">"Beauty in simplicity,<br /> elegance in form"</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* What We Do */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-cormorant text-2xl md:text-3xl font-medium mb-12 text-center text-gray-900 tracking-wide"
          >
            Our Approach
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Minimalist Design", 
                desc: "Clean, timeless pieces that complement modern spaces without overwhelming them.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                )
              },
              { 
                title: "Artisan Crafted", 
                desc: "Each piece is meticulously handcrafted with attention to detail and quality.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              { 
                title: "Sustainable Practices", 
                desc: "Environmentally conscious creation process with minimal waste and eco-friendly materials.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                )
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-playfair text-lg font-medium mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Process */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-cormorant text-2xl md:text-3xl font-medium mb-12 text-center text-gray-900 tracking-wide"
        >
          Our Materials & Process
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-amber-50 p-8 rounded-lg"
          >
            <h3 className="font-playfair text-xl font-medium mb-4 text-amber-800">Premium Materials</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-amber-200 flex items-center justify-center mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-amber-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>High-quality, non-toxic epoxy resin</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-amber-200 flex items-center justify-center mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-amber-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Natural pigments and mineral additives</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-amber-200 flex items-center justify-center mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-amber-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Sustainably sourced wood and natural elements</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gray-100 p-8 rounded-lg"
          >
            <h3 className="font-playfair text-xl font-medium mb-4 text-gray-800">Our Process</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center mr-3 font-montserrat font-medium text-xs">1</div>
                <span>Design conception and material selection</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center mr-3 font-montserrat font-medium text-xs">2</div>
                <span>Precise measuring and mixing of materials</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center mr-3 font-montserrat font-medium text-xs">3</div>
                <span>Layering and curing process over several days</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center mr-3 font-montserrat font-medium text-xs">4</div>
                <span>Finishing and quality inspection</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-cormorant text-2xl md:text-3xl font-medium mb-6 text-gray-900 tracking-wide"
        >
          Join Our Creative Community
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-600 mb-8 max-w-xl mx-auto font-light"
        >
          Subscribe to receive updates on new collections, exclusive offers, and insights into our creative process.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-3"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 border border-gray-300 rounded-lg w-full sm:w-80 text-sm outline-none focus:ring-1 focus:ring-amber-400 font-light"
          />
          <button
            type="submit"
            className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-all duration-300 text-sm font-normal"
          >
            Subscribe
          </button>
        </motion.form>
      </section>
    </main>
  );
}