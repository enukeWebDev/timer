const args = process.argv.slice(2);

const alarmOutput = args.sort((a, b) => {
  return a - b;
})

for (let setAlarm of alarmOutput) {
  setTimeout(() => {
    process.stdout.write(`BUZZZZZZ!!!! @ ${setAlarm} secs`);
    console.log('\n');
  }, setAlarm * 300)
}





process.stdout.write('\x07');