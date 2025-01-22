//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna) => {
  let codons = []
  let proteins = []
  let invalidCodon
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

  if (rna != undefined) {
    for (let i = 0; i < rna.length; i += 3) {
      let codon = rna.slice(i, i + 3)
      let proteinsBefore = proteins.length

      for (let c = 0; c < mapping.length; c++) {
        if (mapping[c][1].includes(codon)) {
          console.log(mapping[c][1])
          if (mapping[c][0] == 'STOP') {
            return proteins
          }
          proteins.push(mapping[c][0])
        }
      }
      let proteinsAfter = proteins.length
      if (proteinsBefore == proteinsAfter) {
        throw new Error('Invalid codon')
      }
    }
    return protein
  }
  else {
    return []
  }

};