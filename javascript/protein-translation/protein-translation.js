//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna) => {
  let codons = []
  let proteins = []
  const mapping = [
    ['Methionine', ['AUG']],
    ['Phenylalanine', ['UUU', 'UUC']],
    ['Leucine', ['UUA', 'UUG']],
    ['Serine', ['UCU', 'UCC', 'UCA', 'UCG']],
    ['Tyrosine', ['UAU', 'UAC']],
    ['Cysteine', ['UGU', 'UGC']],
    ['Tryptophan', ['UGG']],
  ]

  for (let i = 0; i < rna.length; i + 3) {
    let codon = rna.slice(i, i + 3)

    for (let c = 0; c < mapping.length; c++) {
      console.log(mapping[c][1].includes(codon))
      if (mapping[c][1].includes(codon)) {
        proteins.push(mapping[c][0])
      }
    }
    return proteins
  }

};
