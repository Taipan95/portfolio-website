import headerSchema from '@/sanity/schemas/header-schema';
import pageSchema from '@/sanity/schemas/page-schema';
import projectSchema from './project-schema';
import workExperienceSchema from './work-experience-schema';

const schemas = [projectSchema, workExperienceSchema, pageSchema, headerSchema];

export default schemas;
