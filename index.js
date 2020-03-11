const neatCsv = require('neat-csv');
const fs = require('fs')

const args = process.argv.slice(2);

if (!args[0]) {
  console.error("Usage: node index.js file-name.csv > labels.json")
  process.exit(-1)
}

fs.readFile(args[0], async (err, data) => {
  if (err) {
    console.error(err)
    process.exit(-1)
  }
  const obj = await neatCsv(data)
  if (obj.length < 1) {
    console.error("The file is empty")
    process.exit(-1)
  }
  if (!("name" in obj[0]) || !("address" in obj[0])) {
    console.error("CSV columns should be `name` and `address`")
    process.exit(-1)
  }
  const identities = obj.map(id => ({ createdAt: new Date().getTime(), ...id }))
  console.log(JSON.stringify(identities))
})
