const pages_structure = [
  '⛳️  Escopo',
  '🏁  Handoff',
  '🔍  Pesquisa',
  ' ',
  '👀  Referências',
  '👉🏼  Flow',
  '✒️   Wireframing',
  '📱  Prototype',
  ' ',
  '🖼  Cover',
  '🏞  Local',
  '⌛️  Arquivos',
  '📜  Log',
  '🗑  Reciclável',
]

for (let page of pages_structure) {
  let new_page = figma.createPage()
  new_page.name = page
}

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin()
