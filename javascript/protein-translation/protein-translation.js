//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna) => {
  let codons = []
  let proteins = []
  let proteinCodonSets = []

  const mapping = [
    ['Methionine', ['AUG']],
    ['Phenylalanine', ['UUU', 'UUC']],
    ['Leucine', ['UUA', 'UUG']],
    ['Serine', ['UCU', 'UCC', 'UCA', 'UCG']],
    ['Tyrosine', ['UAU', 'UAC']],
    ['Cysteine', ['UGU', 'UGC']],
    ['Tryptophan', ['UGG']],
    ['STOP', ['UAA', 'UAG', 'UGA']]
  ]

  if (rna === undefined || rna.length === 0) return []

  for (let i = 0; i < rna.length; i += 3) {
    codons.push(rna.slice(i, i + 3))
  }

  function isAValidCodon(codon) {
    mapping.forEach((proteinCodonSet) => {
      if (proteinCodonSet[1].includes(codon)) {

      }
    })
  }

  for (let i = 0; i < codons.length; i++) {
    codons
  }

  return proteins
}