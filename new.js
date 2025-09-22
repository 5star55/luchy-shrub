'use client'

import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-36">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Small pill */}
          <div className="inline-block mb-8 px-8 py-2 rounded-lg border border-white/10 bg-white/3 text-sm">
            devtrone - Ai Automation Business Solutions
          </div>

          {/* Headline */}
          <h1 className="font-extralight leading-tight tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl max-w-[1400px]">
            <span className="block text-[#cfefe8]">AI Chat & Voice Agents That Book</span>
            <span className="block text-[#cfefe8]">Appointments, Convert Leads, and Close</span>
            <span className="block text-white">Sales â€” Built for UAE Service Businesses</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl mt-8 text-lg md:text-xl text-gray-300">
            Leverage intelligent Voice & Chat AI to automate sales conversations,
            follow-ups, and appointment bookings â€” without lifting a finger.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex gap-4">
            <Link
              href="https://cal.com/team/devtrone-com/ai-strategy-room"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#009B7D] hover:bg-emerald-500 text-white px-9 py-2 rounded-lg text-base font-medium"
            >
              <span>Try Demo</span>
              <FiArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="https://cal.com/team/devtrone-com/ai-strategy-room"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/10 text-white px-9 py-2 rounded-lg text-base font-medium"
            >
              Book a call
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}