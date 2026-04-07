import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Layout } from "@/components/layout/Layout";
import { CTA } from "@/components/sections/CTA";

const Team = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <main className="py-20 lg:py-32 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6"
            >
              Flownox
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              {t('team.title')} <span className="text-accent">{t('team.titleHighlight')}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              {t('team.subtitle')}
            </motion.p>
          </div>

          {/* Founder Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-32">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 to-purple-500/30 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-secondary/30 backdrop-blur-sm shadow-2xl">
                <img 
                  src="/antonio.jpg" 
                  alt="Antonio Moya" 
                  className="w-full h-full object-cover object-top transition-all duration-700 hover:scale-105"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-2 tracking-tight">{t('team.member.name')}</h2>
                <p className="text-2xl text-accent font-medium">{t('team.member.role')}</p>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                {t('team.member.bio')}
              </p>
              
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.linkedin.com/in/antonio-moya-valls-7168b3256/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label="Linkedin"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/piraterobertstmv" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label="Github"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://x.com/antoniomoyav" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:a.moya.valls@icloud.com" 
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <CTA />
    </Layout>
  );
};

export default Team;
