# comparison ts-node vs esbuild-register

## Command to Compare

```console
time npm run esbuild ./index.ts
time npm run ts-node ./index.ts
```

## Results

MacBook Pro (13-inch, 2019, Four Thunderbolt 3 ports)
Processor 2.8 GHz Quad-Core Intel Core i7

```
npm run esbuild ./index.ts  0.40s user 0.17s system 84% cpu 0.670 total
npm run esbuild ./index.ts  0.39s user 0.16s system 92% cpu 0.596 total
npm run esbuild ./index.ts  0.39s user 0.15s system 89% cpu 0.605 total
```
```
npm run ts-node ./index.ts  2.06s user 0.25s system 130% cpu 1.764 total
npm run ts-node ./index.ts  1.88s user 0.23s system 137% cpu 1.537 total
npm run ts-node ./index.ts  1.87s user 0.22s system 146% cpu 1.423 total
```
