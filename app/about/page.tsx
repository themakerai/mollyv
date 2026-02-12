'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const storyRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const isStoryInView = useInView(storyRef, { once: true, margin: '-100px' })
  const isValuesInView = useInView(valuesRef, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const values = [
    {
      title: 'Loving',
      description: 'Leading with care for people, relationships, and long-term impact. Delivering hard truths with compassion and intention.'
    },
    {
      title: 'Brave',
      description: 'Facing reality honestly, naming what others avoid, and choosing clarity over comfort. Courage is required to lead well.'
    },
    {
      title: 'Positive',
      description: 'Approaching complex challenges with grounded optimism. Focusing on forward movement rather than blame or fear.'
    },
    {
      title: 'Inspiring',
      description: 'Empowering leaders to trust themselves, strengthen their voice, and step fully into their role with conviction.'
    },
    {
      title: 'Authentic',
      description: 'Valuing honesty, transparency, and real conversations. Showing up as you are—not who you think you should be.'
    }
  ]

  const boldFramework = [
    {
      letter: 'B',
      title: 'Be Clear Before You Act',
      description: 'Clear direction, clear priorities, clear expectations. Leaders do not confuse motion with progress.'
    },
    {
      letter: 'O',
      title: 'Own the Hard Things',
      description: 'Step into difficult conversations, accountability issues, and unpopular decisions when the business needs it.'
    },
    {
      letter: 'L',
      title: 'Listen to Understand',
      description: 'Create space for dissent, perspective, and truth. Leaders who listen well make better decisions and earn trust.'
    },
    {
      letter: 'D',
      title: 'Decide and Move Forward',
      description: 'Indecision is still a decision—often the most expensive one. Gather input, weigh risk, then move.'
    }
  ]

  return (
    <main className="relative bg-[#FAFAFA]">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-end overflow-hidden bg-charcoal">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          {/* Placeholder for hero background image */}
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-accent/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
            <span className="font-display text-[20vw] text-white select-none">MV</span>
          </div>
          <div className="absolute bottom-0 right-0 w-1/3 h-2/3 hidden lg:block">
            <ImagePlaceholder variant="portrait" theme="dark" label="Molly — hero bg" initials="" className="h-full border-0" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
        </motion.div>
        
        <div className="container-custom relative z-10 pb-16 lg:pb-24 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-[0.25em] uppercase text-white/60">About Molly</span>
            </span>
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] font-display text-white max-w-4xl">
              I've sat in your chair.
              <br />
              <span className="text-accent">That's why I can help.</span>
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl">
              A trusted advisor who helps leaders understand the story their business is telling them, so they can make clear, confident decisions when the stakes are high.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-2xl lg:text-3xl font-display text-charcoal leading-relaxed"
              >
                20+ years as president of a family business. Succession that didn't go as planned. 
                Hard conversations I had to have—and some I avoided too long.
              </motion.p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-lg text-dark-grey leading-relaxed"
              >
                I know what it's like to carry decisions that keep you up at night. The ones you 
                can't talk to anyone else about. The ones where business and personal are impossible 
                to separate.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-dark-grey leading-relaxed"
              >
                I learned something leading through all of that: <strong className="text-charcoal">the most significant risks 
                facing businesses were rarely just operational—they were human.</strong> Avoided conversations, misread signals, 
                and delayed decisions quietly eroded momentum long before problems showed up on paper.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* The Story - A Rare Combination */}
      <section ref={storyRef} className="py-24 lg:py-32 bg-[#FAFAFA]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-full h-full border border-accent" />
                <ImagePlaceholder variant="editorial" theme="blue" label="Molly — professional" className="relative" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent p-6 lg:p-8 z-10">
                <p className="font-tagline text-white text-lg">CPA + President</p>
                <p className="text-white/80 text-sm mt-1">Twenty years of lived experience</p>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isStoryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl lg:text-4xl font-display text-charcoal mb-8">
                A Rare Combination
              </h2>
              <div className="space-y-6 text-dark-grey">
                <p className="text-lg leading-relaxed">
                  <strong className="text-charcoal">Former CPA and CFO. President with full P&L responsibility.</strong> I offer rare technical fluency paired with executive judgment. I help leaders understand the business health story their numbers are telling—translating financial insight into clarity about leadership decisions, organizational capacity, and long-term sustainability.
                </p>
                <p className="text-lg leading-relaxed">
                  I've led and influenced <strong className="text-charcoal">high-stakes decision-making in male-dominated industries</strong> including agriculture and manufacturing. I bring calm authority into complex rooms, challenge assumptions with confidence, and guide leaders through difficult conversations without losing momentum or credibility.
                </p>
                <p className="text-lg leading-relaxed">
                  My work bridges insight and action—<strong className="text-charcoal">by asking the hard questions leaders avoid asking alone.</strong>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beyond Business - Personal Challenges */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-[0.25em] uppercase text-dark-grey">Beyond Business</span>
              <span className="w-8 h-px bg-accent" />
            </span>
            <h2 className="text-3xl lg:text-4xl font-display text-charcoal max-w-3xl mx-auto">
              Leadership isn't just what happens{' '}
              <span className="text-accent">in the boardroom.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Working with a Spouse',
                description: 'Navigating co-leadership while maintaining authority, boundaries, and a relationship that matters.'
              },
              {
                title: 'Raising Daughters',
                description: 'Modeling confidence and independence while leading through the daily weight of responsibility.'
              },
              {
                title: 'Caring for Family',
                description: 'Supporting a parent with dementia while continuing to make decisions and show up as a leader.'
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="p-8 bg-[#FAFAFA] border-l-2 border-accent"
              >
                <h3 className="text-xl font-display text-charcoal mb-4">{item.title}</h3>
                <p className="text-dark-grey leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center text-lg text-dark-grey mt-12 max-w-3xl mx-auto"
          >
            These experiences compound the weight of leadership—and give me unique insight into what leaders carry that <strong className="text-charcoal">rarely makes it into boardroom conversations.</strong>
          </motion.p>
        </div>
      </section>

      {/* What I Bring - Stats */}
      <section className="py-24 lg:py-32 bg-charcoal text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-[0.25em] uppercase text-white/60">What I Bring</span>
              <span className="w-8 h-px bg-accent" />
            </span>
            <h2 className="text-3xl lg:text-4xl font-display">
              Not theory. <span className="text-accent">Experience.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '20+', label: 'Years Leading', desc: 'President with full P&L responsibility' },
              { number: 'CPA', label: 'Financial Expertise', desc: 'CFO-level understanding of numbers' },
              { number: '∞', label: 'Hard Conversations', desc: 'Succession, exits, letting people go' },
              { number: '1', label: 'Perspective', desc: 'From inside the chair, not outside it' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`p-8 ${i === 0 ? 'bg-accent' : 'border border-white/10'}`}
              >
                <span className="text-4xl font-display">{item.number}</span>
                <h3 className="text-lg font-display mt-4 mb-2">{item.label}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-accent" />
                <span className="text-xs tracking-[0.25em] uppercase text-dark-grey">Who I Work With</span>
              </span>
              <h2 className="text-3xl lg:text-4xl font-display text-charcoal mb-6">
                Leaders like <span className="text-accent">you.</span>
              </h2>
              <div className="space-y-6 text-dark-grey">
                <p className="text-lg leading-relaxed">
                  You're carrying increasing responsibility without a trusted space to think, speak openly, or <strong className="text-charcoal">regulate internal pressure</strong>. You're leading through growth pressure, outdated systems, and people challenges while navigating identity shifts tied to leadership, family expectations, and life transitions.
                </p>
                <p className="text-lg leading-relaxed">
                  You seek clarity and trusted perspective while making decisions that impact both people and performance. You value honest insight, thoughtful challenge, and support that helps you <strong className="text-charcoal">settle the noise and take the next step</strong>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#FAFAFA] p-10 lg:p-12"
            >
              <p className="text-xl lg:text-2xl font-display text-charcoal leading-relaxed mb-8">
                After working with me, you'll feel:
              </p>
              <div className="space-y-6">
                {[
                  { highlight: 'Calmer', text: 'in your body—with internal steadiness restored' },
                  { highlight: 'Clearer', text: 'in your thinking—settled, not spinning' },
                  { highlight: 'Strong enough', text: 'to take the next hard step without second-guessing yourself' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-accent mt-3 flex-shrink-0" />
                    <p className="text-lg text-dark-grey">
                      <strong className="text-charcoal">{item.highlight}</strong> {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section ref={valuesRef} className="py-24 lg:py-32 bg-[#FAFAFA]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-[0.25em] uppercase text-dark-grey">What Guides Me</span>
              <span className="w-8 h-px bg-accent" />
            </span>
            <h2 className="text-3xl lg:text-4xl font-display text-charcoal">
              My <span className="text-accent">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-white p-6 border-t-2 border-accent"
              >
                <h3 className="text-xl font-display text-charcoal mb-3">{value.title}</h3>
                <p className="text-sm text-dark-grey leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOLD Leadership Framework */}
      <section className="py-24 lg:py-32 bg-charcoal text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-[0.25em] uppercase text-white/60">The Framework</span>
              <span className="w-8 h-px bg-accent" />
            </span>
            <h2 className="text-3xl lg:text-5xl font-display">
              <span className="text-accent">BOLD</span> Leadership
            </h2>
            <p className="text-lg text-white/70 mt-6 max-w-2xl mx-auto">
              A framework for making decisions with clarity, courage, and intention.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boldFramework.map((item, i) => (
              <motion.div
                key={item.letter}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`p-8 ${i === 0 ? 'bg-accent' : 'border border-white/10'}`}
              >
                <span className="text-6xl font-display text-white/20">{item.letter}</span>
                <h3 className="text-lg font-display mt-4 mb-3">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Quote */}
      <section className="py-24 lg:py-32 bg-accent text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-2xl lg:text-4xl font-display leading-relaxed mb-8">
              "The numbers tell a story. People change the outcome. I help you understand what your business is telling you—and what that story demands next."
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-white/30" />
              <span className="text-sm tracking-widest uppercase text-white/80">Molly Varangkounh</span>
              <span className="w-12 h-px bg-white/30" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Advisory Work */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <span className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-accent" />
                <span className="text-xs tracking-[0.25em] uppercase text-dark-grey">The Call to Guide</span>
              </span>
              <h2 className="text-3xl lg:text-4xl font-display text-charcoal">
                Why I do <span className="text-accent">this work.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 lg:col-start-7 space-y-6"
            >
              <p className="text-lg text-dark-grey leading-relaxed">
                While many advisors focus on strategy alone or remain deep inside the numbers, I work at the <strong className="text-charcoal">intersection of leadership, business health, and change.</strong>
              </p>
              <p className="text-lg text-dark-grey leading-relaxed">
                I help leaders understand the story their business is telling them—and what that story demands next. I ask the hard questions leaders often avoid asking alone, helping them assess <strong className="text-charcoal">sustainability, capacity, and consequence.</strong>
              </p>
              <p className="text-lg text-dark-grey leading-relaxed">
                From there, I support the <strong className="text-charcoal">change management side of decision-making</strong>—so insight turns into brave, intentional action rather than prolonged hesitation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Decision Room CTA */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-accent" />
                  <span className="text-xs tracking-[0.25em] uppercase text-dark-grey">The First Step</span>
                </span>
                <h2 className="text-3xl lg:text-4xl font-display text-charcoal mb-6">
                  The <span className="text-accent">Decision Room</span>
                </h2>
                <p className="text-lg text-dark-grey leading-relaxed mb-6">
                  A confidential conversation about the decision in front of you. 30 minutes. 
                  No pitch, no pressure—just clarity on what's really at stake.
                </p>
                <p className="text-lg text-dark-grey leading-relaxed mb-8">
                  You'll leave knowing exactly what to do—and at peace with the decision.
                </p>
                <Link 
                  href="/decision-room"
                  className="inline-flex items-center gap-4 group"
                >
                  <span className="px-8 py-4 bg-charcoal text-white text-sm font-medium tracking-wider uppercase transition-all duration-500 group-hover:bg-accent">
                    Enter The Decision Room
                  </span>
                  <span className="w-12 h-12 flex items-center justify-center border border-charcoal text-charcoal transition-all duration-500 group-hover:bg-charcoal group-hover:text-white">
                    →
                  </span>
                </Link>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: 'People Decisions', examples: 'Hiring, firing, restructuring, family dynamics' },
                { title: 'Strategy Decisions', examples: 'P&L, compensation, budget, pivotal investments' },
                { title: 'Transition Decisions', examples: 'Succession, exits, stepping into or out of roles' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="p-6 bg-white border-l-2 border-accent"
                >
                  <h3 className="font-display text-charcoal mb-2">{item.title}</h3>
                  <p className="text-sm text-dark-grey">{item.examples}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-charcoal text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl lg:text-2xl font-light text-white/80 mb-6 max-w-2xl mx-auto">
              Ready for a conversation that changes everything?
            </p>
            <h2 className="text-3xl lg:text-5xl font-display mb-10">
              Lead with clarity.{' '}
              <span className="font-script text-accent lowercase">Make bold moves.</span>
            </h2>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-4 group"
            >
              <span className="px-10 py-5 bg-accent text-white text-sm font-medium tracking-wider uppercase transition-all duration-500 group-hover:bg-white group-hover:text-charcoal">
                Start the Conversation
              </span>
              <span className="w-14 h-14 flex items-center justify-center border border-accent text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
