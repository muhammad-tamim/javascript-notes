const iconsOfSkills = [
    ['js', 'react', 'node', 'express'],
    ['react', 'ts', 'js'],
    ['css', 'html', 'sql']
]

const flatSkills = iconsOfSkills.flat()
console.log(flatSkills) // ['js', 'react', 'node', 'express', 'react', 'ts', 'js', 'css', 'html', 'sql']

const removeDuplicate = new Set(flatSkills)
console.log(removeDuplicate) // Set(8) { 'js', 'react', 'node', 'express', 'ts', 'css', 'html', 'sql' }

const iconsArray = Array.from(removeDuplicate)
console.log(iconsArray) // // ['js', 'react', 'node', 'express', 'ts', 'css', 'html', 'sql']
