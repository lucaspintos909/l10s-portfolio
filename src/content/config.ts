import { defineCollection, z } from 'astro:content';

// ─── Experience ────────────────────────────────────────────────────────────
const experience = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        company: z.string(),
        companyLogo: image().optional(),
        companyUrl: z.string().url().optional(),
        location: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional(),
        current: z.boolean().default(false),
        technologies: z.array(z.string()).default([]),
        order: z.number().default(0),
    }),
});

// ─── Projects ───────────────────────────────────────────────────────────────
const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        technologies: z.array(z.string()).default([]),
        githubUrl: z.string().url().optional(),
        demoUrl: z.string().url().optional(),
        featured: z.boolean().default(false),
        order: z.number().default(0),
    }),
});

// ─── Skills ─────────────────────────────────────────────────────────────────
const skills = defineCollection({
    type: 'data',
    schema: z.object({
        category: z.string(),
        order: z.number().default(0),
        items: z.array(
            z.object({
                name: z.string(),
                level: z.enum(['beginner', 'intermediate', 'advanced', 'expert']).optional(),
                icon: z.string().optional(),
            })
        ),
    }),
});

// ─── Education ───────────────────────────────────────────────────────────────
const education = defineCollection({
    type: 'content',
    schema: z.object({
        degree: z.string(),
        institution: z.string(),
        institutionUrl: z.string().url().optional(),
        location: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional(),
        current: z.boolean().default(false),
        order: z.number().default(0),
    }),
});

export const collections = { experience, projects, skills, education };
