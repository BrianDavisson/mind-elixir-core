import { fileURLToPath } from 'url'
import { build } from 'vite'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const buildList = [
  {
    name: 'MindElixir',
    enrty: __dirname + './src/index.ts',
  },
  {
    name: 'MindElixirLite',
    enrty: __dirname + './src/index.ts',
    mode: 'lite',
  },
  {
    name: 'example',
    enrty: __dirname + './src/exampleData/1.ts',
  },
]
for (let i = 0; i < buildList.length; i++) {
  const info = buildList[i]
  console.log(`\n\nBuilding ${info.fileName}...\n\n`)
  await build({
    build: {
      emptyOutDir: i === 0,
      lib: {
        entry: info.enrty,
        fileName: info.name,
        name: info.name,
        formats: ['iife', 'es'],
      },
    },
    mode: info.mode,
  })
}
