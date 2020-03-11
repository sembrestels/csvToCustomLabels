CSV to Custom Labels tool
=========================

This tool converts a CSV file in the from of:

|  name  |                 address                    |
| ------ | ------------------------------------------ |
| label1 | 0xb4124cEB3451635DAcedd11767f004d8a28c6eE7 |
| label2 | 0x8401Eb5ff34cc943f096A32EF3d5113FEbE8D4Eb |

```
name,address
label1,0xb4124cEB3451635DAcedd11767f004d8a28c6eE7 
label2,0x8401Eb5ff34cc943f096A32EF3d5113FEbE8D4Eb
```

Into a JSON like:

```json
[
   {
      "createdAt":1583968973657,
      "name":"label1",
      "address":"0xb4124cEB3451635DAcedd11767f004d8a28c6eE7"
   },
   {
      "createdAt":1583968973657,
      "name":"label2",
      "address":"0x8401Eb5ff34cc943f096A32EF3d5113FEbE8D4Eb"
   }
]
```

## Usage

Download using git:

```
git clone https://github.com/sembrestels/csvToCustomLabels
cd csvToCustomLabels
```

Install it's dependencies

```
npm install
```

And run it specifying the CSV file and the JSON output file:

```
node index.js file.csv > labels.json
```

