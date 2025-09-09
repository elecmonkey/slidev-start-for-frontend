import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  const options = monaco.languages.typescript.typescriptDefaults.getCompilerOptions()
  console.log(options)
  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    ...options,
    // jsx: monaco.languages.typescript.JsxEmit.ReactJSX,
    // allowJs: true,
    // allowNonTsExtensions: true,
    // target: monaco.languages.typescript.ScriptTarget.ESNext,
    // module: monaco.languages.typescript.ModuleKind.ESNext,
    // esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    // moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
    // noEmit: true,
    // typeRoots: ['node_modules/@types'],
  })
})