import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {colorInput} from '@sanity/color-input'
import {structure} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'tailscale',

  projectId: process.env.SANITY_STUDIO_SANITY_PROJECT_ID || '',
  dataset: 'production',

  plugins: [colorInput(), structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
