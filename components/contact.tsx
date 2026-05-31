'use client';

import { type FormEvent, type InputHTMLAttributes, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn, FaPhone } from 'react-icons/fa6';
import { site } from '@/lib/site-data';
import { SectionHeading } from './section-heading';
import { MagneticButton } from './magnetic-button';
import { TiltCard } from './tilt-card';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (values.subject.trim().length < 3) errors.subject = 'Please add a subject.';
  if (values.message.trim().length < 10) errors.message = 'Please write at least 10 characters.';
  return errors;
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [toast, setToast] = useState<string | null>(null);

  const mailtoUrl = useMemo(() => {
    const subject = encodeURIComponent(form.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}\n`,
    );
    return `mailto:${site.email}?subject=${subject}&body=${body}`;
  }, [form.email, form.message, form.name, form.subject]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    window.open(mailtoUrl, '_blank', 'noopener,noreferrer');
    setToast('Your message draft is ready in your email app.');
    setForm(initialState);
    setTimeout(() => setToast(null), 4200);
  };

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="relative border-t border-white/8 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s build something secure, intelligent, and visually premium."
          description="Reach out for collaborations, freelance work, research discussions, or product ideas that need a careful technical partner."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <TiltCard>
            <article className="h-full rounded-[1.85rem] border border-white/10 bg-white/6 p-6 shadow-soft backdrop-blur-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric-300/90">
                Direct contact
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Fatehin Alam</h3>
              <p className="mt-3 text-sm leading-7 text-white/66">
                Full Stack Developer · AI Researcher · Cybersecurity Enthusiast · UAV Security Researcher
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-950/55 px-4 py-3 text-sm text-white/80 transition hover:bg-white/8"
                >
                  <FaEnvelope className="text-electric-300" />
                  {site.email}
                </a>
                <a
                  href={`tel:${site.phone}`}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-950/55 px-4 py-3 text-sm text-white/80 transition hover:bg-white/8"
                >
                  <FaPhone className="text-electric-300" />
                  {site.phone}
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-950/55 px-4 py-3 text-sm text-white/80 transition hover:bg-white/8"
                >
                  <FaGithub className="text-electric-300" />
                  GitHub
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-950/55 px-4 py-3 text-sm text-white/80 transition hover:bg-white/8"
                >
                  <FaLinkedinIn className="text-electric-300" />
                  LinkedIn
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-950/55 px-4 py-3 text-sm text-white/80 transition hover:bg-white/8"
                >
                  <FaFacebookF className="text-electric-300" />
                  Facebook
                </a>
              </div>

              <div className="mt-8 rounded-[1.35rem] border border-white/10 bg-[linear-gradient(135deg,rgba(59,130,246,0.14),rgba(139,92,246,0.14))] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/45">Response style</p>
                <p className="mt-2 text-sm leading-7 text-white/72">
                  Clear communication, practical delivery, and thoughtful execution from first message to final release.
                </p>
              </div>
            </article>
          </TiltCard>

          <TiltCard>
            <motion.form
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="rounded-[1.85rem] border border-white/10 bg-white/6 p-6 shadow-soft backdrop-blur-2xl"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  value={form.name}
                  onChange={(value) => update('name', value)}
                  placeholder="Your name"
                  error={errors.name}
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(value) => update('email', value)}
                  placeholder="your@email.com"
                  error={errors.email}
                />
              </div>

              <div className="mt-4">
                <Field
                  label="Subject"
                  value={form.subject}
                  onChange={(value) => update('subject', value)}
                  placeholder="How can we collaborate?"
                  error={errors.subject}
                />
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm font-medium text-white/75">Message</label>
                <textarea
                  value={form.message}
                  onChange={(event) => update('message', event.target.value)}
                  placeholder="Tell me about your project, idea, or research goal..."
                  rows={6}
                  className="w-full rounded-[1.25rem] border border-white/10 bg-ink-950/55 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-electric-500/40 focus:ring-2 focus:ring-electric-500/20"
                />
                {errors.message && <p className="mt-2 text-xs text-rose-300">{errors.message}</p>}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <MagneticButton type="submit" className="sm:flex-1 justify-center">
                  Send Message
                </MagneticButton>
                <MagneticButton href={`mailto:${site.email}`} variant="secondary" className="sm:flex-1 justify-center">
                  Open Email
                </MagneticButton>
              </div>

              <p className="mt-4 text-xs leading-6 text-white/45">
                The form validates locally and opens a prefilled email draft in your mail app.
              </p>
            </motion.form>
          </TiltCard>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            className="fixed bottom-6 left-1/2 z-[90] w-[min(92vw,420px)] -translate-x-1/2 rounded-2xl border border-white/10 bg-ink-900/95 px-5 py-4 text-sm text-white shadow-glow backdrop-blur-2xl"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Field({
  label,
  error,
  className,
  onChange,
  ...props
}: {
  label: string;
  error?: string;
  className?: string;
  onChange: (value: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  return (
    <label className={className}>
      <span className="mb-2 block text-sm font-medium text-white/75">{label}</span>
      <input
        {...props}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-[1.25rem] border border-white/10 bg-ink-950/55 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-electric-500/40 focus:ring-2 focus:ring-electric-500/20"
      />
      {error && <p className="mt-2 text-xs text-rose-300">{error}</p>}
    </label>
  );
}
