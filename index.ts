function wait(duration: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve(true)}, duration)
  })
}

async function main({duration}: {duration: number}) {
  await wait(duration)
  console.log('finished')
}

main({
  duration: 0
})
